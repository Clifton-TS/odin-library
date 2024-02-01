function Book(main, sub, author, pages, color, read) {
    this.main = main
    this.sub = sub
    this.author = author
    this.pages = pages
    this.color = color
    this.read = read
}

Book.prototype.delete = function() {
    console.log()
}

function getRadio(radioName) {
    var radioButtonGroup = document.getElementsByName(radioName);
    var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
    return checkedRadio
}

function addBook(bookData) {
    var bookElement = document.createElement('div');
    bookElement.classList.add('book', bookData.color);

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete', 'button');
    deleteButton.type = 'button';
    deleteButton.addEventListener('click', function () {
            bookElement.parentElement.removeChild(bookElement)
            
        }
    )

    var deleteIcon = document.createElement('img');
    deleteIcon.src = 'Icons/trash-can-outline.svg';
    deleteIcon.alt = 'Delete';
    deleteButton.appendChild(deleteIcon);

    var titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    var mainTitle = document.createElement('h1');
    mainTitle.classList.add('main');
    mainTitle.textContent = bookData.main;

    var subtitle = document.createElement('h4');
    subtitle.classList.add('sub');
    subtitle.textContent = bookData.sub;

    titleDiv.appendChild(mainTitle);
    titleDiv.appendChild(subtitle);

    var authorPara = document.createElement('p');
    authorPara.classList.add('author');
    authorPara.textContent = bookData.author;

    var pagesPara = document.createElement('p');
    pagesPara.classList.add('pages');
    if (bookData.pages != "1") {
        pagesPara.textContent = bookData.pages + ' Pages';
    }else {
        pagesPara.textContent = bookData.pages + ' Page';
    }

    var readButton = document.createElement('button');
    readButton.classList.add('button');
    readButton.textContent = bookData.read;
    readButton.addEventListener('click', function () {
        if(bookData.read == "Read") {
            bookData.read = "Not Read"
        }else {bookData.read = "Read"}
        readButton.textContent = bookData.read;
    }
)

    bookElement.appendChild(deleteButton);
    bookElement.appendChild(titleDiv);
    bookElement.appendChild(authorPara);
    bookElement.appendChild(pagesPara);
    bookElement.appendChild(readButton);

    return bookElement;
}

library = []

form = document.getElementById("new-book")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    shelf = document.querySelector(".shelf")
    main = document.getElementById("main-input").value
    sub = document.getElementById("sub-input").value
    author = document.getElementById("author-input").value
    pages = document.getElementById("pages-input").value
    color = getRadio("color").value
    read = getRadio("is-read").value
    // library.push(new Book(main, sub, author, pages, color, read))
    form.reset()
    // while (shelf.firstChild) {
    //     shelf.removeChild(shelf.firstChild);
    // }
    // library.forEach((book) => shelf.appendChild(addBook(book)))
    shelf.appendChild(addBook(new Book(main, sub, author, pages, color, read)))
})
