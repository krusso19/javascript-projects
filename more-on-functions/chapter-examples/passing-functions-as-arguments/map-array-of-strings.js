let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
function getFirstInitial(str) {
    return str[0];
}

// and pass it to .map()
let firstInitials = names.map(getFirstInitial);

console.log(firstInitials);
