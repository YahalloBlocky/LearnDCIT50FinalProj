package model;

/**
 * A teacher who borrows from the library. It IS-A Member, and adds a department.
 */
public class FacultyMember extends Member {

    private String department;

    /**
     * @param memberId   the unique ID
     * @param name       the teacher's name
     * @param department the teacher's department, for example "Computer Science"
     * @param policy     the borrowing rules (the factory gives a FacultyPolicy)
     */
    public FacultyMember(String memberId, String name, String department, BorrowingPolicy policy) {
        super(memberId, name, policy);
        setDepartment(department);
    }

    /** @return the department */
    public String getDepartment() {
        return department;
    }

    /**
     * @param department the new department (cannot be empty)
     */
    public void setDepartment(String department) {
        if (department == null || department.isBlank()) {
            throw new IllegalArgumentException("Department cannot be empty.");
        }
        this.department = department.trim();
    }

    @Override
    public String getMemberType() {
        return "Faculty";
    }

    @Override
    public String getExtraInfo() {
        return department;
    }

    @Override
    public String toFileLine() {
        return "FACULTY|" + getMemberId() + "|" + getName() + "|" + department;
    }
}
