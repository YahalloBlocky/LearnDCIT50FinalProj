package model;

/**
 * A student who borrows from the library. It IS-A Member, and adds a course.
 */
public class StudentMember extends Member {

    private String course;

    /**
     * @param memberId the unique ID
     * @param name     the student's name
     * @param course   the student's course, for example "BSIT"
     * @param policy   the borrowing rules (the factory gives a StudentPolicy)
     */
    public StudentMember(String memberId, String name, String course, BorrowingPolicy policy) {
        super(memberId, name, policy);
        setCourse(course);
    }

    /** @return the course */
    public String getCourse() {
        return course;
    }

    /**
     * @param course the new course (cannot be empty)
     */
    public void setCourse(String course) {
        if (course == null || course.isBlank()) {
            throw new IllegalArgumentException("Course cannot be empty.");
        }
        this.course = course.trim();
    }

    @Override
    public String getMemberType() {
        return "Student";
    }

    @Override
    public String getExtraInfo() {
        return course;
    }

    @Override
    public String toFileLine() {
        return "STUDENT|" + getMemberId() + "|" + getName() + "|" + course;
    }
}
