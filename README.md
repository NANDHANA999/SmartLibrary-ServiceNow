# Smart Library Request Workflow (ServiceNow)

## Project Overview

The Smart Library Request Workflow is a ServiceNow-based application designed to automate library operations such as book requests, approvals, issuing, and tracking. The system replaces manual processes with a structured digital workflow.

## Objectives

* Automate the book request and approval process
* Reduce manual effort and errors
* Maintain accurate book inventory
* Provide real-time updates to users

## Features

* Book search and request functionality
* Approval workflow handled by librarian
* Book issuing and return tracking
* Automated notifications
* Reporting and monitoring

## Tables

* u_library_books
* u_library_requests

## Roles

* Student: Request books and track status
* Librarian: Approve or reject requests and manage inventory
* Admin: Manage system configuration and access

## Workflow

1. User submits a book request
2. Request is sent for approval
3. Librarian approves or rejects the request
4. If approved, the book is issued
5. System updates availability and sends notification

## Milestones

* Roles created
* Tables created
* Fields added
* Flow Designer implementation
* UI policy configuration
* Access control (ACLs)
* Reports generation

## Reports

* Borrowed books
* Available books
* Request status tracking

## Technology Used

* ServiceNow platform
* Flow Designer
* JavaScript (Glide API)

## Conclusion

This project demonstrates how ServiceNow can be used to automate real-world processes such as library management, improving efficiency, accuracy, and user experience.

