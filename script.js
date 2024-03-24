document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.querySelector("#title");
  const authorInput = document.querySelector("#author");
  const pagesInput = document.querySelector("#pages");

  const addButton = document.querySelector(".addButton");
  const dialog = document.getElementById("myModal");
  const form = document.getElementById("bookForm");
  const addCardButton = document.getElementById("addCardButton");
  const cardsContainer = document.querySelector(".cards");

  addButton.addEventListener("click", () => {
    dialog.showModal();
  });

  addCardButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.querySelector(
      'input[name="readStatus"]:checked'
    ).value;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="title">${title}</div>
      <div class="author">${author}</div>
      <div class="pages">${pages} pages</div>
      <button class="status ${
        readStatus === "read" ? "read" : "notread"
      }">${readStatus}</button>
      <button class="delete">delete</button>
    `;

    cardsContainer.appendChild(card);

    const statusButton = card.querySelector(".status");
    statusButton.addEventListener("click", () => {
      if (statusButton.classList.contains("read")) {
        statusButton.classList.remove("read");
        statusButton.classList.add("notread");
        statusButton.textContent = "not read";
      } else {
        statusButton.classList.remove("notread");
        statusButton.classList.add("read");
        statusButton.textContent = "read";
      }
    });

    const deleteButton = card.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      card.remove();
    });

    dialog.close();

    form.reset();
  });

  console.log("DOM Loaded");

  const readBtns = document.querySelectorAll(".read");

  console.log(readBtns);

  readBtns.forEach((readBtn) => {
    readBtn.addEventListener("click", () => {
      console.log("Button clicked");
      readBtn.classList.toggle("read");
      readBtn.classList.toggle("notread");
    });
  });

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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".addButton");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
