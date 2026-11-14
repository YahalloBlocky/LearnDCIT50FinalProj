package storage;

import exception.DuplicateRecordException;
import exception.RecordNotFoundException;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

/**
 * Our own GENERIC class. It stores records of any type T and finds them by ID.
 *
 * T is a placeholder for a real type. Repository&lt;LibraryItem&gt; stores items,
 * Repository&lt;Member&gt; stores members, and so on. We write the code only once.
 *
 * It uses two collections:
 * - an ArrayList keeps the records in the order they were added (good for listing)
 * - a HashMap finds a record by its ID very quickly (good for searching)
 *
 * It can also save its records to a text file and load them back.
 *
 * @param <T> the type of record stored (for example LibraryItem)
 */
public class Repository<T> {

    private final String recordName;           // used in messages, for example "Item"
    private final Function<T, String> idGetter; // tells us how to get the ID of a record
    private final ArrayList<T> records = new ArrayList<>();
    private final HashMap<String, T> index = new HashMap<>();

    /**
     * @param recordName a word for one record, used in messages (for example "Member")
     * @param idGetter   a method that returns the ID of a record
     *                   (for example Member::getMemberId)
     */
    public Repository(String recordName, Function<T, String> idGetter) {
        this.recordName = recordName;
        this.idGetter = idGetter;
    }

    /** Makes IDs easy to compare: removes spaces and uses capital letters. */
    private String normalize(String id) {
        return id.trim().toUpperCase();
    }

    /**
     * Adds a record.
     *
     * @param record the record to add
     * @throws DuplicateRecordException if a record with the same ID already exists
     */
    public void add(T record) throws DuplicateRecordException {
        String id = normalize(idGetter.apply(record));
        if (index.containsKey(id)) {
            throw new DuplicateRecordException(recordName + " ID '" + id + "' already exists.");
        }
        records.add(record);
        index.put(id, record);
    }

    /**
     * Finds a record by ID.
     *
     * @param id the ID to look for
     * @return the record, or null if there is no record with that ID
     */
    public T findById(String id) {
        return index.get(normalize(id));
    }

    /**
     * Gets a record by ID. Unlike findById, it never returns null.
     *
     * @param id the ID to look for
     * @return the record
     * @throws RecordNotFoundException if there is no record with that ID
     */
    public T getById(String id) throws RecordNotFoundException {
        T record = findById(id);
        if (record == null) {
            throw new RecordNotFoundException(recordName + " ID '" + normalize(id) + "' was not found.");
        }
        return record;
    }

    /**
     * @param id the ID to look for
     * @return true if a record with this ID exists
     */
    public boolean exists(String id) {
        return index.containsKey(normalize(id));
    }

    /**
     * Removes a record.
     *
     * @param id the ID of the record to remove
     * @throws RecordNotFoundException if there is no record with that ID
     */
    public void remove(String id) throws RecordNotFoundException {
        T record = getById(id);
        records.remove(record);
        index.remove(normalize(id));
    }

    /** @return a COPY of the list of all records, so outside code cannot damage ours */
    public List<T> getAll() {
        return new ArrayList<>(records);
    }

    /**
     * Finds all records that match a condition.
     *
     * @param condition a Predicate (a lambda that answers true or false for one record)
     * @return a new list with the records where the condition is true
     */
    public List<T> findAll(Predicate<T> condition) {
        List<T> result = new ArrayList<>();
        for (T record : records) {
            if (condition.test(record)) {
                result.add(record);
            }
        }
        return result;
    }

    /** @return the number of records */
    public int size() {
        return records.size();
    }

    /**
     * Saves all records to a text file, one record per line.
     * It writes to a temporary file first and then replaces the real file,
     * so a crash while saving cannot destroy the old data.
     *
     * @param path   the file to write
     * @param toLine a method that turns one record into one line of text
     * @throws IOException if the file cannot be written
     */
    public void saveToFile(String path, Function<T, String> toLine) throws IOException {
        File target = new File(path);
        File folder = target.getParentFile();
        if (folder != null) {
            folder.mkdirs(); // create the data folder if it does not exist
        }
        File temp = new File(path + ".tmp");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(temp))) {
            for (T record : records) {
                writer.write(toLine.apply(record));
                writer.newLine();
            }
        } // the writer is closed automatically here
        Files.move(temp.toPath(), target.toPath(), StandardCopyOption.REPLACE_EXISTING);
    }

    /**
     * Loads records from a text file. A missing file is not an error: we simply
     * start with no records. A bad line is skipped and reported, never a crash.
     *
     * @param path     the file to read
     * @param fromLine a method that turns one line of text into one record
     *                 (it throws a RuntimeException if the line is bad)
     * @return a list of warning messages (empty if everything loaded fine)
     */
    public List<String> loadFromFile(String path, Function<String, T> fromLine) {
        List<String> messages = new ArrayList<>();
        File file = new File(path);
        if (!file.exists()) {
            messages.add("File not found: " + path + " (starting with no "
                    + recordName.toLowerCase() + " records).");
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
                    } catch (DuplicateRecordException | RuntimeException e) {
                        messages.add("Skipped line " + lineNumber + " of " + path + ": " + e.getMessage());
                    }
                }
                line = reader.readLine(); // read the next line (null at the end of the file)
            }
        } catch (IOException e) {
            messages.add("Could not read " + path + ": " + e.getMessage());
        }
        return messages;
    }
}
