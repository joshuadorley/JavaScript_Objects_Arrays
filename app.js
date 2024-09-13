console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {};
book.title = "The Hobbit";
book.author = "J.R.R Tolkien";
book.pages = 295;
book.readCount = 3;

book.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info()); 

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords(sentence)); 
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function parseCSV(csv) {
  let rows = csv.split('\n');
  let headers = rows[0].split(',');

  let result = rows.slice(1).map(row => {
    let values = row.split(',');
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index];
    });
    return obj;
  });

  return result;
}

console.log(parseCSV(csvData));