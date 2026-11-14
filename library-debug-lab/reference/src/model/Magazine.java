package model;

/**
 * A magazine. It IS-A LibraryItem (inheritance), and adds an issue and a publisher.
 */
public class Magazine extends LibraryItem {

    private String issue;
    private String publisher;

    /**
     * @param itemId    the unique ID
     * @param title     the title
     * @param issue     the issue, for example "Issue 12" or "March 2026"
     * @param publisher the company that publishes the magazine
     */
    public Magazine(String itemId, String title, String issue, String publisher) {
        super(itemId, title);
        setIssue(issue);
        setPublisher(publisher);
    }

    /** @return the issue */
    public String getIssue() {
        return issue;
    }

    /**
     * @param issue the new issue (cannot be empty)
     */
    public void setIssue(String issue) {
        if (issue == null || issue.isBlank()) {
            throw new IllegalArgumentException("Issue cannot be empty.");
        }
        this.issue = issue.trim();
    }

    /** @return the publisher */
    public String getPublisher() {
        return publisher;
    }

    /**
     * @param publisher the new publisher (cannot be empty)
     */
    public void setPublisher(String publisher) {
        if (publisher == null || publisher.isBlank()) {
            throw new IllegalArgumentException("Publisher cannot be empty.");
        }
        this.publisher = publisher.trim();
    }

    @Override
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
    }
}
