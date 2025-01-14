// Задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0
        } else if (value >= 100) {
            this._state = 100
        } else(this._state = value)
    }

    get state() {
        return this._state;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(object) {
        if (object.state > 30) {
            this.books.push(object);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(elem => elem[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        let result = this.findBookBy('name', bookName);
        if (result) {
            this.books = this.books.filter(book => book.name !== bookName);
            return result;
        } else {
            return null;
        }
    }
}

// Задание 3
// Coming soon! [loading...]