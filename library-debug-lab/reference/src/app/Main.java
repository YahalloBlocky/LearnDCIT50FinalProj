package app;

import service.LibraryService;
import util.ConsoleHelper;

/**
 * Starts the Library Management System. Main stays thin:
 * it only creates the main objects and hands control to the MenuController.
 *
 * Run it with: java -cp out app.Main
 * Optional: give another data folder, for example: java -cp out app.Main mydata
 */
public class Main {

    /**
     * The program starts here.
     *
     * @param args optional: the name of the data folder (default is "data")
     */
    public static void main(String[] args) {
        String dataFolder = (args.length > 0) ? args[0] : "data";

        // try-with-resources: the ConsoleHelper (and its Scanner) is closed automatically at the end
        try (ConsoleHelper console = new ConsoleHelper()) {
            LibraryService service = new LibraryService(dataFolder);
            MenuController menu = new MenuController(console, service);
            menu.run();
        }
    }
}
