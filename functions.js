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
    console.log("NEW STRING: ",newStrWithUpperCase);
    document.getElementById("result").innerText = newStrWithUpperCase;
}

//upperCaseEachWord("this is my home");

