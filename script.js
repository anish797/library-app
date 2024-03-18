document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");
  const addBtn = document.querySelector("button");
  // const readInput = document.querySelector("#read");

  const books = [];

  function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function () {
      return `${this.title} by ${this.author} is ${this.pages} long.`;
    };
  }

  function addBooktoLibrary(event) {
    event.preventDefault();
    const bookTitle = titleInput.value;
    const bookAuthor = authorInput.value;
    const bookPages = pagesInput.value;

    const isBookInLibrary = books.some(
      (book) => book.title === bookTitle && book.author === bookAuthor
    );

    if (isBookInLibrary) {
      alert("Book is already in the list.");
      return;
    }

    const newBook = new Book(bookTitle, bookAuthor, bookPages);
    books.push(newBook);
    const newEntry = document.createElement("div");
    newEntry.textContent = newBook.info();
    document.body.appendChild(newEntry);
  }

  addBtn.addEventListener("click", addBooktoLibrary);
});
