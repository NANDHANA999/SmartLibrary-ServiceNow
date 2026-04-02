# Core Logic and Workflow

## Flow Designer Logic

Trigger:

* When a new request is created

Process:

1. Check book availability
2. Send approval to librarian
3. If approved:

   * Update book status to Issued
   * Update request status to Approved
4. If rejected:

   * Update request status to Rejected

---

## Business Rules (Optional)

* Prevent issuing already issued books
* Automatically update status

---

## Automation Benefits

* Reduces manual intervention
* Ensures accuracy
* Improves efficiency
