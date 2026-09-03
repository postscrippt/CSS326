let book = [];

function addBook(title, author, year) {
    book.push({ title, author, year });
}

addBook("1984", "George Orwell", 1949);
addBook("Dune", "Frank Herbert", 1965);
addBook("The Hobbit", "J.R.R. Tolkien", 1937);

//console.log(book);

console.log("Number of books: " + book.length);
console.log("Second book title: " + book[1].title);

function printBook() {
    for (let i = 0; i < book.length; i++) {
        console.log(book[i].title + " by " + book[i].author);
    }
}

printBook();
