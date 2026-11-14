// Exercises 15-24. Same format as data.js: E(id, category, level, title, description, source, brokenCode, expected, actual, hints, mustMatch, mustNotMatch, solution, explanation)
EX.push(
E('a2','A','Beginner','The wrong data type','An item is either on the shelf (true) or borrowed (false).','model/LibraryItem.java → available field',
`private String available;

public LibraryItem(String itemId, String title) {
    // ...
    this.available = true;
}`,'The field stores true or false.','Compile error: incompatible types: boolean cannot be converted to String.',
['What kind of value is true? Is it text?','Java has a type just for true/false.'],[/privatebooleanavailable;/],[/privateStringavailable/],
`private boolean available;

public LibraryItem(String itemId, String title) {
    // ...
    this.available = true;
}`,['The line private String available;','It says the field holds text, but the constructor puts true into it.','A String cannot hold a true/false value, so Java refuses.','Data types: boolean holds only true or false. String holds text.','Change String to boolean.','A boolean can hold true, so isAvailable() and markBorrowed() work.']),
E('a4','A','Beginner','The missing bracket','setRole() must reject an empty role and then save the trimmed role.','model/Staff.java → setRole()',
`public void setRole(String role) {
    if (role == null || role.isBlank()) {
        throw new IllegalArgumentException("Role cannot be empty.");

    this.role = role.trim();
}`,'The method compiles and saves a valid role.','Compile error: reached end of file while parsing.',
['Count the { and } symbols. Do they match?','The if block never closes.'],[/beempty\."\);\}this\.role=role\.trim\(\);\}/],[],
`public void setRole(String role) {
    if (role == null || role.isBlank()) {
        throw new IllegalArgumentException("Role cannot be empty.");
    }
    this.role = role.trim();
}`,['After the throw line, where the if block should end.','The if block is never closed, so Java thinks this.role = ... is still inside the if.','Every { needs its own }. One is missing, so the file ends too early.','Brackets: { } mark where a block starts and ends.','Add } after the throw line.','The if block now holds only the throw. The save line runs for valid roles.']),
E('b2','B','Intermediate','The misspelled override','Magazine must replace the abstract getItemType() from LibraryItem.','model/Magazine.java → getItemType()',
`@Override
public String getItemtype() {
    return "Magazine";
}`,'Magazine.getItemType() returns "Magazine".','Compile error: method does not override or implement a method from a supertype.',
['Compare the method name letter by letter with the one in LibraryItem.','Java is case-sensitive: T and t are different.'],[/@OverridepublicStringgetItemType\(\)\{/],[],
`@Override
public String getItemType() {
    return "Magazine";
}`,['The method name getItemtype.','@Override says we replace a parent method, but the name has a small t.','There is no parent method called getItemtype, so @Override fails. Without it, Magazine would still be abstract.','Method overriding: a child replaces a parent method using the exact same name and parameters.','Rename to getItemType.','The name matches the parent, so Java uses this version for every Magazine.']),
E('c2','C','Intermediate','Off the end of the list','findAll() visits each record in the ArrayList and keeps those that match.','storage/Repository.java → findAll() (changed to an index loop)',
`public List<T> findAll(Predicate<T> condition) {
    List<T> result = new ArrayList<>();
    for (int i = 0; i <= records.size(); i++) {
        T record = records.get(i);
        if (condition.test(record)) {
            result.add(record);
        }
    }
    return result;
}`,'Returns all matching records.','IndexOutOfBoundsException: Index 3 out of bounds for length 3.',
['If the list has 3 items, what are their positions?','Positions start at 0, so the last one is size() - 1.'],[/i<records\.size\(\);/],[/<=records\.size/],
`public List<T> findAll(Predicate<T> condition) {
    List<T> result = new ArrayList<>();
    for (int i = 0; i < records.size(); i++) {
        T record = records.get(i);
        if (condition.test(record)) {
            result.add(record);
        }
    }
    return result;
}`,['The for line: i <= records.size().','The loop goes one step too far and asks for a position that does not exist.','With 3 records, valid positions are 0, 1, 2. i = 3 crashes.','Index errors: list positions start at 0 and end at size() - 1.','Use i < records.size().','The loop stops after the last real position.']),
E('d3','D','Intermediate','The exception missing its data','BorrowingLimitExceededException stores the limit, so its constructor needs two values.','service/LibraryService.java → borrowItem()',
`if (openLoans >= member.getMaxItems()) {
    throw new BorrowingLimitExceededException(
        member.getName() + " reached the limit.");
}`,'The exception is created with a message and the limit.','Compile error: constructor BorrowingLimitExceededException cannot be applied to given types. Required: String,int. Found: String.',
['Check the constructor in BorrowingLimitExceededException.','It wants a String and an int.'],[/BorrowingLimitExceededException\([^;]*,member\.getMaxItems\(\)\);/],[],
`if (openLoans >= member.getMaxItems()) {
    throw new BorrowingLimitExceededException(
        member.getName() + " reached the limit.", member.getMaxItems());
}`,['The throw new BorrowingLimitExceededException(...) line.','It gives only a message, but the constructor also needs the limit.','The constructor has two parameters, so Java needs two values.','Custom exceptions can carry extra data. Ours keeps the limit in a field.','Add member.getMaxItems() as the second value.','Both values are given, and getLimit() can read the limit later.']),
E('e3','E','Advanced','The rule that ignores the Strategy','Fines must come from the member’s policy, so students and faculty pay different amounts.','model/Member.java → calculateFine()',
`public double calculateFine(int daysOverdue) {
    return daysOverdue * 5.00;
}`,'A faculty member 10 days late pays PHP 20.00. A student pays PHP 50.00.','Everyone pays PHP 5.00 per day, even faculty.',
['Where do the real fine rules live?','Member already has a policy field.'],[/returnpolicy\.calculateFine\(daysOverdue\);/],[/\*5\.0/],
`public double calculateFine(int daysOverdue) {
    return policy.calculateFine(daysOverdue);
}`,['The return line in calculateFine().','It uses one fixed rate for every member.','This skips the Strategy pattern. Faculty fines (PHP 2.00) are never used.','Strategy pattern: the rules live in separate classes, and Member only asks its policy.','Return policy.calculateFine(daysOverdue).','Each member asks its own policy, so adding a new member type needs no change here.']),
E('f1','F','Intermediate','Saving by appending','Saving must replace the old file with the current list.','storage/Repository.java → saveToFile() (changed to write directly)',
`try (BufferedWriter writer =
        new BufferedWriter(new FileWriter(path, true))) {
    for (T record : records) {
        writer.write(toLine.apply(record));
        writer.newLine();
    }
}`,'items.txt has each record once.','Every save adds all records again, so items.txt grows with duplicates.',
['Look at the second value in new FileWriter(path, true).','true means append (add to the end).'],[/newFileWriter\(path\)|newFileWriter\(path,false\)/],[/FileWriter\(\w+,true\)/],
`try (BufferedWriter writer =
        new BufferedWriter(new FileWriter(path))) {
    for (T record : records) {
        writer.write(toLine.apply(record));
        writer.newLine();
    }
}`,['new FileWriter(path, true).','It opens the file in append mode and adds to the old content.','We write the full list each time, so old lines plus new lines make duplicates.','File modes: append adds to the end. Overwrite replaces everything.','Remove true (or use false).','Each save replaces the file, so every record appears once.']),
E('f3','F','Advanced','Borrowed items that look available','After loading loans.txt, items with an open loan must be marked borrowed.','service/LibraryService.java → loadAll()',
`for (Loan loan : loanRepo.getAll()) {
    if (loan.isReturned()) {
        itemRepo.findById(loan.getItemId()).markBorrowed();
    }
}`,'M001 is on an open loan, so it shows as borrowed after restart.','After restart, borrowed items show as available, and returned items show as borrowed.',
['Which loans should mark the item as borrowed?','An open loan is one that is NOT returned.'],[/if\(!loan\.isReturned\(\)\)\{itemRepo\.findById\(loan\.getItemId\(\)\)\.markBorrowed\(\);/],[],
`for (Loan loan : loanRepo.getAll()) {
    if (!loan.isReturned()) {
        itemRepo.findById(loan.getItemId()).markBorrowed();
    }
}`,['The if line inside the loop.','It marks items borrowed when their loan IS returned.','Items go on loan by the wrong rule, so state after restart is wrong. Items are not saved as borrowed, only the loans are.','Persistence: after loading, we rebuild object state from the saved records.','Add ! before loan.isReturned().','Only open loans mark items as borrowed, so the state matches before closing.']),
E('g1','G','Beginner','Borrowing a borrowed book','If an item is already borrowed, borrowing must be refused.','service/LibraryService.java → borrowItem()',
`if (item.isAvailable()) {
    throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
}`,'A borrowed item cannot be borrowed again.','Available items are refused, and borrowed items are allowed.',
['Read the condition: when does it throw?','Throw when the item is NOT available.'],[/if\((!item\.isAvailable\(\)|item\.isAvailable\(\)==false)\)\{throw/],[],
`if (!item.isAvailable()) {
    throw new ItemNotAvailableException("'" + item.getTitle() + "' is already borrowed.");
}`,['The if line before the throw.','It throws when the item IS available.','The condition is the opposite of the message.','Boolean logic: ! flips true to false. isAvailable() is true when the item is on the shelf.','Add ! before item.isAvailable().','Now only items that are not available cause the error.']),
E('g5','G','Advanced','Returning the wrong loan','findOpenLoanForItem() must find the one open loan for the given item.','service/LibraryService.java → findOpenLoanForItem()',
`for (Loan loan : loanRepo.getAll()) {
    if (loan.getItemId().equals(itemId) || !loan.isReturned()) {
        return loan;
    }
}
return null;`,'Returns the open loan of that exact item.','Returning one item closes the first open loan of any item, so the wrong member gets the fine.',
['What does || mean? What does && mean?','We need both things to be true at once.'],[/loan\.getItemId\(\)\.equals\(itemId\)&&!loan\.isReturned\(\)/],[],
`for (Loan loan : loanRepo.getAll()) {
    if (loan.getItemId().equals(itemId) && !loan.isReturned()) {
        return loan;
    }
}
return null;`,['The if line with ||.','|| means OR, so any open loan matches, even for another item.','The wrong loan is closed and the fine goes to the wrong person.','Logic operators: && needs both sides true. || needs only one.','Use && instead of ||.','Only a loan that has this item and is still open is returned.'])
);
