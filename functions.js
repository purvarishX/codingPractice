function upperCaseConversion(word) {
    let wordNew = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(wordNew);
    document.getElementById("result").innerText = wordNew;
}