// "Learn from scratch" course: walks through the whole Library Management System in order.
const X=s=>'<pre>'+s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))+'</pre>';
const COURSE=[
{t:'1. The big picture',f:'app/Main.java, app/MenuController.java',b:`
<p>Our program is a <b>library</b> you control by typing numbers in the terminal. It keeps track of <b>items</b> (books and magazines), <b>members</b> (students and faculty), <b>staff</b>, and <b>loans</b> (who borrowed what).</p>
<p>The code is split into folders called <b>packages</b>. Each package has one job:</p>
<ul><li><b>app</b> – starts the program and shows the menu (Main, MenuController)</li><li><b>model</b> – the “things” in the library (LibraryItem, Book, Magazine, Member, StudentMember, FacultyMember, Staff, Loan, BorrowingPolicy)</li><li><b>service</b> – the library rules (LibraryService)</li><li><b>pattern</b> – design patterns (policies, LibraryFactory, OverdueObserver)</li><li><b>storage</b> – saving and loading (Repository)</li><li><b>exception</b> – our own error types</li><li><b>util</b> – helper for typing and printing (ConsoleHelper)</li></ul>
<p>Main is very small. It only creates the pieces and starts the menu:</p>`+X(`public static void main(String[] args) {
    String dataFolder = (args.length > 0) ? args[0] : "data";
    try (ConsoleHelper console = new ConsoleHelper()) {
        LibraryService service = new LibraryService(dataFolder);
        MenuController menu = new MenuController(console, service);
        menu.run();
    }
}`)+`<p><b>Line by line:</b> the first line picks the data folder (“data” unless you type another). <code>try (...)</code> is a <b>try-with-resources</b>: it closes the console automatically at the end. Then we create the service (the rules), the menu (the screen), and call <code>run()</code> to start.</p>
<p><b>Why so small?</b> A class should do one job. Main starts things. The menu talks to the user. The service holds the rules.</p>`},
{t:'2. Classes and objects',f:'model/Staff.java',b:`
<p>A <b>class</b> is a blueprint, like a form with empty boxes. An <b>object</b> is one filled-in form. <code>Staff</code> is the class. “Maria Santos, Head Librarian” is one object.</p>`+X(`public class Staff {
    private final String staffId;
    private String name;
    private String role;

    public Staff(String staffId, String name, String role) {
        ...
    }
}`)+`<ul><li><b>Fields</b> (staffId, name, role) are the boxes on the form.</li><li><b>Constructor</b> (<code>public Staff(...)</code>) runs once when we write <code>new Staff(...)</code>. It fills in the starting values.</li><li><b>Methods</b> (like getName()) are things the object can do or tell us.</li><li><code>this</code> means “this very object”. <code>this.name = name</code> puts the parameter value into the object’s own field.</li></ul>
<p><code>Staff</code> also has <code>toFileLine()</code> and <code>fromFileLine()</code>, which turn a staff member into a line of text (<code>ST001|Maria Santos|Head Librarian</code>) and back. This is how saving works.</p>`},
{t:'3. Encapsulation (protecting data)',f:'model/LibraryItem.java',b:`
<p><b>Encapsulation</b> means: keep the data <b>private</b> and let other classes use it only through methods. Think of an ATM: you cannot reach into the cash box, you must use the buttons.</p>`+X(`private String title;

public void setTitle(String title) {
    if (title == null || title.isBlank()) {
        throw new IllegalArgumentException("Title cannot be empty.");
    }
    this.title = title.trim();
}`)+`<ul><li><code>private</code> – only this class can touch the field.</li><li>The <b>setter</b> checks the value first (validation). An empty title is rejected, so a book can never have an empty title.</li><li><code>trim()</code> removes spaces at the start and end.</li><li><code>private final String itemId</code> – <code>final</code> means it can never change after it is set.</li></ul>
<p><b>Common bug:</b> forgetting <code>this.</code>. Then <code>title = title.trim()</code> changes only the parameter and the field stays empty (see exercise “The title that never saves”).</p>`},
{t:'4. Inheritance and abstract classes',f:'model/LibraryItem.java, Book.java, Magazine.java, Member.java, StudentMember.java, FacultyMember.java',b:`
<p><b>Inheritance</b> means a child class gets everything from a parent class. A Book <i>is a</i> LibraryItem. A Magazine <i>is a</i> LibraryItem. What they share (ID, title, available) lives once in the parent.</p>`+X(`public abstract class LibraryItem {
    public abstract String getItemType();
    public abstract String getDetails();
    public abstract String toFileLine();
}

public class Book extends LibraryItem {
    public Book(String itemId, String title, String author, String isbn) {
        super(itemId, title);   // build the parent part first
        setAuthor(author);
        setIsbn(isbn);
    }
    @Override
    public String getItemType() { return "Book"; }
}`)+`<ul><li><b>abstract class</b> – a half-finished class. You cannot write <code>new LibraryItem(...)</code>. It only exists to be a parent.</li><li><b>abstract method</b> – a method with no body. Every child <b>must</b> write its own version.</li><li><code>extends</code> – “is a kind of”.</li><li><code>super(...)</code> – calls the parent’s constructor. It must be the first line.</li><li><code>@Override</code> – tells Java “I am replacing a parent method”. If the name is spelled wrong, Java gives an error and helps us.</li></ul>
<p><b>Polymorphism</b> (many forms): Book and Magazine are both LibraryItems, so one list can hold both. When we call <code>item.getItemType()</code>, Java automatically runs the version of the <i>real</i> object. The same idea works for Member, StudentMember and FacultyMember.</p>`+X(`List<LibraryItem> items = new ArrayList<>();
items.add(new Book(...));
items.add(new Magazine(...));
for (LibraryItem item : items) {
    System.out.println(item.getItemType());  // Book, then Magazine
}`)},
{t:'5. Interface and the Strategy pattern',f:'model/BorrowingPolicy.java, pattern/StudentPolicy.java, pattern/FacultyPolicy.java, model/Member.java',b:`
<p>An <b>interface</b> is a list of promises. <code>BorrowingPolicy</code> promises three methods. Any class that says <code>implements BorrowingPolicy</code> must write all three.</p>`+X(`public interface BorrowingPolicy {
    int getMaxItems();
    int getLoanDays();
    double calculateFine(int daysOverdue);
}`)+`<table><tr><th></th><th>Student</th><th>Faculty</th></tr><tr><td>Max items</td><td>3</td><td>10</td></tr><tr><td>Loan days</td><td>7</td><td>30</td></tr><tr><td>Fine per day</td><td>PHP 5.00</td><td>PHP 2.00</td></tr></table>
<p><b>Strategy pattern</b> means: put each set of rules in its own class, and let the object pick which one to use. Here, <code>StudentPolicy</code> and <code>FacultyPolicy</code> are the two strategies. A Member <b>has a</b> policy (composition):</p>`+X(`private final BorrowingPolicy policy;

public double calculateFine(int daysOverdue) {
    return policy.calculateFine(daysOverdue);
}`)+`<p><b>Why not if-else?</b> Without Strategy, Member would need <code>if (student) ... else if (faculty) ...</code> everywhere. To add a “Guest” member we would change many places. With Strategy, we add one new class and nothing else changes.</p>`},
{t:'6. The Factory pattern',f:'pattern/LibraryFactory.java',b:`
<p>A <b>factory</b> builds objects for you. You give it a word like “STUDENT” and it returns the right object.</p>`+X(`public static Member createMember(String type, String id, String name, String detail) {
    switch (type.trim().toUpperCase()) {
        case "STUDENT":
            return new StudentMember(id, name, detail, new StudentPolicy());
        case "FACULTY":
            return new FacultyMember(id, name, detail, new FacultyPolicy());
        default:
            throw new IllegalArgumentException("Unknown member type: " + type);
    }
}`)+`<ul><li><code>static</code> – we can call it without making a factory object.</li><li><code>switch</code> – picks a <code>case</code> that matches the word.</li><li>The return type is <code>Member</code> (the parent), so callers do not need to know about StudentMember.</li><li>The factory also gives each member the correct policy, so the two patterns work together.</li><li><code>createMemberFromLine</code> and <code>createItemFromLine</code> split a saved line at <code>|</code> and build the object. This is how loading from files works.</li></ul>
<p><b>Why:</b> the menu and the file loader both need to build members. The factory keeps that logic in one place (DRY: do not repeat yourself).</p>`},
{t:'7. Collections, generics and lambdas',f:'storage/Repository.java',b:`
<p>A <b>collection</b> holds many objects. We use two kinds:</p>
<ul><li><b>ArrayList</b> – an ordered list. Positions start at 0. Good for showing all records in order.</li><li><b>HashMap</b> – pairs of key and value. Good for finding a record fast by its ID.</li></ul>
<p><code>Repository&lt;T&gt;</code> is a <b>generic class</b> we wrote. The <code>T</code> is a blank that is filled in later: <code>Repository&lt;Loan&gt;</code> stores Loans, <code>Repository&lt;Member&gt;</code> stores Members. One class, used four times.</p>`+X(`private final ArrayList<T> records = new ArrayList<>();
private final HashMap<String, T> index = new HashMap<>();

private final Repository<Loan> loanRepo =
    new Repository<>("Loan", Loan::getLoanId);`)+`<p><code>Loan::getLoanId</code> is a <b>method reference</b> (a short <b>lambda</b>). It tells the repository “to get a loan’s ID, call getLoanId on it”. A lambda is a small function without a name. Another one in our code:</p>`+X(`sorted.sort((first, second) -> first.getTitle().compareToIgnoreCase(second.getTitle()));
itemRepo.findAll(item -> item.getTitle().toLowerCase().contains(key));`)+`<p><code>findAll(Predicate&lt;T&gt; condition)</code> receives a lambda that answers true or false for each record. This lets us search by anything without writing a new method each time.</p>`},
{t:'8. Exceptions (handling errors)',f:'exception/*.java, service/LibraryService.java',b:`
<p>An <b>exception</b> is Java’s way to say “something went wrong”. We <b>throw</b> it where the problem is found, and <b>catch</b> it where we can tell the user.</p>
<p>We made our own exceptions. They all extend <code>LibraryException</code>, which extends <code>Exception</code> (a <b>checked</b> exception: Java makes us handle it).</p>
<ul><li><code>ItemNotAvailableException</code> – the item is already borrowed</li><li><code>BorrowingLimitExceededException</code> – too many items (also stores the limit)</li><li><code>RecordNotFoundException</code> – an ID does not exist</li><li><code>DuplicateRecordException</code> – an ID already exists</li></ul>`+X(`// thrown in LibraryService
public Loan borrowItem(...) throws RecordNotFoundException,
        ItemNotAvailableException, BorrowingLimitExceededException {
    if (!item.isAvailable()) {
        throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
    }
}`)+`<ul><li><code>throw new ...</code> – raises the error.</li><li><code>throws</code> in the header – a warning label: “this method may raise these errors”.</li><li><code>try { ... } catch (SomeException e) { ... }</code> – the menu uses this to print <code>e.getMessage()</code> instead of crashing with a long error.</li><li>A catch block must <b>never be empty</b>. Report the problem or handle it.</li></ul>
<p><code>IllegalArgumentException</code> (used for empty names, bad dates) is a built-in <b>unchecked</b> exception. We use it when the input itself is invalid.</p>`},
{t:'9. Files and saving',f:'storage/Repository.java, service/LibraryService.java, data/*.txt',b:`
<p>Data is saved as plain text, one record per line, with <code>|</code> between fields. Files: <code>items.txt</code>, <code>members.txt</code>, <code>staff.txt</code>, <code>loans.txt</code>.</p>`+X(`BOOK|B001|Clean Code|Robert C. Martin|9780132350884
STUDENT|S001|Ana Cruz|BSIT
ST001|Maria Santos|Head Librarian
L0002|M001|S002|ST001|2026-10-10|2026-10-17||0.0|false`)+`<p><b>Saving</b> (<code>saveToFile</code>) writes the whole list to a temporary file, then moves it over the real file. If the program crashes during saving, the old file is still safe. It uses <b>try-with-resources</b> so the file closes by itself, and <code>FileWriter</code> without <code>true</code>, so it <b>overwrites</b> instead of appending.</p>
<p><b>Loading</b> (<code>loadFromFile</code>):</p>
<ol><li>If the file does not exist, add a message and start empty (no crash on first run).</li><li>Read line by line. Skip blank lines.</li><li>Turn each line into an object using the factory or <code>fromFileLine</code>.</li><li>If a line is broken, catch the error, add “Skipped line…”, and keep going.</li></ol>
<p>Last, <code>loadAll()</code> marks items as borrowed if they have an open loan, so the shelf matches the loan records.</p>`},
{t:'10. The Loan class (dates and fines)',f:'model/Loan.java',b:`
<p>A <code>Loan</code> remembers one borrowing: loan ID, item ID, member ID, staff ID, borrow date, due date, return date, fine, and whether the fine is paid. <code>returnDate == null</code> means “not returned yet”.</p>`+X(`public boolean isOverdue(LocalDate today) {
    return !isReturned() && today.isAfter(dueDate);
}

public int getDaysOverdue(LocalDate today) {
    LocalDate endDate = isReturned() ? returnDate : today;
    long days = ChronoUnit.DAYS.between(dueDate, endDate);
    return days > 0 ? (int) days : 0;
}`)+`<ul><li><code>LocalDate</code> is Java’s date type. <code>isAfter</code> asks “is this date later?”.</li><li><code>? :</code> is a short if-else: <code>condition ? valueIfTrue : valueIfFalse</code>.</li><li><code>between(start, end)</code> counts days. It is positive only when end is later than start.</li><li><code>(int) days</code> changes a long number to an int.</li><li>Late means <b>after</b> the due date, so returning on the due date has no fine.</li></ul>
<p><b>Example:</b> a student borrows on Oct 1 and the due date is Oct 8 (7 days). If returned on Oct 20, that is 12 days late, so the fine is 12 × 5.00 = PHP 60.00.</p>`},
{t:'11. LibraryService: borrow and return step by step',f:'service/LibraryService.java',b:`
<p>LibraryService holds the rules. Here is <b>borrowItem</b> in order:</p>
<ol><li>Find the item, member and staff by ID. If one is missing, throw RecordNotFoundException.</li><li>If the item is not available, throw ItemNotAvailableException.</li><li>Count the member’s open loans. If it is at the limit (<code>&gt;=</code>), throw BorrowingLimitExceededException.</li><li>Create a Loan with today’s date and a due date of today plus the member’s loan days.</li><li>Add the loan to loanRepo and call <code>item.markBorrowed()</code>.</li></ol>
<p><b>returnItem</b>:</p>
<ol><li>Find the item and its open loan. If none, throw RecordNotFoundException.</li><li>Count days late, then ask the member’s policy for the fine.</li><li>Call <code>loan.markReturned(today, fine)</code> and <code>item.markReturned()</code>.</li><li>If there is a fine, tell the observers.</li></ol>`+X(`int openLoans = countOpenLoans(member.getMemberId());
if (openLoans >= member.getMaxItems()) { ... }`)+`<p>Why <code>&gt;=</code>? If the limit is 3 and the member has 3 loans, 3 &gt;= 3 is true, so the 4th borrow is blocked. Using <code>&gt;</code> would allow a 4th.</p>
<p>Other methods to know: <code>searchItems</code> (lambda search), <code>getOverdueLoans</code>, <code>getFineSoFar</code>, <code>payFine</code>, <code>saveAll</code>, <code>loadAll</code>.</p>`},
{t:'12. The Observer pattern',f:'pattern/OverdueObserver.java, service/LibraryService.java, app/MenuController.java',b:`
<p>The <b>Observer pattern</b> works like a notice board plus people who want notices. The “subject” (LibraryService) keeps a list of listeners (observers). When something happens, it tells all of them.</p>`+X(`public interface OverdueObserver {
    void onOverdueNotice(String message);
}

private void notifyObservers(String message) {
    for (OverdueObserver observer : observers) {
        observer.onOverdueNotice(message);
    }
}`)+`<p>In MenuController, two observers are added with lambdas:</p>`+X(`service.addObserver(message -> console.notice(message));   // show on screen
service.addObserver(message -> notificationLog.add(message)); // remember for option 9`)+`<p><b>Why:</b> LibraryService does not know or care what the observers do. To add an email or SMS alert, write a new observer and add it. LibraryService does not change. That is the Open/Closed idea: open for new features, closed for edits.</p>`},
{t:'13. How to debug (for the live demo)',f:'everything',b:`
<p>In the demo, you get about 5 minutes to find, explain and fix a bug. Use this routine:</p>
<ol><li><b>Run it and reproduce.</b> Do exactly what causes the problem. Write the wrong output.</li><li><b>Read the error.</b> A compile error gives the file and line. A crash gives a stack trace: the first line that mentions our own class is the best clue.</li><li><b>Find the feature’s path.</b> Menu → MenuController → LibraryService method → model or Repository → file. Follow it down.</li><li><b>Check the usual suspects:</b> a missing <code>!</code>, <code>&gt;</code> vs <code>&gt;=</code>, <code>&amp;&amp;</code> vs <code>||</code>, <code>isBefore</code> vs <code>isAfter</code>, <code>this.</code> missing, wrong policy in the factory, empty catch, append vs overwrite, index off by one, missing <code>throws</code>.</li><li><b>Add a print line</b> (<code>System.out.println</code>) to see the real values.</li><li><b>Fix one thing</b>, compile, run again, show the correct output.</li><li><b>Explain in simple words:</b> where it was, what it did wrong, why, and what you changed.</li></ol>
<p>Practice this routine in the exercises. Each one is a bug of the kind an instructor might plant.</p>`}];
const rd=()=>{try{return JSON.parse(localStorage.getItem('lmsread')||'{}')}catch(e){return{}}};
function learn(){const r=rd();app.innerHTML=`<h1>Learn</h1><div class="card"><h2>🔍 Full code walkthrough: every file, every part</h2><p>Read the real code of all ${WALK.length} files, cut into small parts, each with a simple explanation. Nothing is skipped.</p><div class="row"><a href="#walk"><button class="p">Open the walkthrough</button></a></div></div><div class="card"><h2>🚀 Learn the whole project from scratch</h2><p>${COURSE.length} short lessons that follow our real code, from Main to the last file. No Java experience needed.</p><div class="row"><a href="#lesson/0"><button class="p">${Object.keys(r).length?'Restart course':'Start from lesson 1'}</button></a></div>
${COURSE.map((l,i)=>`<a class="card ex" href="#lesson/${i}"><b>${r[i]?'<span class="done">✓</span> ':''}${l.t}</b><br><span class="mu">${l.f}</span></a>`).join('')}</div>
<h2>Quick lessons by topic</h2>${Object.keys(CATS).map(c=>`<div class="card"><h3>${c}. ${CATS[c]}</h3><p>${LESS[c]}</p><a href="#practice/${c}">Practice this →</a></div>`).join('')}`}
function lesson(i){i=+i;const l=COURSE[i];if(!l)return location.hash='learn';
app.innerHTML=`<a href="#learn">← All lessons</a><div class="mu">Lesson ${i+1} of ${COURSE.length}</div><h1>${l.t.replace(/^\d+\.\s*/,'')}</h1><p class="mu">Files: <code>${l.f}</code></p><div class="lsn">${l.b}</div>
<div class="row"><button id="rd" class="p">${rd()[i]?'✓ Marked as read':'Mark as read'}</button>${i?`<a href="#lesson/${i-1}"><button>← Previous</button></a>`:''}${i<COURSE.length-1?`<a href="#lesson/${i+1}"><button class="p">Next →</button></a>`:'<a href="#practice"><button class="p">Go practice →</button></a>'}</div>`;
$('#rd').onclick=()=>{const r=rd();r[i]=1;try{localStorage.setItem('lmsread',JSON.stringify(r))}catch(e){}$('#rd').textContent='✓ Marked as read'}}
