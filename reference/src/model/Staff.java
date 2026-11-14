package model;

/**
 * A library staff member (librarian). Staff handle the borrowing at the desk.
 *
 * Staff is NOT a kind of Member, because staff do not borrow here,
 * so it is its own class.
 */
public class Staff {

    private final String staffId;
    private String name;
    private String role;

    /**
     * @param staffId the unique ID (saved in capital letters)
     * @param name    the staff member's name
     * @param role    the job, for example "Head Librarian"
     */
    public Staff(String staffId, String name, String role) {
        if (staffId == null || staffId.isBlank()) {
            throw new IllegalArgumentException("Staff ID cannot be empty.");
        }
        this.staffId = staffId.trim().toUpperCase();
        setName(name);
        setRole(role);
    }

    /** @return the staff ID */
    public String getStaffId() {
        return staffId;
    }

    /** @return the name */
    public String getName() {
        return name;
    }

    /**
     * @param name the new name (cannot be empty)
     */
    public void setName(String name) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be empty.");
        }
        this.name = name.trim();
    }

    /** @return the role */
    public String getRole() {
        return role;
    }

    /**
     * @param role the new role (cannot be empty)
     */
    public void setRole(String role) {
        if (role == null || role.isBlank()) {
            throw new IllegalArgumentException("Role cannot be empty.");
        }
        this.role = role.trim();
    }

    /** @return this staff member as one line of text for the data file */
    public String toFileLine() {
        return staffId + "|" + name + "|" + role;
    }

    /**
     * Builds a Staff object from one line of the data file.
     *
     * @param line text like "ST001|Maria Santos|Head Librarian"
     * @return the Staff object
     * @throws IllegalArgumentException if the line is not in the correct format
     */
    public static Staff fromFileLine(String line) {
        String[] parts = line.split("\\|", -1); // -1 keeps empty fields at the end
        if (parts.length != 3) {
            throw new IllegalArgumentException("Staff line must have 3 fields but has " + parts.length + ".");
        }
        return new Staff(parts[0], parts[1], parts[2]);
    }
}
