// Categories, quick lessons, exercises 1-14 and the answer checker.
const CATS={A:'Basic Java Syntax',B:'Object-Oriented Programming',C:'Collections and Generics',D:'Exception Handling',E:'Design Patterns',F:'File Handling',G:'Library System Logic'};
const LESS={
A:'Java is strict about spelling and punctuation. Every statement ends with a semicolon (;). A method that promises a result (like int or boolean) must use return to give it back. Think of it as filling in a form: if one box is empty, the form is rejected.',
B:'A class is a blueprint, and an object is one thing built from it. Book is a kind of LibraryItem, so it extends LibraryItem. A constructor runs when an object is created and gives it starting values. super(...) calls the parent’s constructor. this means “this object”, so this.title is the title field of the object itself.',
C:'An ArrayList keeps items in order (positions start at 0, so the last position is size() - 1). A HashMap finds a record fast by its ID, like looking up a student number. Generics like Repository<Loan> tell Java what type is inside, so mistakes are caught early.',
D:'An exception is Java’s way of saying “something went wrong”. throw raises one. try/catch handles it. If a method can throw a checked exception, its header must say throws. A catch block must never be empty, because then the problem disappears silently.',
E:'A design pattern is a proven way to solve a common problem. Factory (LibraryFactory) builds the right object from a word like "STUDENT". Strategy (BorrowingPolicy) lets each member type have its own rules. Observer (OverdueObserver) lets many listeners get a message when something happens.',
F:'Our data lives in text files like loans.txt, one record per line. When saving, we must replace the old file with the new full list. When loading, a missing file must not crash the program, and the loaded data must rebuild the real state.',
G:'This is the library’s own logic: you cannot borrow a book that is already borrowed, each member has a limit, and a loan is overdue only after its due date. A small wrong symbol (like > instead of >=, or a missing !) changes the whole behavior.'};
const E=(id,c,l,t,d,src,code,exp,act,h,ok,no,sol,x)=>({id,c,l,t,d,src,code,exp,act,h,ok,no,sol,x});
const EX=[
E('a1','A','Beginner','The missing semicolon','Borrowing an item should mark it as not available.','model/LibraryItem.java → markBorrowed()',
`public void markBorrowed() {
    this.available = false
}`,'The program compiles. markBorrowed() sets available to false.','Compile error: ";" expected.',
['Look at the end of the line inside the method.','In Java, a statement ends with a semicolon.'],[/this\.available=false;/],[],
`public void markBorrowed() {
    this.available = false;
}`,['Line 2, the end of this.available = false.','It is a statement that has no ending mark, so Java cannot tell where it stops.','Java needs a semicolon to know a statement is finished. Without it, the whole file fails to compile.','Syntax: a semicolon (;) is like the full stop of a sentence.','Add ; after false.','Now Java sees a complete statement, so markBorrowed() compiles and sets the item to borrowed.']),
E('a3','A','Intermediate','The method that gives nothing back','getMaxItems() should tell us how many items a member may borrow.','model/Member.java → getMaxItems()',
`public int getMaxItems() {
    policy.getMaxItems();
}`,'Returns 3 for a student.','Compile error: missing return statement.',
['The method says int. What must an int method do at the end?','Use the word return.'],[/returnpolicy\.getMaxItems\(\);/],[],
`public int getMaxItems() {
    return policy.getMaxItems();
}`,['Line 2, inside getMaxItems().','It asks the policy for the number, but throws the answer away.','The method header promises an int, but nothing is handed back to the caller.','Return statement: return sends a value back to whoever called the method.','Write return before policy.getMaxItems().','Now the number from the policy goes back to the caller, such as borrowItem(), which compares it with the open loans.']),
E('b1','B','Beginner','The forgotten parent','A Book needs an item ID and a title. The parent class LibraryItem stores them.','model/Book.java → constructor',
`public Book(String itemId, String title, String author, String isbn) {
    setAuthor(author);
    setIsbn(isbn);
}`,'A Book is created with ID, title, author and ISBN.','Compile error: constructor LibraryItem in class LibraryItem cannot be applied to given types.',
['Book extends LibraryItem. Who sets the ID and title?','Use super(...) as the very first line.'],[/\{super\(itemId,title\);/],[],
`public Book(String itemId, String title, String author, String isbn) {
    super(itemId, title);
    setAuthor(author);
    setIsbn(isbn);
}`,['Inside the Book constructor, the first line.','It sets author and ISBN only. It never builds the LibraryItem part.','LibraryItem has no empty constructor, so Java needs super(itemId, title) to fill in the ID and title.','Inheritance: a child must first build its parent part. super(...) calls the parent constructor.','Add super(itemId, title); as the first line.','The parent now saves the ID and title, then Book saves the author and ISBN. The object is complete.']),
E('b3','B','Intermediate','The title that never saves','setTitle() should save the new title into the item.','model/LibraryItem.java → setTitle()',
`public void setTitle(String title) {
    if (title == null || title.isBlank()) {
        throw new IllegalArgumentException("Title cannot be empty.");
    }
    title = title.trim();
}`,'After setTitle("Clean Code"), getTitle() returns "Clean Code".','getTitle() returns null. No error is shown.',
['The parameter and the field have the same name: title.','Use this. to point to the field of the object.'],[/this\.title=title\.trim\(\);/],[],
`public void setTitle(String title) {
    if (title == null || title.isBlank()) {
        throw new IllegalArgumentException("Title cannot be empty.");
    }
    this.title = title.trim();
}`,['The last line of setTitle().','It trims the parameter and puts the result back into the parameter, which disappears when the method ends.','The field title is never touched, so it stays null.','this keyword: this.title is the object’s own field. Plain title is the parameter, because it is closer.','Write this.title = title.trim();','Now the cleaned text goes into the object’s field, so getTitle() can return it later.']),
E('c1','C','Intermediate','The duplicate check turned upside down','add() should refuse an ID that already exists in the HashMap.','storage/Repository.java → add()',
`public void add(T record) throws DuplicateRecordException {
    String id = normalize(idGetter.apply(record));
    if (!index.containsKey(id)) {
        throw new DuplicateRecordException(recordName + " ID '" + id + "' already exists.");
    }
    records.add(record);
    index.put(id, record);
}`,'A new ID is added. An existing ID throws DuplicateRecordException.','Adding any new item throws “already exists”, so nothing can ever be added.',
['Read the if line aloud. When does it throw?','The ! means NOT. Do we want to throw when the ID is NOT there?'],[/if\(index\.containsKey\(id\)\)\{throw/],[/!index\.containsKey/],
`public void add(T record) throws DuplicateRecordException {
    String id = normalize(idGetter.apply(record));
    if (index.containsKey(id)) {
        throw new DuplicateRecordException(recordName + " ID '" + id + "' already exists.");
    }
    records.add(record);
    index.put(id, record);
}`,['The if line in add().','It throws when the ID is missing from the HashMap, which is every new record.','The check is the opposite of what we want, so the code never reaches records.add().','HashMap: containsKey(id) says true when the ID is already stored. ! flips true and false.','Remove the !.','Now only IDs already stored cause the error, and new IDs are added to both the list and the map.']),
E('c3','C','Intermediate','The wrong generic type','The loan repository should store Loan objects and find them by loan ID.','service/LibraryService.java → loanRepo',
`private final Repository<Loan> loanRepo =
    new Repository<>("Loan", Member::getMemberId);`,'The repository gets the ID of each Loan.','Compile error: invalid method reference. Member is not a Loan.',
['Repository<Loan> holds Loans. Which class should the ID getter belong to?','Compare with itemRepo and memberRepo above it.'],[/\("Loan",(Loan::getLoanId|\w+->\w+\.getLoanId\(\))\)/],[],
`private final Repository<Loan> loanRepo =
    new Repository<>("Loan", Loan::getLoanId);`,['The second argument of new Repository<>.','It tells the repository to get the ID using Member, but this repository holds Loans.','The generic type is Loan, so the ID getter must work on a Loan.','Generics: Repository<Loan> promises it only holds Loan objects, and Java checks that promise.','Use Loan::getLoanId.','The type and the ID getter now match, so the repository can read each loan’s ID.']),
E('d1','D','Intermediate','The exception nobody announced','borrowItem() throws ItemNotAvailableException when the item is already borrowed.','service/LibraryService.java → borrowItem()',
`public Loan borrowItem(String itemId, String memberId, String staffId)
        throws RecordNotFoundException, BorrowingLimitExceededException {
    LibraryItem item = itemRepo.getById(itemId);
    if (!item.isAvailable()) {
        throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
    }
    // ... rest of the method
}`,'The code compiles.','Compile error: unreported exception ItemNotAvailableException; must be caught or declared to be thrown.',
['Look at the throws list in the method header.','A checked exception that is thrown must be listed in throws.'],[/throws[^{]*ItemNotAvailableException[^{]*\{/],[],
`public Loan borrowItem(String itemId, String memberId, String staffId)
        throws RecordNotFoundException, ItemNotAvailableException, BorrowingLimitExceededException {
    LibraryItem item = itemRepo.getById(itemId);
    if (!item.isAvailable()) {
        throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
    }
    // ... rest of the method
}`,['The throws line in the header.','The method throws ItemNotAvailableException but does not warn callers about it.','Java makes us announce checked exceptions, so the caller can handle them.','throws: it is a warning label in the method header that lists the problems the method may raise.','Add ItemNotAvailableException to the throws list.','Now the caller, such as MenuController, knows it must catch it and can show a friendly message.']),
E('d2','D','Intermediate','The silent catch','When a data file cannot be read, the program should tell us what happened.','storage/Repository.java → loadFromFile()',
`try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    // ... read each line ...
} catch (IOException e) {
}`,'A warning like “Could not read data/items.txt: ...” is added to messages.','Nothing is shown. The file fails and the program pretends all is fine.',
['Look at the catch block. What is inside?','Add the problem to the messages list, using e.getMessage().'],[/catch\(IOExceptione\)\{[^}]+\}/],[],
`try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    // ... read each line ...
} catch (IOException e) {
    messages.add("Could not read " + path + ": " + e.getMessage());
}`,['The catch (IOException e) block.','It catches the error and then does nothing.','An empty catch hides the problem, so we cannot see why data is missing.','Empty catch block: always report or handle the error. e.getMessage() gives the reason in words.','Add messages.add(...) with the path and e.getMessage().','Now the user sees a warning, and we can fix the file problem.']),
E('e1','E','Advanced','The factory that builds the wrong rules','LibraryFactory should give each student member the StudentPolicy.','pattern/LibraryFactory.java → createMember()',
`case "STUDENT":
    return new StudentMember(id, name, detail, new FacultyPolicy());
case "FACULTY":
    return new FacultyMember(id, name, detail, new FacultyPolicy());`,'Students get 3 items, 7 days, PHP 5.00 per day.','Students can borrow 10 items for 30 days and pay PHP 2.00 per day.',
['Compare the two cases. What is the same that should be different?','Which policy class belongs to students?'],[/case"STUDENT":returnnewStudentMember\(id,name,detail,newStudentPolicy\(\)\);/],[],
`case "STUDENT":
    return new StudentMember(id, name, detail, new StudentPolicy());
case "FACULTY":
    return new FacultyMember(id, name, detail, new FacultyPolicy());`,['The "STUDENT" case in createMember().','It builds a StudentMember but gives it the faculty rules.','The Factory chooses the policy, so a wrong choice here changes limits and fines for every student.','Factory pattern + Strategy pattern: the Factory builds objects, and each policy is a Strategy for the rules.','Use new StudentPolicy() in the STUDENT case.','Every student now follows the student rules, and faculty keep theirs.']),
E('e2','E','Advanced','The observer that only tells one listener','MenuController adds two observers: one prints notices, one saves them in a log. Both must receive every notice.','service/LibraryService.java → notifyObservers()',
`private void notifyObservers(String message) {
    observers.get(0).onOverdueNotice(message);
}`,'Both the screen and the notification log get the message.','Only the first observer is told. Menu option 9 shows nothing.',
['How many observers does this code call?','Loop over the whole observers list.'],[/(for\(OverdueObserver\w+:observers\)\{\w+\.onOverdueNotice\(message\);\}|observers\.forEach\(\w+->\w+\.onOverdueNotice\(message\)\);|for\(inti=0;i<observers\.size\(\);i\+\+\)\{observers\.get\(i\)\.onOverdueNotice\(message\);\})/],[],
`private void notifyObservers(String message) {
    for (OverdueObserver observer : observers) {
        observer.onOverdueNotice(message);
    }
}`,['The only line inside notifyObservers().','It calls observers.get(0), which is just the first one.','The Observer pattern says all listeners must be told. This code ignores the rest.','Observer pattern: the subject keeps a list of listeners and tells every one of them.','Loop through observers and call onOverdueNotice on each.','Each listener now gets the message, so the screen and the log both work, and adding a third observer needs no change here.']),
E('f2','F','Intermediate','The missing file that crashes','On the first run, items.txt does not exist. The program should say so and start empty.','storage/Repository.java → loadFromFile()',
`File file = new File(path);
if (file.exists()) {
    messages.add("File not found: " + path);
    return messages;
}`,'A warning appears and the program starts with empty data.','When the file exists, loading stops early and no data is loaded. When it is missing, the code goes on to read it and fails.',
['Read the message and the condition together. Do they agree?','You need “if the file does NOT exist”.'],[/if\((!file\.exists\(\)|file\.exists\(\)==false)\)\{/],[],
`File file = new File(path);
if (!file.exists()) {
    messages.add("File not found: " + path);
    return messages;
}`,['The if condition after new File(path).','It says “file not found” when the file DOES exist.','The condition is the opposite of the message, so good files are skipped.','File handling: always check a file exists before reading. ! means NOT.','Write if (!file.exists()).','Existing files are loaded, and a missing file gives a friendly warning without crashing.']),
E('g2','G','Intermediate','One book too many','A student can borrow at most 3 items. The 4th request must be refused.','service/LibraryService.java → borrowItem()',
`int openLoans = countOpenLoans(member.getMemberId());
if (openLoans > member.getMaxItems()) {
    throw new BorrowingLimitExceededException("Limit reached.", member.getMaxItems());
}`,'With 3 open loans, a 4th borrow is refused.','A student with 3 open loans can still borrow a 4th item.',
['Test it with numbers. openLoans = 3 and max = 3. Is 3 > 3 true?','Which symbol includes “equal to”?'],[/openLoans>=member\.getMaxItems\(\)|openLoans\+1>member\.getMaxItems\(\)|member\.getMaxItems\(\)<=openLoans/],[],
`int openLoans = countOpenLoans(member.getMemberId());
if (openLoans >= member.getMaxItems()) {
    throw new BorrowingLimitExceededException("Limit reached.", member.getMaxItems());
}`,['The if line after countOpenLoans().','It refuses only when openLoans is more than the limit.','At exactly 3 loans, 3 > 3 is false, so a 4th item is allowed.','Off-by-one error: > and >= are different at the exact limit.','Use >=.','At 3 loans, 3 >= 3 is true, so the 4th borrow is refused.']),
E('g3','G','Beginner','Overdue before the due date','A loan is overdue only if it is not returned and today is after the due date.','model/Loan.java → isOverdue()',
`public boolean isOverdue(LocalDate today) {
    return !isReturned() && today.isBefore(dueDate);
}`,'A loan due yesterday is overdue. A loan due tomorrow is not.','Loans that are not yet due are listed as overdue. Late loans are missed.',
['Which date is later: today or dueDate, for a late loan?','Look for isAfter and isBefore.'],[/return!isReturned\(\)&&(today\.isAfter\(dueDate\)|dueDate\.isBefore\(today\))/],[],
`public boolean isOverdue(LocalDate today) {
    return !isReturned() && today.isAfter(dueDate);
}`,['The return line in isOverdue().','It checks that today is BEFORE the due date, which means “not late yet”.','The check is reversed, so the overdue list and fines are wrong.','Dates: a.isAfter(b) is true when a comes later than b.','Use today.isAfter(dueDate).','Now only unreturned loans past their due date count as overdue.']),
E('g4','G','Advanced','Negative days late','getDaysOverdue() counts how many days after the due date the item came back or today is.','model/Loan.java → getDaysOverdue()',
`LocalDate endDate = isReturned() ? returnDate : today;
long days = ChronoUnit.DAYS.between(endDate, dueDate);
return days > 0 ? (int) days : 0;`,'Due Oct 8, returned Oct 20 gives 12 days late (fine PHP 60 for a student).','Always 0 days late, so no late fine is ever charged.',
['between(a, b) counts days from a to b. Which date comes first?','The earlier date goes first.'],[/between\(dueDate,endDate\)/],[],
`LocalDate endDate = isReturned() ? returnDate : today;
long days = ChronoUnit.DAYS.between(dueDate, endDate);
return days > 0 ? (int) days : 0;`,['The ChronoUnit.DAYS.between line.','It counts from endDate to dueDate, backward.','For a late loan, this gives a negative number, and the next line turns it into 0.','between(start, end) is positive when end is later. Late means endDate is later than dueDate.','Swap them: between(dueDate, endDate).','A late loan gives a positive number, so returnItem() charges the right fine.'])];
const LAB=['Where the error is','What the wrong code does','Why it is wrong','The idea behind it','How to fix it','Why the fix works'];
function chk(e,code){const s=code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g,'').replace(/\s+/g,'');
 for(const p of ['{}','()','[]'])if(s.split(p[0]).length!==s.split(p[1]).length)return 'Your brackets do not match. Count each opening ( { [ against its closing one.';
 return e.ok.every(r=>r.test(s))&&!e.no.some(r=>r.test(s))?null:'Not fixed yet. The bug is still there, or the fix is not one this checker knows.'}
