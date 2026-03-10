// Adv 1: Convert the first letter of the word to upper case 
function upperCaseConversion(word) {
    let wordNew = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(wordNew);
    document.getElementById("result").innerText = wordNew;
}

// Adv 2: Convert each letter of the sentence to upper case
function upperCaseEachWord(string) {
    let wordArr = string.split(" ");
    let newStr = [];
    wordArr.forEach(element => {
        element = element.charAt(0).toUpperCase() + element.slice(1);
        newStr.push(element);
    });
    let newStrWithUpperCase = newStr.join(" ");
    console.log("NEW STRING: ", newStrWithUpperCase);
    document.getElementById("result").innerText = newStrWithUpperCase;
}

//upperCaseEachWord("this is my home");

// Adv 3: Sum total of all arguments, no. of args can be dynamic
function sum(...args) {
    console.log(args);
    let sumTotal = 0;
    for (let num of args) {
        sumTotal = sumTotal + num;
    }
    return sumTotal;
}
let sum1 = sum(1, 2, 4);
let sum2 = sum(1, 2, 3, 4, 5);
console.log("Sum 1: ", sum1);
console.log("Sum 2: ", sum2);


// Adv 4: Button click counts
let clickButton1 = 0;
let clickButton2 = 0;
function buttonClick(buttonName) {
    if (buttonName === 'button1') {
        clickButton1 = clickButton1 + 1;
        if (clickButton1 > 0) {
            document.getElementById("resultClick1").innerText = clickButton1;
        }
    } else if (buttonName === 'button2') {
        clickButton2 = clickButton2 + 1;
        if (clickButton2 > 0) {
            document.getElementById("resultClick2").innerText = clickButton2;
        }
    }
}