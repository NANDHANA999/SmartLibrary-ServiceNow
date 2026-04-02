/*
Flow Script: Handles book availability

This script checks if a book is available.
If available, it marks it as issued.
*/

(function execute(inputs, outputs) {
var book = new GlideRecord('u_library_books');
if (book.get(inputs.book_sys_id)) {
if (book.u_available) {
book.u_available = false;
book.update();
outputs.status = 'Reserved';
} else {
outputs.status = 'Unavailable';
}
}
})(inputs, outputs);
