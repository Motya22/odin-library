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
