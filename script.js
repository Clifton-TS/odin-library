function Book(main, sub, author, pages, color, read ) {
    this.main = main
    this.sub = sub
    this.author = author
    this.pages = pages
    this.como = color
    this.read = read
}

library = {}

form = document.getElementById("new-book")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main = document.getElementById("main-input")
    sub = document.getElementById("sub-input")
    author = document.getElementById("author-input")
    pages = document.getElementById("pages-input")
    // book = new Book()
    form.reset()
})