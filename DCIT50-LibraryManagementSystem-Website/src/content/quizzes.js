/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: Quizzes - knowledge checks for students.
 */

const quizzes = {
  basics: {
    title: "Java Basics Quiz",
    description: "Check your understanding of Java fundamentals, syntax, and the program startup.",
    questions: [
      {
        q: "What is the entry point of a Java program?",
        options: ["The main method", "The class constructor", "The package", "The JVM"],
        correct: 0,
        explanation: "The main method is where the JVM starts running. Its signature is public static void main(String[] args).",
      },
      {
        q: "Which command compiles Java code?",
        options: ["java", "javac", "compile", "jdk"],
        correct: 1,
        explanation: "The javac command compiles Java source code into class files. The java command runs the program.",
      },
      {
        q: "What does JVM stand for?",
        options: ["Java Virtual Machine", "Java Variable Method", "Java Version Machine", "Just Virtual Method"],
        correct: 0,
        explanation: "JVM is the Java Virtual Machine. It runs the compiled class files. This is what makes 'write once, run anywhere' work.",
      },
      {
        q: "Which symbol ends a Java statement?",
        options: ["Comma", "Semicolon", "Colon", "Dot"],
        correct: 1,
        explanation: "Each Java statement ends with a semicolon. For example: int x = 5;",
      },
      {
        q: "What is a variable?",
        options: ["A named box that holds a value", "A type of loop", "A method", "A class"],
        correct: 0,
        explanation: "A variable is a named box with a type that holds a value. For example: int count = 5;",
      },
    ],
  },
  oop: {
    title: "Object-Oriented Quiz",
    description: "Check your understanding of classes, inheritance, polymorphism, and more.",
    questions: [
      {
        q: "What does 'class Book extends LibraryItem' mean?",
        options: ["Book is a child of LibraryItem", "Book is a parent of LibraryItem", "Book implements LibraryItem", "Book is a copy of LibraryItem"],
        correct: 0,
        explanation: "The extends keyword means Book is a child of LibraryItem. Book inherits the fields and methods of LibraryItem.",
      },
      {
        q: "What is the purpose of private?",
        options: ["To make a field or method only accessible inside its own class", "To make it public", "To make it static", "To make it final"],
        correct: 0,
        explanation: "private means only the code inside the class can access it. No other class can read or change it directly.",
      },
      {
        q: "What is a constructor?",
        options: ["A method that runs when an object is created", "A method that runs when the program ends", "A type of class", "A namespace"],
        correct: 0,
        explanation: "A constructor is a special method that runs when an object is created with new. Its name is the same as the class.",
      },
      {
        q: "What is the Strategy pattern?",
        options: ["A pattern where behavior is interchangeable", "A pattern where there is only one object", "A pattern where all classes are the same", "A pattern where everything is static"],
        correct: 0,
        explanation: "The Strategy pattern lets us change behavior by swapping objects. In our project, a member uses a policy object (StudentPolicy or FacultyPolicy).",
      },
      {
        q: "What does the @Override annotation mean?",
        options: ["I am deliberately replacing a parent method", "This method is new", "This method is private", "This method is static"],
        correct: 0,
        explanation: "The @Override annotation tells the compiler: I am replacing a method from the parent class. If the parent method does not exist, the compiler warns us.",
      },
    ],
  },
  collections: {
    title: "Collections and Generics Quiz",
    description: "Check your understanding of ArrayList, HashMap, generics, and lambda expressions.",
    questions: [
      {
        q: "What does the <T> in Repository<T> mean?",
        options: ["T is a placeholder for a type", "T is a variable", "T is a method", "T is a constant"],
        correct: 0,
        explanation: "The <T> is a generic type parameter. It is a placeholder for the real type, like Repository<LibraryItem>.",
      },
      {
        q: "Which collection finds items by key?",
        options: ["ArrayList", "HashMap", "Array", "int"],
        correct: 1,
        explanation: "A HashMap stores key/value pairs. We look up a value by its key. Repository uses a HashMap to find records by ID.",
      },
      {
        q: "Which interface has the test() method returning boolean?",
        options: ["Predicate", "Function", "Consumer", "Runnable"],
        correct: 0,
        explanation: "Predicate<T> has a test(T t) method that returns boolean. We use it to filter records in findAll().",
      },
      {
        q: "What does lambda syntax look like?",
        options: ["(x) -> x + 1", "x => x + 1", "x ->> x + 1", "x | x + 1"],
        correct: 0,
        explanation: "The arrow -> separates parameters from the body. For example: x -> x + 1 returns the value plus one.",
      },
      {
        q: "Why is the repository generic?",
        options: ["To write the code once for all three record types", "To make it harder", "To use more keywords", "To make it slower"],
        correct: 0,
        explanation: "The generic repository means we write the save and load logic once. We use the same class for items, members, and loans.",
      },
    ],
  },
  design: {
    title: "Design Patterns & Quality Quiz",
    description: "Check your understanding of the patterns in our project and code quality.",
    questions: [
      {
        q: "What problem does the Factory pattern solve?",
        options: ["It hides how objects are created", "It makes code run faster", "It makes classes private", "It creates loops"],
        correct: 0,
        explanation: "The Factory pattern hides object creation. The caller asks for an object, and the factory decides which class to build.",
      },
      {
        q: "What does SOLID stand for?",
        options: ["Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion", "Simple, Organized, Logical, Integrated, Documented", "System, Output, Logic, Input, Data", "Small, Open, Low, Inner, Deep"],
        correct: 0,
        explanation: "SOLID is the acronym for the five O-O design principles: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.",
      },
      {
        q: "What does DRY mean?",
        options: ["Don't Repeat Yourself", "Do Repeat Yourself", "Do Not Remove", "Do Not Read"],
        correct: 0,
        explanation: "DRY means Don't Repeat Yourself. Every piece of knowledge should have one clear representation. The repository writes save and load logic once, so we do not repeat it.",
      },
      {
        q: "Why is Main kept thin?",
        options: ["It only creates objects and starts the menu", "It runs all the logic", "It saves the data", "It reads the files"],
        correct: 0,
        explanation: "Main does not contain any library logic. It creates LibraryService and MenuController, then starts menu.run().",
      },
      {
        q: "Which patterns are implemented in our project?",
        options: ["Factory, Strategy, and Observer", "Singleton, Decorator, and Command", "Adapter, Facade, and Proxy", "All of the above"],
        correct: 0,
        explanation: "Our project implements the Factory pattern (LibraryFactory), the Strategy pattern (BorrowingPolicy and its implementations), and the Observer pattern (LibraryService's observers).",
      },
    ],
  },
  final: {
    title: "Final Review Test",
    description: "A full review of all the important topics in this website. This is like a final check for the demonstration.",
    questions: [
      {
        q: "Which class is the entry point of the program?",
        options: ["Main", "MenuController", "LibraryService", "ConsoleHelper"],
        correct: 0,
        explanation: "Main contains the main method. The JVM starts there. It is thin: it creates the service, the menu, and starts it.",
      },
      {
        q: "Which class enforces the borrowing rules?",
        options: ["LibraryService", "MenuController", "LibraryFactory", "ConsoleHelper"],
        correct: 0,
        explanation: "LibraryService checks if a borrow is allowed. It verifies the item is available and the member has not reached the limit.",
      },
      {
        q: "Which class stores the data files?",
        options: ["Repository", "LibraryService", "MenuController", "Main"],
        correct: 0,
        explanation: "Repository handles saving and loading the three data files. It is generic, so it works for items, members, and loans.",
      },
      {
        q: "What happens when the program starts with a missing data file?",
        options: ["The program starts with empty data", "The program crashes", "The program asks the user to create the file", "The program uses default data"],
        correct: 0,
        explanation: "The repository returns an empty list if the file is missing. The program starts with no records and creates the files as needed.",
      },
      {
        q: "Which exception is thrown when an ID is not found?",
        options: ["RecordNotFoundException", "LibraryRuleException", "IOException", "NullPointerException"],
        correct: 0,
        explanation: "Repository.getById() throws RecordNotFoundException when the record is not found. The menu catches it and shows the message.",
      },
      {
        q: "What is the Observer pattern used for in our project?",
        options: ["To notify multiple observers about events", "To create observers only once", "To hide observers", "To stop observers"],
        correct: 0,
        explanation: "LibraryService is the subject. It notifies observers when there are overdue loans or late returns. The menu adds two observers.",
      },
      {
        q: "How does the return flow calculate a fine?",
        answer: "It calculates days late, then uses the member's policy to calculate the fine.",
        options: ["It calculates days late, then uses the member's policy", "It uses a fixed PHP 10 for all returns", "It does not calculate fines", "It reads the fine from a file",
        ],
        correct: 0,
        explanation: "The return flow gets the loan, counts the days late, and calls the member's policy to calculate the fine. StudentPolicy charges PHP 5/day; FacultyPolicy charges PHP 2/day.",
      },
      {
        q: "What is the benefit of using generics?",
        options: ["We write the code once and the compiler checks types", "We can store any object in the same list", "Generics are faster", "Generics remove the need for classes"],
        correct: 0,
        explanation: "Generics let us write one repository class that works with any type. The compiler checks that we do not mix types.",
      },
      {
        q: "How does the menu handle invalid input?",
        options: ["readInt and readText keep asking until a valid value is given", "It crashes", "It exits the program", "It ignores the input"],
        correct: 0,
        explanation: "ConsoleHelper.readInt and readText use while loops to keep asking until the user types a valid value. For example, readInt only accepts numbers between the min and max.",
      },
      {
        q: "What is the correct sequence for borrowing?",
        options: ["Find item, find member, check availability, check limit, create loan", "Create loan, find item, find member", "Check limit, create loan, find item", "Save data, create loan, print menu"],
        correct: 0,
        explanation: "The borrow flow is: find the item, find the member, check availability, check the member limit, create the loan, save, and mark the item as borrowed.",
      },
    ],
  },
};

export default quizzes;
