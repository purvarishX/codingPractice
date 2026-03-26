//1. fibonacci series
console.log("Fibonacci Series:");
var num1 = 0;
var num2 = 1;
for (let i = 0; i < 10; i++) {
    console.log(num1);
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
}


//2. remove duplicate from array
var arr = [1, 2, 3, 4, 5, 1];

const arrn = [1, 2, 3, 2, 4, 1, 3, 6, 7, 8, 6];

// 1
const newArr = arrn.filter(item =>
    arr.indexOf(item) == arr.lastIndexOf(item))

console.log(newArr);

// 2
const arn = new Set(arrn);
console.log(arn, ":set");

const arrNew = [...new Set(arrn)];
console.log(arrNew, ": set new");

const newArray = arrn.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(newArray, "new array");

// console.log (arr.filter((item, index) => arr.indexOf(item) === index), "index");

for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {

            arr.splice(j, 1);
        }
    }
}

console.log(arr, ":for loops 2");



// 3. remove duplicate from array of objects
var array = [
    { name: 'chetan', city: 'mumbai' },
    { name: 'purva', city: 'nagpur' },
    { name: 'chetan', city: 'mumbai' },
    { name: 'himanshu', city: 'jibhi' }
];
debugger;
var newArraySorted = array.filter((item, index) => array.findIndex(m => m.name === item.name) === index);
console.log("newArraySorted", newArraySorted);

for (let i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
        if (array[i].name.toLowerCase() === array[j].name.toLowerCase()) {
            array.splice(j, 1);
        }
    }
}

console.log("array new objects : ", array);


// 4. first letter of each word to upperCase/lowercase
var stringText = 'MY Name Is Purvashree waldey';
var splitText = stringText.split(' ');
console.log(splitText);
let final = '';
splitText.forEach(arr => {
    let first = arr.charAt(0).toLowerCase();
    let last = first + arr.slice(1);
    final = final + last + ' ';
    console.log("ARR", arr);
});
console.log("Original: ", stringText);
console.log("Final: ", final)