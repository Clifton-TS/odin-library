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
    inputs = form.querySelectorAll("input")
    inputValues = []
    inputs.forEach(input => {
        inputValues.push(input.value)
    });
    console.log(inputValues)
    // book = new Book()
    form.reset()
})