const myLibrary = [
  {
    title: 'The Hobbit',
    author: 'John Ronald Reuel Tolkien',
    pages: 295,
    read: false,
  },
  {
    title: 'Digital Fortress',
    author: 'Dan Brown',
    pages: 448,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? 'already read' : 'not read yet'
  }`;
};

function renderLibrary() {
  booksEl.innerHTML = '';

  myLibrary.forEach((book) => {
    booksEl.insertAdjacentHTML(
      'beforeend',
      `
        <article class="book">
          <header class="book__header">
            <div>${book.pages} pages</div>
            <div>${book.author}</div>
          </header>
          <h2 class="book__title">${book.title}</h2>
          <footer class="book__footer">
            <button type="button" class="btn">${
              book.read ? 'Already read' : 'Not read yet'
            }</button>
            <button type="button" class="btn">Remove</button>
          </footer>
        </article>
      `
    );
  });
}

renderLibrary();
