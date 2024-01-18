// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('myapp');

// Create a new document in the collection.
db.getCollection('users').insertOne({
    name: "Aman Pandita", email: "aman@example.com", password: "123456"

});
