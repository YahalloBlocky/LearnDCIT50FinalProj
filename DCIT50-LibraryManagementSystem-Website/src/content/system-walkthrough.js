/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: System Walkthrough - how the whole system works.
 */

const systemWalkthrough = {
  sections: [
    {
      id: "startup",
      title: "Program Startup",
      content: `
        <p>When the professor runs the program, this is what happens, in order:</p>
        <ol class="step-list">
           <li><strong>Main runs.</strong> The JVM starts <code>Main.main()</code>. It reads the optional data folder name (default is <code>data</code>).</li>
           <li><strong>ConsoleHelper is created.</strong> It wraps the keyboard input. The <code>try</code> with resources means it will be closed automatically at the end.</li>
           <li><strong>LibraryService is created.</strong> It creates three repositories: items, members, loans.</li>
           <li><strong>MenuController is created.</strong> It gets the console and the service.</li>
           <li><strong>menu.run() starts.</strong></li>
           <li><strong>startUp() loads the data.</strong> It calls <code>service.loadAll()</code>. Each repository reads its file:
             <ul>
               <li><code>items.txt</code> &mdash; 8 lines, one per item.</li>
               <li><code>members.txt</code> &mdash; 7 lines, one per member.</li>
               <li><code>loans.txt</code> &mdash; 7 lines, one per loan.</li>
             </ul>
             If a file is missing, the repository returns an empty list. If a line is bad, it is skipped and a warning is shown.</li>
           <li><strong>The startup message is printed.</strong> It says "Loaded X item(s), Y member(s), Z loan(s)."</li>
           <li><strong>Two observers are added to the service.</strong> One prints notices on the screen. One saves them to the notification log.</li>
           <li><strong>checkOverdueLoans() runs.</strong> It looks at all open loans and notifies observers about any that are past their due date. If none, it prints "No overdue loans. Everything is on time."</li>
           <li><strong>The main menu loop starts.</strong> The program is waiting for the user to choose a number.</li>
        </ol>
      `,
    },
    {
      id: "mainmenu",
      title: "Main Menu Operations",
      content: `
        <p>The main menu has 12 options (0 to 11). Each option calls a method in MenuController, which delegates to LibraryService.</p>

        <h3>A. Add a Library Item (option 1)</h3>
        <ul class="step-list">
           <li>User chooses [1].</li>
           <li>MenuController shows [1] Book / [2] Magazine and asks for the item type.</li>
           <li>User types 1 (book), 2 (magazine), or 0 to cancel.</li>
           <li>MenuController asks for the item ID, title, and the book or magazine details.</li>
           <li>LibraryFactory.createItem(...) creates a Book or Magazine.</li>
           <li>service.addItem(item) stores it.</li>
           <li>console.success(...) prints a message.</li>
           <li>autoSave() saves the items file.</li>
        </ul>

        <h3>B. Search Items (option 2)</h3>
        <ul class="step-list">
           <li>User chooses [2].</li>
           <li>MenuController asks for a keyword (title, author, type, ID).</li>
           <li>service.searchItems(keyword) uses a Predicate lambda to filter items.</li>
           <li>Results are printed as a table.</li>
        </ul>

        <h3>C. List All Items (option 3)</h3>
        <ul class="step-list">
           <li>User chooses [3].</li>
           <li>MenuController calls service.getAllItemsSortedByTitle().</li>
           <li>It sorts items by title (ignoring case) and prints them as a table.</li>
        </ul>

        <h3>D. Register a Member (option 4)</h3>
        <ul class="step-list">
           <li>User chooses [4].</li>
           <li>MenuController asks for the member type (student or faculty), ID, and name.</li>
           <li>LibraryFactory.createMember(...) creates a StudentPolicy or FacultyPolicy.</li>
           <li>service.registerMember(member) stores the member.</li>
           <li>autoSave() saves the members file.</li>
        </ul>

        <h3>E. List All Members (option 5)</h3>
        <ul class="step-list">
           <li>User chooses [5].</li>
           <li>MenuController calls service.getAllMembers().</li>
           <li>It prints the members as a table.</li>
        </ul>

        <h3>F. Borrow an Item (option 6)</h3>
        <ul class="step-list">
           <li>User chooses [6].</li>
           <li>MenuController asks for the item ID and member ID.</li>
           <li>service.borrowItem(itemId, memberId) checks:
             <ul>
               <li>The item exists and is available.</li>
               <li>The member has not reached their max items.</li>
             </ul>
           </li>
           <li>A Loan is created with today's date and the due date (today + loan days).</li>
           <li>The loan is saved to the loan repository.</li>
           <li>The item is marked as borrowed.</li>
           <li>autoSave() saves the loans file.</li>
        </ul>

        <h3>G. Return an Item (option 7)</h3>
        <ul class="step-list">
           <li>User chooses [7].</li>
           <li>MenuController asks for the item ID.</li>
           <li>service.returnItem(itemId) checks the item is currently borrowed.</li>
           <li>It calculates the days late and the fine (using the member's policy).</li>
           <li>The loan is marked as returned with the fine.</li>
           <li>The item is marked as returned.</li>
           <li>If the fine is greater than zero, a late return notice is sent to observers.</li>
           <li>autoSave() saves the loans file.</li>
        </ul>

        <h3>H. View All Loans (option 8)</h3>
        <ul class="step-list">
           <li>User chooses [8].</li>
           <li>MenuController gets all loans and prints a table. Each loan shows its status (Returned, OVERDUE, or Open).</li>
        </ul>

        <h3>I. View Overdue Loans (option 9)</h3>
        <ul class="step-list">
           <li>User chooses [9].</li>
           <li>service.getOverdueLoans() returns loans that are not returned and past their due date.</li>
           <li>For each overdue loan, it prints the member, due date, days late, and the fine so far.</li>
           <li>It also prints the total fines so far.</li>
        </ul>

        <h3>J. View Fines (option 10)</h3>
        <ul class="step-list">
           <li>User chooses [10].</li>
           <li>service.getLoansWithFines() returns loans that were returned late and have a fine.</li>
           <li>It prints each loan with the days late and the fine.</li>
           <li>It prints the total fines.</li>
        </ul>

        <h3>K. View Notifications (option 11)</h3>
        <ul class="step-list">
           <li>User chooses [11].</li>
           <li>MenuController shows the notificationLog, which holds all notices sent during this session.</li>
        </ul>

        <h3>L. Save and Exit (option 0)</h3>
        <ul class="step-list">
           <li>User chooses [0].</li>
           <li>saveBeforeExit() is called. It calls service.saveAll().</li>
           <li>Then it prints "All data saved." and exits.</li>
        </ul>
      `,
    },
    {
      id: "dataregion",
      title: "The Data Area",
      content: `
        <p>The data of the application lives in three text files inside a folder (by default <code>data</code>).</p>
        <table class="table-card">
          <thead>
            <tr><th>File</th><th>Content</th><th>Format example</th></tr>
          </thead>
          <tbody>
            <tr><td><code>items.txt</code></td><td>One line per library item (book or magazine).</td><td><code>BOOK|B001|Clean Code|Robert Martin|9780132350884</code></td></tr>
            <tr><td><code>members.txt</code></td><td>One line per member.</td><td><code>STUDENT|S001|Ana Cruz</code></td></tr>
            <tr><td><code>loans.txt</code></td><td>One line per loan.</td><td><code>L0001|B001|S001|2026-10-01|2026-10-08|2026-11-14|185.0</code></td></tr>
          </tbody>
        </table>
        <p>Fields are separated by the pipe character <code>|</code>.</p>

        <h3>The three repositories</h3>
        <p>The service keeps three repositories, each generic:</p>
        <ul>
           <li><code>Repository&lt;LibraryItem&gt; itemRepo</code> &mdash; items.</li>
           <li><code>Repository&lt;Member&gt; memberRepo</code> &mdash; members.</li>
           <li><code>Repository&lt;Loan&gt; loanRepo</code> &mdash; loans.</li>
        </ul>
        <p>Each repository keeps a list of records (in order) and a map of records by ID (for fast lookup).</p>
      `,
    },
    {
      id: "borrowflow",
      title: "Running a Borrow: Step by Step",
      content: `
        <p>Let us trace a borrow from start to finish. Choose option 6, enter item B001 and member S001.</p>
        <ol class="step-list">
           <li><strong>MenuController.readTextOrCancel</strong> gets the item ID "B001".</li>
           <li><strong>MenuController.readTextOrCancel</strong> gets the member ID "S001".</li>
           <li><strong>MenuController</strong> calls <code>service.borrowItem("B001", "S001")</code>.</li>
           <li><strong>LibraryService.borrowItem</strong>:
             <ul>
               <li>It calls <code>itemRepo.getById("B001")</code>. The repository finds the item.</li>
               <li>It calls <code>memberRepo.getById("S001")</code>. The repository finds the member.</li>
               <li>It checks <code>item.isAvailable()</code>. If the item is not available, it throws <code>LibraryRuleException</code>.</li>
               <li>It counts open loans for the member: <code>countOpenLoans("S001")</code>. This uses a <code>Predicate</code> to find loans for that member that are not returned.</li>
               <li>If the count is >= the member's max items, it throws <code>LibraryRuleException</code>.</li>
               <li>It creates a <code>Loan</code> with today's date (2026-11-19) and due date (today + loan days). For a student, that is 2026-11-19 + 7 days = 2026-11-26.</li>
               <li>It adds the loan to the loan repository.</li>
               <li>It calls <code>item.markBorrowed()</code>, setting the item's available flag to false.</li>
               <li>It returns the loan to the menu.</li>
             </ul>
           </li>
           <li><strong>MenuController</strong> prints the success message and calls <code>autoSave()</code>.</li>
           <li><strong>saveAll()</strong> writes the three files.</li>
           <li>The user sees: <em>"Loan L0008 created. Clean Code is due on 2026-11-26."</em></li>
        </ol>
      `,
    },
    {
      id: "returnflow",
      title: "Running a Return: Step by Step",
      content: `
        <p>Choose option 7, enter item B001.</p>
        <ol class="step-list">
           <li><strong>MenuController</strong> calls <code>service.returnItem("B001")</code>.</li>
           <li><strong>LibraryService.returnItem</strong>:
             <ul>
               <li>It finds the item and the item's open loan.</li>
               <li>If no open loan exists, it throws <code>RecordNotFoundException</code>.</li>
               <li>It reads today's date and finds the member of the loan.</li>
               <li>It calculates the days late: <code>loan.getDaysOverdue(today)</code>.</li>
               <li>It calculates the fine: <code>member.calculateFine(daysLate)</code>. This delegates to the member's policy (StudentPolicy: PHP 5/day).</li>
               <li>It marks the loan as returned with the date and fine.</li>
               <li>It marks the item as returned.</li>
               <li>If a fine is due, it notifies the observers with a late return message.</li>
               <li>It returns the loan to the menu.</li>
             </ul>
           </li>
           <li><strong>MenuController</strong> prints the success message and checks if a fine exists.</li>
           <li><strong>autoSave()</strong> saves the updated loans file.</li>
           <li>The user sees the return message and the fine (if any).</li>
        </ol>
      `,
    },
    {
      id: "saveflow",
      title: "How Saving Works",
      content: `
        <p>When autoSave is called, the service saves all three files:</p>
        <ol class="step-list">
           <li><code>itemRepo.saveToFile("data/items.txt", LibraryItem::toFileLine)</code>.</li>
           <li><code>memberRepo.saveToFile("data/members.txt", Member::toFileLine)</code>.</li>
           <li><code>loanRepo.saveToFile("data/loans.txt", Loan::toFileLine)</code>.</li>
        </ol>
        <p>For each record, the <code>toFileLine</code> method turns the object into one line of text with pipes as separators. For example:</p>
        <pre><code class="language-java">BOOK|B001|Clean Code|Robert Martin|9780132350884</code></pre>
        <p>The repository writes to a <code>.items.txt.tmp</code> file first. When the write is complete, it moves the temp file to the real file. This protects the old data if the program crashes mid-write.</p>
      `,
    },
    {
      id: "loadflow",
      title: "How Loading Works",
      content: `
        <p>When the program starts, loadAll is called.</p>
        <ol class="step-list">
           <li><code>itemRepo.loadFromFile("data/items.txt", LibraryFactory::createItemFromLine)</code>.</li>
           <li><code>memberRepo.loadFromFile("data/members.txt", LibraryFactory::createMemberFromLine)</code>.</li>
           <li><code>loanRepo.loadFromFile("data/loans.txt", this::parseLoanLine)</code>.</li>
        </ol>
        <p>For each line:</p>
        <ul>
           <li>The repository skips blank lines.</li>
           <li>It uses the <code>fromLine</code> function to turn the line into a record.</li>
           <li>If the line is bad, it adds a warning and skips the line. It never crashes.</li>
        </ul>
        <p>After loading loans, the service fixes item availability:</p>
        <pre><code class="language-java">for (Loan loan : loanRepo.getAll()) {
    if (!loan.isReturned()) {
        itemRepo.findById(loan.getItemId()).markBorrowed();
    }
}</code></pre>
        <p>Any item that has an open loan is marked as not available.</p>
        <p>Missing files are fine. Missing data means the program starts with no records.</p>
      `,
    },
    {
      id: "classmap",
      title: "Class Relationship Map",
      content: `
        <div class="card">
          <h3>How the classes connect</h3>
          <table class="table-card">
            <thead>
              <tr><th>Class</th><th>Extends / Implements</th><th>Uses / Contains</th></tr>
            </thead>
            <tbody>
              <tr><td>LibraryItem (abstract)</td><td>Parent of Book and Magazine</td><td>&mdash;</td></tr>
              <tr><td>Book</td><td>extends LibraryItem</td><td>Field: author, isbn</td></tr>
              <tr><td>Magazine</td><td>extends LibraryItem</td><td>Field: issue, publisher</td></tr>
              <tr><td>Member</td><td>implements nothing (standalone)</td><td>Field: BorrowingPolicy policy</td></tr>
              <tr><td>StudentPolicy</td><td>implements BorrowingPolicy</td><td>&mdash;</td></tr>
              <tr><td>FacultyPolicy</td><td>implements BorrowingPolicy</td><td>&mdash;</td></tr>
              <tr><td>Loan</td><td>no inheritance</td><td>Fields: itemId, memberId, dates, fineAmount</td></tr>
              <tr><td>LibraryFactory</td><td>&mdash; (utility, private constructor)</td><td>Creates Book, Magazine, Member, and their file-load versions</td></tr>
              <tr><td>LibraryService</td><td>implements nothing (standalone)</td><td>Three repositories, observer list</td></tr>
              <tr><td>Repository&lt;T&gt;</td><td>implements nothing (standalone)</td><td>ArrayList&lt;T&gt; records, HashMap&lt;String, T&gt; index</td></tr>
              <tr><td>ConsoleHelper</td><td>implements AutoCloseable</td><td>Scanner scanner</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Inheritance:</strong> Book and Magazine extend LibraryItem. They are items.</p>
        <p><strong>Interfaces:</strong> StudentPolicy and FacultyPolicy implement BorrowingPolicy. The Member uses the policy.</p>
        <p><strong>Composition:</strong> Member has a BorrowingPolicy. Loan has an itemId and a memberId (IDs, not objects).</p>
        <p><strong>Dependency:</strong> LibraryService uses Repository. MenuController uses LibraryService and ConsoleHelper.</p>
      `,
    },
    {
      id: "dataflow",
      title: "Data Flow",
      content: `
        <p>Information flows through the application like this:</p>
        <table class="table-card">
          <thead>
            <tr><th>Step</th><th>From</th><th>To</th><th>What happens</th></tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>User</td><td>MenuController</td><td>The user types a number or text.</td></tr>
            <tr><td>2</td><td>MenuController</td><td>LibraryService</td><td>The menu asks the service to do the work.</td></tr>
            <tr><td>3</td><td>LibraryService</td><td>Repository</td><td>The service saves or loads records.</td></tr>
            <tr><td>4</td><td>Repository</td><td>Data files</td><td>Records are written to or read from items.txt, members.txt, loans.txt.</td></tr>
            <tr><td>5</td><td>Repository</td><td>LibraryService</td><td>The repository gives back the records.</td></tr>
            <tr><td>6</td><td>LibraryService</td><td>MenuController</td><td>The service gives the result (loan, message, list).</td></tr>
            <tr><td>7</td><td>MenuController</td><td>ConsoleHelper</td><td>The menu prints the result to the screen.</td></tr>
            <tr><td>8</td><td>LibraryService</td><td>Observers</td><td>If something important happens (overdue, late return), the service notifies the observers.</td></tr>
          </tbody>
        </table>
        <p><strong>In simple words:</strong></p>
        <ul>
           <li>The user talks to the menu.</li>
           <li>The menu talks to the service.</li>
           <li>The service talks to the repositories.</li>
           <li>The repositories talk to the files.</li>
           <li>The service talks to the observers when something important happens.</li>
        </ul>
      `,
    },
  ],
};

export default systemWalkthrough;
