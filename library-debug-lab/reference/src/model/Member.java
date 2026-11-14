package model;

/**
 * ABSTRACT parent class of all library members (StudentMember, FacultyMember).
 *
 * A member HAS-A BorrowingPolicy (composition). The member does not decide
 * the borrowing rules by itself. It asks its policy. This is the Strategy pattern.
 */
public abstract class Member {

    private final String memberId;
    private String name;
    private final BorrowingPolicy policy; // the rules for this member (an interface)

    /**
     * @param memberId the unique ID (saved in capital letters)
     * @param name     the member's name (cannot be empty)
     * @param policy   the borrowing rules for this member
     */
    public Member(String memberId, String name, BorrowingPolicy policy) {
        if (memberId == null || memberId.isBlank()) {
            throw new IllegalArgumentException("Member ID cannot be empty.");
        }
        if (policy == null) {
            throw new IllegalArgumentException("A member must have a borrowing policy.");
        }
        this.memberId = memberId.trim().toUpperCase();
        this.policy = policy;
        setName(name);
    }

    /** @return the member ID */
    public String getMemberId() {
        return memberId;
    }

    /** @return the member's name */
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

    /** @return the most items this member may borrow at once (asks the policy) */
    public int getMaxItems() {
        return policy.getMaxItems();
    }

    /** @return the number of days this member may keep an item (asks the policy) */
    public int getLoanDays() {
        return policy.getLoanDays();
    }

    /**
     * @param daysOverdue how many days late the item is
     * @return the fine for this member (asks the policy)
     */
    public double calculateFine(int daysOverdue) {
        return policy.calculateFine(daysOverdue);
    }

    /** @return the kind of member, for example "Student" */
    public abstract String getMemberType();

    /** @return the extra detail of this member (course or department) */
    public abstract String getExtraInfo();

    /** @return this member as one line of text for the data file */
    public abstract String toFileLine();
}
