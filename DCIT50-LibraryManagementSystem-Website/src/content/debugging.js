/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: Debugging Lab.
 *
 * Every exercise is a complete, compilable Java class named Exercise. The learner
 * edits it in the browser and the local Java runner compiles and executes it
 * against a hidden test harness. Grading only looks at test results, so any
 * correct algorithm passes no matter how the code is formatted.
 */

const debugging = {
  /**
   * Fixed harness shared by every exercise. The exercise supplies the statements
   * that replace the /*CHECKS*\/ marker, so all tests print a line the page can
   * read:
   *
   *   @@TEST <name> PASS
   *   @@TEST <name> FAIL <reason>
   */
  harnessTemplate: `import java.util.*;
import java.io.*;
import java.nio.file.*;

class Harness {
    static int total = 0;
    static int passed = 0;

    static void check(String name, Runnable body) {
        total++;
        try {
            body.run();
            passed++;
            System.out.println("@@TEST " + name + " PASS");
        } catch (Throwable problem) {
            System.out.println("@@TEST " + name + " FAIL " + problem.getClass().getSimpleName() + ": " + problem.getMessage());
        }
    }

    static void require(boolean condition, String message) {
        if (!condition) {
            throw new AssertionError(message);
        }
    }

    static void requireClose(double actual, double expected, String message) {
        if (Math.abs(actual - expected) > 0.0001) {
            throw new AssertionError(message + " (expected " + expected + " but was " + actual + ")");
        }
    }

    public static void main(String[] args) {
/*CHECKS*/
        System.out.println("@@SUMMARY " + passed + "/" + total);
    }
}`,

  levels: {
    beginner: {
      title: "Beginner",
      icon: "🌱",
      description:
        "Simple mistakes. Incorrect operators. Missing conditions. Basic input validation problems. Edit the code, run the tests, and fix the logic.",
      exercises: [
        {
          id: "b1",
          title: "Wrong comparison operator",
          category: "Incorrect condition",
          class: "Repository.java",
          method: "add",
          difficulty: "beginner",
          task: "Fix add() so a new ID is stored and a duplicate ID is rejected.",
          description:
            "The repository should throw only when the ID already exists. It currently does the opposite, so every new book is rejected as a duplicate.",
          starter: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** A repository that must reject duplicate IDs. Fix add(). */
public class Exercise {
    private final Map<String, String> index = new HashMap<>();
    private final List<String> records = new ArrayList<>();

    public void add(String id) {
        String key = id.trim().toUpperCase();
        if (!index.containsKey(key)) {
            throw new IllegalArgumentException("Book ID '" + key + "' already exists.");
        }
        records.add(key);
        index.put(key, key);
    }

    public int size() {
        return records.size();
    }

    public boolean contains(String id) {
        return index.containsKey(id.trim().toUpperCase());
    }
}`,
          checks: `        check("a new ID is stored", () -> {
            Exercise repo = new Exercise();
            repo.add("B001");
            require(repo.size() == 1, "size should be 1 but was " + repo.size());
            require(repo.contains("b001"), "the ID should be in the index");
        });

        check("a duplicate ID is rejected", () -> {
            Exercise repo = new Exercise();
            repo.add("B001");
            boolean threw = false;
            try {
                repo.add(" b001 ");
            } catch (IllegalArgumentException expected) {
                threw = true;
            }
            require(threw, "the duplicate was accepted instead of rejected");
            require(repo.size() == 1, "the duplicate was stored as a second record");
        });

        check("a second different ID is stored", () -> {
            Exercise repo = new Exercise();
            repo.add("B001");
            repo.add("B002");
            require(repo.size() == 2, "size should be 2 but was " + repo.size());
            require(repo.contains("B002"), "B002 should be in the index");
        });`,
          hint1: "The method is called containsKey. What does it return?",
          hint2: "The code throws when the ID is NOT in the index. Is that what we want for a new item?",
          hint3: "The guard for adding should be the opposite: throw only when the ID is already present.",
          solution: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Exercise {
    private final Map<String, String> index = new HashMap<>();
    private final List<String> records = new ArrayList<>();

    public void add(String id) {
        String key = id.trim().toUpperCase();
        if (index.containsKey(key)) {
            throw new IllegalArgumentException("Book ID '" + key + "' already exists.");
        }
        records.add(key);
        index.put(key, key);
    }

    public int size() {
        return records.size();
    }

    public boolean contains(String id) {
        return index.containsKey(id.trim().toUpperCase());
    }
}`,
          expected: "if (index.containsKey(key)) { throw ... }",
          explanation:
            "The condition was inverted, so the method threw for every new ID and accepted every duplicate. Flipping the ! fixes both cases at once: a fresh ID falls through and is stored, a known ID throws. The test only checks behaviour, so any correct guard (for example if (index.get(key) != null)) also passes.",
        },
        {
          id: "b2",
          title: "Missing input validation",
          category: "Missing validation",
          class: "Book.java",
          method: "setAuthor",
          difficulty: "beginner",
          task: "Make setAuthor reject null and blank authors, and trim what it stores.",
          description:
            "The setter only checks for null, so a line of spaces is accepted as an author name.",
          starter: `/** Book.setAuthor must reject null and blank authors. */
public class Exercise {
    private String author;

    public void setAuthor(String author) {
        if (author == null) {
            throw new IllegalArgumentException("Author cannot be empty.");
        }
        this.author = author.trim();
    }

    public String getAuthor() {
        return author;
    }
}`,
          checks: `        check("null is rejected", () -> {
            Exercise book = new Exercise();
            boolean threw = false;
            try {
                book.setAuthor(null);
            } catch (IllegalArgumentException expected) {
                threw = true;
            }
            require(threw, "null was accepted");
            require(book.getAuthor() == null, "a rejected value must not be stored");
        });

        check("a blank author is rejected", () -> {
            Exercise book = new Exercise();
            boolean threw = false;
            try {
                book.setAuthor("     ");
            } catch (IllegalArgumentException expected) {
                threw = true;
            }
            require(threw, "a whitespace-only author was accepted");
        });

        check("a real author is trimmed and stored", () -> {
            Exercise book = new Exercise();
            book.setAuthor("  Rizal  ");
            require("Rizal".equals(book.getAuthor()), "stored author was '" + book.getAuthor() + "'");
        });`,
          hint1: "What if the user enters a blank line with spaces?",
          hint2: "String has isBlank(), which is true for empty and whitespace-only text.",
          hint3: "Check null first (so isBlank is never called on null), then check isBlank in the same condition.",
          solution: `public class Exercise {
    private String author;

    public void setAuthor(String author) {
        if (author == null || author.isBlank()) {
            throw new IllegalArgumentException("Author cannot be empty.");
        }
        this.author = author.trim();
    }

    public String getAuthor() {
        return author;
    }
}`,
          expected: "if (author == null || author.isBlank())",
          explanation:
            "A blank string is not null, so it slipped past the guard. The || adds the second rule; Java short-circuits, so isBlank() is only called when author is not null. Any check that rejects both null and whitespace passes the tests, including author.trim().isEmpty().",
        },
        {
          id: "b3",
          title: "Zero bug in the max items limit",
          category: "Incorrect condition",
          class: "StudentPolicy.java",
          method: "getMaxItems",
          difficulty: "beginner",
          task: "Return the student limit that the constants already describe.",
          description:
            "StudentPolicy says 3 items, 7 days and PHP 5.00 per late day, but getMaxItems returns 0, so a student can never borrow anything.",
          starter: `/** Student: 3 items, 7 days, PHP 5.00 for each day late. */
public class Exercise {
    public static final int MAX_ITEMS = 3;
    public static final int LOAN_DAYS = 7;
    public static final double FINE_PER_DAY = 5.00;

    public int getMaxItems() {
        return 0;
    }

    public int getLoanDays() {
        return LOAN_DAYS;
    }

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}`,
          checks: `        check("a student can borrow three items", () -> {
            Exercise policy = new Exercise();
            require(policy.getMaxItems() == 3, "getMaxItems returned " + policy.getMaxItems());
        });

        check("the loan period is still seven days", () -> {
            Exercise policy = new Exercise();
            require(policy.getLoanDays() == 7, "getLoanDays returned " + policy.getLoanDays());
        });

        check("the fine is PHP 5.00 per late day", () -> {
            Exercise policy = new Exercise();
            requireClose(policy.calculateFine(4), 20.0, "fine for four days");
            requireClose(policy.calculateFine(0), 0.0, "fine for zero days");
        });`,
          hint1: "What does the comment at the top of the file say?",
          hint2: "The class already has a constant for this value. Which one?",
          hint3: "Return MAX_ITEMS rather than a literal, so the number lives in one place.",
          solution: `public class Exercise {
    public static final int MAX_ITEMS = 3;
    public static final int LOAN_DAYS = 7;
    public static final double FINE_PER_DAY = 5.00;

    public int getMaxItems() {
        return MAX_ITEMS;
    }

    public int getLoanDays() {
        return LOAN_DAYS;
    }

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}`,
          expected: "return MAX_ITEMS;",
          explanation:
            "A hardcoded 0 blocked every borrow. Returning the constant keeps the rule in one place; returning 3 directly also passes, but then the number is duplicated.",
        },
      ],
    },

    intermediate: {
      id: "intermediate",
      title: "Intermediate",
      icon: "🌿",
      description:
        "Incorrect method behaviour. Wrong calculations. Collection problems. Exception handling mistakes. File loading and saving problems.",
      exercises: [
        {
          id: "i1",
          title: "Wrong fine calculation",
          category: "Wrong calculation",
          class: "FacultyPolicy.java",
          method: "calculateFine",
          difficulty: "intermediate",
          task: "Charge faculty PHP 2.00 per late day, not PHP 5.00.",
          description:
            "Faculty pay a smaller fine than students. The method still uses the student rate, so every overdue faculty loan is overcharged.",
          starter: `/** Faculty: 10 items, 30 days, PHP 2.00 for each day late. */
public class Exercise {
    public static final int MAX_ITEMS = 10;
    public static final int LOAN_DAYS = 30;
    public static final double FINE_PER_DAY = 2.00;

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * 5.00;
    }
}`,
          checks: `        check("five late days cost PHP 10.00", () -> {
            Exercise policy = new Exercise();
            requireClose(policy.calculateFine(5), 10.0, "fine for five days");
        });

        check("one late day costs PHP 2.00", () -> {
            Exercise policy = new Exercise();
            requireClose(policy.calculateFine(1), 2.0, "fine for one day");
        });

        check("nothing late means no fine", () -> {
            Exercise policy = new Exercise();
            requireClose(policy.calculateFine(0), 0.0, "fine for zero days");
            requireClose(policy.calculateFine(-4), 0.0, "fine for negative days");
        });`,
          hint1: "What is the comment at the top of the class?",
          hint2: "The class already declares FINE_PER_DAY. What value does it hold?",
          hint3: "Multiply by the constant instead of the magic number 5.00.",
          solution: `public class Exercise {
    public static final int MAX_ITEMS = 10;
    public static final int LOAN_DAYS = 30;
    public static final double FINE_PER_DAY = 2.00;

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}`,
          expected: "return daysOverdue * FINE_PER_DAY;",
          explanation:
            "The rate was copied from StudentPolicy. Using the constant means the faculty rule is stated once and cannot drift again.",
        },
        {
          id: "i2",
          title: "Wrong sorted order",
          category: "Logical error",
          class: "LibraryService.java",
          method: "getAllItemsSortedByTitle",
          difficulty: "intermediate",
          task: "Return the titles sorted A to Z by title, ignoring case.",
          description:
            "The comparator looks at the item ID, so the list comes back in accession order instead of alphabetical title order.",
          starter: `import java.util.ArrayList;
import java.util.List;

/** The list must come back sorted A to Z by title. */
public class Exercise {
    private final List<Book> items = new ArrayList<>();

    public void add(String id, String title) {
        items.add(new Book(id, title));
    }

    public List<String> titlesSortedByTitle() {
        List<Book> sorted = new ArrayList<>(items);
        sorted.sort((first, second) -> first.id.compareTo(second.id));
        List<String> titles = new ArrayList<>();
        for (Book book : sorted) {
            titles.add(book.title);
        }
        return titles;
    }

    static final class Book {
        final String id;
        final String title;

        Book(String id, String title) {
            this.id = id;
            this.title = title;
        }
    }
}`,
          checks: `        check("titles come back in alphabetical order", () -> {
            Exercise library = new Exercise();
            library.add("B010", "Zoology");
            library.add("B900", "algebra");
            library.add("B500", "Biology");
            List<String> titles = library.titlesSortedByTitle();
            require(titles.equals(Arrays.asList("algebra", "Biology", "Zoology")), "got " + titles);
        });

        check("an empty library returns an empty list", () -> {
            Exercise library = new Exercise();
            require(library.titlesSortedByTitle().isEmpty(), "expected an empty list");
        });`,
          hint1: "What does the method name promise?",
          hint2: "Which field does the comparator read: id or title?",
          hint3: "Compare titles with compareToIgnoreCase so 'algebra' and 'Biology' sort together.",
          solution: `import java.util.ArrayList;
import java.util.List;

public class Exercise {
    private final List<Book> items = new ArrayList<>();

    public void add(String id, String title) {
        items.add(new Book(id, title));
    }

    public List<String> titlesSortedByTitle() {
        List<Book> sorted = new ArrayList<>(items);
        sorted.sort((first, second) -> first.title.compareToIgnoreCase(second.title));
        List<String> titles = new ArrayList<>();
        for (Book book : sorted) {
            titles.add(book.title);
        }
        return titles;
    }

    static final class Book {
        final String id;
        final String title;

        Book(String id, String title) {
            this.id = id;
            this.title = title;
        }
    }
}`,
          expected: "first.title.compareToIgnoreCase(second.title)",
          explanation:
            "The lambda compared IDs. compareToIgnoreCase keeps the order alphabetical regardless of capitalisation. A Comparator.comparing(book -> book.title.toLowerCase()) would pass too, because only the resulting order is checked.",
        },
        {
          id: "i3",
          title: "Wrong limit check",
          category: "Collection problem",
          class: "LibraryService.java",
          method: "borrowItem",
          difficulty: "intermediate",
          task: "Throw only when the member has reached the borrowing limit.",
          description:
            "The guard uses the wrong comparison, so it blocks every borrow, even for a member with no loans.",
          starter: `/** borrowItem must throw once the member reaches the limit. */
public class Exercise {
    public void checkLimit(String memberName, int openLoans, int maxItems) {
        if (openLoans <= maxItems) {
            throw new IllegalStateException(memberName + " already has " + openLoans
                    + " borrowed item(s). The limit is " + maxItems + ".");
        }
    }
}`,
          checks: `        check("a member with no loans may borrow", () -> {
            Exercise service = new Exercise();
            service.checkLimit("Ana", 0, 3);
        });

        check("a member below the limit may borrow", () -> {
            Exercise service = new Exercise();
            service.checkLimit("Ana", 2, 3);
        });

        check("a member at the limit is blocked", () -> {
            Exercise service = new Exercise();
            boolean threw = false;
            try {
                service.checkLimit("Ana", 3, 3);
            } catch (IllegalStateException expected) {
                threw = true;
            }
            require(threw, "borrowing at the limit was allowed");
        });

        check("a member above the limit is blocked", () -> {
            Exercise service = new Exercise();
            boolean threw = false;
            try {
                service.checkLimit("Ana", 5, 3);
            } catch (IllegalStateException expected) {
                threw = true;
            }
            require(threw, "borrowing above the limit was allowed");
        });`,
          hint1: "When should the exception be thrown? When the member has reached the limit.",
          hint2: "If a student may borrow 3 and already has 3, should one more be allowed?",
          hint3: "The guard should be openLoans >= maxItems. Read it out loud.",
          solution: `public class Exercise {
    public void checkLimit(String memberName, int openLoans, int maxItems) {
        if (openLoans >= maxItems) {
            throw new IllegalStateException(memberName + " already has " + openLoans
                    + " borrowed item(s). The limit is " + maxItems + ".");
        }
    }
}`,
          expected: "if (openLoans >= maxItems)",
          explanation:
            "<= was true for every allowed case, so borrowing was always blocked. >= blocks exactly at and above the limit, which is the rule. Boundary values are the fastest way to test a comparison.",
        },
        {
          id: "i4",
          title: "Wrong exception type",
          category: "Exception handling problem",
          class: "Repository.java",
          method: "add",
          difficulty: "intermediate",
          task: "Throw LibraryRuleException for a duplicate ID, not RecordNotFoundException.",
          description:
            "A duplicate ID is a business rule violation. The method declares LibraryRuleException but throws the not-found type, so callers catch the wrong thing.",
          starter: `/** Repository.add must throw LibraryRuleException for a duplicate ID. */
public class Exercise {
    static class LibraryRuleException extends RuntimeException {
        LibraryRuleException(String message) {
            super(message);
        }
    }

    static class RecordNotFoundException extends RuntimeException {
        RecordNotFoundException(String message) {
            super(message);
        }
    }

    public void checkDuplicate(String id, boolean idAlreadyExists) {
        if (idAlreadyExists) {
            throw new RecordNotFoundException("Book ID '" + id + "' already exists.");
        }
    }
}`,
          checks: `        check("a duplicate throws LibraryRuleException", () -> {
            Exercise repo = new Exercise();
            boolean correct = false;
            try {
                repo.checkDuplicate("B001", true);
            } catch (Exercise.LibraryRuleException expected) {
                correct = true;
            } catch (Exercise.RecordNotFoundException wrong) {
                throw new AssertionError("threw RecordNotFoundException instead");
            }
            require(correct, "no exception was thrown");
        });

        check("a fresh ID throws nothing", () -> {
            Exercise repo = new Exercise();
            repo.checkDuplicate("B002", false);
        });`,
          hint1: "What kind of problem is a duplicate ID: missing data, or a broken rule?",
          hint2: "Read the method signature: which exception is declared?",
          hint3: "LibraryRuleException is for business rules. A duplicate ID is one.",
          solution: `public class Exercise {
    static class LibraryRuleException extends RuntimeException {
        LibraryRuleException(String message) {
            super(message);
        }
    }

    static class RecordNotFoundException extends RuntimeException {
        RecordNotFoundException(String message) {
            super(message);
        }
    }

    public void checkDuplicate(String id, boolean idAlreadyExists) {
        if (idAlreadyExists) {
            throw new LibraryRuleException("Book ID '" + id + "' already exists.");
        }
    }
}`,
          expected: "throw new LibraryRuleException(...)",
          explanation:
            "The exception type tells the caller what happened. Not-found means the record is absent; a duplicate means the request broke a rule. Matching the type to the problem keeps catch blocks honest.",
        },
        {
          id: "i5",
          title: "Returned loan treated as open",
          category: "Incorrect method behaviour",
          class: "LibraryService.java",
          method: "findOpenLoanForItem",
          difficulty: "intermediate",
          task: "Return only a loan that has not been returned yet.",
          description:
            "The loop stops at the first loan for the item, even if that loan was already closed, so a returned book looks borrowed forever.",
          starter: `import java.util.ArrayList;
import java.util.List;

/** findOpenLoanForItem must skip loans that were already returned. */
public class Exercise {
    private final List<Loan> loans = new ArrayList<>();

    public void addLoan(String itemId, String memberId, boolean returned) {
        loans.add(new Loan(itemId, memberId, returned));
    }

    public Loan findOpenLoanForItem(String itemId) {
        for (Loan loan : loans) {
            if (loan.itemId.equals(itemId)) {
                return loan;
            }
        }
        return null;
    }

    public static final class Loan {
        public final String itemId;
        public final String memberId;
        public final boolean returned;

        Loan(String itemId, String memberId, boolean returned) {
            this.itemId = itemId;
            this.memberId = memberId;
            this.returned = returned;
        }
    }
}`,
          checks: `        check("a returned loan is not open", () -> {
            Exercise service = new Exercise();
            service.addLoan("B001", "M001", true);
            require(service.findOpenLoanForItem("B001") == null, "a returned loan was reported as open");
        });

        check("the open loan is found after a returned one", () -> {
            Exercise service = new Exercise();
            service.addLoan("B001", "M001", true);
            service.addLoan("B001", "M002", false);
            Exercise.Loan open = service.findOpenLoanForItem("B001");
            require(open != null, "no loan was found");
            require("M002".equals(open.memberId), "found the loan of " + open.memberId);
        });

        check("an item with no loans returns null", () -> {
            Exercise service = new Exercise();
            require(service.findOpenLoanForItem("B999") == null, "expected null");
        });`,
          hint1: "A loan is closed when its returned flag is true.",
          hint2: "The loop returns the first match. Which two conditions must that loan satisfy?",
          hint3: "Add !loan.returned to the if.",
          solution: `import java.util.ArrayList;
import java.util.List;

public class Exercise {
    private final List<Loan> loans = new ArrayList<>();

    public void addLoan(String itemId, String memberId, boolean returned) {
        loans.add(new Loan(itemId, memberId, returned));
    }

    public Loan findOpenLoanForItem(String itemId) {
        for (Loan loan : loans) {
            if (loan.itemId.equals(itemId) && !loan.returned) {
                return loan;
            }
        }
        return null;
    }

    public static final class Loan {
        public final String itemId;
        public final String memberId;
        public final boolean returned;

        Loan(String itemId, String memberId, boolean returned) {
            this.itemId = itemId;
            this.memberId = memberId;
            this.returned = returned;
        }
    }
}`,
          expected: "if (loan.itemId.equals(itemId) && !loan.returned)",
          explanation:
            "The item can have several loans over time; only the one without a return date is open. Checking both conditions prevents returning a closed loan.",
        },
        {
          id: "i6",
          title: "Unsafe file save",
          category: "File handling and persistence error",
          class: "Repository.java",
          method: "saveToFile",
          difficulty: "intermediate",
          task: "Write to the temp file, then move it over the real file.",
          description:
            "The method builds a temp path and then writes straight to the real file, so the move fails and a crash mid-write would destroy the saved data.",
          starter: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

/** save() must write through the temp file, then replace the real file. */
public class Exercise {
    public static void save(List<String> lines, Path target) throws IOException {
        Path temp = target.resolveSibling(target.getFileName() + ".tmp");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(target.toFile()))) {
            for (String line : lines) {
                writer.write(line);
                writer.newLine();
            }
        }
        Files.move(temp, target, StandardCopyOption.REPLACE_EXISTING);
    }
}`,
          checks: `        check("the new lines reach the target file", () -> {
            try {
                Path folder = Files.createTempDirectory("dcit50-save-");
                Path target = folder.resolve("items.txt");
                Exercise.save(Arrays.asList("B001|Java", "B002|OOP"), target);
                List<String> saved = Files.readAllLines(target);
                require(saved.equals(Arrays.asList("B001|Java", "B002|OOP")), "saved lines were " + saved);
            } catch (IOException problem) {
                throw new RuntimeException(problem);
            }
        });

        check("no temp file is left behind", () -> {
            try {
                Path folder = Files.createTempDirectory("dcit50-save-");
                Path target = folder.resolve("items.txt");
                Exercise.save(Arrays.asList("B001|Java"), target);
                try (java.util.stream.Stream<Path> files = Files.list(folder)) {
                    long tempFiles = files.filter((path) -> path.getFileName().toString().endsWith(".tmp")).count();
                    require(tempFiles == 0, "a .tmp file was left in the folder");
                }
            } catch (IOException problem) {
                throw new RuntimeException(problem);
            }
        });

        check("an existing file is replaced", () -> {
            try {
                Path folder = Files.createTempDirectory("dcit50-save-");
                Path target = folder.resolve("items.txt");
                Files.writeString(target, "OLD\\n");
                Exercise.save(Arrays.asList("B003|DB"), target);
                require(Files.readAllLines(target).equals(Arrays.asList("B003|DB")), "the old content survived");
            } catch (IOException problem) {
                throw new RuntimeException(problem);
            }
        });`,
          hint1: "Where is the temp path created, and where does the writer actually point?",
          hint2: "The writer uses target.toFile(). What should it use instead?",
          hint3: "Write to temp.toFile(), then move temp over target.",
          solution: `import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.List;

public class Exercise {
    public static void save(List<String> lines, Path target) throws IOException {
        Path temp = target.resolveSibling(target.getFileName() + ".tmp");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(temp.toFile()))) {
            for (String line : lines) {
                writer.write(line);
                writer.newLine();
            }
        }
        Files.move(temp, target, StandardCopyOption.REPLACE_EXISTING);
    }
}`,
          expected: "new FileWriter(temp.toFile())",
          explanation:
            "The temp file was created but never written, so the move failed and the real file was already damaged. Writing to temp and moving keeps the old data intact until the new copy is complete.",
        },
      ],
    },

    advanced: {
      id: "advanced",
      title: "Advanced",
      icon: "🌳",
      description:
        "Problems involving multiple classes. Incorrect object relationships. Polymorphism mistakes. Design pattern implementation errors. Bugs that require tracing the program across several files.",
      exercises: [
        {
          id: "a1",
          title: "Loan references the wrong member",
          category: "Incorrect method behaviour across classes",
          class: "LibraryService.java",
          method: "returnItem",
          difficulty: "advanced",
          task: "Charge the member who actually borrowed the returned item.",
          description:
            "The lookup uses the item ID to search the member map, so it finds nothing and the fine is never charged to the right person.",
          starter: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** returnItem must resolve the member from the loan's member id. */
public class Exercise {
    private final Map<String, Member> members = new HashMap<>();
    private final List<Loan> loans = new ArrayList<>();

    public void addMember(String id, String name) {
        members.put(id, new Member(id, name));
    }

    public void addLoan(String itemId, String memberId) {
        loans.add(new Loan(itemId, memberId));
    }

    public String memberReturning(String itemId) {
        Loan loan = findOpenLoanForItem(itemId);
        if (loan == null) {
            throw new IllegalStateException("Item '" + itemId + "' is not currently borrowed.");
        }
        Member member = members.get(loan.itemId);
        if (member == null) {
            throw new IllegalStateException("No member found for item '" + itemId + "'.");
        }
        return member.name;
    }

    private Loan findOpenLoanForItem(String itemId) {
        for (Loan loan : loans) {
            if (loan.itemId.equals(itemId)) {
                return loan;
            }
        }
        return null;
    }

    static final class Member {
        final String id;
        final String name;

        Member(String id, String name) {
            this.id = id;
            this.name = name;
        }
    }

    static final class Loan {
        final String itemId;
        final String memberId;

        Loan(String itemId, String memberId) {
            this.itemId = itemId;
            this.memberId = memberId;
        }
    }
}`,
          checks: `        check("the returning member is the borrower", () -> {
            Exercise service = new Exercise();
            service.addMember("M001", "Rico");
            service.addMember("M002", "Ana");
            service.addLoan("B001", "M001");
            service.addLoan("B002", "M002");
            require("Ana".equals(service.memberReturning("B002")), "returned the wrong member");
            require("Rico".equals(service.memberReturning("B001")), "returned the wrong member");
        });

        check("an item that is not borrowed is rejected", () -> {
            Exercise service = new Exercise();
            service.addMember("M001", "Rico");
            boolean threw = false;
            try {
                service.memberReturning("B404");
            } catch (IllegalStateException expected) {
                threw = true;
            }
            require(threw, "an unknown item was accepted");
        });`,
          hint1: "How does a loan know which member borrowed it?",
          hint2: "A Loan stores itemId and memberId. Which one identifies the member?",
          hint3: "Look up members.get(loan.memberId), not loan.itemId.",
          solution: `import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Exercise {
    private final Map<String, Member> members = new HashMap<>();
    private final List<Loan> loans = new ArrayList<>();

    public void addMember(String id, String name) {
        members.put(id, new Member(id, name));
    }

    public void addLoan(String itemId, String memberId) {
        loans.add(new Loan(itemId, memberId));
    }

    public String memberReturning(String itemId) {
        Loan loan = findOpenLoanForItem(itemId);
        if (loan == null) {
            throw new IllegalStateException("Item '" + itemId + "' is not currently borrowed.");
        }
        Member member = members.get(loan.memberId);
        if (member == null) {
            throw new IllegalStateException("No member found for item '" + itemId + "'.");
        }
        return member.name;
    }

    private Loan findOpenLoanForItem(String itemId) {
        for (Loan loan : loans) {
            if (loan.itemId.equals(itemId)) {
                return loan;
            }
        }
        return null;
    }

    static final class Member {
        final String id;
        final String name;

        Member(String id, String name) {
            this.id = id;
            this.name = name;
        }
    }

    static final class Loan {
        final String itemId;
        final String memberId;

        Loan(String itemId, String memberId) {
            this.itemId = itemId;
            this.memberId = memberId;
        }
    }
}`,
          expected: "members.get(loan.memberId)",
          explanation:
            "The map is keyed by member ID, so passing an item ID always misses. Tracing the identifier type across the method is the quickest way to spot this class of bug.",
        },
        {
          id: "a2",
          title: "Missing policy in member creation",
          category: "Design pattern mistake",
          class: "LibraryFactory.java",
          method: "createMember",
          difficulty: "advanced",
          task: "Give each member the right borrowing policy in the factory.",
          description:
            "The factory passes null for the policy, so the Member constructor throws and no member can be created.",
          starter: `/** The factory must supply the policy each member type needs. */
public class Exercise {
    interface Policy {
        int maxItems();
        int loanDays();
    }

    static final class StudentPolicy implements Policy {
        public int maxItems() { return 3; }
        public int loanDays() { return 7; }
    }

    static final class FacultyPolicy implements Policy {
        public int maxItems() { return 10; }
        public int loanDays() { return 30; }
    }

    static final class Member {
        final String id;
        final String name;
        final Policy policy;

        Member(String id, String name, Policy policy) {
            if (policy == null) {
                throw new IllegalArgumentException("A member must have a borrowing policy.");
            }
            this.id = id;
            this.name = name;
            this.policy = policy;
        }
    }

    public static Member createMember(String type, String id, String name) {
        switch (type.trim().toUpperCase()) {
            case "STUDENT":
                return new Member(id, name, null);
            case "FACULTY":
                return new Member(id, name, null);
            default:
                throw new IllegalArgumentException("Unknown member type: " + type);
        }
    }
}`,
          checks: `        check("a student gets the student policy", () -> {
            Exercise.Member ana = Exercise.createMember("student", "M001", "Ana");
            require(ana.policy.maxItems() == 3, "max items was " + ana.policy.maxItems());
            require(ana.policy.loanDays() == 7, "loan days were " + ana.policy.loanDays());
        });

        check("a faculty member gets the faculty policy", () -> {
            Exercise.Member rico = Exercise.createMember(" Faculty ", "M002", "Rico");
            require(rico.policy.maxItems() == 10, "max items was " + rico.policy.maxItems());
            require(rico.policy.loanDays() == 30, "loan days were " + rico.policy.loanDays());
        });

        check("an unknown type is rejected", () -> {
            boolean threw = false;
            try {
                Exercise.createMember("guest", "M003", "Guest");
            } catch (IllegalArgumentException expected) {
                threw = true;
            }
            require(threw, "an unknown member type was accepted");
        });`,
          hint1: "What does the Member constructor do when the policy is null?",
          hint2: "The factory knows the type, so it can pick the policy.",
          hint3: "Pass new StudentPolicy() for STUDENT and new FacultyPolicy() for FACULTY.",
          solution: `public class Exercise {
    interface Policy {
        int maxItems();
        int loanDays();
    }

    static final class StudentPolicy implements Policy {
        public int maxItems() { return 3; }
        public int loanDays() { return 7; }
    }

    static final class FacultyPolicy implements Policy {
        public int maxItems() { return 10; }
        public int loanDays() { return 30; }
    }

    static final class Member {
        final String id;
        final String name;
        final Policy policy;

        Member(String id, String name, Policy policy) {
            if (policy == null) {
                throw new IllegalArgumentException("A member must have a borrowing policy.");
            }
            this.id = id;
            this.name = name;
            this.policy = policy;
        }
    }

    public static Member createMember(String type, String id, String name) {
        switch (type.trim().toUpperCase()) {
            case "STUDENT":
                return new Member(id, name, new StudentPolicy());
            case "FACULTY":
                return new Member(id, name, new FacultyPolicy());
            default:
                throw new IllegalArgumentException("Unknown member type: " + type);
        }
    }
}`,
          expected: "new Member(id, name, new StudentPolicy())",
          explanation:
            "The constructor enforces its dependency, which is why the bug surfaces immediately. The factory is the one place that should know which policy belongs to which type.",
        },
        {
          id: "a3",
          title: "Observer ignores most messages",
          category: "Polymorphism mistake",
          class: "MenuController.java",
          method: "startUp",
          difficulty: "advanced",
          task: "Store every notification the service publishes, not just errors.",
          description:
            "The observer filters on message.startsWith(\"ERROR\"), so overdue warnings and borrow confirmations never reach the notification log.",
          starter: `import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

/** Every notification must reach the log. Fix the observer in startUp(). */
public class Exercise {
    private final List<Consumer<String>> observers = new ArrayList<>();
    private final List<String> notificationLog = new ArrayList<>();

    public void addObserver(Consumer<String> observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Consumer<String> observer : observers) {
            observer.accept(message);
        }
    }

    public void startUp() {
        addObserver(message -> {
            if (message.startsWith("ERROR")) {
                notificationLog.add(message);
            }
        });
    }

    public List<String> getNotificationLog() {
        return notificationLog;
    }
}`,
          checks: `        check("every notification is stored", () -> {
            Exercise controller = new Exercise();
            controller.startUp();
            controller.notifyObservers("Borrowed 'Java' to Ana.");
            controller.notifyObservers("OVERDUE: 'OOP' is 2 day(s) late.");
            require(controller.getNotificationLog().equals(Arrays.asList(
                    "Borrowed 'Java' to Ana.",
                    "OVERDUE: 'OOP' is 2 day(s) late.")), "log was " + controller.getNotificationLog());
        });

        check("an added observer still receives messages", () -> {
            Exercise controller = new Exercise();
            controller.startUp();
            List<String> seen = new ArrayList<>();
            controller.addObserver(seen::add);
            controller.notifyObservers("Returned 'OOP'.");
            require(seen.equals(Arrays.asList("Returned 'OOP'.")), "observer saw " + seen);
        });`,
          hint1: "What does the lambda do with messages that do not start with ERROR?",
          hint2: "The notification log should receive everything the service publishes.",
          hint3: "Remove the filter, or store the message unconditionally.",
          solution: `import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

public class Exercise {
    private final List<Consumer<String>> observers = new ArrayList<>();
    private final List<String> notificationLog = new ArrayList<>();

    public void addObserver(Consumer<String> observer) {
        observers.add(observer);
    }

    public void notifyObservers(String message) {
        for (Consumer<String> observer : observers) {
            observer.accept(message);
        }
    }

    public void startUp() {
        addObserver(notificationLog::add);
    }

    public List<String> getNotificationLog() {
        return notificationLog;
    }
}`,
          expected: "addObserver(notificationLog::add);",
          explanation:
            "The filter turned a general notification log into an error-only log. Either drop the if or use the method reference; the observer contract is 'receive every message'.",
        },
        {
          id: "a4",
          title: "Item stays borrowed after return",
          category: "Missing state update",
          class: "LibraryService.java",
          method: "returnItem",
          difficulty: "advanced",
          task: "Mark the item available again when it is returned.",
          description:
            "The loan is closed but the item's available flag is never restored, so the book can never be borrowed a second time.",
          starter: `import java.util.HashMap;
import java.util.Map;

/** Returning an item must make it available again. */
public class Exercise {
    private final Map<String, Item> items = new HashMap<>();
    private final Map<String, Loan> openLoans = new HashMap<>();

    public void addItem(String itemId) {
        items.put(itemId, new Item(itemId));
    }

    public void borrowItem(String itemId, String memberId) {
        Item item = requireItem(itemId);
        if (!item.available) {
            throw new IllegalStateException("'" + itemId + "' is already borrowed.");
        }
        item.available = false;
        openLoans.put(itemId, new Loan(itemId, memberId));
    }

    public void returnItem(String itemId) {
        Item item = requireItem(itemId);
        Loan loan = openLoans.get(itemId);
        if (loan == null) {
            throw new IllegalStateException("'" + itemId + "' is not currently borrowed.");
        }
        loan.returned = true;
        openLoans.remove(itemId);
    }

    public boolean isAvailable(String itemId) {
        return requireItem(itemId).available;
    }

    private Item requireItem(String itemId) {
        Item item = items.get(itemId);
        if (item == null) {
            throw new IllegalStateException("Unknown item '" + itemId + "'.");
        }
        return item;
    }

    static final class Item {
        final String id;
        boolean available = true;

        Item(String id) {
            this.id = id;
        }
    }

    static final class Loan {
        final String itemId;
        final String memberId;
        boolean returned;

        Loan(String itemId, String memberId) {
            this.itemId = itemId;
            this.memberId = memberId;
        }
    }
}`,
          checks: `        check("a returned item is available again", () -> {
            Exercise service = new Exercise();
            service.addItem("B001");
            service.borrowItem("B001", "M001");
            require(!service.isAvailable("B001"), "a borrowed item should not be available");
            service.returnItem("B001");
            require(service.isAvailable("B001"), "the item stayed borrowed after return");
        });

        check("an item can be borrowed twice", () -> {
            Exercise service = new Exercise();
            service.addItem("B001");
            service.borrowItem("B001", "M001");
            service.returnItem("B001");
            service.borrowItem("B001", "M002");
            require(!service.isAvailable("B001"), "the second borrow did not take effect");
        });

        check("returning twice is rejected", () -> {
            Exercise service = new Exercise();
            service.addItem("B001");
            service.borrowItem("B001", "M001");
            service.returnItem("B001");
            boolean threw = false;
            try {
                service.returnItem("B001");
            } catch (IllegalStateException expected) {
                threw = true;
            }
            require(threw, "a second return was accepted");
        });`,
          hint1: "What flag does borrowItem change?",
          hint2: "returnItem closes the loan. Which other object still holds state about the borrow?",
          hint3: "Set item.available back to true.",
          solution: `import java.util.HashMap;
import java.util.Map;

public class Exercise {
    private final Map<String, Item> items = new HashMap<>();
    private final Map<String, Loan> openLoans = new HashMap<>();

    public void addItem(String itemId) {
        items.put(itemId, new Item(itemId));
    }

    public void borrowItem(String itemId, String memberId) {
        Item item = requireItem(itemId);
        if (!item.available) {
            throw new IllegalStateException("'" + itemId + "' is already borrowed.");
        }
        item.available = false;
        openLoans.put(itemId, new Loan(itemId, memberId));
    }

    public void returnItem(String itemId) {
        Item item = requireItem(itemId);
        Loan loan = openLoans.get(itemId);
        if (loan == null) {
            throw new IllegalStateException("'" + itemId + "' is not currently borrowed.");
        }
        loan.returned = true;
        item.available = true;
        openLoans.remove(itemId);
    }

    public boolean isAvailable(String itemId) {
        return requireItem(itemId).available;
    }

    private Item requireItem(String itemId) {
        Item item = items.get(itemId);
        if (item == null) {
            throw new IllegalStateException("Unknown item '" + itemId + "'.");
        }
        return item;
    }

    static final class Item {
        final String id;
        boolean available = true;

        Item(String id) {
            this.id = id;
        }
    }

    static final class Loan {
        final String itemId;
        final String memberId;
        boolean returned;

        Loan(String itemId, String memberId) {
            this.itemId = itemId;
            this.memberId = memberId;
        }
    }
}`,
          expected: "item.available = true;",
          explanation:
            "Borrowing updates two objects, so returning must undo both. A missing side effect like this is invisible until someone tries to borrow the item again.",
        },
        {
          id: "a5",
          title: "Faculty loan period is the student one",
          category: "Incorrect object relationship",
          class: "FacultyPolicy.java",
          method: "getLoanDays",
          difficulty: "advanced",
          task: "Return the faculty loan period from the policy constant.",
          description:
            "Faculty get 30 days, but the method returns the student value as a literal, so every faculty due date is three weeks early.",
          starter: `/** Faculty: 10 items, 30 days, PHP 2.00 for each day late. */
public class Exercise {
    public static final int MAX_ITEMS = 10;
    public static final int LOAN_DAYS = 30;
    public static final double FINE_PER_DAY = 2.00;

    public int getMaxItems() {
        return MAX_ITEMS;
    }

    public int getLoanDays() {
        return 7;
    }

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}`,
          checks: `        check("faculty get thirty days", () -> {
            Exercise policy = new Exercise();
            require(policy.getLoanDays() == 30, "getLoanDays returned " + policy.getLoanDays());
        });

        check("faculty still get ten items", () -> {
            Exercise policy = new Exercise();
            require(policy.getMaxItems() == 10, "getMaxItems returned " + policy.getMaxItems());
        });

        check("the faculty fine is unchanged", () -> {
            Exercise policy = new Exercise();
            requireClose(policy.calculateFine(3), 6.0, "fine for three days");
        });`,
          hint1: "What does the comment at the top of the class say?",
          hint2: "The class already declares LOAN_DAYS. What value does it hold?",
          hint3: "Return the constant instead of the literal 7.",
          solution: `public class Exercise {
    public static final int MAX_ITEMS = 10;
    public static final int LOAN_DAYS = 30;
    public static final double FINE_PER_DAY = 2.00;

    public int getMaxItems() {
        return MAX_ITEMS;
    }

    public int getLoanDays() {
        return LOAN_DAYS;
    }

    public double calculateFine(int daysOverdue) {
        if (daysOverdue <= 0) {
            return 0.0;
        }
        return daysOverdue * FINE_PER_DAY;
    }
}`,
          expected: "return LOAN_DAYS;",
          explanation:
            "Copying StudentPolicy's 7 bypassed the faculty constant. Two policies with the same shape are easy to mix up; the constant makes the difference explicit.",
        },
      ],
    },
  },

  // Simulation mode
  simulation: {
    title: "Five-Minute Challenge",
    description:
      "A realistic simulation of the professor's debugging activity. You get a random challenge, 5 minutes, and must fix it so every test passes.",
    rules: [
      "You get one randomly selected challenge.",
      "You have 5 minutes to complete the task.",
      "Edit the code and run the tests as often as you like.",
      "The score is the share of tests that pass.",
      "No hints and no solution during the challenge.",
    ],
    challengeIds: ["b1", "i1", "i3", "i5", "a4"],
    timeLeft: 300,
  },

  randomMode: {
    title: "Random Mode",
    description:
      "Randomly picks a bug from any level, with no category given. Hints unlock one at a time.",
    difficulty: "random",
  },
};

export default debugging;
