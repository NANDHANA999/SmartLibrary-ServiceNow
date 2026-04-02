# Database Design

## Overview

The system uses custom tables in ServiceNow to manage books and requests.

## Tables

### 1. u_library_books

Stores all book details.

Fields:

* Title (String)
* Author (String)
* ISBN (String)
* Status (Choice: Available, Issued, Lost)

Purpose:
Maintains inventory of books and their availability.

---

### 2. u_library_requests

Stores all user requests.

Fields:

* Requester (Reference: sys_user)
* Book (Reference: u_library_books)
* Status (Choice: Requested, Approved, Rejected, Issued)
* Issue Date (Date/Time)
* Return Date (Date/Time)

Purpose:
Tracks book requests and their lifecycle.

---

## Relationships

* One Book → Many Requests
* Each request is linked to a specific book

---

## Data Integrity

* Only available books can be requested
* Status updates handled via Flow Designer
