// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberOfTimesCheckedOut, discardedStatus){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn,
        this.numberOfPages = numberOfPages;
        this.numberOfTimesCheckedOut = numberOfTimesCheckedOut;
        this.discardedStatus = discardedStatus;
    }
    checkout(uses = 1){
        this.numberOfTimesCheckedOut += uses;
    }
}
//KT - I only need to include checkout in Book because the exercise asks for it to be updated in another step. Otherwise, it could just live in Novel.

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberOfTimesCheckedOut, discardedStatus){
        super(title, author, copyrightDate, isbn, numberOfPages, numberOfTimesCheckedOut, discardedStatus);
    }
    throwOutManual(currentYear){
        if (currentYear - this.copyrightDate > 5){
            this.discardedStatus = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, numberOfTimesCheckedOut, discardedStatus){
        super(title, author, copyrightDate, isbn, numberOfPages, numberOfTimesCheckedOut, discardedStatus);
    }
    throwOutNovel(){
        if (this.numberOfTimesCheckedOut > 100){
            this.discardedStatus = 'Yes';
        }
    }
}


// Declare the objects for exercises 2 and 3 here:

let pNP = new Novel("Pride and Prejudice", "Jane Austen", 1813, '1111111111111', 432, 32, "No");

let topSecret = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000', 1147, 1, "No");


// Code exercises 4 & 5 here:

console.log(pNP);
console.log(topSecret);

topSecret.throwOutManual(2024);
pNP.checkout(5);
console.log(topSecret);
console.log(pNP);