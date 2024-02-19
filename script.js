class Book {
    constructor(main, sub, author, pages, color, read) {
        this.main = main
        this.sub = sub
        this.author = author
        this.pages = pages
        this.color = color
        this.read = read
    }

    getHTML() {
        var bookElement = document.createElement('div');
        bookElement.classList.add('book', this.color);
    
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
        mainTitle.textContent = this.main;
    
        var subtitle = document.createElement('h4');
        subtitle.classList.add('sub');
        subtitle.textContent = this.sub;
    
        titleDiv.appendChild(mainTitle);
        titleDiv.appendChild(subtitle);
    
        var authorPara = document.createElement('p');
        authorPara.classList.add('author');
        authorPara.textContent = this.author;
    
        var pagesPara = document.createElement('p');
        pagesPara.classList.add('pages');
        if (this.pages != "1") {
            pagesPara.textContent = this.pages + ' Pages';
        }else {
            pagesPara.textContent = this.pages + ' Page';
        }
    
        var readButton = document.createElement('button');
        readButton.classList.add('button');
        readButton.textContent = this.read;
        readButton.addEventListener('click', () => {
            console.log("antes: " + this.read)
            if(this.read == "Read") {
                this.read = "Not Read"
            }else {
                this.read = "Read"
            }
            readButton.textContent = this.read
            console.log("dps: " + this.read)
            }
        )
    
        bookElement.appendChild(deleteButton);
        bookElement.appendChild(titleDiv);
        bookElement.appendChild(authorPara);
        bookElement.appendChild(pagesPara);
        bookElement.appendChild(readButton);
    
        return bookElement;
    }

}

function getRadio(radioName) {
    var radioButtonGroup = document.getElementsByName(radioName);
    var checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
    return checkedRadio
}

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
    form.reset()
    newBook = new Book(main, sub, author, pages, color, read)
    console.log(newBook)
    shelf.appendChild(newBook.getHTML())
})
