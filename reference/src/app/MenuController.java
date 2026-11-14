package app;

import exception.LibraryException;
import model.LibraryItem;
import model.Loan;
import model.Member;
import model.Staff;
import pattern.LibraryFactory;
import service.LibraryService;
import util.ConsoleHelper;

import java.io.IOException;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

/**
 * Shows the menus, reads what the user types, and calls the LibraryService.
 *
 * This class does NOT contain library rules. It only asks questions, calls the
 * service, and prints the results or the error messages.
 *
 * After every action that changes data, it calls autoSave().
 */
public class MenuController {

    private final ConsoleHelper console;
    private final LibraryService service;
    private final List<String> notificationLog = new ArrayList<>(); // remembers notices of this session

    /**
     * @param console the helper that reads and prints
     * @param service the service that holds the library data and rules
     */
    public MenuController(ConsoleHelper console, LibraryService service) {
        this.console = console;
        this.service = service;
    }

    /**
     * Runs the program: loads data, shows the main menu until the user exits.
     */
    public void run() {
        startUp();
        try {
            mainMenuLoop();
        } catch (NoSuchElementException e) {
            // The input ended (for example, a file was piped in). Save and stop politely.
            console.blank();
            console.info("The input has ended. Saving and exiting.");
            autoSave();
        }
    }

    // ------------------------------------------------------------------
    // Start up and main menu
    // ------------------------------------------------------------------

    /** Loads the data, connects the observers, and checks for overdue items. */
    private void startUp() {
        console.line("=== LIBRARY MANAGEMENT SYSTEM ===");
        console.info("Loading data...");
        List<String> messages = service.loadAll();
        for (String message : messages) {
            console.warning(message);
        }

        // OBSERVER PATTERN: we register two observers, written as lambdas.
        // Observer 1 shows the notice on the screen right away.
        service.addObserver(message -> console.notice(message));
        // Observer 2 remembers the notice, so menu option 9 can show it later.
        service.addObserver(message -> notificationLog.add(message));

        int overdueCount = service.checkOverdueLoans();
        if (overdueCount == 0) {
            console.info("No overdue loans.");
        }
    }

    /** Shows the main menu again and again until the user chooses Exit. */
    private void mainMenuLoop() {
        boolean running = true;
        while (running) {
            printMainMenu();
            int choice = console.readInt("Enter choice [0-10]: ", 0, 10);
            switch (choice) {
                case 1:
                    manageItems();
                    break;
                case 2:
                    manageMembers();
                    break;
                case 3:
                    manageStaff();
                    break;
                case 4:
                    borrowItem();
                    break;
                case 5:
                    returnItem();
                    break;
                case 6:
                    viewAllLoans();
                    break;
                case 7:
                    viewOverdueLoans();
                    break;
                case 8:
                    viewFines();
                    break;
                case 9:
                    viewNotifications();
                    break;
                case 10:
                    saveNow();
                    break;
                case 0:
                    if (saveBeforeExit()) {
                        running = false;
                    }
                    break;
                default:
                    break; // readInt already limits the choice, so we never get here
            }
        }
        console.info("Goodbye!");
    }

    /** Prints the main menu. */
    private void printMainMenu() {
        console.blank();
        console.line("=== LIBRARY MANAGEMENT SYSTEM ===");
        console.line("[1]  Manage Library Items");
        console.line("[2]  Manage Members");
        console.line("[3]  Manage Staff");
        console.line("[4]  Borrow an Item");
        console.line("[5]  Return an Item");
        console.line("[6]  View All Loans");
        console.line("[7]  View Overdue Loans");
        console.line("[8]  View Fines");
        console.line("[9]  View Notifications");
        console.line("[10] Save Data");
        console.line("[0]  Save and Exit");
    }

    // ------------------------------------------------------------------
    // Saving
    // ------------------------------------------------------------------

    /** Saves after a change. A failure is shown as a warning, not a crash. */
    private void autoSave() {
        try {
            service.saveAll();
            console.info("Data saved automatically.");
        } catch (IOException e) {
            console.warning("Could not save the data: " + e.getMessage());
        }
    }

    /** Saves when the user chooses "Save Data". */
    private void saveNow() {
        try {
            service.saveAll();
            console.success("All data saved.");
        } catch (IOException e) {
            console.error("Could not save the data: " + e.getMessage());
        }
    }

    /**
     * Saves before leaving the program.
     *
     * @return true if it is OK to exit (saved, or the user chose to exit without saving)
     */
    private boolean saveBeforeExit() {
        try {
            service.saveAll();
            console.success("All data saved.");
            return true;
        } catch (IOException e) {
            console.error("Could not save the data: " + e.getMessage());
            return console.readYesNo("Exit without saving? (y/n): ");
        }
    }

    // ------------------------------------------------------------------
    // Library items
    // ------------------------------------------------------------------

    /** The submenu for library items. */
    private void manageItems() {
        boolean inMenu = true;
        while (inMenu) {
            console.blank();
            console.line("--- Manage Library Items ---");
            console.line("[1] Add an item");
            console.line("[2] Search items");
            console.line("[3] List all items");
            console.line("[4] Remove an item");
            console.line("[0] Back");
            int choice = console.readInt("Enter choice [0-4]: ", 0, 4);
            switch (choice) {
                case 1:
                    addItem();
                    break;
                case 2:
                    searchItems();
                    break;
                case 3:
                    printItemTable(service.getAllItemsSortedByTitle());
                    break;
                case 4:
                    removeItem();
                    break;
                default:
                    inMenu = false;
                    break;
            }
        }
    }

    /** Asks for the details of a new book or magazine and adds it. */
    private void addItem() {
        console.line("[1] Book");
        console.line("[2] Magazine");
        int kind = console.readInt("Item type [1-2]: ", 1, 2);
        String type = (kind == 1) ? "BOOK" : "MAGAZINE";

        String id = console.readText("Item ID: ");
        String title = console.readText("Title: ");
        String detail1 = console.readText(kind == 1 ? "Author: " : "Issue (for example Issue 12): ");
        String detail2 = console.readText(kind == 1 ? "ISBN: " : "Publisher: ");

        try {
            // The factory decides whether to create a Book or a Magazine
            LibraryItem item = LibraryFactory.createItem(type, id, title, detail1, detail2);
            service.addItem(item);
            console.success(item.getItemType() + " '" + item.getTitle() + "' added with ID " + item.getItemId() + ".");
            autoSave();
        } catch (LibraryException | IllegalArgumentException e) {
            console.error(e.getMessage());
        }
    }

    /** Asks for a keyword and shows the matching items. */
    private void searchItems() {
        String keyword = console.readText("Search for (title, author, type, ID...): ");
        List<LibraryItem> results = service.searchItems(keyword);
        if (results.isEmpty()) {
            console.info("No items match '" + keyword + "'.");
        } else {
            console.info(results.size() + " item(s) found.");
            printItemTable(results);
        }
    }

    /** Asks for an item ID and removes the item after confirmation. */
    private void removeItem() {
        String id = console.readText("ID of the item to remove: ");
        if (!console.readYesNo("Really remove item " + id.toUpperCase() + "? (y/n): ")) {
            console.info("Nothing was removed.");
            return;
        }
        try {
            service.removeItem(id);
            console.success("Item " + id.toUpperCase() + " removed.");
            autoSave();
        } catch (LibraryException e) {
            console.error(e.getMessage());
        }
    }

    /** Prints items as a table. Book and Magazine objects are handled the same way. */
    private void printItemTable(List<LibraryItem> items) {
        if (items.isEmpty()) {
            console.info("There are no items yet.");
            return;
        }
        console.printf("%-8s %-9s %-30s %-40s %-9s%n", "ID", "Type", "Title", "Details", "Status");
        console.line("-".repeat(100));
        for (LibraryItem item : items) {
            // POLYMORPHISM: getItemType() and getDetails() run the version of the real object
            console.printf("%-8s %-9s %-30s %-40s %-9s%n",
                    item.getItemId(),
                    item.getItemType(),
                    ConsoleHelper.cut(item.getTitle(), 30),
                    ConsoleHelper.cut(item.getDetails(), 40),
                    item.isAvailable() ? "Available" : "Borrowed");
        }
    }

    // ------------------------------------------------------------------
    // Members
    // ------------------------------------------------------------------

    /** The submenu for members. */
    private void manageMembers() {
        boolean inMenu = true;
        while (inMenu) {
            console.blank();
            console.line("--- Manage Members ---");
            console.line("[1] Register a member");
            console.line("[2] List all members");
            console.line("[0] Back");
            int choice = console.readInt("Enter choice [0-2]: ", 0, 2);
            switch (choice) {
                case 1:
                    registerMember();
                    break;
                case 2:
                    printMemberTable(service.getAllMembers());
                    break;
                default:
                    inMenu = false;
                    break;
            }
        }
    }

    /** Asks for the details of a new student or faculty member and registers them. */
    private void registerMember() {
        console.line("[1] Student");
        console.line("[2] Faculty");
        int kind = console.readInt("Member type [1-2]: ", 1, 2);
        String type = (kind == 1) ? "STUDENT" : "FACULTY";

        String id = console.readText("Member ID: ");
        String name = console.readText("Name: ");
        String detail = console.readText(kind == 1 ? "Course (for example BSIT): " : "Department: ");

        try {
            Member member = LibraryFactory.createMember(type, id, name, detail);
            service.registerMember(member);
            console.success(member.getMemberType() + " '" + member.getName() + "' registered with ID "
                    + member.getMemberId() + ". Limit: " + member.getMaxItems() + " items for "
                    + member.getLoanDays() + " days.");
            autoSave();
        } catch (LibraryException | IllegalArgumentException e) {
            console.error(e.getMessage());
        }
    }

    /** Prints members as a table. */
    private void printMemberTable(List<Member> members) {
        if (members.isEmpty()) {
            console.info("There are no members yet.");
            return;
        }
        console.printf("%-8s %-9s %-24s %-22s %-8s %-9s%n",
                "ID", "Type", "Name", "Course / Department", "Max", "Loan days");
        console.line("-".repeat(86));
        for (Member member : members) {
            console.printf("%-8s %-9s %-24s %-22s %-8d %-9d%n",
                    member.getMemberId(),
                    member.getMemberType(),
                    ConsoleHelper.cut(member.getName(), 24),
                    ConsoleHelper.cut(member.getExtraInfo(), 22),
                    member.getMaxItems(),
                    member.getLoanDays());
        }
    }

    // ------------------------------------------------------------------
    // Staff
    // ------------------------------------------------------------------

    /** The submenu for staff. */
    private void manageStaff() {
        boolean inMenu = true;
        while (inMenu) {
            console.blank();
            console.line("--- Manage Staff ---");
            console.line("[1] Add a staff member");
            console.line("[2] List all staff");
            console.line("[0] Back");
            int choice = console.readInt("Enter choice [0-2]: ", 0, 2);
            switch (choice) {
                case 1:
                    addStaff();
                    break;
                case 2:
                    printStaffTable(service.getAllStaff());
                    break;
                default:
                    inMenu = false;
                    break;
            }
        }
    }

    /** Asks for the details of a new staff member and adds them. */
    private void addStaff() {
        String id = console.readText("Staff ID: ");
        String name = console.readText("Name: ");
        String role = console.readText("Role (for example Librarian): ");
        try {
            Staff staff = new Staff(id, name, role);
            service.addStaff(staff);
            console.success("Staff member '" + staff.getName() + "' added with ID " + staff.getStaffId() + ".");
            autoSave();
        } catch (LibraryException | IllegalArgumentException e) {
            console.error(e.getMessage());
        }
    }

    /** Prints staff as a table. */
    private void printStaffTable(List<Staff> staffList) {
        if (staffList.isEmpty()) {
            console.info("There are no staff members yet.");
            return;
        }
        console.printf("%-8s %-24s %-24s%n", "ID", "Name", "Role");
        console.line("-".repeat(58));
        for (Staff staff : staffList) {
            console.printf("%-8s %-24s %-24s%n",
                    staff.getStaffId(),
                    ConsoleHelper.cut(staff.getName(), 24),
                    ConsoleHelper.cut(staff.getRole(), 24));
        }
    }

    // ------------------------------------------------------------------
    // Borrowing and returning
    // ------------------------------------------------------------------

    /** Asks who borrows what and creates the loan. */
    private void borrowItem() {
        console.blank();
        console.line("--- Borrow an Item ---");
        String itemId = console.readText("Item ID: ");
        String memberId = console.readText("Member ID: ");
        String staffId = console.readText("Staff ID (who handles the loan): ");
        try {
            Loan loan = service.borrowItem(itemId, memberId, staffId);
            console.success("Loan " + loan.getLoanId() + " created. '" + service.getItemTitle(loan.getItemId())
                    + "' is due on " + loan.getDueDate() + ".");
            autoSave();
        } catch (LibraryException e) {
            console.error(e.getMessage());
        }
    }

    /** Asks which item comes back and closes its loan. */
    private void returnItem() {
        console.blank();
        console.line("--- Return an Item ---");
        String itemId = console.readText("Item ID: ");
        try {
            Loan loan = service.returnItem(itemId);
            console.success("'" + service.getItemTitle(loan.getItemId()) + "' returned (loan "
                    + loan.getLoanId() + ").");
            if (loan.hasFine()) {
                console.warning("The item was late. Fine: " + ConsoleHelper.money(loan.getFineAmount())
                        + ". You can pay it in menu option 8.");
            }
            autoSave();
        } catch (LibraryException e) {
            console.error(e.getMessage());
        }
    }

    // ------------------------------------------------------------------
    // Loans, overdue loans, fines, notifications
    // ------------------------------------------------------------------

    /** Shows every loan. */
    private void viewAllLoans() {
        List<Loan> loans = service.getAllLoans();
        if (loans.isEmpty()) {
            console.info("There are no loans yet.");
            return;
        }
        LocalDate today = LocalDate.now();
        console.blank();
        console.printf("%-7s %-7s %-24s %-18s %-10s %-10s %-9s%n",
                "Loan", "Item", "Title", "Member", "Borrowed", "Due", "Status");
        console.line("-".repeat(92));
        for (Loan loan : loans) {
            String status;
            if (loan.isReturned()) {
                status = "Returned";
            } else if (loan.isOverdue(today)) {
                status = "OVERDUE";
            } else {
                status = "Open";
            }
            console.printf("%-7s %-7s %-24s %-18s %-10s %-10s %-9s%n",
                    loan.getLoanId(),
                    loan.getItemId(),
                    ConsoleHelper.cut(service.getItemTitle(loan.getItemId()), 24),
                    ConsoleHelper.cut(service.getMemberName(loan.getMemberId()), 18),
                    loan.getBorrowDate(),
                    loan.getDueDate(),
                    status);
        }
    }

    /** Shows the loans that are past their due date, with the fine so far. */
    private void viewOverdueLoans() {
        List<Loan> overdue = service.getOverdueLoans();
        if (overdue.isEmpty()) {
            console.info("There are no overdue loans.");
            return;
        }
        LocalDate today = LocalDate.now();
        double total = 0;
        console.blank();
        console.printf("%-7s %-24s %-18s %-10s %-10s %-12s%n",
                "Loan", "Title", "Member", "Due", "Days late", "Fine so far");
        console.line("-".repeat(86));
        for (Loan loan : overdue) {
            double fine = service.getFineSoFar(loan);
            total += fine;
            console.printf("%-7s %-24s %-18s %-10s %-10d %-12s%n",
                    loan.getLoanId(),
                    ConsoleHelper.cut(service.getItemTitle(loan.getItemId()), 24),
                    ConsoleHelper.cut(service.getMemberName(loan.getMemberId()), 18),
                    loan.getDueDate(),
                    loan.getDaysOverdue(today),
                    ConsoleHelper.money(fine));
        }
        console.info(overdue.size() + " overdue loan(s). Total fines so far: " + ConsoleHelper.money(total));
    }

    /** Shows the fines of returned items and lets the user pay one. */
    private void viewFines() {
        List<Loan> fines = service.getLoansWithFines();
        if (fines.isEmpty()) {
            console.info("There are no fines.");
            return;
        }
        double unpaidTotal = 0;
        console.blank();
        console.printf("%-7s %-24s %-18s %-14s %-8s%n", "Loan", "Title", "Member", "Fine", "Status");
        console.line("-".repeat(76));
        for (Loan loan : fines) {
            if (!loan.isFinePaid()) {
                unpaidTotal += loan.getFineAmount();
            }
            console.printf("%-7s %-24s %-18s %-14s %-8s%n",
                    loan.getLoanId(),
                    ConsoleHelper.cut(service.getItemTitle(loan.getItemId()), 24),
                    ConsoleHelper.cut(service.getMemberName(loan.getMemberId()), 18),
                    ConsoleHelper.money(loan.getFineAmount()),
                    loan.isFinePaid() ? "Paid" : "UNPAID");
        }
        console.info("Total unpaid fines: " + ConsoleHelper.money(unpaidTotal));

        if (unpaidTotal > 0 && console.readYesNo("Pay a fine now? (y/n): ")) {
            String loanId = console.readText("Loan ID of the fine to pay: ");
            try {
                service.payFine(loanId);
                console.success("The fine of loan " + loanId.toUpperCase() + " is marked as paid.");
                autoSave();
            } catch (LibraryException e) {
                console.error(e.getMessage());
            }
        }
    }

    /** Shows the notices that were sent during this session. */
    private void viewNotifications() {
        if (notificationLog.isEmpty()) {
            console.info("There are no notifications in this session.");
            return;
        }
        console.blank();
        console.line("--- Notifications (this session) ---");
        int number = 1;
        for (String message : notificationLog) {
            console.line(number + ". " + message);
            number++;
        }
    }
}
