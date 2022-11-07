// concat
let firstName = "Alice";
let lastName = " Brown";
let fullName = firstName.concat(lastName);
console.log(fullName);               // "Alice Brown"

// endsWith
let sent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(sent.endsWith("industry."));   // true

// slice
console.log(sent.slice(0, 5));        // "Lorem"
console.log(sent.slice(6, 11));       // "Ipsum"
console.log(sent.slice(-1));          // "."

// split
let fruits = ["Apple", "Banana", "Mango", "Orange",];
console.log(fruits);   // ["Apple", "Banana", "Mango", "Orange"]
fruits.splice(1, 0, "Kiwi");
console.log(fruits);   // ["Apple", "Kiwi", "Banana", "Mango", "Orange"]
fruits.splice(3, 1, "Lemon");
console.log(fruits);   // ["Apple", "Kiwi", "Banana", "Lemon", "Orange"]

// toString
let text = 123;
console.log(typeof(text));                // "number"
console.log(typeof(text.toString()));     // "string"

// trim
let text2 = "   Alice Brown     ";
console.log(text2.trim());        // "Alice Brown"
