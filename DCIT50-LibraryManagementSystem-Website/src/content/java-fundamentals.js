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

export default javaFundamentals;
