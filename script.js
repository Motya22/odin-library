const booksEl = document.querySelector('.books');
const addBookForm = document.querySelector('#add-book-form');
const addBookModal = document.querySelector('#add-book-modal');
const addBookBtn = document.querySelector('#add-book-btn');
const modalCloseBtn = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

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

function addBookToLibrary() {
  const title = addBookForm.querySelector('#book-title').value;
  const author = addBookForm.querySelector('#book-author').value;
  const pages = addBookForm.querySelector('#book-pages').value;
  const read = addBookForm.querySelector('#book-read').checked;
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
}

function removeBook(dataBookId) {
  const bookIndex = dataBookId - 1;

  myLibrary.splice(bookIndex, 1);
}

function toggleBookStatus(dataBookId) {
  const bookIndex = dataBookId - 1;
  const currentBook = myLibrary[bookIndex];

  currentBook.read = !currentBook.read;
}

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

  myLibrary.forEach((book, i) => {
    booksEl.insertAdjacentHTML(
      'beforeend',
      `
        <article class="book" data-book-id="${i + 1}">
          <header class="book__header">
            <div>${book.pages} pages</div>
            <div>${book.author}</div>
          </header>
          <h2 class="book__title">${book.title}</h2>
          <footer class="book__footer">
            <button type="button" class="btn" data-toggle-book-status>${
              book.read ? 'Already read' : 'Not read yet'
            }</button>
            <button type="button" class="btn" data-remove-book>Remove</button>
          </footer>
        </article>
      `
    );
  });
}

// ADD BOOK MODAL
addBookBtn.addEventListener('click', () => {
  addBookModal.classList.add('active');
});

modalCloseBtn.addEventListener('click', () => {
  addBookModal.classList.remove('active');
  addBookForm.reset();
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    addBookModal.classList.remove('active');
    addBookForm.reset();
  }
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  addBookToLibrary();
  addBookModal.classList.remove('active');
  renderLibrary();
  addBookForm.reset();
});

booksEl.addEventListener('click', (e) => {
  const target = e.target;

  if (target.hasAttribute('data-remove-book')) {
    const currentBook = target.closest('.book');
    const dataBookId = currentBook.dataset.bookId;

    removeBook(dataBookId);
    renderLibrary();
  }
  if (target.hasAttribute('data-toggle-book-status')) {
    const currentBook = target.closest('.book');
    const dataBookId = currentBook.dataset.bookId;

    toggleBookStatus(dataBookId);
    renderLibrary();
  }
});

renderLibrary();
