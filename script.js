// Calling HTML Elements
const book_svg = document.querySelector(".book");
const add_book = document.querySelector(".add_book");
const add = document.querySelector(".add");
const dim = document.querySelector(".dim");
const submit = document.querySelector(".submit");
const book_name = document.querySelector("#book_name");
const author = document.querySelector("#author");
const read = document.querySelector("#read");
const shelf = document.querySelector(".shelf")
let myLibrary = [];

// Functions declaration

// change book svg color on hover
function book_color() {
    add_book.addEventListener("mouseover", function () {
        book_svg.style.fill = "white";
    });
    add_book.addEventListener("mouseout", function () {
        book_svg.style.fill = "rgba(0, 0, 0, .5)";
    });
};

// click add book to show add book details
function start_add() {
    add_book.addEventListener("click", function () {
        add.classList.add("active");
        dim.classList.add("active");
    });
};

// click anywehre to close add book details
function close_add() {
    dim.addEventListener("click", function () {
        add.classList.remove("active");
        dim.classList.remove("active");
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            add.classList.remove("active");
            dim.classList.remove("active");
        }
    });
};

// Store Book details in a constructor
function Book(name, author, read) {
    this.name = name;
    this.author = author;
    this.read = read;
};

// Add Books to the myLibrary Array
function addBookToLibrary() {
    submit.addEventListener("click", function () {
        if (book_name.value != "") {
            let book = new Book(book_name.value, author.value, read.value);
            if (!present(book) || myLibrary.length == 0) {
                myLibrary.push(book);
                shelfBooks();
                clearBox();
            }
            let book1 = myLibrary[0];
        };
    });
};

// Check if the array aleready has a Book
function present(book) {
    let result = false;
    for (i = 0; i < myLibrary.length; i++) {
        let book1 = myLibrary[i];
        if (book1.name == book.name) { result = true; };
        if (result == true) { return true; };
    };
};

// Add Book to Shelf from array
function shelfBooks() {
    if (myLibrary.length == 0) { shelf.style.display = "none"; }
    else { shelf.style.display = "block"; }
    for (i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        shelf.appendChild(document.createElement("div"));
        shelf.childNodes[i+3].classList.add("col");
        shelf.childNodes[i+3].innerHTML = `<span class="book_title s">${book.name}</span>
                        <span class="book_author s">${book.author}</span>
                        <span class="book_status s">${book.read}</span>`
    };
};

// Empty Book details box
function clearBox() {
    book_name.value = "";
    author.value = "";
    read.value = "";
}


// Function calling

book_color();
start_add();
close_add();
addBookToLibrary();
shelfBooks();