/**
 * DCIT 50 Library Management System - Learning Hub
 * Content data bundle (non-module). Sets window.DCIT50Content.
 *
 * GENERATED FILE - do not edit by hand.
 * Edit src/content/*.js and run: python build-content.py
 */
window.DCIT50Content = window.DCIT50Content || {};

(function () {

/* ===== java-fundamentals.js ===== */
/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: Java Fundamentals (11 chapters).
 */

const javaFundamentals = {
  chapters: [
    {
      id: "ch1",
      number: "1",
      title: "Understanding Java",
      icon: "☕",
      lessons: [
        {
          id: "l1-1",
          title: "What is Java?",
          content: `
             <p>Java is a <strong>programming language</strong>. A programming language is a way for humans to tell a computer what to do.</p>
             <p>Think of a programming language like a foreign language. Just as you use English or Tagalog to talk to other people, you use Java to talk to a computer.</p>
             <p>Java was created in 1995 by a company called Sun Microsystems. Today, many big companies use it because it works on many different machines.</p>
             <p>Our project uses Java to build a <strong>Library Management System</strong>. This is a small program that helps a library keep track of books, members, and borrowing.</p>`,
        },
        {
          id: "l1-2",
          title: "What is a programming language?",
          content: `
             <p>A <strong>programming language</strong> lets us write instructions for a computer. The computer reads those instructions and does what we ask.</p>
             <p>Without a programming language, we could only press buttons on a machine. With one, we can make a computer solve math problems, show pictures, or run a library system.</p>
             <p>There are many programming languages: Python, C, JavaScript, and Java. Each has its own rules. Java's rules are strict, which helps keep code neat and safe.</p>`,
        },
        {
          id: "l1-3",
          title: "What is a Java program?",
          content: `
             <p>A <strong>Java program</strong> is a list of instructions written in Java. When the computer runs it, the program does what the instructions say.</p>
             <p>Our Library Management System is a Java program. When the professor runs it, it shows a menu. When we choose an option, it adds a book, searches for an item, or saves data.</p>
             <p>Every Java program is made of <strong>classes</strong>. A class is like a blueprint. It describes what an object can do and what data it holds.</p>`,
        },
        {
          id: "l1-4",
          title: "What is the JDK?",
          content: `
             <p>JDK stands for <strong>Java Development Kit</strong>. It is a set of tools that lets us write and run Java programs.</p>
             <p>The JDK includes three important things:</p>
             <ul style="padding-left:20px;">
               <li><code>javac</code> &mdash; the <strong>compiler</strong>. It turns Java source code into machine-readable class files.</li>
               <li><code>java</code> &mdash; the <strong>interpreter/runner</strong>. It starts a Java program.</li>
               <li>Libraries &mdash; ready-made code we can use, like reading text or working with dates.</li>
             </ul>
             <p>Our project uses the JDK. The professor runs <code>javac</code> to compile the code, then <code>java</code> to run the program.</p>`,
        },
        {
          id: "l1-5",
          title: "What is the JVM?",
          content: `
             <p>JVM stands for <strong>Java Virtual Machine</strong>. It is a program that runs Java <em>class</em> files.</p>
             <p>The important idea is this: <strong>write once, run anywhere</strong>. A Java class file made on one machine can run on any other machine that has a JVM, no matter what kind of computer it is.</p>
             <p>Think of the JVM as a translator. The compiler (<code>javac</code>) turns Java code into a special form called <em>bytecode</em>. The JVM reads the bytecode and carries it out on the computer.</p>`,
        },
        {
          id: "l1-6",
          title: "What is the difference between compiling and running?",
          content: `
             <table class="table-card">
               <thead>
                 <tr><th>Step</th><th>Compiling</th><th>Running</th></tr>
               </thead>
               <tbody>
                 <tr>
                   <td><strong>What it does</strong></td>
                   <td>Checks the code and turns it into class files</td>
                   <td>Loads the class files and starts the program</td>
                 </tr>
                 <tr>
                   <td><strong>Command</strong></td>
                   <td><code>javac FileName.java</code></td>
                   <td><code>java FileName</code></td>
                 </tr>
                 <tr>
                   <td><strong>If it fails</strong></td>
                   <td>You see compiler errors &mdash; mistakes in the code</td>
                   <td>You see runtime errors &mdash; mistakes in how the program runs</td>
                 </tr>
                 <tr>
                   <td><strong>In our project</strong></td>
                   <td><code>javac src/app/Main.java ...</code></td>
                   <td><code>java app.Main</code></td>
                 </tr>
               </tbody>
             </table>
             <p><strong>Compiling</strong> is like checking your homework before you hand it in. <strong>Running</strong> is like handing it in and letting the teacher see the result.</p>`,
        },
        {
          id: "l1-7",
          title: "What are .java and .class files?",
          content: `
             <p>A <strong>.java file</strong> is the source code. It is the text we write with a text editor or an IDE. It is human-readable.</p>
             <p>A <strong>.class file</strong> is the compiled code. The compiler turns Java source into class files. The computer reads these, not the .java files directly.</p>
             <table class="table-card">
               <thead>
                 <tr><th>File type</th><th>What it is</th><th>Who reads it</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>FileName.java</code></td><td>Source code (what we write)</td><td>Humans (and the compiler)</td></tr>
                 <tr><td><code>FileName.class</code></td><td>Compiled code (bytecode)</td><td>The JVM</td></tr>
               </tbody>
             </table>
             <p>When we open the project in this website, the <strong>.java</strong> files are the ones we study. The .class files exist on the computer where the program runs.</p>`,
        },
        {
          id: "l1-8",
          title: "What do javac and java do?",
          content: `
             <p>The two commands you will use most:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Command</th><th>What it does</th><th>In our project</th></tr>
               </thead>
               <tbody>
                 <tr>
                   <td><strong>javac</strong></td>
                   <td>Compiles one or more Java files.</td>
                   <td>We run it on all files in <code>src/</code> to make <code>out/</code>.</td>
                 </tr>
                 <tr>
                   <td><strong>java</strong></td>
                   <td>Runs the compiled program.</td>
                   <td>We run <code>java app.Main</code> to start the library system.</td>
                 </tr>
               </tbody>
             </table>
             <p>In our project, the folder <code>src/app/Main.java</code> is the entry point. If we run <code>javac -d out src/app/Main.java</code>, the compiler puts the class files in <code>out/</code>.</p>`,
        },
      ],
    },
    {
      id: "ch2",
      title: "Basic Java syntax",
      icon: "📝",
      lessons: [
        {
          id: "l2-1",
          title: "Classes and the main method",
          content: `
             <p>A Java program is made of <strong>classes</strong>. A class is a container that holds data and behavior.</p>
             <p>The <strong>main method</strong> is where a Java program starts. When we type <code>java app.Main</code>, the JVM looks for <code>main</code> inside <code>app.Main</code>.</p>
             <p>Here is the main method from our project:</p>
             <pre><code class="language-java">public static void main(String[] args) {
    // code goes here
}</code></pre>
             <ul>
               <li><code>public</code> &mdash; anyone can call it.</li>
               <li><code>static</code> &mdash; it belongs to the class, not an object. We will explain <code>static</code> later.</li>
               <li><code>void</code> &mdash; it does not return a value.</li>
               <li><code>String[] args</code> &mdash; it accepts text input from the command line.</li>
             </ul>
             <p>In our project, <code>Main.java</code> only holds this method. It creates the service and menu and hands control to them.</p>`,
          type: "code",
          code: `public class Main {
    public static void main(String[] args) {
        // The program starts here
    }
}`,
        },
        {
          id: "l2-2",
          title: "Statements and code blocks",
          content: `
             <p>A <strong>statement</strong> is one instruction for the computer. Each statement ends with a <strong>semicolon</strong> (<code>;</code>).</p>
             <p>A <strong>code block</strong> is a group of statements inside <strong>curly braces</strong> (<code>{ }</code>). The braces show the computer where the block begins and ends.</p>
             <p>Example from our project:</p>
             <pre><code class="language-java">public class MenuController {
    // This is a code block for the class
    public void run() {
        // This is a code block for the method
        int choice = 1;
        if (choice == 1) {
            // This is a code block for the condition
            System.out.println("Choice is 1");
        }
    }
}</code></pre>
             <p>Remember:</p>
             <ul style="padding-left:20px;">
               <li><code>(</code> and <code>)</code> &mdash; round brackets, used for method calls and conditions.</li>
               <li><code>{</code> and <code>}</code> &mdash; curly braces, used for code blocks.</li>
               <li><code>;</code> &mdash; semicolon, ends a statement.</li>
             </ul>`,
        },
        {
          id: "l2-3",
          title: "Variables and data types",
          content: `
             <p>A <strong>variable</strong> is a box that holds a value. We give it a name, and a type that says what kind of value it can hold.</p>
             <p>Java has two groups of types:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Group</th><th>Type</th><th>What it holds</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><strong>Primitive</strong></td><td><code>int</code></td><td>Whole numbers</td><td><code>42</code></td></tr>
                 <tr><td>Primitive</td><td><code>double</code></td><td>Decimal numbers</td><td><code>3.14</code></td></tr>
                 <tr><td>Primitive</td><td><code>boolean</code></td><td>True or false</td><td><code>true</code></td></tr>
                 <tr><td>Primitive</td><td><code>char</code></td><td>One character</td><td><code>'A'</code></td></tr>
                 <tr><td>Reference</td><td><code>String</code></td><td>Text</td><td><code>"Library"</code></td></tr>
               </tbody>
             </table>
             <p>In our project, the <code>Book</code> class has fields like:</p>
             <pre><code class="language-java">private String itemId;  // holds text: "B001"
private boolean available; // holds true or false</code></pre>
             <p>When we explain <code>private String itemId;</code>:</p>
             <ul>
               <li><code>private</code> &mdash; only this class can see it (we will explain in Chapter 5).</li>
               <li><code>String</code> &mdash; the type: text.</li>
               <li><code>itemId</code> &mdash; the name of the variable.</li>
               <li><code>;</code> &mdash; ends the statement.</li>
             </ul>`,
        },
        {
          id: "l2-4",
          title: "Strings, integers, doubles, and booleans",
          content: `
             <p>Common types in our project:</p>
             <ul style="padding-left:20px;">
               <li><code>String</code> &mdash; text like a title or a name.</li>
               <li><code>int</code> &mdash; whole numbers like 3 items or 7 days.</li>
               <li><code>double</code> &mdash; decimal numbers like a fine of PHP 5.00.</li>
               <li><code>boolean</code> &mdash; true or false, like whether an item is available.</li>
             </ul>
             <p>Examples from the code:</p>
             <pre><code class="language-java">String title = "Clean Code";      // a String (text)
int loanDays = 7;                  // an int (whole number)
double fine = 5.0;                 // a double (decimal number)
boolean available = true;          // a boolean (true/false)</code></pre>
             <p>Strings are inside <strong>quotation marks</strong> (<code>" "</code>). The letter <code>n</code> is a special code that means a new line.</p>`,
        },
        {
          id: "l2-5",
          title: "Constants",
          content: `
             <p>A <strong>constant</strong> is a variable whose value never changes. We declare it with the keyword <code>final</code>.</p>
             <p>Examples from the project:</p>
             <pre><code class="language-java">private static final int MAX_ITEMS = 3;
private static final double FINE_PER_DAY = 5.00;</code></pre>
             <ul>
               <li><code>final</code> &mdash; tells Java: do not change this after it is set.</li>
               <li><code>static</code> &mdash; belongs to the class, not an object.</li>
               <li>Names of constants are written in <strong>UPPER_SNAKE_CASE</strong>: <code>MAX_ITEMS</code>, <code>FINE_PER_DAY</code>.</li>
             </ul>
             <p>This tells the reader: <em>this value is a fixed rule.</em> A student can see it is 3 or 5.00 and never has to guess.</p>`,
        },
        {
          id: "l2-6",
          title: "Operators",
          content: `
             <p>An <strong>operator</strong> is a symbol that does a math or logic operation.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>+</code></td><td>Add</td><td><code>3 + 2</code></td></tr>
                 <tr><td><code>-</code></td><td>Subtract</td><td><code>5 - 2</code></td></tr>
                 <tr><td><code>*</code></td><td>Multiply</td><td><code>3 * 4</code></td></tr>
                 <tr><td><code>/</code></td><td>Divide</td><td><code>10 / 2</code></td></tr>
                 <tr><td><code>%</code></td><td>Remainder (modulo)</td><td><code>10 % 3</code> = 1</td></tr>
                 <tr><td><code>==</code></td><td>Equal to</td><td><code>x == 5</code></td></tr>
                 <tr><td><code>!=</code></td><td>Not equal</td><td><code>x != 5</code></td></tr>
                 <tr><td><code>&lt;</code></td><td>Less than</td><td><code>x &lt; 5</code></td></tr>
                 <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>x &gt; 5</code></td></tr>
                 <tr><td><code>&amp;&amp;</code></td><td>And</td><td><code>a &amp;&amp; b</code></td></tr>
                 <tr><td><code>||</code></td><td>Or</td><td><code>a || b</code></td></tr>
                 <tr><td><code>!</code></td><td>Not</td><td><code>!found</code></td></tr>
               </tbody>
             </table>
             <p>The <code>%</code> operator is very useful for checking if a number is evenly divisible. For example, <code>x % 2 == 0</code> means <em>x is even</em>.</p>`,
        },
        {
          id: "l2-7",
          title: "Comments",
          content: `
             <p>A <strong>comment</strong> is text the computer ignores. We write comments to explain the code for humans.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Type</th><th>Symbol</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td>Single-line</td><td><code>//</code></td><td><code>// this is a comment</code></td></tr>
                 <tr><td>Multi-line</td><td><code>/* */</code></td><td><code>/* this is a multi-line comment */</code></td></tr>
                 <tr><td>Documentation</td><td><code>/** */</code></td><td>Used for Javadoc, which can generate documentation</td></tr>
               </tbody>
             </table>
             <p>Our project has many comments:</p>
             <pre><code class="language-java">// This class handles the borrowing policies.
public class StudentPolicy implements BorrowingPolicy {
    // 3 items and 7 days for a student
    private static final int MAX_ITEMS = 3;</code></pre>
             <p>Good comments explain <em>why</em>, not <em>what</em>. The code already shows <em>what</em> it does.</p>`,
        },
        {
          id: "l2-8",
          title: "Printing output",
          content: `
             <p>We print text to the screen using <code>System.out.println</code> or <code>System.out.print</code>.</p>
             <pre><code class="language-java">System.out.println("Hello");   // prints text and a new line
System.out.print("Hello");      // prints text without a new line</code></pre>
             <p>The word <code>out</code> is the <em>output</em> stream. <code>println</code> stands for <strong>print line</strong>, meaning it adds a new line after the text.</p>
             <p>Our <code>ConsoleHelper</code> class wraps <code>System.out</code> so the whole program uses the same print style:</p>
             <pre><code class="language-java">console.line("=== LIBRARY MANAGEMENT SYSTEM ===");
console.success("Item added.");
console.error("A problem happened.");</code></pre>
             <p>Each message gets a tag: <code>[SUCCESS]</code>, <code>[ERROR]</code>, <code>[INFO]</code>, <code>[WARNING]</code>, <code>[NOTICE]</code>.</p>`,
        },
        {
          id: "l2-9",
          title: "Getting user input",
          content: `
             <p>To read what the user types, we use a <code>Scanner</code>. It reads text from the keyboard.</p>
             <p>Our <code>ConsoleHelper</code> class hides the details so the rest of the program stays simple. Here is the idea:</p>
             <pre><code class="language-java">import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
String name = scanner.nextLine();  // reads a whole line of text
int age = scanner.nextInt();       // reads a whole number</code></pre>
             <ul>
               <li><code>System.in</code> &mdash; the keyboard input.</li>
               <li><code>nextLine()</code> &mdash; reads a full line of text.</li>
               <li><code>nextInt()</code> &mdash; reads an integer.</li>
             </ul>
             <p>In our project, <code>ConsoleHelper.readText</code> reads text and makes sure it is not empty and does not contain the <code>|</code> character.</p>`,
          type: "code",
          code: `public class ConsoleHelper {
    private final Scanner scanner = new Scanner(System.in);

    public String readText(String prompt) {
        System.out.print(prompt);
        return scanner.nextLine().trim();
    }
}`,
        },
      ],
    },
    {
      id: "ch3",
      title: "Conditions and loops",
      icon: "🔀",
      lessons: [
        {
          id: "l3-1",
          title: "if, else if, and else",
          content: `
             <p>A condition is a question with a true or false answer. <code>if</code> tells the computer: <em>if the answer is true, run this code.</em></p>
             <pre><code class="language-java">if (score &gt;= 75) {
    System.out.println("Passed");
} else {
    System.out.println("Failed");
}</code></pre>
             <p>The three parts:</p>
             <ul style="padding-left:20px;">
               <li><code>if (condition)</code> &mdash; run this block if the condition is true.</li>
               <li><code>else if (condition)</code> &mdash; check another condition if the first is false.</li>
               <li><code>else</code> &mdash; run this block if nothing before was true.</li>
             </ul>
             <p>In our project, the menu checks the user's choice:</p>
             <pre><code class="language-java">if (choice == 1) {
    addItem();
} else if (choice == 2) {
    searchItems();
} else {
    // invalid choice
}</code></pre>
             <p><code>==</code> means <em>equal to</em>. <code>=</code> means <em>assign a value</em>. These are two different things!</p>`,
        },
        {
          id: "l3-2",
          title: "Comparison operators",
          content: `
             <p>Comparison operators compare two things and return <code>true</code> or <code>false</code>.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Operator</th><th>Meaning</th><th>Example (result)</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>==</code></td><td>Equal</td><td><code>5 == 5</code> (true)</td></tr>
                 <tr><td><code>!=</code></td><td>Not equal</td><td><code>5 != 3</code> (true)</td></tr>
                 <tr><td><code>&lt;</code></td><td>Less than</td><td><code>3 &lt; 5</code> (true)</td></tr>
                 <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>7 &gt; 4</code> (true)</td></tr>
                 <tr><td><code>&lt;=</code></td><td>Less than or equal</td><td><code>5 &lt;= 5</code> (true)</td></tr>
                 <tr><td><code>&gt;=</code></td><td>Greater than or equal</td><td><code>6 &gt;= 5</code> (true)</td></tr>
               </tbody>
             </table>
             <p>In our project, the code checks if an item is available:</p>
             <pre><code class="language-java">if (!item.isAvailable()) {
    throw new LibraryRuleException("Item is already borrowed.");
}</code></pre>
             <p>The <code>!</code> means <em>not</em>. So <code>!available</code> means <em>not available</em>.</p>`,
        },
        {
          id: "l3-3",
          title: "Logical operators",
          content: `
             <p>Logical operators combine conditions.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>&amp;&amp;</code></td><td>AND &mdash; both must be true</td><td><code>a &amp;&amp; b</code></td></tr>
                 <tr><td><code>||</code></td><td>OR &mdash; one can be true</td><td><code>a || b</code></td></tr>
                 <tr><td><code>!</code></td><td>NOT &mdash; flip true/false</td><td><code>!a</code></td></tr>
               </tbody>
             </table>
             <p>Examples:</p>
             <pre><code class="language-java">if (age &gt;= 18 &amp;&amp; age &lt;= 65) {
    System.out.println("Adult");
}

if (score &gt;= 50 || score &lt;= 10) {
    // score is 50 or more, or 10 or less
}</code></pre>
             <p>Be careful: <code>&amp;&amp;</code> needs both sides true. If the first part is false, Java skips the second part. This is called <strong>short-circuit evaluation</strong>.</p>`,
        },
        {
          id: "l3-4",
          title: "switch",
          content: `
             <p>A <code>switch</code> statement checks a single value against many cases.</p>
             <pre><code class="language-java">switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other");
}</code></pre>
             <ul>
               <li><code>case</code> &mdash; a possible value.</li>
               <li><code>break</code> &mdash; stops the switch (else it runs the next case too).</li>
               <li><code>default</code> &mdash; what to do if no case matches.</li>
             </ul>
             <p>In our project, the code does not use <code>switch</code> for the menu (it uses <code>if/else</code>). But <code>LibraryFactory</code> does use a <code>switch</code> to decide what type of item to create:</p>
             <pre><code class="language-java">switch (type.trim().toUpperCase()) {
    case "BOOK":
        return new Book(id, title, detail1, detail2);
    case "MAGAZINE":
        return new Magazine(id, title, detail1, detail2);
    default:
        throw new IllegalArgumentException("Unknown item type: " + type);
}</code></pre>
             <p>Notice <code>toUpperCase()</code> &mdash; it turns the text into upper case (we will explain methods like this later).</p>`,
        },
        {
          id: "l3-5",
          title: "for loops",
          content: `
             <p>A <code>for</code> loop repeats code a known number of times.</p>
             <pre><code class="language-java">for (int i = 0; i &lt; 5; i++) {
    System.out.println("Count " + i);
}</code></pre>
             <p>The three parts in the parentheses:</p>
             <ul style="padding-left:20px;">
               <li><strong>Start:</strong> <code>int i = 0</code> &mdash; set the counter.</li>
               <li><strong>Condition:</strong> <code>i &lt; 5</code> &mdash; keep going while true.</li>
               <li><strong>Step:</strong> <code>i++</code> &mdash; add 1 after each round.</li>
             </ul>
             <p>In our project, the code loops over all items:</p>
             <pre><code class="language-java">for (T record : records) {
    if (condition.test(record)) {
        result.add(record);
    }
}</code></pre>
             <p>This reads: <em>for each record in records, do something.</em> The <code>:</code> means <em>in</em>.</p>`,
        },
        {
          id: "l3-6",
          title: "while loops",
          content: `
             <p>A <code>while</code> loop repeats while a condition is true. We do not know how many times in advance.</p>
             <pre><code class="language-java">while (counter &lt; 10) {
    counter++;
}</code></pre>
             <p>Use <code>while</code> when you do not know how many times you need to repeat. Use <code>for</code> when you <em>do</em> know the count.</p>
             <p>In our project, the menu loop runs until the user chooses exit:</p>
             <pre><code class="language-java">while (running) {
    printMainMenu();
    int choice = console.readInt("Enter choice [0-11]: ", 0, 11);
    if (choice == 0) {
        running = false;
    }
}</code></pre>`,
        },
        {
          id: "l3-7",
          title: "do-while loops",
          content: `
             <p>A <code>do-while</code> loop runs <strong>at least once</strong>, then checks the condition.</p>
             <pre><code class="language-java">do {
    // code
} while (condition);</code></pre>
             <p>Use <code>do-while</code> when you want to run first and then check.</p>
             <p>In our project, <code>ConsoleHelper.readText</code> keeps asking until the user types something valid:</p>
             <pre><code class="language-java">public String readText(String prompt) {
    while (true) {
        String text = readLine(prompt);
        if (!text.isEmpty()) {
            return text;
        }
        error("Input cannot be empty.");
    }
}</code></pre>
             <p><code>while (true)</code> means <em>loop forever</em>. The only way out is the <code>return</code> or <code>break</code> inside.</p>`,
        },
        {
          id: "l3-8",
          title: "break and continue",
          content: `
             <p><strong>break</strong> stops a loop right now. <strong>continue</strong> jumps to the next round without finishing the current one.</p>
             <pre><code class="language-java">for (int i = 0; i &lt; 5; i++) {
    if (i == 2) {
        break;      // stop at 2
    }
    if (i == 1) {
        continue;   // skip printing 1
    }
    System.out.println(i);
}</code></pre>
             <p>In our project, <code>ConsoleHelper.readInt</code> uses <code>continue</code> to ask again when the input is invalid:</p>
             <pre><code class="language-java">while (true) {
    String text = readLine(prompt);
    try {
        int number = Integer.parseInt(text);
        if (number &gt;= min &amp;&amp; number &lt;= max) {
            return number;
        }
        error("Please enter a number between " + min + " and " + max + ".");
    } catch (NumberFormatException e) {
        error("'" + text + "' is not a whole number.");
    }
    // continue back to the top of the loop
}</code></pre>`,
        },
        {
          id: "l3-9",
          title: "Common mistakes with conditions and loops",
          content: `
             <div class="card">
               <h3>Common mistakes</h3>
               <ul style="padding-left:20px;">
                 <li><strong>Using <code>=</code> instead of <code>==</code></strong>: <code>if (x = 5)</code> assigns 5 to x, not compare.</li>
                 <li><strong>Off-by-one errors</strong>: loops run 0 to n-1, not 1 to n.</li>
                 <li><strong>Using <code>==</code> for Strings</strong>: String comparison needs <code>equals()</code>.</li>
                 <li><strong>Infinite loops</strong>: forgetting to change the counter in a <code>while</code> loop.</li>
                 <li><strong>Forgetting the <code>break</code></strong> in <code>switch</code>: one case runs into the next.</li>
                 <li><strong>Null pointer</strong>: calling a method on an object that does not exist.</li>
               </ul>
             </div>
             <p>Off-by-one means the loop runs one time too many or too few. Example: if you need 5 items, the loop runs i = 0, 1, 2, 3, 4 (five times). The mistake is writing <code>i &lt;= 5</code>, which gives six runs.</p>`,
        },
      ],
    },
    {
      id: "ch4",
      title: "Methods",
      icon: "📤",
      lessons: [
        {
          id: "l4-1",
          title: "What is a method?",
          content: `
             <p>A <strong>method</strong> is a named block of code that does a specific job. We call (run) the method to do that job.</p>
             <p>Example: <code>System.out.println("text")</code> is a method call. The method <code>println</code> prints text to the screen.</p>
             <p>In our project, <code>LibraryService</code> has many methods: <code>addItem</code>, <code>searchItems</code>, <code>borrowItem</code>, <code>saveAll</code>, and so on. Each does one job.</p>`,
        },
        {
          id: "l4-2",
          title: "Parameters and arguments",
          content: `
             <p>A <strong>parameter</strong> is a variable that the method receives when it starts. The <strong>argument</strong> is the actual value we pass.</p>
             <pre><code class="language-java">// definition: (String name) means one parameter named "name" of type String
public void greet(String name) {
    System.out.println("Hello " + name);
}

// call: ("Ana") means the argument "Ana"
greet("Ana");</code></pre>
             <ul>
               <li><code>name</code> in the parentheses is the <strong>parameter</strong>.</li>
               <li><code>"Ana"</code> in the call is the <strong>argument</strong>.</li>
             </ul>
             <p>In our project, the service method <code>borrowItem</code> takes two parameters:</p>
             <pre><code class="language-java">public Loan borrowItem(String itemId, String memberId)</code></pre>
             <p>When the menu calls it:</p>
             <pre><code class="language-java">service.borrowItem(itemId, memberId);</code></pre>
             <p>The parameters get the values of <code>itemId</code> and <code>memberId</code> from the user.</p>`,
        },
        {
          id: "l4-3",
          title: "Return types",
          content: `
             <p>A method can <strong>return</strong> a value back to the caller. The return type is written before the method name.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Return type</th><th>What it means</th><th>Example from our project</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>void</code></td><td>No value returned</td><td><code>public void addItem(...)</code></td></tr>
                 <tr><td><code>String</code></td><td>Returns text</td><td><code>public String getItemTitle(...)</code></td></tr>
                 <tr><td><code>int</code></td><td>Returns a whole number</td><td><code>public int getMaxItems()</code></td></tr>
                 <tr><td><code>double</code></td><td>Returns a decimal</td><td><code>public double calculateFine(...)</code></td></tr>
                 <tr><td><code>Loan</code></td><td>Returns an object</td><td><code>public Loan borrowItem(...)</code></td></tr>
               </tbody>
             </table>
             <p>The <code>return</code> keyword sends the value back. It also ends the method:</p>
             <pre><code class="language-java">public String getItemTitle(String itemId) {
    LibraryItem item = itemRepo.findById(itemId);
    // If the item is found, return its title. If not, return the ID.
    return (item == null) ? itemId : item.getTitle();
}</code></pre>
             <p>This line returns either the item title or the item ID, whichever is not null.</p>`,
        },
        {
          id: "l4-4",
          title: "void methods",
          content: `
             <p>A <code>void</code> method does a job and does <strong>not</strong> give a value back.</p>
             <pre><code class="language-java">public void saveAll() throws IOException {
    itemRepo.saveToFile(dataFolder + "/items.txt", LibraryItem::toFileLine);
    memberRepo.saveToFile(dataFolder + "/members.txt", Member::toFileLine);
    loanRepo.saveToFile(dataFolder + "/loans.txt", Loan::toFileLine);
}</code></pre>
             <p><code>saveAll</code> saves three files. It does not need to hand anything back to the caller.</p>
             <p>When a method is <code>void</code>, we cannot use its result as a value:</p>
             <pre><code class="language-java">// WRONG: this does not make sense
String result = service.saveAll();   // saveAll returns void</code></pre>`,
        },
        {
          id: "l4-5",
          title: "Method calls",
          content: `
             <p>To call a method, write its name followed by parentheses. If it needs data, put the data inside the parentheses.</p>
             <pre><code class="language-java">service.addItem(item);          // call addItem with one argument
console.line("Hello");            // call line with one argument
service.searchItems("clean");     // call searchItems with one argument</code></pre>
             <p>The object before the dot is the <strong>receiver</strong>. <code>service.addItem(item)</code> means <em>the service object runs the addItem method</em>.</p>
             <p>In our project, <code>MenuController</code> calls services many times:</p>
             <pre><code class="language-java">service.addItem(item);
service.saveAll();
loan = service.borrowItem(itemId, memberId);</code></pre>`,
        },
        {
          id: "l4-6",
          title: "Method overloading",
          content: `
             <p><strong>Method overloading</strong> means having two methods with the <strong>same name</strong> but <strong>different parameters</strong>.</p>
             <pre><code class="language-java">public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    public double add(double a, double b) {
        return a + b;
    }
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}</code></pre>
             <p>Each <code>add</code> method has the same name but a different list of parameter types. The compiler picks the right one based on the arguments.</p>
             <p>In our project, <code>LibraryFactory</code> has these methods:</p>
             <pre><code class="language-java">public static LibraryItem createItem(String type, String id, String title, String detail1, String detail2)
public static Member createMember(String type, String id, String name)
public static LibraryItem createItemFromLine(String line)
public static Member createMemberFromLine(String line)</code></pre>
             <p>Several share the same <strong>class-level</strong> meaning (creating something) but have different parameters.</p>`,
        },
        {
          id: "l4-7",
          title: "Scope of variables",
          content: `
             <p><strong>Scope</strong> is where a variable can be seen and used. A variable is only known inside the block where it is created.</p>
             <pre><code class="language-java">public void example() {
    int x = 10;              // x can be used here (method scope)

    if (x &gt; 5) {
        int y = 20;          // y can only be used inside this if block
        System.out.println(x + y);
    }

    // System.out.println(y);  // ERROR: y is not in scope here
}</code></pre>
             <ul>
               <li>Variables created inside <code>{ }</code> are visible only inside that block.</li>
               <li>Variables created in a method are visible in that method (and in blocks inside it).</li>
               <li>A variable named <code>i</code> in one method can share a name with <code>i</code> in another method.</li>
             </ul>
             <p>In the service, <code>countOpenLoans</code> is private. It can only be called by other methods in the same class.</p>`,
        },
        {
          id: "l4-8",
          title: "static and instance methods",
          content: `
             <p>A <strong>static</strong> method belongs to the class. An <strong>instance</strong> method belongs to an object.</p>
             <p>Example:</p>
             <pre><code class="language-java">public class MathUtils {
    // static method: call with ClassName.method()
    public static int add(int a, int b) {
        return a + b;
    }
}

// instance method: call on an object
MathUtils utils = new MathUtils();
int sum = utils.add(3, 4);  // ERROR: add is static, do not use object

// Correct:
int sum = MathUtils.add(3, 4);</code></pre>
             <p>In our project:</p>
             <ul style="padding-left:20px;">
               <li><code>LibraryService</code> &mdash; every method is an instance method (we use <code>service.method()</code>).</li>
               <li><code>LibraryFactory</code> &mdash; all methods are <code>static</code> (we call <code>LibraryFactory.createItem(...)</code>).</li>
               <li><code>ConsoleHelper.cut</code> &mdash; a static helper method we call directly.</li>
             </ul>
             <p>Static means <em>no object needed</em>. Instance means <em>you need an object first</em>.</p>`,
        },
      ],
    },
    {
      id: "ch5",
      title: "Object-Oriented Programming",
      icon: "🧩",
      lessons: [
        {
          id: "l5-1",
          title: "Classes and objects",
          content: `
             <p>A <strong>class</strong> is a blueprint. An <strong>object</strong> is a real thing built from the blueprint.</p>
             <pre><code class="language-java">public class Book {
    private String title;
    private String author;
}

// The blueprint:
Book book1 = new Book();   // creates an object from the blueprint
Book book2 = new Book();   // creates another object

book1.title = "Clean Code";
book2.title = "Head First Java";
</code></pre>
             <p>In our project, each book is an object. <code>new Book(...)</code> creates it. The <code>new</code> keyword makes a new object in memory.</p>
             <p>The project has these classes: <code>Book</code>, <code>Magazine</code>, <code>Member</code>, <code>Loan</code>, and <code>LibraryItem</code> (abstract). Each class is a blueprint for real objects.</p>`,
        },
        {
          id: "l5-2",
          title: "Attributes and methods",
          content: `
             <p>Inside a class, we have:</p>
             <ul style="padding-left:20px;">
               <li><strong>Attributes</strong> (also called fields or properties) &mdash; data the object holds.</li>
               <li><strong>Methods</strong> &mdash; behavior the object can do.</li>
             </ul>
             <p>Example from <code>Member</code>:</p>
             <pre><code class="language-java">public class Member {
    private String memberId;      // attribute
    private String name;          // attribute
    private BorrowingPolicy policy; // attribute

    public String getMemberId() { // method
        return memberId;
    }

    public String getName() {     // method
        return name;
    }
}</code></pre>
             <p>An object of <code>Member</code> holds an ID, a name, and a borrowing policy.</p>`,
        },
        {
          id: "l5-3",
          title: "Constructors",
          content: `
             <p>A <strong>constructor</strong> is a special method that runs when we create a new object. Its job is to set up the object.</p>
             <pre><code class="language-java">public class Book {
    private String author;
    private String isbn;

    public Book(String itemId, String title, String author, String isbn) {
        this.author = author;   // "this" points to this object
        this.isbn = isbn;
    }
}

Book b = new Book("B001", "Clean Code", "Robert Martin", "9780132350884");</code></pre>
             <ul>
               <li>The constructor name is the same as the class name.</li>
               <li>It has no return type (not even <code>void</code>).</li>
               <li>It runs once, when the object is created.</li>
             </ul>
             <p>In <code>Book</code>:</p>
             <pre><code class="language-java">public Book(String itemId, String title, String author, String isbn) {
    super(itemId, title);      // calls the parent class constructor
    setAuthor(author);         // sets the author
    setIsbn(isbn);             // sets the ISBN
}</code></pre>
             <p><code>super(...)</code> calls the constructor of the parent class (<code>LibraryItem</code>).</p>`,
        },
        {
          id: "l5-4",
          title: "Encapsulation",
          content: `
             <p><strong>Encapsulation</strong> means keeping the data inside an object private and giving controlled access through methods.</p>
             <p>In our <code>Book</code> class:</p>
             <pre><code class="language-java">private String author;

public String getAuthor() {
    return author;
}

public void setAuthor(String author) {
    if (author == null || author.isBlank()) {
        throw new IllegalArgumentException("Author cannot be empty.");
    }
    this.author = author.trim();
}</code></pre>
             <ul>
               <li><code>private String author;</code> &mdash; the field is private.</li>
               <li><code>getAuthor()</code> &mdash; a <strong>getter</strong>, reads the value.</li>
               <li><code>setAuthor()</code> &mdash; a <strong>setter</strong>, writes the value. It checks the input first.</li>
             </ul>
             <p>Why do this? The setter makes sure no one sets a blank author. The object protects its own data.</p>`,
        },
        {
          id: "l5-5",
          title: "Getters and setters",
          content: `
             <p><strong>Getter</strong> and <strong>setter</strong> methods give controlled access to fields.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Type</th><th>Name</th><th>What it does</th></tr>
               </thead>
               <tbody>
                 <tr><td>Getter</td><td><code>getXxx()</code></td><td>Returns the value of <code>xxx</code></td></tr>
                 <tr><td>Setter</td><td><code>setXxx(value)</code></td><td>Sets the value of <code>xxx</code></td></tr>
               </tbody>
             </table>
             <p>Why use them?</p>
             <ul style="padding-left:20px;">
               <li>We can check values before saving.</li>
               <li>We can change how values are stored (for example, trim spaces).</li>
               <li>We can make a field read-only by only providing a getter.</li>
             </ul>
             <p>If a field is <code>private</code>, the outside world cannot read or write it directly. They must use getters and setters. This is <strong>encapsulation</strong>.</p>`,
        },
        {
          id: "l5-6",
          title: "Inheritance",
          content: `
             <p><strong>Inheritance</strong> is when a class gets the fields and methods of another class. The child class <strong>extends</strong> the parent.</p>
             <pre><code class="language-java">public class Book extends LibraryItem {
    private String author;
    private String isbn;
}

public class Magazine extends LibraryItem {
    private String issue;
    private String publisher;
}</code></pre>
             <p><code>Book</code> and <code>Magazine</code> are <strong>subclasses</strong> of <code>LibraryItem</code>. <code>LibraryItem</code> is the <strong>superclass</strong>.</p>
             <p>This means <code>Book</code> and <code>Magazine</code> inherit <code>itemId</code>, <code>title</code>, and <code>available</code> from <code>LibraryItem</code>. They also inherit the methods: <code>getItemId()</code>, <code>getTitle()</code>, <code>setTitle()</code>, <code>isAvailable()</code>, <code>markBorrowed()</code>, <code>markReturned()</code>, and more.</p>
             <p>The phrase <strong>IS-A</strong> helps understand inheritance:</p>
             <ul style="padding-left:20px;">
               <li>A Book <strong>is a</strong> LibraryItem.</li>
               <li>A Magazine <strong>is a</strong> LibraryItem.</li>
               <li>A Car <strong>is a</strong> Vehicle.</li>
             </ul>
             <p>Inheritance lets us write code that works on the parent type (<code>LibraryItem</code>) but still affects the child objects (<code>Book</code> or <code>Magazine</code>). This is called <strong>polymorphism</strong>, which we will explain in the next lesson.</p>`,
        },
        {
          id: "l5-7",
          title: "The extends keyword",
          content: `
             <p><code>extends</code> tells Java that a class is a child of another class.</p>
             <pre><code class="language-java">public class Book extends LibraryItem { }
public class Magazine extends LibraryItem { }
public class Member { }
</code></pre>
             <p>In this example, <code>Book</code> and <code>Magazine</code> extend <code>LibraryItem</code>. <code>Member</code> does not extend anything, so it is a standalone class.</p>
             <p>A class can only extend <strong>one</strong> class. Java does not support multiple inheritance of classes (a class cannot <code>extends</code> two classes). A class can <code>implements</code> many interfaces (we will explain that soon).</p>`,
        },
        {
          id: "l5-8",
          title: "The super keyword",
          content: `
             <p>The <strong>super</strong> keyword refers to the parent class. It is used to:</p>
             <ul style="padding-left:20px;">
               <li>Call the parent constructor: <code>super(...)</code>.</li>
               <li>Call a parent method: <code>super.methodName()</code>.</li>
               <li>Access a parent field: <code>super.fieldName</code>.</li>
             </ul>
             <p>In <code>Book</code>:</p>
             <pre><code class="language-java">public Book(String itemId, String title, String author, String isbn) {
    super(itemId, title);   // calls LibraryItem(String, String) constructor
    setAuthor(author);
    setIsbn(isbn);
}</code></pre>
             <p>The parent class <code>LibraryItem</code> needs the ID and title. The child class gives those first, then sets its own fields.</p>
             <p>When a child class has a method with the same name as the parent, the child <strong>overrides</strong> the parent method. We will explain that next.</p>`,
        },
        {
          id: "l5-9",
          title: "Abstraction",
          content: `
             <p><strong>Abstraction</strong> means hiding complexity and showing only what is needed. In Java, we do this with <strong>abstract classes</strong> and <strong>interfaces</strong>.</p>
             <p>An <strong>abstract class</strong> cannot be built into an object. It exists to be the parent of other classes.</p>
             <pre><code class="language-java">public abstract class LibraryItem {
    private final String itemId;
    private String title;
    private boolean available;

    public LibraryItem(String itemId, String title) {
        this.itemId = itemId.trim().toUpperCase();
        this.title = title;
        this.available = true;
    }

    public abstract String getItemType();   // no body
    public abstract String getDetails();    // no body
}</code></pre>
             <ul>
               <li><code>abstract</code> &mdash; the class cannot be made into an object.</li>
               <li>An abstract method has no body (just a signature and a semicolon).</li>
               <li>A class with abstract methods <strong>must be declared abstract</strong>.</li>
             </ul>
             <p><code>Book</code> and <code>Magazine</code> must each provide their own version of <code>getItemType()</code> and <code>getDetails()</code>. This is called <strong>abstraction</strong>: the parent declares the rule, each child fills in the details.</p>`,
        },
        {
          id: "l5-10",
          title: "Abstract classes",
          content: `
             <p>An abstract class has both concrete (filled-in) methods and abstract (unfinished) methods.</p>
             <p>Example:</p>
             <pre><code class="language-java">public abstract class LibraryItem {
    // Concrete method (has a body):
    public boolean isAvailable() {
        return available;
    }

    // Abstract method (no body):
    public abstract String getItemType();
}</code></pre>
             <p>A class that extends an abstract class must fill in all the abstract methods, or it must also be abstract.</p>
             <p>In our project, <code>LibraryItem</code> has no abstract methods in practice (well, <code>getItemType()</code> and <code>getDetails()</code> are abstract), so every child must implement them.</p>
             <p>Abstract classes let us say: <em>these classes share these fields and these rules, but the details differ.</em></p>`,
        },
        {
          id: "l5-11",
          title: "Interfaces",
          content: `
             <p>An <strong>interface</strong> is a contract. A class that implements the interface must provide all the methods in the interface.</p>
             <p>Example:</p>
             <pre><code class="language-java">public interface BorrowingPolicy {
    String getTypeName();
    int getMaxItems();
    int getLoanDays();
    double calculateFine(int daysOverdue);
}</code></pre>
             <p>The class <code>StudentPolicy</code> implements the interface:</p>
             <pre><code class="language-java">public class StudentPolicy implements BorrowingPolicy {
    @Override
    public String getTypeName() {
        return "Student";
    }

    @Override
    public int getMaxItems() {
        return 3;
    }

    @Override
    public int getLoanDays() {
        return 7;
    }

    @Override
    public double calculateFine(int daysOverdue) {
        if (daysOverdue &lt;= 0) {
            return 0.0;
        }
        return daysOverdue * 5.00;
    }
}</code></pre>
             <p>The key words: <code>implements</code>. A class <strong>implements</strong> an interface.</p>
             <p>Interfaces are used when we want to define <em>behavior</em>, not <em>data</em>. Here, the behavior is the borrowing rules.</p>`,
        },
        {
          id: "l5-12",
          title: "Polymorphism",
          content: `
             <p><strong>Polymorphism</strong> means <em>many forms</em>. It allows one type name to refer to different child objects.</p>
             <p>Example:</p>
             <pre><code class="language-java">LibraryItem item = new Book("B001", "Clean Code", "Robert Martin", "978...");
item = new Magazine("M001", "Time", "March 2026", "Time USA");

// Both are LibraryItem objects, even though they are different types</code></pre>
             <p>When we call an <strong>overridden</strong> method, Java chooses the version from the actual object, not the declared type. This is called <strong>dynamic method dispatch</strong>.</p>
             <p>In our project:</p>
             <pre><code class="language-java">console.printf("%s %s", item.getItemId(), item.getItemType());</code></pre>
             <p><code>item</code> is a <code>LibraryItem</code> variable. But it can hold either a <code>Book</code> or a <code>Magazine</code>. The method <code>getItemType</code> runs the version from the actual object. If the object is a Book, it returns <code>"Book"</code>. If it is a Magazine, it returns <code>"Magazine"</code>.</p>
             <p>This is why we can write:</p>
             <pre><code class="language-java">List&lt;LibraryItem&gt; items = new ArrayList&lt;&gt;();
items.add(new Book(...));
items.add(new Magazine(...));
for (LibraryItem item : items) {
    // we can call item methods on both types
}</code></pre>
             <p>Polymorphism makes the code flexible. We can add new item types later, and the rest of the code still works.</p>`,
        },
        {
          id: "l5-13",
          title: "Method overriding",
          content: `
             <p><strong>Method overriding</strong> happens when a child class provides its own version of a method from the parent.</p>
             <p>Example:</p>
             <pre><code class="language-java">public class LibraryItem {
    public String getItemType() {
        return "Item";    // the parent version
    }
}

public class Book extends LibraryItem {
    @Override
    public String getItemType() {
        return "Book";    // the child version
    }
}

public class Magazine extends LibraryItem {
    @Override
    public String getItemType() {
        return "Magazine"; // the child version
    }
}</code></pre>
             <p>The <code>@Override</code> annotation tells the compiler: <em>I am deliberately replacing a parent method.</em> If the parent method does not exist, the compiler warns us.</p>
             <p>When we call <code>item.getItemType()</code>:</p>
             <ul style="padding-left:20px;">
               <li>If <code>item</code> is a <code>Book</code>, we see <code>"Book"</code>.</li>
               <li>If <code>item</code> is a <code>Magazine</code>, we see <code>"Magazine"</code>.</li>
             </ul>
             <p>This is why the menu table prints the right type for every item.</p>`,
        },
        {
          id: "l5-14",
          title: "Composition",
          content: `
             <p><strong>Composition</strong> means building a class from other classes. <em>A <strong>has-a</strong> relationship.</em></p>
             <p>In our project, a <code>Member</code> <strong>has a</strong> <code>BorrowingPolicy</code>:</p>
             <pre><code class="language-java">public class Member {
    private final String memberId;
    private String name;
    private final BorrowingPolicy policy;

    public Member(String memberId, String name, BorrowingPolicy policy) {
        this.memberId = memberId.trim().toUpperCase();
        this.policy = policy;
        setName(name);
    }
}</code></pre>
             <p>The word <code>has-a</code> describes composition. A member has a policy, a book has an author and an ISBN, a loan has an item and a member.</p>
             <p>This is different from inheritance (<strong>is-a</strong>). The <code>Member</code> does not extend <code>BorrowingPolicy</code>. It contains one.</p>
             <p>Composition makes the system flexible. We can change the policy of a member by changing its policy object.</p>
             <p>This is the <strong>Strategy pattern</strong>, which we will cover in Chapter 10.</p>`,
        },
      ],
    },
    {
      id: "ch6",
      title: "Collections and Generics",
      icon: "📦",
      lessons: [
        {
          id: "l6-1",
          title: "What is a collection?",
          content: `
             <p>A <strong>collection</strong> is a group of objects stored together. We use collections when we need to keep many things in one place, like a shopping list or a list of books.</p>
             <p>In our project, the service needs to hold:</p>
             <ul style="padding-left:20px;">
               <li>All library items (Books and Magazines).</li>
               <li>All members.</li>
               <li>All loans.</li>
             </ul>
             <p>We do not use separate arrays for each. We use <strong>collections</strong>.</p>
             <p>The most common collection is <code>ArrayList</code>, which is a list that grows as we add items.</p>`,
        },
        {
          id: "l6-2",
          title: "The Collections Framework",
          content: `
             <p>Java has a <strong>Collections Framework</strong>: a set of ready-made classes for storing groups of objects. The main parts are:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Interface</th><th>What it is</th><th>Our use</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>List</code></td><td>Ordered list, allows duplicates</td><td>We do not use this directly in our project</td></tr>
                 <tr><td><code>Set</code></td><td>No duplicates</td><td>We do not use this directly</td></tr>
                 <tr><td><code>Map</code></td><td>Key/value pairs</td><td>We use <code>HashMap</code> inside <code>Repository</code></td></tr>
                 <tr><td><code>Queue</code></td><td>Ordered for taking items</td><td>We do not use this directly</td></tr>
               </tbody>
             </table>
             <p>In our project, the <code>Repository</code> class uses an <code>ArrayList</code> to keep records in order and a <code>HashMap</code> to find records by ID.</p>`,
        },
        {
          id: "l6-3",
          title: "ArrayList",
          content: `
             <p><code>ArrayList</code> is a <em>resizable array</em>. We can add and remove items.</p>
             <pre><code class="language-java">ArrayList&lt;String&gt; names = new ArrayList&lt;&gt;();
names.add("Alice");
names.add("Bob");
names.add("Ana");

System.out.println(names.size());      // 3
System.out.println(names.get(0));     // "Alice"
names.remove(1);                      // removes "Bob"
System.out.println(names.get(1));     // "Ana"</code></pre>
             <p>Common operations:</p>
             <ul style="padding-left:20px;">
               <li><code>add(item)</code> &mdash; adds an item.</li>
               <li><code>get(index)</code> &mdash; gets the item at that position.</li>
               <li><code>remove(index)</code> &mdash; removes the item at that position.</li>
               <li><code>size()</code> &mdash; number of items.</li>
               <li><code>isEmpty()</code> &mdash; true if no items.</li>
             </ul>
             <p>In our project, <code>Repository</code> has an <code>ArrayList&lt;T&gt; records</code> to keep all records in order.</p>`,
        },
        {
          id: "l6-4",
          title: "HashMap",
          content: `
             <p>A <strong>HashMap</strong> stores <strong>key/value</strong> pairs. We look up a value by its key.</p>
             <pre><code class="language-java">HashMap&lt;String, String&gt; map = new HashMap&lt;&gt;();
map.put("B001", "Clean Code");
map.put("B002", "Head First Java");

System.out.println(map.get("B001"));   // "Clean Code"
System.out.println(map.containsKey("B001")); // true</code></pre>
             <p>A <code>Map</code> is useful when we need fast lookups. Our <code>Repository</code> uses a <code>HashMap&lt;String, T&gt; index</code> to find records by ID:</p>
             <pre><code class="language-java">public T findById(String id) {
    return index.get(normalize(id));
}</code></pre>
             <p>With a HashMap, finding a record by ID is fast, even when there are many records.</p>`,
        },
        {
          id: "l6-5",
          title: "Adding, removing, finding, and retrieving elements",
          content: `
             <table class="table-card">
               <thead>
                 <tr><th>Operation</th><th>List (ArrayList)</th><th>Map (HashMap)</th></tr>
               </thead>
               <tbody>
                 <tr><td><strong>Add</strong></td><td><code>list.add(item)</code></td><td><code>map.put(key, value)</code></td></tr>
                 <tr><td><strong>Find by index</strong></td><td><code>list.get(0)</code></td><td>&mdash;</td></tr>
                 <tr><td><strong>Find by key</strong></td><td>&mdash;</td><td><code>map.get("B001")</code></td></tr>
                 <tr><td><strong>Check exists</strong></td><td><code>list.contains(item)</code></td><td><code>map.containsKey(key)</code></td></tr>
                 <tr><td><strong>Remove</strong></td><td><code>list.remove(index)</code></td><td><code>map.remove(key)</code></td></tr>
                 <tr><td><strong>Size</strong></td><td><code>list.size()</code></td><td><code>map.size()</code></td></tr>
               </tbody>
             </table>
             <p>In our repository:</p>
             <pre><code class="language-java">public void add(T record) throws LibraryRuleException {
    String id = normalize(idGetter.apply(record));
    if (index.containsKey(id)) {
        throw new LibraryRuleException(recordName + " ID '" + id + "' already exists.");
    }
    records.add(record);
    index.put(id, record);
}</code></pre>
             <p>We add the record to the list and also store it in the map.</p>`,
        },
        {
          id: "l6-6",
          title: "What are generics?",
          content: `
             <p><strong>Generics</strong> allow us to write a class or method that works with different types, while keeping type safety.</p>
             <p>The magic word is <code>&lt;T&gt;</code>. <code>T</code> stands for <strong>Type</strong>.</p>
             <pre><code class="language-java">public class Repository&lt;T&gt; {
    private final ArrayList&lt;T&gt; records = new ArrayList&lt;&gt;();
    private final HashMap&lt;String, T&gt; index = new HashMap&lt;&gt;();

    public void add(T record) {
        // T is known only when the class is created
    }
}</code></pre>
             <p>We create a repository for a specific type:</p>
             <pre><code class="language-java">Repository&lt;LibraryItem&gt; itemRepo = new Repository&lt;&gt;("Item", LibraryItem::getItemId);
Repository&lt;Member&gt; memberRepo = new Repository&lt;&gt;("Member", Member::getMemberId);
Repository&lt;Loan&gt; loanRepo = new Repository&lt;&gt;("Loan", Loan::getLoanId);</code></pre>
             <p><code>T</code> is replaced with the real type. <code>Repository&lt;LibraryItem&gt;</code> uses <code>ArrayList&lt;LibraryItem&gt;</code> and <code>HashMap&lt;String, LibraryItem&gt;</code>.</p>
             <p>Why generics? Because we write the code <strong>once</strong>, but use it for items, members, and loans. Without generics, we would need separate repository classes for each type.</p>`,
        },
        {
          id: "l6-7",
          title: "Why do we use Repository&lt;T&gt;?",
          content: `
             <p>The repository is <strong>generic</strong> so we can reuse it for all three record types:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Repository</th><th>Type parameter</th><th>Stores</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>Repository&lt;LibraryItem&gt;</code></td><td><code>T = LibraryItem</code></td><td>Items</td></tr>
                 <tr><td><code>Repository&lt;Member&gt;</code></td><td><code>T = Member</code></td><td>Members</td></tr>
                 <tr><td><code>Repository&lt;Loan&gt;</code></td><td><code>T = Loan</code></td><td>Loans</td></tr>
               </tbody>
             </table>
             <p>Because the repository is generic, the code for saving, loading, and finding records is written once. The compiler checks the types for us.</p>
             <p>Without generics, we would need to write three separate repository classes, repeating the same logic. Generics save us from that duplication. This is also aligned with the <strong>DRY</strong> (Don't Repeat Yourself) principle.</p>`,
        },
        {
          id: "l6-8",
          title: "What does &lt;T&gt; mean?",
          content: `
             <p><code>&lt;T&gt;</code> is the generic declaration. <code>T</code> is a placeholder for the real type. Here are the common placeholder letters:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Letter</th><th>What it usually stands for</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>T</code></td><td>Type</td><td><code>Repository&lt;T&gt;</code></td></tr>
                 <tr><td><code>E</code></td><td>Element</td><td><code>ArrayList&lt;E&gt;</code></td></tr>
                 <tr><td><code>K</code></td><td>Key</td><td><code>Map&lt;K, V&gt;</code></td></tr>
                 <tr><td><code>V</code></td><td>Value</td><td><code>Map&lt;K, V&gt;</code></td></tr>
                 <tr><td><code>N</code></td><td>Number</td><td>&mdash;</td></tr>
               </tbody>
             </table>
             <p>In our project, <code>T</code> means <em>the type of records we store</em>.</p>
             <p>When we create <code>Repository&lt;Member&gt;</code>, <code>T</code> becomes <code>Member</code>. The compiler replaces <code>T</code> with <code>Member</code> in the code.</p>
             <p>This is why we can write:</p>
             <pre><code class="language-java">public void add(T record) throws LibraryRuleException {
    String id = normalize(idGetter.apply(record));
    ...</code></pre>
             <p><code>idGetter.apply(record)</code> calls the method that returns the ID of the record.</p>`,
        },
        {
          id: "l6-9",
          title: "What are Predicate and Function?",
          content: `
             <p><code>Predicate</code> and <code>Function</code> are <strong>functional interfaces</strong> from Java. They are used for simple operations.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Interface</th><th>Method</th><th>What it does</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>Predicate&lt;T&gt;</code></td><td><code>boolean test(T t)</code></td><td>Returns true or false</td><td><code>item -&gt; item.isAvailable()</code></td></tr>
                 <tr><td><code>Function&lt;T, R&gt;</code></td><td><code>R apply(T t)</code></td><td>Transforms a value</td><td><code>LibraryItem::toFileLine</code></td></tr>
                 <tr><td><code>Consumer&lt;T&gt;</code></td><td><code>void accept(T t)</code></td><td>Does something</td><td><code>message -&gt; console.notice(message)</code></td></tr>
               </tbody>
             </table>
             <p>In our repository:</p>
             <pre><code class="language-java">public List&lt;T&gt; findAll(Predicate&lt;T&gt; condition) {
    List&lt;T&gt; result = new ArrayList&lt;&gt;();
    for (T record : records) {
        if (condition.test(record)) {
            result.add(record);
        }
    }
    return result;
}</code></pre>
             <p>We call it with a <strong>lambda</strong> (more on that in Chapter 7):</p>
             <pre><code class="language-java">List&lt;LibraryItem&gt; found = itemRepo.findAll(item -&gt;
    item.getItemId().toLowerCase().contains(key)
    || item.getTitle().toLowerCase().contains(key)
);</code></pre>
             <p>The <code>Predicate</code> tests each item and says yes or no.</p>
             <p>In <code>LibraryService</code>, <code>saveToFile</code> uses a <code>Function</code>:</p>
             <pre><code class="language-java">public void saveToFile(String path, Function&lt;T, String&gt; toLine) throws IOException {</code></pre>
             <p>We pass <code>LibraryItem::toFileLine</code>, which turns each record into a line of text.</p>`,
        },
        {
          id: "l6-10",
          title: "How are collections used in our application?",
          content: `
             <p>The application uses three repositories, each generic:</p>
             <pre><code class="language-java">private final Repository&lt;LibraryItem&gt; itemRepo = new Repository&lt;&gt;("Item", LibraryItem::getItemId);
private final Repository&lt;Member&gt; memberRepo = new Repository&lt;&gt;("Member", Member::getMemberId);
private final Repository&lt;Loan&gt; loanRepo = new Repository&lt;&gt;("Loan", Loan::getLoanId);</code></pre>
             <p>The repositories use:</p>
             <ul style="padding-left:20px;">
               <li><code>ArrayList&lt;T&gt;</code> to keep records in order.</li>
               <li><code>HashMap&lt;String, T&gt;</code> to find records by ID.</li>
               <li><code>Predicate&lt;T&gt;</code> for searching.</li>
               <li><code>Function&lt;T, String&gt;</code> for saving/loading.</li>
             </ul>
             <p>The <code>MenuController</code> uses <code>List&lt;LibraryItem&gt;</code> and <code>List&lt;Member&gt;</code> to display tables. The service uses <code>List&lt;Loan&gt;</code> for loans.</p>`,
        },
      ],
    },
    {
      id: "ch7",
      title: "Lambda expressions",
      icon: "🪞",
      lessons: [
        {
          id: "l7-1",
          title: "What is a lambda expression?",
          content: `
             <p>A <strong>lambda expression</strong> is a short way to write a block of code that can be passed around as data.</p>
             <p>Think of a lambda like a <strong>small task</strong> you give to someone else. You give them the task, and they do it.</p>
             <p>Syntax:</p>
             <pre><code class="language-java">(parameters) -&gt; { body }</code></pre>
             <p>Examples:</p>
             <pre><code class="language-java">x -&gt; x * 2
(item) -&gt; item.isAvailable()
(String s) -&gt; { System.out.println(s); }</code></pre>
             <p>In the first, the lambda takes <code>x</code> and returns <code>x * 2</code>. In the second, it tests if an item is available.</p>`,
        },
        {
          id: "l7-2",
          title: "Why is it useful?",
          content: `
             <p>Lambdas are useful because they let us pass <strong>behavior</strong> into a method.</p>
             <p>Without lambdas, we would need to create a class that implements an interface. With lambdas, we write the code inline.</p>
             <p>Example:</p>
             <pre><code class="language-java">// Without lambda: create a class implementing the interface
itemRepo.findAll(new Predicate&lt;LibraryItem&gt;() {
    public boolean test(LibraryItem item) {
        return item.isAvailable();
    }
});

// With lambda:
itemRepo.findAll(item -&gt; item.isAvailable());</code></pre>
             <p>The lambda replaces the whole class. This makes the code shorter and clearer.</p>`,
        },
        {
          id: "l7-3",
          title: "Basic lambda syntax",
          content: `
             <p>The arrow <code>-&gt;</code> separates parameters from the body.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Form</th><th>Example</th><th>Meaning</th></tr>
               </thead>
               <tbody>
                 <tr><td>No parameters</td><td><code>() -&gt; System.out.println("Hi")</code></td><td>No input, just do it</td></tr>
                 <tr><td>One parameter (no type)</td><td><code>x -&gt; x + 1</code></td><td>Take x, add 1</td></tr>
                 <tr><td>Multiple parameters</td><td><code>(a, b) -&gt; a + b</code></td><td>Add two numbers</td></tr>
                 <tr><td>Block body</td><td><code>(x) -&gt; { return x * 2; }</code></td><td>Do several steps</td></tr>
               </tbody>
             </table>
             <p>The compiler figures out the types from the context. In <code>item -&gt; item.isAvailable()</code>, <code>item</code> is a <code>LibraryItem</code> because the method needs a <code>Predicate&lt;LibraryItem&gt;</code>.</p>`,
        },
        {
          id: "l7-4",
          title: "Functional interfaces",
          content: `
             <p>A <strong>functional interface</strong> is an interface with exactly <strong>one abstract method</strong>.</p>
             <p>Example:</p>
             <pre><code class="language-java">@FunctionalInterface
public interface MyFunc {
    int apply(int x);
}</code></pre>
             <p>Because it has one method, we can use a lambda:</p>
             <pre><code class="language-java">MyFunc addOne = x -&gt; x + 1;
int result = addOne.apply(5);   // 6</code></pre>
             <p>In Java, the common functional interfaces live in the <code>java.util.function</code> package. Our project uses:</p>
             <ul style="padding-left:20px;">
               <li><code>Predicate&lt;T&gt;</code> &mdash; test a condition.</li>
               <li><code>Function&lt;T, R&gt;</code> &mdash; transform one value to another.</li>
               <li><code>Consumer&lt;T&gt;</code> &mdash; do something with a value.</li>
             </ul>
             <p>These interfaces make lambdas possible.</p>`,
        },
        {
          id: "l7-5",
          title: "Consumer, Predicate, and Function",
          content: `
             <div class="card">
               <h3>Three interfaces you will see</h3>
               <ul style="padding-left:20px;">
                 <li><strong>Predicate</strong> &mdash; returns <code>boolean</code>. Used for filtering.</li>
                 <li><strong>Function</strong> &mdash; takes one thing and returns another. Used for conversions.</li>
                 <li><strong>Consumer</strong> &mdash; takes one thing and returns nothing. Used for actions.</li>
               </ul>
             </div>
             <pre><code class="language-java">// Predicate: returns true for "available" items
Predicate&lt;LibraryItem&gt; isAvailable = item -&gt; item.isAvailable();

// Function: turns an item into a line of text
Function&lt;LibraryItem, String&gt; toLine = LibraryItem::toFileLine;

// Consumer: prints a message to the user
Consumer&lt;String&gt; printMessage = msg -&gt; console.notice(msg);

// We pass these lambdas around like values.</code></pre>
             <p>In our project, the service uses <code>Consumer&lt;String&gt;</code> for observers:</p>
             <pre><code class="language-java">service.addObserver(message -&gt; console.notice(message));
service.addObserver(message -&gt; notificationLog.add(message));</code></pre>
             <p>The observer is a <code>Consumer</code>. It receives a message and does something with it (prints it or remembers it).</p>`,
        },
        {
          id: "l7-6",
          title: "How lambdas are used in our project",
          content: `
             <p>Here are all the places lambdas appear in the project:</p>
             <table class="table-card">
               <thead>
                 <tr><th>File</th><th>Usage</th><th>What it does</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>LibraryService.java</code></td><td><code>addObserver(message -&gt; ...)</code></td><td>Two observers that receive notices.</td></tr>
                 <tr><td><code>MenuController.java</code></td><td><code>addObserver(...)</code></td><td>Same, plus a second observer logs notices.</td></tr>
                 <tr><td><code>Repository.java</code></td><td><code>findAll(item -&gt; ...)</code></td><td>Filters records by a condition.</td></tr>
                 <tr><td><code>Repository.java</code></td><td><code>saveToFile(path, LibraryItem::toFileLine)</code></td><td>Converts each record to a line.</td></tr>
                 <tr><td><code>Repository.java</code></td><td><code>loadFromFile(path, LibraryFactory::createItemFromLine)</code></td><td>Turns a line into a record.</td></tr>
                 <tr><td><code>LibraryService.java</code></td><td><code>(sorted) -&gt; itemRepo.getAll().sort(...)</code></td><td>Sorts a list.</td></tr>
               </tbody>
             </table>
             <p>The Observer pattern uses lambdas for the observers. The Repository uses lambdas for finding and converting records.</p>`,
        },
        {
          id: "l7-7",
          title: "How to read and understand a lambda",
          content: `
             <p>Read a lambda step by step:</p>
             <pre><code class="language-java">item -&gt; item.getTitle().toLowerCase().contains(key)</code></pre>
             <ul style="padding-left:20px;">
               <li><strong><code>item</code></strong> &mdash; this is one item (a <code>LibraryItem</code>).</li>
               <li><strong><code>-&gt;</code></strong> &mdash; the lambda.</li>
               <li><strong><code>item.getTitle().toLowerCase().contains(key)</code></strong> &mdash; it checks if the item's title contains the keyword.</li>
               <li><strong>Result</strong> &mdash; true if it matches, false if not.</li>
             </ul>
             <p>So we can read this as: <em>For each item, if the title contains the keyword, keep it.</em></p>
             <p>Another example:</p>
             <pre><code class="language-java">(first, second) -&gt; first.getTitle().compareToIgnoreCase(second.getTitle())</code></pre>
             <p>This takes two items and compares their titles, ignoring case. The result is a number: negative if the first comes first, zero if equal, positive if the second comes first. This is how the code sorts items by title.</p>`,
        },
      ],
    },
    {
      id: "ch8",
      title: "Exception handling",
      icon: "⚠️",
      lessons: [
        {
          id: "l8-1",
          title: "What is an error?",
          content: `
             <p>A <strong>program error</strong> is something that goes wrong when the program runs. There are two main kinds:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Kind</th><th>When it happens</th><th>Example</th></tr>
               </thead>
               <tbody>
                 <tr><td><strong>Compile-time error</strong></td><td>When the code is being compiled</td><td>Missing semicolon, wrong method name</td></tr>
                 <tr><td><strong>Runtime error</strong></td><td>When the program runs</td><td>Dividing by zero, reading a file that does not exist</td></tr>
               </tbody>
             </table>
             <p>Compile-time errors are caught before the program starts. Runtime errors happen while the program is running.</p>`,
        },
        {
          id: "l8-2",
          title: "What is an exception?",
          content: `
             <p>An <strong>exception</strong> is a runtime problem that the program can handle. It is an object that describes what went wrong.</p>
             <p>Example: trying to find a book ID that does not exist. The program throws a <code>RecordNotFoundException</code>.</p>
             <p>Exceptions let us <em>respond</em> to problems instead of crashing. The program can say: <em>this went wrong, here is what I will do.</em></p>
             <p>Common exceptions you will see in our project:</p>
             <ul style="padding-left:20px;">
               <li><code>IllegalArgumentException</code> &mdash; a bad value was given.</li>
               <li><code>RecordNotFoundException</code> &mdash; a record with that ID does not exist.</li>
               <li><code>LibraryRuleException</code> &mdash; a library rule was broken (for example, trying to borrow an item that is not available).</li>
               <li><code>IOException</code> &mdash; a file could not be read or written.</li>
             </ul>
             <p>Exceptions are objects. They are thrown with the <code>throw</code> keyword and caught with <code>try/catch</code>.</p>`,
        },
        {
          id: "l8-3",
          title: "Compile-time errors versus runtime errors",
          content: `
             <p>Here is the difference:</p>
             <table class="table-card">
               <thead>
                 <tr><th></th><th>Compile-time error</th><th>Runtime error</th></tr>
               </thead>
               <tbody>
                 <tr><td>When</td><td>Before the program runs</td><td>While the program runs</td></tr>
                 <tr><td>What you see</td><td>Error in the editor or terminal</td><td>A message when you run the program</td></tr>
                 <tr><td>Can the program start?</td><td>No &mdash; it will not compile</td><td>Yes, sometimes</td></tr>
                 <tr><td>Example</td><td><code>System.out.pritln</code> (typo)</td><td>Searching for an ID that does not exist</td></tr>
               </tbody>
             </table>
             <p>Our project handles runtime errors with <code>try/catch</code> blocks. The <code>MenuController</code> catches exceptions and shows them as user-friendly messages.</p>`,
        },
        {
          id: "l8-4",
          title: "try and catch",
          content: `
             <p>A <code>try</code> block holds code that might fail. A <code>catch</code> block holds code that runs if it fails.</p>
             <pre><code class="language-java">try {
    // code that might throw an exception
    int number = Integer.parseInt(text);
} catch (NumberFormatException e) {
    // this runs if the text is not a number
    System.out.println("Not a number: " + e.getMessage());
}</code></pre>
             <p><code>e</code> is the exception object. <code>e.getMessage()</code> gives a description of the problem.</p>
             <p>In our project, <code>MenuController</code> catches exceptions after many actions:</p>
             <pre><code class="language-java">try {
    LibraryItem item = LibraryFactory.createItem(type, id, title, detail1, detail2);
    service.addItem(item);
    console.success(...);
} catch (LibraryRuleException | IllegalArgumentException e) {
    console.error(e.getMessage());
}</code></pre>
             <p>The <code>|</code> means <em>or</em>. This <code>catch</code> handles two kinds of exceptions.</p>`,
        },
        {
          id: "l8-5",
          title: "finally",
          content: `
             <p>A <code>finally</code> block runs <strong>no matter what</strong>: if the try block succeeds or if it throws an exception.</p>
             <pre><code class="language-java">try {
    // risky code
} catch (Exception e) {
    // handle the problem
} finally {
    // always runs
    // for example, close a file or a scanner
}</code></pre>
             <p>In our project, <code>Main</code> uses <code>try-with-resources</code>:</p>
             <pre><code class="language-java">try (ConsoleHelper console = new ConsoleHelper()) {
    ...
}</code></pre>
             <p>The <code>try-with-resources</code> is a special form of <code>finally</code> that closes the resource (the <code>ConsoleHelper</code>) automatically. We will explain that in the next lesson.</p>`,
        },
        {
          id: "l8-6",
          title: "throw and throws",
          content: `
             <p>A method can <strong>throw</strong> an exception. We use the <code>throw</code> keyword to create and throw an exception. A method can <strong>declare</strong> that it might throw an exception with <code>throws</code>.</p>
             <p>Example:</p>
             <pre><code class="language-java">public void setAuthor(String author) {
    if (author == null || author.isBlank()) {
        throw new IllegalArgumentException("Author cannot be empty.");
    }
    this.author = author.trim();
}</code></pre>
             <p>The <code>throw</code> keyword creates a new exception and hands it to the program.</p>
             <p>A method declares possible exceptions with <code>throws</code>:</p>
             <pre><code class="language-java">public void saveAll() throws IOException {
    itemRepo.saveToFile(dataFolder + "/items.txt", LibraryItem::toFileLine);
}</code></pre>
             <p>This tells the caller: <em>this method might throw an IOException. If it does, the caller must handle it.</em></p>
             <p>In our project, the service declares:</p>
             <pre><code class="language-java">public void borrowItem(String itemId, String memberId)
        throws RecordNotFoundException, LibraryRuleException {</code></pre>
             <p>The menu catches these exceptions.</p>`,
        },
        {
          id: "l8-7",
          title: "Checked and unchecked exceptions",
          content: `
             <table class="table-card">
               <thead>
                 <tr><th>Type</th><th>When detected</th><th>Must be declared?</th><th>Examples in our project</th></tr>
               </thead>
               <tbody>
                 <tr><td><strong>Checked</strong></td><td>At compile time</td><td>Yes, with <code>throws</code></td><td><code>IOException</code></td></tr>
                 <tr><td><strong>Unchecked</strong></td><td>At runtime</td><td>No</td><td><code>IllegalArgumentException</code>, <code>RecordNotFoundException</code></td></tr>
               </tbody>
             </table>
             <p><strong>Checked exceptions</strong> are problems the compiler wants you to think about. You must either catch them or declare them with <code>throws</code>.</p>
             <p><strong>Unchecked exceptions</strong> are mistakes that happen while the program runs. The compiler does not force you to handle them, but your code can still catch them.</p>
             <p>In our project:</p>
             <ul style="padding-left:20px;">
               <li><code>IOException</code> is a checked exception. The service declares <code>throws IOException</code> for <code>saveAll</code>.</li>
               <li><code>IllegalArgumentException</code> is unchecked. It is thrown when a value is invalid.</li>
               <li><code>RecordNotFoundException</code> is unchecked, but it is meaningful enough to be caught and shown to the user.</li>
             </ul>
             <p>Note: the project declares <code>throws</code> for the checked <code>IOException</code>, but the unchecked exceptions are caught where they happen.</p>`,
        },
        {
          id: "l8-8",
          title: "Custom exceptions",
          content: `
             <p>A <strong>custom exception</strong> is a new exception class we create for our project. It lets us say exactly what kind of problem happened.</p>
             <p>Our project has two:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Class</th><th>What it means</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>LibraryRuleException</code></td><td>A business rule was broken (for example, an item ID already exists).</td></tr>
                 <tr><td><code>RecordNotFoundException</code></td><td>A record with the given ID does not exist.</td></tr>
               </tbody>
             </table>
             <p>Custom exceptions make error handling clear. The menu code can say: <em>if it is a LibraryRuleException, show this message</em>.</p>
             <p>Example from <code>Member</code>:</p>
             <pre><code class="language-java">if (memberId == null || memberId.isBlank()) {
    throw new IllegalArgumentException("Member ID cannot be empty.");
}</code></pre>
             <p>This throws an unchecked exception with a clear message.</p>`,
        },
        {
          id: "l8-9",
          title: "Exception messages",
          content: `
             <p>Every exception can carry a <strong>message</strong>. The message explains the problem.</p>
             <pre><code class="language-java">throw new LibraryRuleException("Item ID 'B001' already exists.");</code></pre>
             <p>When the code catches the exception, it shows the message:</p>
             <pre><code class="language-java">catch (LibraryRuleException e) {
    console.error(e.getMessage());   // "Item ID 'B001' already exists."
}</code></pre>
             <p>Good messages tell the user exactly what went wrong. The messages in our project are clear and user-friendly.</p>`,
        },
        {
          id: "l8-10",
          title: "Try-with-resources",
          content: `
             <p>A <strong>resource</strong> is something that needs closing after use, like a file or the keyboard. <code>try-with-resources</code> closes the resource automatically.</p>
             <pre><code class="language-java">try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    // use the reader
    String line = reader.readLine();
} catch (IOException e) {
    // handle the problem
}</code></pre>
             <p>After the <code>try</code> block, the <code>reader</code> is closed automatically, even if an exception happens.</p>
             <p>In our project, <code>ConsoleHelper</code> implements <code>AutoCloseable</code>:</p>
             <pre><code class="language-java">public class ConsoleHelper implements AutoCloseable {
    private final Scanner scanner = new Scanner(System.in);
    public void close() {
        scanner.close();
    }
}</code></pre>
             <p>In <code>Main</code>:</p>
             <pre><code class="language-java">try (ConsoleHelper console = new ConsoleHelper()) {
    // console is closed automatically here
}</code></pre>
             <p>This is cleaner than writing <code>finally { console.close(); }</code>.</p>`,
        },
        {
          id: "l8-11",
          title: "How our project handles errors",
          content: `
             <p>Our project follows a simple rule: <strong>errors are shown to the user, they never crash the program.</strong></p>
             <ul style="padding-left:20px;">
               <li>Input problems &mdash; <code>ConsoleHelper</code> keeps asking until the user enters valid input.</li>
               <li>Duplicate IDs &mdash; <code>LibraryRuleException</code> is caught and shown.</li>
               <li>Missing records &mdash; <code>RecordNotFoundException</code> is caught and shown.</li>
               <li>File problems &mdash; warnings are shown, and the program keeps going with empty data.</li>
               <li>Bad data lines &mdash; the repository skips the line and reports the problem.</li>
             </ul>
             <p>Here is the flow for a bad input:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Step</th><th>What happens</th></tr>
               </thead>
               <tbody>
                 <tr><td>User types a bad value</td><td><code>ConsoleHelper.readInt</code> rejects it again.</td></tr>
                 <tr><td>Program tries to borrow an unknown item</td><td><code>RecordNotFoundException</code> is thrown and caught.</td></tr>
                 <tr><td>Program saves to a file</td><td>If it fails, the menu shows a warning, not a crash.</td></tr>
               </tbody>
             </table>
             <p>This makes the program forgiving and easy to use, even when the user makes mistakes.</p>`,
        },
      ],
    },
    {
      id: "ch9",
      title: "File handling and persistence",
      icon: "💾",
      lessons: [
        {
          id: "l9-1",
          title: "What is file handling?",
          content: `
             <p><strong>File handling</strong> means reading from and writing to files. Files store data on a computer.</p>
             <p>Our library program saves its data to three text files:</p>
             <ul style="padding-left:20px;">
               <li><code>items.txt</code> &mdash; all items (books and magazines).</li>
               <li><code>members.txt</code> &mdash; all members.</li>
               <li><code>loans.txt</code> &mdash; all loans.</li>
             </ul>
             <p>When the program starts, it loads these files. When it changes data, it saves the files.</p>
             <p>Text files are simple: each line is a record, and fields are separated by a <code>|</code> (pipe) character.</p>`,
        },
        {
          id: "l9-2",
          title: "Why does our application need to save data?",
          content: `
             <p>Without saving, all data would vanish when the program stops. If the program runs again, it would start empty.</p>
             <p>The application needs to save data so users can:</p>
             <ul style="padding-left:20px;">
               <li>Add items and see them next time the program starts.</li>
               <li>Register members and keep their records.</li>
               <li>Track loans between sessions.</li>
             </ul>
             <p>Saving makes the program <strong>persistent</strong>, meaning the data lives beyond the program's run.</p>`,
        },
        {
          id: "l9-3",
          title: "Reading and writing text files",
          content: `
             <p>We read a file line by line and write a line by line. The repository uses <code>BufferedReader</code> for reading and <code>BufferedWriter</code> for writing.</p>
             <pre><code class="language-java">try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    String line = reader.readLine();
    while (line != null) {
        // process the line
        line = reader.readLine();
    }
}</code></pre>
             <p>For writing:</p>
             <pre><code class="language-java">try (BufferedWriter writer = new BufferedWriter(new FileWriter(file))) {
    for (T record : records) {
        writer.write(toLine.apply(record));
        writer.newLine();
    }
}</code></pre>
             <p><code>newLine()</code> adds a line break.</p>
             <p>The <code>|</code> (pipe) separates fields:</p>
             <pre><code class="language-java">"BOOK|B001|Clean Code|Robert Martin|9780132350884"</code></pre>`,
        },
        {
          id: "l9-4",
          title: "File paths",
          content: `
             <p>A <strong>file path</strong> is the location of a file. Our program uses a simple folder name: <code>data</code>.</p>
             <p>The path is built like this:</p>
             <pre><code class="language-java">dataFolder + "/items.txt"</code></pre>
             <p>So the full path is: <code>data/items.txt</code>.</p>
             <p>The <code>Repository.saveToFile</code> method also creates the folder if it does not exist:</p>
             <pre><code class="language-java">File folder = target.getParentFile();
if (folder != null) {
    folder.mkdirs();   // create the folder
}</code></pre>
             <p>This means if the <code>data</code> folder is missing, the program creates it.</p>`,
        },
        {
          id: "l9-5",
          title: "Parsing records",
          content: `
             <p><strong>Parsing</strong> means reading a text line and turning it into a real object.</p>
             <p>The <code>LibraryFactory</code> turns each line into an object using <code>split("|")</code>:</p>
             <pre><code class="language-java">public static LibraryItem createItemFromLine(String line) {
    String[] parts = line.split("\\|", -1);
    if (parts.length != 5) {
        throw new IllegalArgumentException("Item line must have 5 fields but has " + parts.length + ".");
    }
    return createItem(parts[0], parts[1], parts[2], parts[3], parts[4]);
}</code></pre>
             <p><code>split("\\|")</code> splits the line at the pipe character. The <code>-1</code> keeps empty fields at the end, so the line always has the right number of parts.</p>
             <p>Then <code>createItem</code> builds the right object (Book or Magazine).</p>`,
        },
        {
          id: "l9-6",
          title: "Saving objects as text records",
          content: `
             <p>Each object turns itself into a line of text. The <code>toFileLine</code> method does this:</p>
             <pre><code class="language-java">public String toFileLine() {
    return "BOOK|" + getItemId() + "|" + getTitle() + "|" + author + "|" + isbn;
}</code></pre>
             <p>This is called <strong>serialization</strong>: converting an object to text. The <code>Repository</code> calls this method for every record.</p>
             <p>For a member:</p>
             <pre><code class="language-java">public String toFileLine() {
    return getMemberType().toUpperCase() + "|" + memberId + "|" + name;
}</code></pre>
             <p>For a loan:</p>
             <pre><code class="language-java">public String toFileLine() {
    String returnText = (returnDate == null) ? "" : returnDate.toString();
    return loanId + "|" + itemId + "|" + memberId + "|"
            + borrowDate + "|" + dueDate + "|" + returnText + "|" + fineAmount;
}</code></pre>
             <p>The pipe <code>|</code> is the separator, so none of the fields may contain <code>|</code>. That is why <code>ConsoleHelper.readText</code> rejects input containing <code>|</code>.</p>`,
        },
        {
          id: "l9-7",
          title: "Loading records",
          content: `
             <p>Loading reads the file, skips blank lines, and turns each line into an object.</p>
             <pre><code class="language-java">try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    String line = reader.readLine();
    while (line != null) {
        if (!line.isBlank()) {
            add(fromLine.apply(line));
        }
        line = reader.readLine();
    }
}</code></pre>
             <p>The <code>fromLine</code> is a <code>Function&lt;String, T&gt;</code>. It is a lambda we pass to the method: for items, it is <code>LibraryFactory::createItemFromLine</code>.</p>
             <p>If the file does not exist, the repository returns an empty list:</p>
             <pre><code class="language-java">if (!file.exists()) {
    return messages;   // start empty
}</code></pre>
             <p>This means the first run starts with no data.</p>`,
        },
        {
          id: "l9-8",
          title: "Missing files",
          content: `
             <p>Missing files are not an error at start. They just mean the application starts with empty data.</p>
             <p>This is important for the professor's demonstration:</p>
             <ul style="padding-left:20px;">
               <li>The program does not crash if <code>items.txt</code> is missing.</li>
               <li>It shows: <code>Loaded 0 item(s), 0 member(s), 0 loan(s).</code></li>
               <li>The user can add data and the files will be created.</li>
             </ul>
             <p>This makes the program friendly and robust.</p>`,
        },
        {
          id: "l9-9",
          title: "Corrupted records",
          content: `
             <p>A <strong>corrupted record</strong> is a bad line in a file. For example, a line with the wrong number of fields.</p>
             <p>Our repository handles bad lines without crashing:</p>
             <pre><code class="language-java">try {
    add(fromLine.apply(line));
} catch (LibraryRuleException | RuntimeException e) {
    messages.add("Skipped line " + lineNumber + " of " + path + ": " + e.getMessage());
}</code></pre>
             <p>If a line is bad, the repository:</p>
             <ul style="padding-left:20px;">
               <li>Skips the line.</li>
               <li>Adds a message to the warning list.</li>
               <li>Keeps going with the next line.</li>
             </ul>
             <p>When the program starts, it prints messages like:</p>
             <pre><code class="language-java">[WARNING] Skipped line 3 of data/items.txt: Item line must have 5 fields but has 3.</code></pre>
             <p>This tells the user which line was skipped and why.</p>`,
        },
        {
          id: "l9-10",
          title: "How our Repository&lt;T&gt; works",
          content: `
             <p>The <code>Repository&lt;T&gt;</code> class is the heart of file handling. It stores records in memory and saves/loads them to files.</p>
             <pre><code class="language-java">public class Repository&lt;T&gt; {
    private final String recordName;
    private final Function&lt;T, String&gt; idGetter;
    private final ArrayList&lt;T&gt; records = new ArrayList&lt;&gt;();
    private final HashMap&lt;String, T&gt; index = new HashMap&lt;&gt;();

    public void add(T record) throws LibraryRuleException { ... }
    public T findById(String id) { ... }
    public T getById(String id) throws RecordNotFoundException { ... }
    public boolean exists(String id) { ... }
    public List&lt;T&gt; getAll() { ... }
    public List&lt;T&gt; findAll(Predicate&lt;T&gt; condition) { ... }

    public void saveToFile(String path, Function&lt;T, String&gt; toLine) throws IOException { ... }
    public List&lt;String&gt; loadFromFile(String path, Function&lt;String, T&gt; fromLine) { ... }
}</code></pre>
             <p>The <strong>generic</strong> <code>T</code> means the same code works for items, members, and loans.</p>
             <p><strong>saveToFile</strong> writes each record to a file, one per line. It writes to a <code>.tmp</code> file first, then replaces the real file. This protects the old data if the program crashes during saving.</p>
             <p><strong>loadFromFile</strong> reads the file, skips blank lines, and builds records from each line. Bad lines are skipped and reported.</p>`,
        },
      ],
    },
    {
      id: "ch10",
      title: "Design patterns",
      icon: "🎨",
      lessons: [
        {
          id: "l10-1",
          title: "What is a design pattern?",
          content: `
             <p>A <strong>design pattern</strong> is a reusable solution to a common problem in software design. It is not code you copy; it is a <em>way of thinking</em> about designing code.</p>
             <p>Patterns help us:</p>
             <ul style="padding-left:20px;">
               <li>Write code that is easier to understand.</li>
               <li>Reuse solutions instead of reinventing them.</li>
               <li>Communicate with other developers using a common language.</li>
             </ul>
             <p>In our project, three patterns appear: <strong>Factory</strong>, <strong>Strategy</strong>, and <strong>Observer</strong>.</p>`,
        },
        {
          id: "l10-2",
          title: "Factory pattern",
          content: `
             <p>The <strong>Factory pattern</strong> hides how objects are created. The caller asks for an object, and the factory decides which class to build.</p>
             <p>In our project, <code>LibraryFactory</code> creates items and members:</p>
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
             <p>The menu does not say <code>new Book(...)</code>. It says <code>LibraryFactory.createItem(...)</code>. This is a <strong>decoupling</strong>: the menu does not need to know the details of how items are created.</p>
             <p>Why is this useful?</p>
             <ul style="padding-left:20px;">
               <li>The creator is in one place.</li>
               <li>If we add a new item type, we change the factory, not every menu.</li>
               <li>The client code stays simple.</li>
             </ul>
             <p>The same idea is used for file loading:</p>
             <pre><code class="language-java">public static LibraryItem createItemFromLine(String line) { ... }
public static Member createMemberFromLine(String line) { ... }</code></pre>
             <p>These turn file lines into objects, keeping that logic in the factory too.</p>`,
        },
        {
          id: "l10-3",
          title: "Strategy pattern",
          content: `
             <p>The <strong>Strategy pattern</strong> lets us change behavior at runtime by swapping objects.</p>
             <p>In our project, a <code>Member</code> has a <code>BorrowingPolicy</code>:</p>
             <pre><code class="language-java">public class Member {
    private final BorrowingPolicy policy;

    public Member(String memberId, String name, BorrowingPolicy policy) {
        this.memberId = memberId.trim().toUpperCase();
        this.policy = policy;
        setName(name);
    }

    public double calculateFine(int daysOverdue) {
        return policy.calculateFine(daysOverdue);
    }
}</code></pre>
             <p>Two policy implementations:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Class</th><th>Max items</th><th>Loan days</th><th>Fine per day</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>StudentPolicy</code></td><td>3</td><td>7</td><td>PHP 5.00</td></tr>
                 <tr><td><code>FacultyPolicy</code></td><td>10</td><td>30</td><td>PHP 2.00</td></tr>
               </tbody>
             </table>
             <p>The member does not decide the rules. It asks its policy.</p>
             <pre><code class="language-java">public int getMaxItems() {
    return policy.getMaxItems();
}</code></pre>
             <p>Why is this useful? We can add a new member type (for example, <code>AlumniPolicy</code>) without changing the <code>Member</code> class. We just add a new policy class and a case in the factory.</p>
             <p>This is a <strong>Strategy pattern</strong> because the strategy (the policy) is interchangeable. The context (the member) uses the strategy it is given.</p>`,
        },
        {
          id: "l10-4",
          title: "Observer pattern",
          content: `
             <p>The <strong>Observer pattern</strong> lets one object tell many others when something changes.</p>
             <p>In our project, <code>LibraryService</code> is the <strong>subject</strong>. It holds a list of observers. When an event happens (like an overdue loan), it tells all observers.</p>
             <pre><code class="language-java">private final List&lt;Consumer&lt;String&gt;&gt; observers = new ArrayList&lt;&gt;();

public void addObserver(Consumer&lt;String&gt; observer) {
    observers.add(observer);
}

private void notifyObservers(String message) {
    for (Consumer&lt;String&gt; observer : observers) {
        observer.accept(message);
    }
}</code></pre>
             <p>The menu registers two observers:</p>
             <pre><code class="language-java">service.addObserver(message -&gt; console.notice(message));
service.addObserver(message -&gt; notificationLog.add(message));</code></pre>
             <p>When a loan becomes overdue, the service calls <code>notifyObservers</code>. Each observer does its own job: one prints the notice to the screen, the other saves it to a log.</p>
             <p>Why is this useful?</p>
             <ul style="padding-left:20px;">
               <li>The service does not need to know what the observers do.</li>
               <li>We can add or remove observers without changing the service.</li>
               <li>It separates concerns.</li>
             </ul>
             <p>This is a light version of the Observer pattern, using the <code>Consumer</code> functional interface instead of a full interface.</p>`,
        },
        {
          id: "l10-5",
          title: "What patterns are NOT in our project",
          content: `
             <p>It is important to be honest. Here are some patterns that <strong>do not</strong> appear in our project:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Pattern</th><th>Why it is not used here</th></tr>
               </thead>
               <tbody>
                 <tr><td>Singleton</td><td>No class in the project is a singleton. We did not need a single instance.</td></tr>
                 <tr><td>Decorator</td><td>No class wraps another to add behavior.</td></tr>
                 <tr><td>Command</td><td>No object represents a command to be executed later.</td></tr>
                 <tr><td>Adapter</td><td>No class converts one interface to another.</td></tr>
                 <tr><td>MVC (full)</td><td>We have a loose separation: MenuController (view) and LibraryService (model), but not a true MVC.</td></tr>
               </tbody>
             </table>
             <p>The professor's instructions said: <em>Explain the patterns actually implemented in our project. Do not pretend a pattern is implemented if it is not.</em> We follow that rule.</p>`,
        },
      ],
    },
    {
      id: "ch11",
      title: "Code quality principles",
      icon: "✨",
      lessons: [
        {
          id: "l11-1",
          title: "SOLID",
          content: `
             <p><strong>SOLID</strong> is a set of five principles for writing good object-oriented code. The name SOLID comes from the first letters of the five principles.</p>
             <table class="table-card">
               <thead>
                 <tr><th>Letter</th><th>Principle</th><th>What it means</th></tr>
               </thead>
               <tbody>
                 <tr><td><strong>S</strong></td><td>Single Responsibility</td><td>A class should have one job.</td></tr>
                 <tr><td><strong>O</strong></td><td>Open/Closed</td><td>Open for extension, closed for modification.</td></tr>
                 <tr><td><strong>L</strong></td><td>Liskov Substitution</td><td>Child objects can replace parent objects.</td></tr>
                 <tr><td><strong>I</strong></td><td>Interface Segregation</td><td>Make small, focused interfaces.</td></tr>
                 <tr><td><strong>D</strong></td><td>Dependency Inversion</td><td>Depend on abstractions, not on details.</td></tr>
               </tbody>
             </table>
             <p>In our project:</p>
             <ul style="padding-left:20px;">
               <li><strong>Single Responsibility</strong> &mdash; <code>ConsoleHelper</code> handles the terminal only. <code>MenuController</code> handles the menu. <code>LibraryService</code> handles the library logic.</li>
               <li><strong>Open/Closed</strong> &mdash; <code>LibraryFactory</code> can be extended with new item types without changing the menu.</li>
               <li><strong>Liskov Substitution</strong> &mdash; a <code>LibraryItem</code> variable can hold a <code>Book</code> or <code>Magazine</code>, and the code still works.</li>
               <li><strong>Interface Segregation</strong> &mdash; <code>BorrowingPolicy</code> is small and focused on borrowing rules.</li>
               <li><strong>Dependency Inversion</strong> &mdash; <code>Member</code> depends on the <code>BorrowingPolicy</code> interface, not on a concrete class.</li>
             </ul>
             <p>SOLID helps the project stay clean as it grows.</p>`,
        },
        {
          id: "l11-2",
          title: "Single Responsibility Principle",
          content: `
             <p>The <strong>Single Responsibility Principle (SRP)</strong> says that each class should have one reason to change. In other words, one class, one job.</p>
             <p>Examples in our project:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Class</th><th>Job</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>Main</code></td><td>Start the program.</td></tr>
                 <tr><td><code>MenuController</code></td><td>Show the menu and read input.</td></tr>
                 <tr><td><code>LibraryService</code></td><td>Manage library rules and data.</td></tr>
                 <tr><td><code>ConsoleHelper</code></td><td>Read and write to the terminal.</td></tr>
                 <tr><td><code>Repository&lt;T&gt;</code></td><td>Store and save records.</td></tr>
                 <tr><td><code>LibraryFactory</code></td><td>Create objects.</td></tr>
               </tbody>
             </table>
             <p>Why does this matter? If the menu crashes, we look in <code>MenuController</code>, not in <code>ConsoleHelper</code>. If the save fails, we look in <code>Repository</code>. Each class has one place to look.</p>`,
        },
        {
          id: "l11-3",
          title: "Open/Closed Principle",
          content: `
             <p>The <strong>Open/Closed Principle (OCP)</strong> says that a class should be open for <em>extension</em>, but closed for <em>modification</em>.</p>
             <p>In our project, this appears when we use a <code>switch</code> in <code>LibraryFactory</code>:</p>
             <pre><code class="language-java">switch (type.trim().toUpperCase()) {
    case "BOOK":
        return new Book(id, title, detail1, detail2);
    case "MAGAZINE":
        return new Magazine(id, title, detail1, detail2);
    default:
        throw new IllegalArgumentException("Unknown item type: " + type);
}</code></pre>
             <p>To add a new item type, we add a case to the switch. We do not change the menu code, the service code, or the repository code. The factory can change, and the rest stays the same.</p>
             <p>This is <em>open for extension</em>. To make it fully <em>closed for modification</em>, we could use a registry of creators, but for a small project the factory is a good start.</p>`,
        },
        {
          id: "l11-4",
          title: "DRY",
          content: `
             <p><strong>DRY</strong> stands for <strong>Don't Repeat Yourself</strong>. The idea is that every piece of knowledge must have a single, unambiguous representation in the system.</p>
             <p>In our project, DRY appears in several ways:</p>
             <ul style="padding-left:20px;">
               <li><code>Repository&lt;T&gt;</code> handles saving and loading for all three record types. We do not write three separate file handlers.</li>
               <li><code>ConsoleHelper</code> wraps all terminal output with labeled messages.</li>
               <li>The cancel-callback <code>cancelled()</code> is used by every sub-menu, so the message is written once and shown everywhere.</li>
             </ul>
             <p>If we had to change the <code>[SUCCESS]</code> tag, we would change it in one place (<code>ConsoleHelper</code>) and every class using it would show the new style.</p>`,
        },
        {
          id: "l11-5",
          title: "KISS",
          content: `
             <p><strong>KISS</strong> stands for <strong>Keep It Simple, Stupid</strong>. It means: keep the design as simple as possible.</p>
             <p>In our project:</p>
             <ul style="padding-left:20px;">
               <li><code>Main</code> is thin. It only creates objects and starts the menu. It has no logic.</li>
               <li><code>MenuController</code> does not contain library rules. It asks the service.</li>
               <li>The <code>Repository</code> is a single generic class for all three record types.</li>
               <li>The code avoids unnecessary layers. Every class does exactly what it needs to.</li>
             </ul>
             <p>A simple design is easier to understand, easier to test, and less likely to break.</p>`,
        },
        {
          id: "l11-6",
          title: "Why Main should remain thin",
          content: `
             <p>The <code>Main</code> class in our project is very small. It only has <code>main()</code>, which creates the service, creates the menu, and starts it.</p>
             <pre><code class="language-java">public static void main(String[] args) {
    String dataFolder = (args.length > 0) ? args[0] : "data";
    try (ConsoleHelper console = new ConsoleHelper()) {
        LibraryService service = new LibraryService(dataFolder);
        MenuController menu = new MenuController(console, service);
        menu.run();
    }
}</code></pre>
             <p>Why is this good?</p>
             <ul style="padding-left:20px;">
               <li>It is a <strong>launcher</strong>, not a place for logic.</li>
               <li>If we need to change how the program starts, we change only <code>Main</code>.</li>
               <li>The real logic lives in <code>MenuController</code> and <code>LibraryService</code>.</li>
               <li>It makes testing easier: we can test the service without running the whole program.</li>
             </ul>
             <p>This is a clear example of the <strong>Single Responsibility Principle</strong>.</p>`,
        },
        {
          id: "l11-7",
          title: "Why meaningful names matter",
          content: `
             <p>A <strong>meaningful name</strong> tells you what something is or does without needing to open it.</p>
             <p>Good names in our project:</p>
             <table class="table-card">
               <thead>
                 <tr><th>Name</th><th>Why it is good</th></tr>
               </thead>
               <tbody>
                 <tr><td><code>LibraryService</code></td><td>Tells us it is the service for the library.</td></tr>
                 <tr><td><code>itemRepo</code></td><td>Short for <em>item repository</em>. Clear and short.</td></tr>
                 <tr><td><code>recordName</code></td><td>Tells us the name of the record type, used in messages.</td></tr>
                 <tr><td><code>checkOverdueLoans</code></td><td>Its job: check for overdue loans.</td></tr>
                 <tr><td><code>notifyObservers</code></td><td>Its job: notify observers.</td></tr>
                 <tr><td><code>cancelIfRequested</code></td><td>Its job: check for cancel request.</td></tr>
               </tbody>
             </table>
             <p>Bad names hide the purpose and force the reader to study the code to understand it.</p>`,
        },
        {
          id: "l11-8",
          title: "Why we should avoid unnecessary classes and complexity",
          content: `
             <p>A class should exist because it has a real job. Do not create a class just to hold a few lines of code.</p>
             <p>In our project, each class has a clear job:</p>
             <ul style="padding-left:20px;">
               <li><code>Book</code> &mdash; holds book data.</li>
               <li><code>Loan</code> &mdash; holds borrowing data.</li>
               <li><code>ConsoleHelper</code> &mdash; handles the terminal.</li>
               <li><code>Repository</code> &mdash; handles records.</li>
             </ul>
             <p>We avoid over-engineering:</p>
             <ul style="padding-left:20px;">
               <li><code>Repository&lt;T&gt;</code> is generic, so we do not write a separate repository for items, members, and loans.</li>
               <li><code>LibraryFactory</code> is a single place for all object creation.</li>
               <li>The observer system is a small list of lambdas.</li>
             </ul>
             <p>Keeping things simple means the project can be understood by students in a short time.</p>`,
        },
      ],
    },
  ],
};
window.DCIT50Content.javaFundamentals = javaFundamentals;

/* ===== code-explorer.js ===== */
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
window.DCIT50Content.codeExplorer = codeExplorer;

/* ===== system-walkthrough.js ===== */
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
window.DCIT50Content.systemWalkthrough = systemWalkthrough;

/* ===== practice-questions.js ===== */
/**
 * DCIT 50 Library Management System - Learning Hub
 * Content: Practice Q&A - the professor's possible questions.
 */

const practiceQa = [
  {
    id: "q1",
    question: "What happens when the user selects option 1 (Add a Library Item)?",
    answer: `When the user chooses option 1, the menu asks for the item type, ID, title, and details. Then it creates the item with LibraryFactory, adds it to the service, prints a success message, and saves the data automatically.`,
    detail: `The menu method addItem() reads the type (book or magazine), then the ID, title, author/ISBN or issue/publisher. LibraryFactory.createItem() builds the right object. service.addItem() stores it. autoSave() writes the items file.`,
    source: "MenuController.java, addItem() method",
    followUp: "What happens if two members try to add the same ID?",
  },
  {
    id: "q2",
    question: "What is the purpose of the LibraryService class?",
    answer: "LibraryService is the brain of the library. It holds all records, enforces rules, and handles saving and loading. The menu never decides library rules.",
    detail: "The service has three repositories for items, members, and loans. It checks availability, limits, fines, and overdue loans. It also notifies observers about important events like overdue loans.",
    source: "LibraryService.java, class declaration",
    followUp: "Why does the menu not decide rules itself?",
  },
  {
    id: "q3",
    question: "Why did we use inheritance for Book and Magazine?",
    answer: "Book and Magazine both extend LibraryItem. They share the ID, title, and availability. Inheritance lets us write code that works with any item, without duplicating code.",
    detail: "A Book IS-A LibraryItem. A Magazine IS-A LibraryItem. They inherit the fields and methods of LibraryItem. They each add their own details and provide their own getItemType(), getDetails(), and toFileLine() methods.",
    source: "Book.java, Magazine.java",
    followUp: "What would happen if we add a new item type, like DVD?",
  },
  {
    id: "q4",
    question: "What is the difference between an abstract class and an interface?",
    answer: "An abstract class can have both concrete methods and fields. An interface defines a contract. A class can extend only one abstract class, but it can implement many interfaces.",
    detail: "LibraryItem is an abstract class. It holds the shared fields (itemId, title, available). It declares abstract methods like getItemType(). A class cannot extend two classes. BorrowingPolicy is an interface. It defines the behavior of a policy. A class can implement many interfaces.",
    source: "LibraryItem.java, BorrowingPolicy.java",
    followUp: "Which one did we use for borrowing rules?",
  },
  {
    id: "q5",
    question: "How does polymorphism appear in our project?",
    answer: "Polymorphism appears when a LibraryItem variable holds either a Book or a Magazine. When we call getItemType() or getDetails(), Java runs the version of the actual object.",
    detail: "In the menu table, we loop over List<LibraryItem>. Each item may be a Book or a Magazine. Calling item.getItemType() gives the right result for each type. This is dynamic method dispatch.",
    source: "MenuController.java, printItemTable() method",
    followUp: "What is the benefit of using LibraryItem as the type?",
  },
  {
    id: "q6",
    question: "Why did you choose the Factory pattern?",
    answer: "The Factory pattern hides how objects are created. The menu and service ask for an item, and the factory decides which class to build. This keeps the code simple and lets us add new types without changing the menu.",
    detail: "LibraryFactory has static createItem() and createMember() methods. The menu never writes new Book(...) or new StudentPolicy(...). All creation happens in one place.",
    source: "LibraryFactory.java",
    followUp: "What would happen if we added a DVD item type?",
  },
  {
    id: "q7",
    question: "What is the Strategy pattern in our project?",
    answer: "The Strategy pattern lets us change behavior by swapping objects. A Member has a BorrowingPolicy. StudentPolicy and FacultyPolicy are two strategies. The member delegates its rules to the policy.",
    detail: "A student can borrow 3 items for 7 days with PHP 5/day. A faculty member can borrow 10 items for 30 days with PHP 2/day. The Member does not decide. It asks its policy, which is a BorrowingPolicy object.",
    source: "Member.java, StudentPolicy.java, FacultyPolicy.java",
    followUp: "How would we add a new member type?",
  },
  {
    id: "q8",
    question: "What happens if the data files do not exist?",
    answer: "The program does not crash. The repository returns an empty list, so the program starts with no records. The user can add data, and the files will be created.",
    detail: "In loadFromFile(), if the file does not exist, the method returns an empty list of warnings. The program prints 'Loaded 0 item(s), 0 member(s), 0 loan(s).'",
    source: "Repository.java, loadFromFile() method",
    followUp: "What happens if the data file has a bad line?",
  },
  {
    id: "q9",
    question: "Where is an exception thrown and where is it caught?",
    answer: "IllegalArgumentException is thrown when a field is invalid, for example a blank title. RecordNotFoundException is thrown when an ID is not found. LibraryRuleException is thrown for business rule violations. The menu catches these and shows the message.",
    detail: "In Book.setTitle(), if the title is blank, it throws IllegalArgumentException. In Repository.add(), if the ID exists, it throws LibraryRuleException. In LibraryService.borrowItem(), the menu catches these and prints the message.",
    source: "Book.java, Repository.java, LibraryService.java",
    followUp: "What is the difference between checked and unchecked exceptions?",
  },
  {
    id: "q10",
    question: "How does the application save its data?",
    answer: "The service calls saveAll(), which writes three files: items.txt, members.txt, and loans.txt. Each record is written as one line with pipes as separators.",
    detail: "The repository writes the records to a .tmp file first. Then it moves the temp file to the real file. This protects the old data if the program crashes.",
    source: "LibraryService.java, saveAll() method",
    followUp: "What happens if the save fails?",
  },
  {
    id: "q11",
    question: "What happens if the data file does not exist?",
    answer: "The program starts with empty data. The repository returns an empty list, so the program shows 'Loaded 0 item(s), 0 member(s), 0 loan(s).'",
    detail: "In loadFromFile(), if the file does not exist, the method returns immediately with an empty list of warnings.",
    source: "Repository.java, loadFromFile() method",
    followUp: "Why is this a good design?",
  },
  {
    id: "q12",
    question: "How does the application handle corrupted records?",
    answer: "The repository catches exceptions for each line and skips the bad line. It adds a warning message about the skipped line. The program never crashes.",
    detail: "In loadFromFile(), each line is read and parsed inside a try block. If a line fails, the catch block adds a warning with the line number and the error. The program keeps reading the next lines.",
    source: "Repository.java, loadFromFile() method",
    followUp: "What would happen if the whole file is corrupted?",
  },
  {
    id: "q13",
    question: "What is the purpose of the generic class Repository<T>?",
    answer: "Repository<T> stores records of any type. It writes the code once and uses it for items, members, and loans. The T is a placeholder for the real type. The compiler checks the types for us.",
    detail: "The repository uses ArrayList<T> and HashMap<String, T>. When we create Repository<LibraryItem>, T becomes LibraryItem. The code for saving and loading is the same for all three types.",
    source: "Repository.java",
    followUp: "Why not write three separate repository classes?",
  },
  {
    id: "q14",
    question: "Where did you use a lambda expression?",
    answer: "We used lambdas in three places: the observers in the service, the search filter in the repository, and the sort in LibraryService.",
    detail: "The service adds observers with message -> console.notice(message). The repository finds records with item -> item.getTitle().contains(key). LibraryService sorts with (first, second) -> first.getTitle().compareToIgnoreCase(second.getTitle()).",
    source: "LibraryService.java, Repository.java, MenuController.java",
    followUp: "What is a functional interface?",
  },
  {
    id: "q15",
    question: "How do the classes communicate with one another?",
    answer: "MenuController calls LibraryService, which calls Repository. Repository reads and writes the data files. Member has a BorrowingPolicy object. LibraryFactory creates objects. ConsoleHelper handles the terminal.",
    detail: "The layers are: UI (ConsoleHelper), Controller (MenuController), Service (LibraryService), Storage (Repository), and Model (Book, Magazine, Member, Loan). Each layer only talks to the layer below or beside it.",
    source: "All packages",
    followUp: "What would happen if we changed the menu?",
  },
];
window.DCIT50Content.practiceQa = practiceQa;

/* ===== quizzes.js ===== */
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
window.DCIT50Content.quizzes = quizzes;

/* ===== debugging.js ===== */
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
window.DCIT50Content.debugging = debugging;

})();
