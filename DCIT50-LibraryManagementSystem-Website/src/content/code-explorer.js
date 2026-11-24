/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: Code Explorer - every Java source file explained.
 */

const codeExplorer = {
  files: [
    {
      id: "main",
      name: "Main.java",
      package: "app",
      path: "src/app/Main.java",
      description: "The starting point of the program. It is very thin: it only creates the objects and hands control to the menu.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Main.java</li>
           <li><strong>Package:</strong> app</li>
           <li><strong>Main purpose:</strong> Start the program.</li>
           <li><strong>Why it exists:</strong> Every Java program needs a place where the JVM begins. Main is that place.</li>
           <li><strong>How it connects:</strong> It creates a <code>LibraryService</code>, a <code>MenuController</code>, and then starts the menu loop.</li>
           <li><strong>Where it fits:</strong> It is the very first step of the program.</li>
        </ul>
      `,
      sections: [
        {
          title: "The main method",
          content: `
            <p>The <code>main</code> method is where the program starts. The JVM finds it and runs it.</p>
            <pre><code class="language-java">public static void main(String[] args) {
    String dataFolder = (args.length > 0) ? args[0] : "data";
    try (ConsoleHelper console = new ConsoleHelper()) {
        LibraryService service = new LibraryService(dataFolder);
        MenuController menu = new MenuController(console, service);
        menu.run();
    }
}</code></pre>
            <ul>
               <li><code>public static void main(String[] args)</code> &mdash; the standard entry point signature.</li>
               <li><code>String[] args</code> &mdash; optional text input from the command line. Our program can take a data folder name.</li>
               <li><code>try (ConsoleHelper console = new ConsoleHelper())</code> &mdash; try-with-resources. The console is closed automatically at the end.</li>
               <li><code>LibraryService service = new LibraryService(dataFolder);</code> &mdash; create the library service with the data folder.</li>
               <li><code>MenuController menu = new MenuController(console, service);</code> &mdash; create the menu and give it the service.</li>
               <li><code>menu.run();</code> &mdash; start the menu loop.</li>
            </ul>
            <p>Notice that Main does not call library methods directly. It does not add items or check loans. It only sets up the pieces and hands them to the menu. This is a good example of a <strong>thin main</strong>.</p>
          `,
          keywordFocus: `
            <p><strong>public</strong> &mdash; this method can be called from anywhere, even by the JVM.</p>
            <p><strong>static</strong> &mdash; this method belongs to the class, not to an object. The JVM does not need to make an object of Main to start it.</p>
            <p><strong>void</strong> &mdash; this method does not return a value.</p>
            <p><strong>String[] args</strong> &mdash; an array of text arguments. If the user types <code>java app.Main mydata</code>, then <code>args[0]</code> is <code>"mydata"</code>.</p>
            <p><strong>try-with-resources</strong> &mdash; a special form of try that closes the resource (the ConsoleHelper) automatically when the block ends.</p>
          `,
          example: `
            <p>If the program starts with no argument:</p>
            <pre><code class="language-java">java app.Main</code></pre>
            <p>Then <code>dataFolder</code> is <code>"data"</code>. The program reads from <code>data/items.txt</code>, <code>data/members.txt</code>, and <code>data/loans.txt</code>.</p>
            <p>If the program starts with an argument:</p>
            <pre><code class="language-java">java app.Main myfolder</code></pre>
            <p>Then <code>dataFolder</code> is <code>"myfolder"</code>, so it reads from <code>myfolder/items.txt</code>, and so on.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What is the job of the Main class?", a: "It starts the program by creating the service, the menu, and starting the menu loop." },
        { q: "Why is Main called 'thin'?", a: "Because it does not contain library logic; it only creates objects and hands control to the menu." },
        { q: "What does args[0] contain if the user runs java app.Main mydata?", a: "The string \"mydata\", which is the data folder name." },
      ],
    },
    {
      id: "menucontroller",
      name: "MenuController.java",
      package: "app",
      path: "src/app/MenuController.java",
      description: "Shows the menu, reads what the user types, and calls the LibraryService. It does not contain library rules.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> MenuController.java</li>
           <li><strong>Package:</strong> app</li>
           <li><strong>Main purpose:</strong> Control the user flow: show menu, read input, call the service, show results.</li>
           <li><strong>Why it exists:</strong> To separate the user interface (the menu) from the business logic (the service).</li>
           <li><strong>How it connects:</strong> It uses ConsoleHelper to read input, and LibraryService to do the work.</li>
           <li><strong>Where it fits:</strong> It runs the whole program after Main creates it.</li>
        </ul>
      `,
      sections: [
        {
          title: "The run method",
          content: `
            <p>The <code>run</code> method starts the program: it calls <code>startUp</code>, then the main menu loop.</p>
            <pre><code class="language-java">public void run() {
    startUp();
    try {
        mainMenuLoop();
    } catch (NoSuchElementException e) {
        console.blank();
        console.info("The input has ended. Saving and exiting.");
        autoSave();
    }
}</code></pre>
            <ul>
               <li><code>startUp()</code> &mdash; loads data, sets up observers, checks overdue.</li>
               <li><code>mainMenuLoop()</code> &mdash; keeps showing the menu until the user exits.</li>
               <li>The <code>catch</code> handles the case where input ended (for example, when a file is piped in). It saves and exits politely.</li>
            </ul>
          `,
        },
        {
          title: "The startUp method",
          content: `
            <p>The <code>startUp</code> method prepares the program: loads data, prints the startup banner, sets up observers, and checks overdue loans.</p>
            <pre><code class="language-java">private void startUp() {
    console.line("=== LIBRARY MANAGEMENT SYSTEM ===");
    List&lt;String&gt; messages = service.loadAll();
    for (String message : messages) {
        console.warning(message);
    }
    console.info("Loaded " + service.getAllItemsSortedByTitle().size() + " item(s), "
            + service.getAllMembers().size() + " member(s), "
            + service.getAllLoans().size() + " loan(s).");

    // Two observers registered as lambdas
    service.addObserver(message -&gt; console.notice(message));
    service.addObserver(message -&gt; notificationLog.add(message));

    if (service.checkOverdueLoans() == 0) {
        console.info("No overdue loans. Everything is on time.");
    }
}</code></pre>
            <ul>
               <li><code>console.line(...)</code> prints the program title.</li>
               <li><code>service.loadAll()</code> reads the data files and reports problems.</li>
               <li><code>service.addObserver(...)</code> registers two observers using lambdas (see Chapter 7).</li>
               <li><code>service.checkOverdueLoans()</code> looks at all open loans and notifies observers about any overdue ones.</li>
            </ul>
            <p>The two observers are:</p>
            <ol>
               <li><code>message -&gt; console.notice(message)</code> &mdash; prints each notice right away.</li>
               <li><code>message -&gt; notificationLog.add(message)</code> &mdash; remembers the notice for menu option 11.</li>
            </ol>
            <p>This is the <strong>Observer pattern</strong> in action (Chapter 10).</p>
          `,
        },
        {
          title: "The mainMenuLoop method",
          content: `
            <p>The <code>mainMenuLoop</code> method shows the menu repeatedly until the user chooses exit. It uses a <code>while</code> loop and a <code>switch</code> statement.</p>
            <pre><code class="language-java">private void mainMenuLoop() {
    boolean running = true;
    while (running) {
        printMainMenu();
        int choice = console.readInt("Enter choice [0-11]: ", 0, 11);
        switch (choice) {
            case 1: addItem(); break;
            case 2: searchItems(); break;
            ...
            case 0:
                if (saveBeforeExit()) {
                    running = false;
                }
                break;
            default:
                break;
        }
    }
}</code></pre>
            <ul>
               <li><code>boolean running = true;</code> &mdash; the loop keeps going while true.</li>
               <li><code>console.readInt("Enter choice [0-11]: ", 0, 11)</code> &mdash; reads a number between 0 and 11. If the user types something wrong, this method asks again.</li>
               <li>The <code>switch</code> decides which action to run.</li>
               <li><code>case 0</code> saves before exit.</li>
               <li><code>default: break;</code> is a safety net; <code>readInt</code> should never let an out-of-range value through.</li>
            </ul>
          `,
        },
        {
          title: "Auto-save after every change",
          content: `
            <p>Each action that changes data calls <code>autoSave()</code> after it finishes. This is what makes the program save without the user asking.</p>
            <pre><code class="language-java">private void addItem() {
    ...
    try {
        LibraryItem item = LibraryFactory.createItem(type, id, title, detail1, detail2);
        service.addItem(item);
        console.success(...);
        autoSave();   // save after the change
    } catch (LibraryRuleException | IllegalArgumentException e) {
        console.error(e.getMessage());
    }
}</code></pre>
            <p>Other actions that auto-save: <code>registerMember</code>, <code>borrowItem</code>, <code>returnItem</code>.</p>
            <p>If saving fails, the program shows a warning, not a crash:</p>
            <pre><code class="language-java">private void autoSave() {
    try {
        service.saveAll();
        console.info("Data saved automatically.");
    } catch (IOException e) {
        console.warning("Could not save the data: " + e.getMessage());
    }
}</code></pre>
          `,
        },
        {
          title: "Cancelling (0 = cancel)",
          content: `
            <p>Every sub-menu lets the user cancel by typing <code>0</code>. The method <code>cancelIfRequested</code> checks for this.</p>
            <pre><code class="language-java">private boolean cancelIfRequested(String value) {
    boolean cancel = (value == null);
    if (cancel) {
        cancelled();
    }
    return cancel;
}</code></pre>
            <p>In <code>addItem</code>:</p>
            <pre><code class="language-java">String id = console.readTextOrCancel("Item ID (0 = cancel): ");
if (cancelIfRequested(id)) {
    return;
}</code></pre>
            <p>When the user types <code>0</code>, <code>readTextOrCancel</code> returns <code>null</code>, and the action stops. The message <em>Cancelled. Returning to the main menu.</em> is shown.</p>
          `,
        },
        {
          title: "Printing tables with polymorphism",
          content: `
            <p>The menu shows items in a table. It uses polymorphism: <code>printItemTable</code> receives a <code>List&lt;LibraryItem&gt;</code>, which can contain both <code>Book</code> and <code>Magazine</code> objects.</p>
            <pre><code class="language-java">for (LibraryItem item : items) {
    console.printf("%-8s %-9s %-30s %-40s %-9s%n",
            item.getItemId(),
            item.getItemType(),
            ConsoleHelper.cut(item.getTitle(), 30),
            ConsoleHelper.cut(item.getDetails(), 40),
            item.isAvailable() ? "Available" : "Borrowed");
}</code></pre>
            <p><code>item.getItemType()</code> and <code>item.getDetails()</code> run the version from the actual object (Book or Magazine). This is <strong>polymorphism</strong>.</p>
          `,
        },
        {
          title: "Menu operations summary",
          content: `
            <p>Here is what each menu number does:</p>
            <table class="table-card">
               <thead>
                 <tr><th>Number</th><th>Method</th><th>What it does</th></tr>
               </thead>
               <tbody>
                 <tr><td>1</td><td>addItem</td><td>Adds a book or magazine.</td></tr>
                 <tr><td>2</td><td>searchItems</td><td>Search items by keyword.</td></tr>
                 <tr><td>3</td><td>printItemTable</td><td>Lists all items.</td></tr>
                 <tr><td>4</td><td>registerMember</td><td>Registers a student or faculty.</td></tr>
                 <tr><td>5</td><td>printMemberTable</td><td>Lists all members.</td></tr>
                 <tr><td>6</td><td>borrowItem</td><td>Creates a loan.</td></tr>
                 <tr><td>7</td><td>returnItem</td><td>Returns an item and calculates fines.</td></tr>
                 <tr><td>8</td><td>viewAllLoans</td><td>Shows every loan.</td></tr>
                 <tr><td>9</td><td>viewOverdueLoans</td><td>Shows overdue loans and fines.</td></tr>
                 <tr><td>10</td><td>viewFines</td><td>Shows loans that have fines.</td></tr>
                 <tr><td>11</td><td>viewNotifications</td><td>Shows notices from this session.</td></tr>
                 <tr><td>0</td><td>saveBeforeExit</td><td>Saves data and exits.</td></tr>
               </tbody>
            </table>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "Can MenuController decide whether a borrow is allowed?", a: "No. That is the job of LibraryService. MenuController only asks the service." },
        { q: "What happens after every data-changing action?", a: "autoSave() is called, which saves the data files." },
        { q: "How does the user cancel an action in a sub-menu?", a: "By typing 0, which makes the action return to the main menu." },
      ],
    },
    {
      id: "libraryitem",
      name: "LibraryItem.java",
      package: "model",
      path: "src/model/LibraryItem.java",
      description: "The abstract parent class of everything the library can lend. It holds the shared data of items.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> LibraryItem.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Define the common data and rules for all library items.</li>
           <li><strong>Why it exists:</strong> Books and magazines share fields like ID, title, and availability. This avoids duplicate code.</li>
           <li><strong>How it connects:</strong> Book and Magazine extend this class and must provide their own versions of getItemType(), getDetails(), and toFileLine().</li>
           <li><strong>Where it fits:</strong> It is the base of the inheritance tree for items.</li>
        </ul>
      `,
      sections: [
        {
          title: "The fields",
          content: `
            <p>These are the shared fields of every item.</p>
            <pre><code class="language-java">private final String itemId;
private String title;
private boolean available;</code></pre>
            <ul>
               <li><code>itemId</code> &mdash; cannot change after it is set (final). It is the unique ID of the item.</li>
               <li><code>title</code> &mdash; the item title. Can be changed.</li>
               <li><code>available</code> &mdash; true means on the shelf, false means borrowed.</li>
            </ul>
            <p>Notice that <code>available</code> is not <code>final</code>. It changes when the item is borrowed or returned.</p>
          `,
        },
        {
          title: "The constructor",
          content: `
            <p>The constructor sets the item up. It validates the ID and title, trims the ID, and sets the title.</p>
            <pre><code class="language-java">public LibraryItem(String itemId, String title) {
    if (itemId == null || itemId.isBlank()) {
        throw new IllegalArgumentException("Item ID cannot be empty.");
    }
    this.itemId = itemId.trim().toUpperCase();
    setTitle(title);
    this.available = true;
}</code></pre>
            <ul>
               <li><code>if (itemId == null || itemId.isBlank())</code> &mdash; checks the ID is not empty. <code>isBlank()</code> returns true if the text is null, empty, or only spaces.</li>
               <li><code>itemId.trim().toUpperCase()</code> &mdash; removes spaces and converts to upper case, so "b001" becomes "B001".</li>
               <li><code>setTitle(title)</code> &mdash; validates and trims the title.</li>
               <li><code>this.available = true;</code> &mdash; a new item starts on the shelf.</li>
            </ul>
            <p>The <code>this</code> keyword refers to the current object. <code>this.itemId</code> is the field, <code>itemId</code> is the parameter.</p>
          `,
        },
        {
          title: "The abstract methods",
          content: `
            <p>These methods have no body. The child classes must provide them.</p>
            <pre><code class="language-java">public abstract String getItemType();
public abstract String getDetails();
public abstract String toFileLine();</code></pre>
            <ul>
               <li><code>getItemType()</code> &mdash; returns "Book" or "Magazine".</li>
               <li><code>getDetails()</code> &mdash; returns a short description of the item's details.</li>
               <li><code>toFileLine()</code> &mdash; returns one line of text for the data file.</li>
            </ul>
            <p>Because these are abstract, the <code>LibraryItem</code> class cannot be made into an object. Only the children (Book, Magazine) can be made.</p>
          `,
        },
        {
          title: "The isAvailable / markBorrowed / markReturned methods",
          content: `
            <p>These control the availability of the item.</p>
            <pre><code class="language-java">public boolean isAvailable() {
    return available;
}

public void markBorrowed() {
    this.available = false;
}

public void markReturned() {
    this.available = true;
}</code></pre>
            <ul>
               <li><code>isAvailable()</code> &mdash; returns the current state.</li>
               <li><code>markBorrowed()</code> &mdash; sets availability to false.</li>
               <li><code>markReturned()</code> &mdash; sets availability to true.</li>
            </ul>
            <p>These are called by <code>LibraryService</code> when borrowing or returning.</p>
          `,
        },
        {
          title: "The getters and setters",
          content: `
            <p>The class provides getters for the fields and a setter for the title.</p>
            <pre><code class="language-java">public String getItemId() {
    return itemId;
}

public String getTitle() {
    return title;
}

public void setTitle(String title) {
    if (title == null || title.isBlank()) {
        throw new IllegalArgumentException("Title cannot be empty.");
    }
    this.title = title.trim();
}</code></pre>
            <ul>
               <li><code>getItemId()</code> &mdash; returns the unique ID.</li>
               <li><code>getTitle()</code> &mdash; returns the title.</li>
               <li><code>setTitle()</code> &mdash; checks the title is not empty, then trims it.</li>
            </ul>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "Can you create an object of LibraryItem directly?", a: "No. It is abstract, so it can only be used as a parent type." },
        { q: "What does the toFileLine() method do?", a: "It returns one text line for the data file, with the item's data joined by pipes." },
        { q: "What does 'final' mean on itemId?", a: "It means the value can never change after it is set." },
      ],
    },
    {
      id: "book",
      name: "Book.java",
      package: "model",
      path: "src/model/Book.java",
      description: "A concrete item for a book. It extends LibraryItem and adds author and ISBN.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Book.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Represent a book item in the library.</li>
           <li><strong>Why it exists:</strong> Books have details that magazines do not (author and ISBN).</li>
           <li><strong>How it connects:</strong> Created by LibraryFactory, added to the item repository, displayed by the menu.</li>
           <li><strong>Where it fits:</strong> A child of LibraryItem.</li>
        </ul>
      `,
      sections: [
        {
          title: "The fields",
          content: `
            <p>A book adds two fields:</p>
            <pre><code class="language-java">private String author;
private String isbn;</code></pre>
            <p>These are not final. They are set in the constructor and can be changed with setters (though in our program they are not changed after creation).</p>
          `,
        },
        {
          title: "The constructor",
          content: `
            <pre><code class="language-java">public Book(String itemId, String title, String author, String isbn) {
    super(itemId, title);
    setAuthor(author);
    setIsbn(isbn);
}</code></pre>
            <ul>
               <li><code>super(itemId, title);</code> &mdash; calls the parent class (LibraryItem) constructor first. This sets the ID and title.</li>
               <li><code>setAuthor(author);</code> &mdash; validates and sets the author.</li>
               <li><code>setIsbn(isbn);</code> &mdash; validates and sets the ISBN.</li>
            </ul>
            <p>The parent <code>LibraryItem</code> constructor already checks the ID and title. The child constructor then checks the book-specific details.</p>
          `,
        },
        {
          title: "The getters and setters",
          content: `
            <pre><code class="language-java">public String getAuthor() {
    return author;
}

public void setAuthor(String author) {
    if (author == null || author.isBlank()) {
        throw new IllegalArgumentException("Author cannot be empty.");
    }
    this.author = author.trim();
}

public String getIsbn() {
    return isbn;
}

public void setIsbn(String isbn) {
    if (isbn == null || isbn.isBlank()) {
        throw new IllegalArgumentException("ISBN cannot be empty.");
    }
    this.isbn = isbn.trim();
}</code></pre>
            <p>The setters check that the value is not empty or only spaces. This is <strong>encapsulation</strong>: the data is protected.</p>
          `,
        },
        {
          title: "The overridden methods",
          content: `
            <pre><code class="language-java">@Override
public String getItemType() {
    return "Book";
}

@Override
public String getDetails() {
    return "by " + author + " (ISBN " + isbn + ")";
}

@Override
public String toFileLine() {
    return "BOOK|" + getItemId() + "|" + getTitle() + "|" + author + "|" + isbn;
}</code></pre>
            <ul>
               <li><code>getItemType()</code> &mdash; returns "Book".</li>
               <li><code>getDetails()</code> &mdash; returns "by Author (ISBN 12345)".</li>
               <li><code>toFileLine()</code> &mdash; returns <code>"BOOK|ID|Title|Author|ISBN"</code>. This is one line for the file.</li>
            </ul>
            <p>The <code>@Override</code> annotation tells the compiler we are replacing a parent method.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What does 'extends' mean in 'class Book extends LibraryItem'?", a: "Book is a child of LibraryItem. It inherits the shared fields and methods." },
        { q: "Why do Book and Magazine both exist?", a: "They share the same base data (ID, title, availability) but have different extra details (author/ISBN vs. issue/publisher)." },
        { q: "What does toFileLine() return for a book?", a: "A line like \"BOOK|B001|Clean Code|Robert Martin|9780132350884\"." },
      ],
    },
    {
      id: "magazine",
      name: "Magazine.java",
      package: "model",
      path: "src/model/Magazine.java",
      description: "A concrete item for a magazine. It extends LibraryItem and adds issue and publisher.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Magazine.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Represent a magazine item in the library.</li>
           <li><strong>Why it exists:</strong> Magazines have details that books do not (issue and publisher).</li>
           <li><strong>How it connects:</strong> Created by LibraryFactory, added to the item repository, displayed by the menu.</li>
           <li><strong>Where it fits:</strong> A child of LibraryItem.</li>
        </ul>
      `,
      sections: [
        {
          title: "The fields",
          content: `
            <p>A magazine adds two fields:</p>
            <pre><code class="language-java">private String issue;
private String publisher;</code></pre>
            <p>The <code>issue</code> might be <code>"Issue 12"</code> or <code>"March 2026"</code>. The <code>publisher</code> is the company that published it.</p>
          `,
        },
        {
          title: "The constructor",
          content: `
            <pre><code class="language-java">public Magazine(String itemId, String title, String issue, String publisher) {
    super(itemId, title);
    setIssue(issue);
    setPublisher(publisher);
}</code></pre>
            <ul>
               <li><code>super(itemId, title);</code> &mdash; calls the parent constructor to set the ID and title.</li>
               <li><code>setIssue(issue);</code> &mdash; validates and sets the issue.</li>
               <li><code>setPublisher(publisher);</code> &mdash; validates and sets the publisher.</li>
            </ul>
          `,
        },
        {
          title: "The getters and setters",
          content: `
            <pre><code class="language-java">public String getIssue() {
    return issue;
}

public void setIssue(String issue) {
    if (issue == null || issue.isBlank()) {
        throw new IllegalArgumentException("Issue cannot be empty.");
    }
    this.issue = issue.trim();
}

public String getPublisher() {
    return publisher;
}

public void setPublisher(String publisher) {
    if (publisher == null || publisher.isBlank()) {
        throw new IllegalArgumentException("Publisher cannot be empty.");
    }
    this.publisher = publisher.trim();
}</code></pre>
            <p>Both setters validate that the value is not empty.</p>
          `,
        },
        {
          title: "The overridden methods",
          content: `
            <pre><code class="language-java">@Override
public String getItemType() {
    return "Magazine";
}

@Override
public String getDetails() {
    return issue + ", " + publisher;
}

@Override
public String toFileLine() {
    return "MAGAZINE|" + getItemId() + "|" + getTitle() + "|" + issue + "|" + publisher;
}</code></pre>
            <ul>
               <li><code>getItemType()</code> &mdash; returns "Magazine".</li>
               <li><code>getDetails()</code> &mdash; returns "Issue 12, NatGeo Society".</li>
               <li><code>toFileLine()</code> &mdash; returns <code>"MAGAZINE|ID|Title|Issue|Publisher"</code>.</li>
            </ul>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What is the difference between Book and Magazine?", a: "Book has author and ISBN. Magazine has issue and publisher." },
        { q: "What does getDetails() return for a magazine?", a: "A string like \"Issue 12, NatGeo Society\"." },
      ],
    },
    {
      id: "member",
      name: "Member.java",
      package: "model",
      path: "src/model/Member.java",
      description: "A member of the library. It has a strategy object that defines borrowing rules.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Member.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Represent a library member (student or faculty).</li>
           <li><strong>Why it exists:</strong> Members borrow items and receive fines. Each member has rules.</li>
           <li><strong>How it connects:</strong> Created by LibraryFactory, added to the member repository, used by the service.</li>
           <li><strong>Where it fits:</strong> A standalone class that uses composition with a BorrowingPolicy.</li>
        </ul>
      `,
      sections: [
        {
          title: "The fields",
          content: `
            <pre><code class="language-java">private final String memberId;
private String name;
private final BorrowingPolicy policy;</code></pre>
            <ul>
               <li><code>memberId</code> &mdash; the unique member ID. Final.</li>
               <li><code>name</code> &mdash; the member's name.</li>
               <li><code>policy</code> &mdash; the borrowing rules (a Strategy object). Final because the member is born with a policy it keeps for life.</li>
            </ul>
            <p>The comment says it clearly: <em>A member HAS-A BorrowingPolicy (composition).</em></p>
          `,
        },
        {
          title: "The constructor",
          content: `
            <pre><code class="language-java">public Member(String memberId, String name, BorrowingPolicy policy) {
    if (memberId == null || memberId.isBlank()) {
        throw new IllegalArgumentException("Member ID cannot be empty.");
    }
    if (policy == null) {
        throw new IllegalArgumentException("A member must have a borrowing policy.");
    }
    this.memberId = memberId.trim().toUpperCase();
    this.policy = policy;
    setName(name);
}</code></pre>
            <ul>
               <li>It checks that the ID and policy are not empty/null. This is <strong>input validation</strong>.</li>
               <li>It sets the fields and trims the name.</li>
            </ul>
            <p>The <code>policy</code> is given by the factory. For students it is a <code>StudentPolicy</code>, for faculty a <code>FacultyPolicy</code>.</p>
          `,
        },
        {
          title: "The getters",
          content: `
            <pre><code class="language-java">public String getMemberId() {
    return memberId;
}

public String getName() {
    return name;
}

public String getMemberType() {
    return policy.getTypeName();
}

public int getMaxItems() {
    return policy.getMaxItems();
}

public int getLoanDays() {
    return policy.getLoanDays();
}

public double calculateFine(int daysOverdue) {
    return policy.calculateFine(daysOverdue);
}</code></pre>
            <p>Notice that the methods <code>getMemberType()</code>, <code>getMaxItems()</code>, <code>getLoanDays()</code>, and <code>calculateFine()</code> <strong>delegate to the policy</strong>. The Member class does not know the numbers; the policy object does.</p>
            <ul>
               <li><code>getMemberType()</code> &mdash; "Student" or "Faculty".</li>
               <li><code>getMaxItems()</code> &mdash; the most items this member can borrow.</li>
               <li><code>getLoanDays()</code> &mdash; how many days this member can keep an item.</li>
               <li><code>calculateFine()</code> &mdash; works out the fine for a given number of overdue days.</li>
            </ul>
          `,
        },
        {
          title: "The toFileLine method",
          content: `
            <pre><code class="language-java">public String toFileLine() {
    return getMemberType().toUpperCase() + "|" + memberId + "|" + name;
}</code></pre>
            <p>This returns a line like <code>"STUDENT|S001|Ana Cruz"</code>. It is used by the repository to save the member to a file.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What does 'has-a' mean in the class description?", a: "It means the class contains another object. A Member has a BorrowingPolicy." },
        { q: "What is the benefit of putting the rules in a policy class?", a: "We can change rules for one member type without touching the other, and we can add new member types easily." },
        { q: "How does Member know the borrowing rules?", a: "It holds a BorrowingPolicy object and asks it for the rules." },
      ],
    },
    {
      id: "loan",
      name: "Loan.java",
      package: "model",
      path: "src/model/Loan.java",
      description: "One borrowing record: who borrowed what, when it was borrowed, due date, and whether it is returned with a fine.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Loan.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Represent one borrowing record.</li>
           <li><strong>Why it exists:</strong> To track who borrowed what, when, and if there is a fine.</li>
           <li><strong>How it connects:</strong> Saved to loans.txt, loaded from it, managed by the loan repository.</li>
           <li><strong>Where it fits:</strong> A model class that stores loan data.</li>
        </ul>
      `,
      sections: [
        {
          title: "The fields",
          content: `
            <pre><code class="language-java">private final String loanId;
private final String itemId;
private final String memberId;
private final LocalDate borrowDate;
private final LocalDate dueDate;
private LocalDate returnDate; // null means "not returned yet"
private double fineAmount;   // 0 means no fine</code></pre>
            <ul>
               <li><code>loanId</code>, <code>itemId</code>, <code>memberId</code> &mdash; IDs of the loan, item, and member.</li>
               <li><code>borrowDate</code> and <code>dueDate</code> &mdash; the dates. Final once set.</li>
               <li><code>returnDate</code> &mdash; nullable. null means the item is still out.</li>
               <li><code>fineAmount</code> &mdash; the fine in PHP. 0.0 means no fine.</li>
            </ul>
            <p>Note: the fields store <strong>IDs</strong>, not the full objects. This keeps saving to a file simple.</p>
          `,
        },
        {
          title: "The constructors",
          content: `
            <p>There are two constructors. The first creates a new open loan. The second creates a loan with every value, used when loading from a file.</p>
            <pre><code class="language-java">public Loan(String loanId, String itemId, String memberId, LocalDate borrowDate, LocalDate dueDate) {
    this(loanId, itemId, memberId, borrowDate, dueDate, null, 0.0);
}

public Loan(String loanId, String itemId, String memberId, LocalDate borrowDate, LocalDate dueDate, LocalDate returnDate, double fineAmount) {
    // validation of all values
    ...
}</code></pre>
            <ul>
               <li>The first constructor calls the second with <code>null</code> return date and <code>0.0</code> fine.</li>
               <li>The second does all the validation.</li>
            </ul>
            <p>Validation includes:</p>
            <ul>
               <li>The loan, item, and member IDs must not be empty.</li>
               <li>The borrow date and due date must not be null.</li>
               <li>The due date cannot be before the borrow date.</li>
               <li>The return date cannot be before the borrow date.</li>
               <li>The fine cannot be negative.</li>
            </ul>
          `,
        },
        {
          title: "Utility methods: isEmpty",
          content: `
            <pre><code class="language-java">private static boolean isEmpty(String text) {
    return text == null || text.isBlank();
}</code></pre>
            <p>A small helper. It checks if a string is null or blank. It is <code>private</code> and <code>static</code>, so it can be called without making an object, and it is not part of the public API.</p>
          `,
        },
        {
          title: "Getters",
          content: `
            <pre><code class="language-java">public String getLoanId() { return loanId; }
public String getItemId() { return itemId; }
public String getMemberId() { return memberId; }
public LocalDate getBorrowDate() { return borrowDate; }
public LocalDate getDueDate() { return dueDate; }
public LocalDate getReturnDate() { return returnDate; }
public double getFineAmount() { return fineAmount; }</code></pre>
            <p>These return the stored values.</p>
          `,
        },
        {
          title: "isReturned and hasFine",
          content: `
            <pre><code class="language-java">public boolean isReturned() {
    return returnDate != null;
}

public boolean hasFine() {
    return fineAmount > 0;
}</code></pre>
            <ul>
               <li><code>isReturned()</code> &mdash; true if the item came back.</li>
               <li><code>hasFine()</code> &mdash; true if the fine is greater than zero.</li>
            </ul>
          `,
        },
        {
          title: "isOverdue",
          content: `
            <pre><code class="language-java">public boolean isOverdue(LocalDate today) {
    return !isReturned() &amp;&amp; today.isAfter(dueDate);
}</code></pre>
            <p>A loan is overdue if:</p>
            <ol>
               <li>The item is not returned yet.</li>
               <li>Today is after the due date.</li>
            </ol>
            <p>If the item is already returned, it cannot be overdue anymore.</p>
          `,
        },
        {
          title: "getDaysOverdue",
          content: `
            <pre><code class="language-java">public int getDaysOverdue(LocalDate today) {
    LocalDate endDate = isReturned() ? returnDate : today;
    long days = ChronoUnit.DAYS.between(dueDate, endDate);
    return days &gt; 0 ? (int) days : 0;
}</code></pre>
            <p>This counts how many days late the item is.</p>
            <ul>
               <li>If the item is returned, the end date is the return date.</li>
               <li>If the item is still out, the end date is today.</li>
               <li><code>ChronoUnit.DAYS.between(dueDate, endDate)</code> counts the days between two dates.</li>
               <li>If the result is positive (late), return it as an int. Otherwise return 0.</li>
            </ul>
            <p>This is an important method for fines.</p>
          `,
        },
        {
          title: "markReturned",
          content: `
            <pre><code class="language-java">public void markReturned(LocalDate date, double fine) {
    if (isReturned()) {
        throw new IllegalStateException("This loan is already returned.");
    }
    if (date == null || date.isBefore(borrowDate)) {
        throw new IllegalArgumentException("The return date is not valid.");
    }
    if (fine &lt; 0) {
        throw new IllegalArgumentException("The fine cannot be negative.");
    }
    this.returnDate = date;
    this.fineAmount = fine;
}</code></pre>
            <p>This closes the loan. It checks that the loan is not already closed, the return date is valid, and the fine is not negative.</p>
          `,
        },
        {
          title: "toFileLine",
          content: `
            <pre><code class="language-java">public String toFileLine() {
    String returnText = (returnDate == null) ? "" : returnDate.toString();
    return loanId + "|" + itemId + "|" + memberId + "|"
            + borrowDate + "|" + dueDate + "|" + returnText + "|" + fineAmount;
}</code></pre>
            <p>This turns the loan into one line of text:</p>
            <p><code>L0001|B001|S001|2026-10-01|2026-10-08|2026-11-14|185.0</code></p>
          `,
        },
        {
          title: "fromFileLine (static factory)",
          content: `
            <pre><code class="language-java">public static Loan fromFileLine(String line) {
    String[] p = line.split("\\|", -1);
    if (p.length != 7) {
        throw new IllegalArgumentException("Loan line must have 7 fields but has " + p.length + ".");
    }
    try {
        LocalDate borrowDate = LocalDate.parse(p[3]);
        LocalDate dueDate = LocalDate.parse(p[4]);
        LocalDate returnDate = p[5].isBlank() ? null : LocalDate.parse(p[5]);
        double fine = Double.parseDouble(p[6]);
        return new Loan(p[0], p[1], p[2], borrowDate, dueDate, returnDate, fine);
    } catch (DateTimeParseException e) {
        throw new IllegalArgumentException("A date is not in the format YYYY-MM-DD.");
    } catch (NumberFormatException e) {
        throw new IllegalArgumentException("The fine is not a valid number.");
    }
}</code></pre>
            <ul>
               <li><code>line.split("\\|", -1)</code> &mdash; splits the line at the pipe. The <code>-1</code> keeps empty fields at the end, so a line with a blank return date still gives 7 fields.</li>
               <li>It reads the 7 fields in order: loanId, itemId, memberId, borrowDate, dueDate, returnDate, fine.</li>
               <li>If a date is blank, it sets returnDate to null.</li>
               <li>It catches parsing errors and throws clear messages.</li>
            </ul>
            <p>This is a <strong>static factory method</strong>: a static method that creates and returns an object.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What does 'null' mean for returnDate?", a: "It means the item has not been returned yet." },
        { q: "How does the class know if a loan is overdue?", a: "isOverdue() checks if it is not returned and today is after the due date." },
        { q: "Why does Loan store IDs instead of full objects?", a: "Because storing full objects would be complex when saving to a file. The service looks up the real objects by ID." },
      ],
    },
    {
      id: "borrowingpolicy",
      name: "BorrowingPolicy.java",
      package: "model",
      path: "src/model/BorrowingPolicy.java",
      description: "The interface for borrowing rules. It defines the contract for StudentPolicy and FacultyPolicy.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> BorrowingPolicy.java</li>
           <li><strong>Package:</strong> model</li>
           <li><strong>Main purpose:</strong> Define the borrowing rule interface.</li>
           <li><strong>Why it exists:</strong> To let the Member use different policy objects (student or faculty).</li>
           <li><strong>How it connects:</strong> Implemented by StudentPolicy and FacultyPolicy. Used by Member.</li>
           <li><strong>Where it fits:</strong> The Strategy pattern (Chapter 10).</li>
        </ul>
      `,
      sections: [
        {
          title: "The interface methods",
          content: `
            <pre><code class="language-java">public interface BorrowingPolicy {
    String getTypeName();
    int getMaxItems();
    int getLoanDays();
    double calculateFine(int daysOverdue);
}</code></pre>
            <ul>
               <li><code>getTypeName()</code> &mdash; returns "Student" or "Faculty".</li>
               <li><code>getMaxItems()</code> &mdash; how many items can be borrowed at once.</li>
               <li><code>getLoanDays()</code> &mdash; how many days an item is kept.</li>
               <li><code>calculateFine()</code> &mdash; how much the fine is for a given number of overdue days.</li>
            </ul>
            <p>Since this is an interface, all four methods have no body. The implementing classes provide the body.</p>
          `,
        },
        {
          title: "The Strategy pattern",
          content: `
            <p>This interface is the <strong>Strategy pattern</strong>. The strategy is the <em>what</em>: the borrowing rules. The member is the <em>context</em>: it uses the strategy.</p>
            <pre><code class="language-java">public class StudentPolicy implements BorrowingPolicy {
    // 3 items, 7 days, PHP 5/day
}
public class FacultyPolicy implements BorrowingPolicy {
    // 10 items, 30 days, PHP 2/day
}</code></pre>
            <p>The Member holds the interface, not the object. This means the menu and service talk about the <em>rules</em>, not about <em>students</em> or <em>faculty</em> directly.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What is an interface?", a: "A contract that classes must follow. A class that implements the interface must provide all the interface methods." },
        { q: "Why is BorrowingPolicy in the model package?", a: "Because the Member class uses it, and the model package holds the core data classes." },
        { q: "What would happen if we add a third member type?", a: "We add a new class that implements BorrowingPolicy, and the factory creates it." },
      ],
    },
    {
      id: "libraryfactory",
      name: "LibraryFactory.java",
      package: "pattern",
      path: "src/pattern/LibraryFactory.java",
      description: "The factory that creates items, members, and objects from file lines.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> LibraryFactory.java</li>
           <li><strong>Package:</strong> pattern</li>
           <li><strong>Main purpose:</strong> Create objects (items, members) and objects from file lines.</li>
           <li><strong>Why it exists:</strong> To centralize object creation so the menu and service do not need to know the class names.</li>
           <li><strong>How it connects:</strong> Used by MenuController and Repository for loading.</li>
           <li><strong>Where it fits:</strong> The Factory pattern (Chapter 10).</li>
        </ul>
      `,
      sections: [
        {
          title: "The private constructor",
          content: `
            <pre><code class="language-java">private LibraryFactory() {
}</code></pre>
            <p>The constructor is private, so no one can create a LibraryFactory object. All methods are static, so we call them with <code>LibraryFactory.createItem(...)</code>. This is a <strong>factory class</strong>.</p>
          `,
        },
        {
          title: "createItem",
          content: `
            <pre><code class="language-java">public static LibraryItem createItem(String type, String id, String title, String detail1, String detail2) {
    switch (type.trim().toUpperCase()) {
        case "BOOK":
            return new Book(id, title, detail1, detail2);
        case "MAGAZINE":
            return new Magazine(id, title, detail1, detail2);
        default:
            throw new IllegalArgumentException("Unknown item type: " + type);
    }
}</code></pre>
            <ul>
               <li>It takes the type string and decides which class to build.</li>
               <li>It uses <code>switch</code> to match <code>"BOOK"</code> or <code>"MAGAZINE"</code>.</li>
               <li>If the type is unknown, it throws an exception.</li>
            </ul>
            <p>The menu calls this to create an item, then passes the item to the service.</p>
          `,
        },
        {
          title: "createMember",
          content: `
            <pre><code class="language-java">public static Member createMember(String type, String id, String name) {
    switch (type.trim().toUpperCase()) {
        case "STUDENT":
            return new Member(id, name, new StudentPolicy());
        case "FACULTY":
            return new Member(id, name, new FacultyPolicy());
        default:
            throw new IllegalArgumentException("Unknown member type: " + type);
    }
}</code></pre>
            <p>For a student, it creates a Member with a StudentPolicy. For a faculty, with a FacultyPolicy. This is where the <strong>Strategy pattern</strong> is used.</p>
          `,
        },
        {
          title: "createItemFromLine and createMemberFromLine",
          content: `
            <pre><code class="language-java">public static LibraryItem createItemFromLine(String line) {
    String[] parts = line.split("\\|", -1);
    if (parts.length != 5) {
        throw new IllegalArgumentException("Item line must have 5 fields but has " + parts.length + ".");
    }
    return createItem(parts[0], parts[1], parts[2], parts[3], parts[4]);
}

public static Member createMemberFromLine(String line) {
    String[] parts = line.split("\\|", -1);
    if (parts.length != 3) {
        throw new IllegalArgumentException("Member line must have 3 fields but has " + parts.length + ".");
    }
    return createMember(parts[0], parts[1], parts[2]);
}</code></pre>
            <p>These turn a file line into an object. The repository calls them when loading the files.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "Why is the constructor of LibraryFactory private?", a: "So no one can create a factory object. We call the static methods directly." },
        { q: "What does createItem return?", a: "A LibraryItem object (either a Book or a Magazine). The caller does not need to know which." },
        { q: "Where is createItemFromLine used?", a: "In the repository when loading the data files." },
      ],
    },
    {
      id: "studentpolicy",
      name: "StudentPolicy.java",
      package: "pattern",
      path: "src/pattern/StudentPolicy.java",
      description: "The borrowing rules for students. One implementation of the BorrowerPolicy interface.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> StudentPolicy.java</li>
           <li><strong>Package:</strong> pattern</li>
           <li><strong>Main purpose:</strong> Define the borrowing rules for students.</li>
           <li><strong>Why it exists:</strong> To make the rules (3 items, 7 days, PHP 5/day) changeable without changing the Member class.</li>
           <li><strong>How it connects:</strong> Created by LibraryFactory for student members.</li>
           <li><strong>Where it fits:</strong> The Strategy pattern.</li>
        </ul>
      `,
      sections: [
        {
          title: "The constants",
          content: `
            <pre><code class="language-java">private static final int MAX_ITEMS = 3;
private static final int LOAN_DAYS = 7;
private static final double FINE_PER_DAY = 5.00;</code></pre>
            <ul>
               <li><code>private static final</code> &mdash; these values never change. <code>static</code> means the class holds them. <code>final</code> means no instance can change them.</li>
               <li>The name convention is <strong>UPPER_SNAKE_CASE</strong>.</li>
            </ul>
          `,
        },
        {
          title: "The methods",
          content: `
            <pre><code class="language-java">@Override
public String getTypeName() {
    return "Student";
}

@Override
public int getMaxItems() {
    return MAX_ITEMS;
}

@Override
public int getLoanDays() {
    return LOAN_DAYS;
}

@Override
public double calculateFine(int daysOverdue) {
    if (daysOverdue &lt;= 0) {
        return 0.0;
    }
    return daysOverdue * FINE_PER_DAY;
}</code></pre>
            <p>Each method implements the interface. The <code>@Override</code> annotation marks them as replacements for the parent interface methods.</p>
            <p>For fines: if the item is not late, return 0. Otherwise multiply the days late by PHP 5.00.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "How many items can a student borrow at once?", a: "3." },
        { q: "How many days can a student keep an item?", a: "7 days." },
        { q: "What is the fine for 3 days late?", a: "PHP 15.00 (3 x PHP 5.00)." },
      ],
    },
    {
      id: "facultypolicy",
      name: "FacultyPolicy.java",
      package: "pattern",
      path: "src/pattern/FacultyPolicy.java",
      description: "The borrowing rules for faculty members.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> FacultyPolicy.java</li>
           <li><strong>Package:</strong> pattern</li>
           <li><strong>Main purpose:</strong> Define the borrowing rules for faculty.</li>
           <li><strong>Why it exists:</strong> To give faculty members better borrowing limits.</li>
           <li><strong>How it connects:</strong> Created by LibraryFactory for faculty members.</li>
           <li><strong>Where it fits:</strong> The Strategy pattern.</li>
        </ul>
      `,
      sections: [
        {
          title: "The constants",
          content: `
            <pre><code class="language-java">private static final int MAX_ITEMS = 10;
private static final int LOAN_DAYS = 30;
private static final double FINE_PER_DAY = 2.00;</code></pre>
            <p>Faculty get 10 items, 30 days, and PHP 2/day fine.</p>
          `,
        },
        {
          title: "The methods",
          content: `
            <pre><code class="language-java">@Override
public String getTypeName() {
    return "Faculty";
}

@Override
public int getMaxItems() {
    return MAX_ITEMS;
}

@Override
public int getLoanDays() {
    return LOAN_DAYS;
}

@Override
public double calculateFine(int daysOverdue) {
    if (daysOverdue &lt;= 0) {
        return 0.0;
    }
    return daysOverdue * FINE_PER_DAY;
}</code></pre>
            <p>The same shape as StudentPolicy, with different numbers.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "How many items can a faculty borrow at once?", a: "10." },
        { q: "How many days can a faculty keep an item?", a: "30 days." },
        { q: "What is the fine for 5 days late?", a: "PHP 10.00 (5 x PHP 2.00)." },
      ],
    },
    {
      id: "libraryservice",
      name: "LibraryService.java",
      package: "service",
      path: "src/service/LibraryService.java",
      description: "The brain of the library. It holds all records and enforces rules.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> LibraryService.java</li>
           <li><strong>Package:</strong> service</li>
           <li><strong>Main purpose:</strong> Hold all records and enforce the business rules.</li>
           <li><strong>Why it exists:</strong> The menu should not contain the logic of the library. The service is the brain.</li>
           <li><strong>How it connects:</strong> Used by the menu. Holds three repositories. Notifies observers.</li>
           <li><strong>Where it fits:</strong> The central business-logic class.</li>
        </ul>
      `,
      sections: [
        {
          title: "The three repositories",
          content: `
            <pre><code class="language-java">private final Repository&lt;LibraryItem&gt; itemRepo = new Repository&lt;&gt;("Item", LibraryItem::getItemId);
private final Repository&lt;Member&gt; memberRepo = new Repository&lt;&gt;("Member", Member::getMemberId);
private final Repository&lt;Loan&gt; loanRepo = new Repository&lt;&gt;("Loan", Loan::getLoanId);</code></pre>
            <p>Three repositories, all generic. They use the <strong>Method Reference</strong> syntax (<code>Class::method</code>) to pass the ID getter.</p>
            <ul>
               <li><code>LibraryItem::getItemId</code> &mdash; get the ID of an item.</li>
               <li><code>Member::getMemberId</code> &mdash; get the ID of a member.</li>
               <li><code>Loan::getLoanId</code> &mdash; get the ID of a loan.</li>
            </ul>
            <p>The repository stores the records in memory. The service is the one with the rules.</p>
          `,
        },
        {
          title: "The observers (Observer pattern)",
          content: `
            <pre><code class="language-java">private final List&lt;Consumer&lt;String&gt;&gt; observers = new ArrayList&lt;&gt;();

public void addObserver(Consumer&lt;String&gt; observer) {
    observers.add(observer);
}

private void notifyObservers(String message) {
    for (Consumer&lt;String&gt; observer : observers) {
        observer.accept(message);
    }
}</code></pre>
            <p>The service keeps a list of observers. When something happens (like an overdue loan), it notifies them.</p>
            <p>The menu adds two observers as lambdas:</p>
            <ol>
               <li><code>message -&gt; console.notice(message)</code> &mdash; print the notice.</li>
               <li><code>message -&gt; notificationLog.add(message)</code> &mdash; remember the notice.</li>
            </ol>
          `,
        },
        {
          title: "checkOverdueLoans",
          content: `
            <pre><code class="language-java">public int checkOverdueLoans() {
    LocalDate today = LocalDate.now();
    List&lt;Loan&gt; overdueLoans = getOverdueLoans();
    for (Loan loan : overdueLoans) {
        notifyObservers("OVERDUE: '" + getItemTitle(loan.getItemId()) + "' (" + loan.getItemId()
                + ") borrowed by " + getMemberName(loan.getMemberId())
                + " was due on " + loan.getDueDate()
                + " (" + loan.getDaysOverdue(today) + " day(s) late, fine so far " + formatMoney(getFineSoFar(loan)) + ").");
    }
    return overdueLoans.size();
}</code></pre>
            <p>This looks at all loans, finds the overdue ones, and tells all observers about them. It returns the count.</p>
          `,
        },
        {
          title: "addItem and searchItems",
          content: `
            <pre><code class="language-java">public void addItem(LibraryItem item) throws LibraryRuleException {
    itemRepo.add(item);
}

public List&lt;LibraryItem&gt; searchItems(String keyword) {
    String key = keyword.trim().toLowerCase();
    return itemRepo.findAll(item -&gt;
            item.getItemId().toLowerCase().contains(key)
                    || item.getTitle().toLowerCase().contains(key)
                    || item.getItemType().toLowerCase().contains(key)
                    || item.getDetails().toLowerCase().contains(key));
}</code></pre>
            <p><code>addItem</code> simply delegates to the item repository.</p>
            <p><code>searchItems</code> uses a <code>Predicate</code> lambda to find matching items. It checks the ID, title, type, and details.</p>
          `,
        },
        {
          title: "getAllItemsSortedByTitle",
          content: `
            <pre><code class="language-java">public List&lt;LibraryItem&gt; getAllItemsSortedByTitle() {
    List&lt;LibraryItem&gt; sorted = itemRepo.getAll();
    sorted.sort((first, second) -&gt; first.getTitle().compareToIgnoreCase(second.getTitle()));
    return sorted;
}</code></pre>
            <p>It gets all items, sorts them by title ignoring case, and returns the sorted list.</p>
            <p>The lambda <code>(first, second) -&gt; first.getTitle().compareToIgnoreCase(second.getTitle())</code> tells the list how to sort.</p>
          `,
        },
        {
          title: "getItemTitle and getMemberName",
          content: `
            <pre><code class="language-java">public String getItemTitle(String itemId) {
    LibraryItem item = itemRepo.findById(itemId);
    return (item == null) ? itemId : item.getTitle();
}

public String getMemberName(String memberId) {
    Member member = memberRepo.findById(memberId);
    return (member == null) ? memberId : member.getName();
}</code></pre>
            <p>These look up a record by ID. If the record is not found, they return the ID itself. This is a safety net: if the record is missing, the user still sees the ID.</p>
          `,
        },
        {
          title: "borrowItem",
          content: `
            <pre><code class="language-java">public Loan borrowItem(String itemId, String memberId)
            throws RecordNotFoundException, LibraryRuleException {
    LibraryItem item = itemRepo.getById(itemId);
    Member member = memberRepo.getById(memberId);

    if (!item.isAvailable()) {
        throw new LibraryRuleException("'" + item.getTitle() + "' is already borrowed.");
    }
    int openLoans = countOpenLoans(member.getMemberId());
    if (openLoans &gt;= member.getMaxItems()) {
        throw new LibraryRuleException(member.getName() + " already has " + openLoans
                + " borrowed item(s). The limit for a " + member.getMemberType().toLowerCase()
                + " is " + member.getMaxItems() + ".");
    }

    LocalDate today = LocalDate.now();
    Loan loan = new Loan(nextLoanId(), item.getItemId(), member.getMemberId(),
            today, today.plusDays(member.getLoanDays()));
    loanRepo.add(loan);
    item.markBorrowed();
    return loan;
}</code></pre>
            <p>This is the core borrowing logic:</p>
            <ol>
               <li>Find the item and the member.</li>
               <li>Check the item is available.</li>
               <li>Check the member has not reached their limit.</li>
               <li>Create a loan with today's date and the due date (today + loan days).</li>
               <li>Add the loan to the loan repository.</li>
               <li>Mark the item as borrowed.</li>
            </ol>
            <p>If any check fails, an exception is thrown. The menu catches it and shows the message.</p>
          `,
        },
        {
          title: "returnItem",
          content: `
            <pre><code class="language-java">public Loan returnItem(String itemId) throws RecordNotFoundException {
    LibraryItem item = itemRepo.getById(itemId);
    Loan loan = findOpenLoanForItem(item.getItemId());
    if (loan == null) {
        throw new RecordNotFoundException("'" + item.getTitle()
                + "' is not currently borrowed, so it cannot be returned.");
    }

    LocalDate today = LocalDate.now();
    Member member = memberRepo.getById(loan.getMemberId());
    int daysLate = loan.getDaysOverdue(today);
    double fine = member.calculateFine(daysLate);

    loan.markReturned(today, fine);
    item.markReturned();

    if (fine &gt; 0) {
        notifyObservers("LATE RETURN: '" + item.getTitle() + "' was returned " + daysLate
                + " day(s) late by " + member.getName() + ". Fine: " + formatMoney(fine) + ".");
    }
    return loan;
}</code></pre>
            <p>The return logic:</p>
            <ol>
               <li>Find the item and its open loan.</li>
               <li>Calculate the days late.</li>
               <li>Calculate the fine using the member's policy.</li>
               <li>Mark the loan as returned.</li>
               <li>Mark the item as returned.</li>
               <li>If the fine is greater than zero, notify the observers with a notice about the late return.</li>
            </ol>
          `,
        },
        {
          title: "countOpenLoans and findOpenLoanForItem",
          content: `
            <pre><code class="language-java">private int countOpenLoans(String memberId) {
    return loanRepo.findAll(loan -&gt; loan.getMemberId().equals(memberId) &amp;&amp; !loan.isReturned()).size();
}

private Loan findOpenLoanForItem(String itemId) {
    for (Loan loan : loanRepo.getAll()) {
        if (loan.getItemId().equals(itemId) &amp;&amp; !loan.isReturned()) {
            return loan;
        }
    }
    return null;
}</code></pre>
            <p><code>countOpenLoans</code> counts how many loans a member has that are not returned. It uses a <code>Predicate</code> lambda.</p>
            <p><code>findOpenLoanForItem</code> loops through all loans and returns the open one for a given item, or null if none.</p>
          `,
        },
        {
          title: "nextLoanId",
          content: `
            <pre><code class="language-java">private String nextLoanId() {
    int number = loanRepo.size() + 1;
    String id = String.format("L%04d", number);
    while (loanRepo.exists(id)) {
        number++;
        id = String.format("L%04d", number);
    }
    return id;
}</code></pre>
            <p>This creates a loan ID like L0001, L0002, ... It makes sure the ID is not already used. <code>L%04d</code> means <em>four digits with leading zeros</em> (L0001, L0002, ...).</p>
          `,
        },
        {
          title: "getOverdueLoans, getFineSoFar, getLoansWithFines",
          content: `
            <pre><code class="language-java">public List&lt;Loan&gt; getOverdueLoans() {
    LocalDate today = LocalDate.now();
    return loanRepo.findAll(loan -&gt; loan.isOverdue(today));
}

public double getFineSoFar(Loan loan) {
    Member member = memberRepo.findById(loan.getMemberId());
    if (member == null) {
        return 0.0;
    }
    return member.calculateFine(loan.getDaysOverdue(LocalDate.now()));
}

public List&lt;Loan&gt; getLoansWithFines() {
    return loanRepo.findAll(loan -&gt; loan.hasFine());
}</code></pre>
            <p>These are helper query methods. <code>getOverdueLoans</code> finds overdue loans. <code>getFineSoFar</code> calculates the fine for an open overdue loan. <code>getLoansWithFines</code> finds loans that have a fine (usually after return).</p>
          `,
        },
        {
          title: "formatMoney",
          content: `
            <pre><code class="language-java">public static String formatMoney(double amount) {
    return String.format(Locale.US, "PHP %.2f", amount);
}</code></pre>
            <p>This formats a number as PHP money, always with two decimal places and a dot as the decimal separator (because <code>Locale.US</code> forces that).</p>
            <p>Example: <code>formatMoney(35.0)</code> returns <code>"PHP 35.00"</code>.</p>
          `,
        },
        {
          title: "saveAll and loadAll",
          content: `
            <pre><code class="language-java">public void saveAll() throws IOException {
    itemRepo.saveToFile(dataFolder + "/items.txt", LibraryItem::toFileLine);
    memberRepo.saveToFile(dataFolder + "/members.txt", Member::toFileLine);
    loanRepo.saveToFile(dataFolder + "/loans.txt", Loan::toFileLine);
}

public List&lt;String&gt; loadAll() {
    List&lt;String&gt; messages = new ArrayList&lt;&gt;();
    messages.addAll(itemRepo.loadFromFile(dataFolder + "/items.txt", LibraryFactory::createItemFromLine));
    messages.addAll(memberRepo.loadFromFile(dataFolder + "/members.txt", LibraryFactory::createMemberFromLine));
    messages.addAll(loanRepo.loadFromFile(dataFolder + "/loans.txt", this::parseLoanLine));
    return messages;
}</code></pre>
            <p><strong>saveAll</strong> saves all three types of records. It uses method references (<code>LibraryItem::toFileLine</code>).</p>
            <p><strong>loadAll</strong> loads all three types. It uses:</p>
            <ul>
               <li><code>LibraryFactory::createItemFromLine</code> &mdash; create an item from a line.</li>
               <li><code>LibraryFactory::createMemberFromLine</code> &mdash; create a member from a line.</li>
               <li><code>this::parseLoanLine</code> &mdash; a method reference to the private parseLoanLine method.</li>
            </ul>
            <p>After loading, the items' availability is re-calculated from the open loans:</p>
            <pre><code class="language-java">for (Loan loan : loanRepo.getAll()) {
    if (!loan.isReturned()) {
        itemRepo.findById(loan.getItemId()).markBorrowed();
    }
}</code></pre>
            <p>If an item has an open (not returned) loan, it is marked as not available.</p>
          `,
        },
        {
          title: "parseLoanLine",
          content: `
            <pre><code class="language-java">private Loan parseLoanLine(String line) {
    Loan loan = Loan.fromFileLine(line);
    if (!itemRepo.exists(loan.getItemId())) {
        throw new IllegalArgumentException("unknown item ID " + loan.getItemId());
    }
    if (!memberRepo.exists(loan.getMemberId())) {
        throw new IllegalArgumentException("unknown member ID " + loan.getMemberId());
    }
    if (!loan.isReturned() &amp;&amp; findOpenLoanForItem(loan.getItemId()) != null) {
        throw new IllegalArgumentException("item " + loan.getItemId() + " already has an open loan");
    }
    return loan;
}</code></pre>
            <p>This checks that a loan's item and member really exist. It also checks that an item does not have two open loans. Bad lines are skipped and reported.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What does the service do when a loan becomes overdue?", a: "It notifies all observers with an OVERDUE message. The menu's first observer prints it to the screen." },
        { q: "Can the menu decide whether a borrow is allowed?", a: "No. The service checks the rules. The menu only asks the service." },
        { q: "What is the difference between saveAll and loadAll?", a: "saveAll writes the data files. loadAll reads the data files." },
      ],
    },
    {
      id: "repository",
      name: "Repository.java",
      package: "storage",
      path: "src/storage/Repository.java",
      description: "The generic repository. Stores records and saves/loads them to text files.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> Repository.java</li>
           <li><strong>Package:</strong> storage</li>
           <li><strong>Main purpose:</strong> Store records of any type and save/load them to and from text files.</li>
           <li><strong>Why it exists:</strong> To centralize storage logic so the service does not need to know about files.</li>
           <li><strong>How it connects:</strong> Used by the service for items, members, and loans.</li>
           <li><strong>Where it fits:</strong> The generic class that underlies all storage.</li>
        </ul>
      `,
      sections: [
        {
          title: "The generic type T",
          content: `
            <p><code>Repository&lt;T&gt;</code> uses a generic type. <code>T</code> is a placeholder for the real type.</p>
            <pre><code class="language-java">public class Repository&lt;T&gt; {
    private final String recordName;
    private final Function&lt;T, String&gt; idGetter;
    private final ArrayList&lt;T&gt; records = new ArrayList&lt;&gt;();
    private final HashMap&lt;String, T&gt; index = new HashMap&lt;&gt;();</code></pre>
            <p>When we create <code>Repository&lt;LibraryItem&gt;</code>, the compiler replaces <code>T</code> with <code>LibraryItem</code> in the code.</p>
          `,
        },
        {
          title: "The two collections",
          content: `
            <pre><code class="language-java">private final ArrayList&lt;T&gt; records = new ArrayList&lt;&gt;();
private final HashMap&lt;String, T&gt; index = new HashMap&lt;&gt;();</code></pre>
            <ul>
               <li><code>records</code> &mdash; an ArrayList that keeps the records in the order they were added.</li>
               <li><code>index</code> &mdash; a HashMap that finds a record by its ID.</li>
            </ul>
            <p>The ArrayList is good for listing. The HashMap is good for finding by ID.</p>
          `,
        },
        {
          title: "add",
          content: `
            <pre><code class="language-java">public void add(T record) throws LibraryRuleException {
    String id = normalize(idGetter.apply(record));
    if (index.containsKey(id)) {
        throw new LibraryRuleException(recordName + " ID '" + id + "' already exists.");
    }
    records.add(record);
    index.put(id, record);
}</code></pre>
            <p>This adds a record. It first normalizes the ID (trim and upper case), then checks if it already exists. If it does, it throws a <code>LibraryRuleException</code>. Otherwise it adds to both collections.</p>
          `,
        },
        {
          title: "findById and getById",
          content: `
            <pre><code class="language-java">public T findById(String id) {
    return index.get(normalize(id));
}

public T getById(String id) throws RecordNotFoundException {
    T record = findById(id);
    if (record == null) {
        throw new RecordNotFoundException(recordName + " ID '" + normalize(id) + "' was not found.");
    }
    return record;
}</code></pre>
            <ul>
               <li><code>findById</code> returns null if not found.</li>
               <li><code>getById</code> throws an exception if not found. The menu catches <code>getById</code> when borrowing or returning.</li>
            </ul>
          `,
        },
        {
          title: "exists",
          content: `
            <pre><code class="language-java">public boolean exists(String id) {
    return index.containsKey(normalize(id));
}</code></pre>
            <p>Returns true if a record with that ID is already stored.</p>
          `,
        },
        {
          title: "getAll and findAll",
          content: `
            <pre><code class="language-java">public List&lt;T&gt; getAll() {
    return new ArrayList&lt;&gt;(records);
}

public List&lt;T&gt; findAll(Predicate&lt;T&gt; condition) {
    List&lt;T&gt; result = new ArrayList&lt;&gt;();
    for (T record : records) {
        if (condition.test(record)) {
            result.add(record);
        }
    }
    return result;
}</code></pre>
            <ul>
               <li><code>getAll</code> returns a copy of the list, so outside code cannot damage the repository.</li>
               <li><code>findAll</code> takes a <strong>Predicate</strong> (a lambda that returns true or false) and returns a list of records that pass the test.</li>
            </ul>
          `,
        },
        {
          title: "saveToFile",
          content: `
            <pre><code class="language-java">public void saveToFile(String path, Function&lt;T, String&gt; toLine) throws IOException {
    File target = new File(path);
    File folder = target.getParentFile();
    if (folder != null) {
        folder.mkdirs();
    }
    File temp = new File(path + ".tmp");
    try (BufferedWriter writer = new BufferedWriter(new FileWriter(temp))) {
        for (T record : records) {
            writer.write(toLine.apply(record));
            writer.newLine();
        }
    }
    Files.move(temp.toPath(), target.toPath(), StandardCopyOption.REPLACE_EXISTING);
}</code></pre>
            <p>This saves all records to a file, one per line. Key points:</p>
            <ul>
               <li>It creates the folder if it does not exist.</li>
               <li>It writes to a <code>.path.tmp</code> file first.</li>
               <li>Then it moves the temp file to the real file. This protects the old data if the program crashes while saving.</li>
               <li><code>toLine</code> is a <code>Function</code> that turns each record into a line of text.</li>
            </ul>
          `,
        },
        {
          title: "loadFromFile",
          content: `
            <pre><code class="language-java">public List&lt;String&gt; loadFromFile(String path, Function&lt;String, T&gt; fromLine) {
    List&lt;String&gt; messages = new ArrayList&lt;&gt;();
    File file = new File(path);
    if (!file.exists()) {
        return messages;
    }
    try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
        int lineNumber = 0;
        String line = reader.readLine();
        while (line != null) {
            lineNumber++;
            if (!line.isBlank()) {
                try {
                    add(fromLine.apply(line));
                } catch (LibraryRuleException | RuntimeException e) {
                    messages.add("Skipped line " + lineNumber + " of " + path + ": " + e.getMessage());
                }
            }
            line = reader.readLine();
        }
    } catch (IOException e) {
        messages.add("Could not read " + path + ": " + e.getMessage());
    }
    return messages;
}</code></pre>
            <p>This loads records from a file. Key points:</p>
            <ul>
               <li>If the file does not exist, it returns an empty list (start with no data).</li>
               <li>It skips blank lines.</li>
               <li>If a line is bad, it adds a warning and keeps going (never crashes).</li>
               <li><code>fromLine</code> is a <code>Function</code> that turns a line into a record.</li>
            </ul>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "What are the two collections in the repository and why both?", a: "An ArrayList keeps order. A HashMap finds records by ID quickly." },
        { q: "What happens if a data file is missing?", a: "The repository returns an empty list, so the program starts with no records." },
        { q: "Why does save write to a .tmp file first?", a: "To protect the old data: if the program crashes while saving, the real file is not damaged." },
      ],
    },
    {
      id: "consolehelper",
      name: "ConsoleHelper.java",
      package: "util",
      path: "src/util/ConsoleHelper.java",
      description: "The terminal helper. Reads input safely and prints labeled messages.",
      overview: `
        <h3>A. File overview</h3>
        <ul>
           <li><strong>File name:</strong> ConsoleHelper.java</li>
           <li><strong>Package:</strong> util</li>
           <li><strong>Main purpose:</strong> Read and print to the terminal safely.</li>
           <li><strong>Why it exists:</strong> To keep input validation in one place.</li>
           <li><strong>How it connects:</strong> Used by the menu and Main.</li>
           <li><strong>Where it fits:</strong> Utility class.</li>
        </ul>
      `,
      sections: [
        {
          title: "The Scanner",
          content: `
            <pre><code class="language-java">private final Scanner scanner = new Scanner(System.in);</code></pre>
            <p>The ConsoleHelper wraps the Scanner so the rest of the program does not touch it directly.</p>
          `,
        },
        {
          title: "readLine",
          content: `
            <pre><code class="language-java">public String readLine(String prompt) {
    System.out.print(prompt);
    if (!scanner.hasNextLine()) {
        throw new NoSuchElementException("The input has ended.");
    }
    return scanner.nextLine().trim();
}</code></pre>
            <p>Reads one line of text. Trims leading and trailing spaces.</p>
          `,
        },
        {
          title: "readText and readTextOrCancel",
          content: `
            <pre><code class="language-java">public String readText(String prompt) {
    while (true) {
        String text = readLine(prompt);
        if (text.isEmpty()) {
            error("Input cannot be empty. Please try again.");
        } else if (text.contains("|")) {
            error("The '|' character is not allowed. Please try again.");
        } else {
            return text;
        }
    }
}

public String readTextOrCancel(String prompt) {
    String text = readText(prompt);
    return text.equals("0") ? null : text;
}</code></pre>
            <p><code>readText</code> keeps asking until the user types a non-empty value that does not contain <code>|</code>.</p>
            <p><code>readTextOrCancel</code> is a convenience: if the user types <code>0</code>, it returns null, which means cancel.</p>
          `,
        },
        {
          title: "readInt",
          content: `
            <pre><code class="language-java">public int readInt(String prompt, int min, int max) {
    while (true) {
        String text = readLine(prompt);
        if (text.isEmpty()) {
            error("Input cannot be empty. Please try again.");
            continue;
        }
        try {
            int number = Integer.parseInt(text);
            if (number &gt;= min &amp;&amp; number &lt;= max) {
                return number;
            }
            error("Please enter a number from " + min + " to " + max + ".");
        } catch (NumberFormatException e) {
            error("'" + text + "' is not a whole number. Please try again.");
        }
    }
}</code></pre>
            <p>This reads a whole number between min and max. If the user types letters or a number outside the range, it asks again. The <code>continue</code> jumps back to the start of the loop.</p>
          `,
        },
        {
          title: "readYesNo",
          content: `
            <pre><code class="language-java">public boolean readYesNo(String prompt) {
    while (true) {
        String answer = readLine(prompt).toLowerCase();
        if (answer.equals("y") || answer.equals("yes")) {
            return true;
        }
        if (answer.equals("n") || answer.equals("no")) {
            return false;
        }
        error("Please type y or n.");
    }
}</code></pre>
            <p>Reads a yes/no answer and normalizes it.</p>
          `,
        },
        {
          title: "Output methods",
          content: `
            <pre><code class="language-java">public void success(String message) { System.out.println("[SUCCESS] " + message); }
public void error(String message) { System.out.println("[ERROR] " + message); }
public void info(String message) { System.out.println("[INFO] " + message); }
public void warning(String message) { System.out.println("[WARNING] " + message); }
public void notice(String message) { System.out.println("[NOTICE] " + message); }
public void line(String text) { System.out.println(text); }
public void blank() { System.out.println(); }
public void printf(String format, Object... values) { System.out.printf(format, values); }</code></pre>
            <p>Each output method adds a label to the message so the user knows what kind of message it is.</p>
          `,
        },
        {
          title: "cut",
          content: `
            <pre><code class="language-java">public static String cut(String text, int width) {
    if (text.length() &lt;= width) {
        return text;
    }
    return text.substring(0, width - 3) + "...";
}</code></pre>
            <p>Cuts long text so tables stay aligned. If the text is longer than the width, it takes the first part and adds "...".</p>
          `,
        },
        {
          title: "close",
          content: `
            <pre><code class="language-java">@Override
public void close() {
    scanner.close();
}</code></pre>
            <p>Implements <code>AutoCloseable</code> so it can be used in try-with-resources. When the program ends, the Scanner is closed.</p>
          `,
        },
      ],
      knowledgeChecks: [
        { q: "Why does readText reject input containing |?", a: "Because | is used to separate fields in the data files. If a user types |, the saved data would be broken." },
        { q: "What does readInt do if the user types a letter?", a: "It shows an error and asks again." },
        { q: "What is the difference between readText and readTextOrCancel?", a: "readTextOrCancel returns null when the user types 0 (cancel). readText keeps the text." },
      ],
    },
  ],
};

export default codeExplorer;
