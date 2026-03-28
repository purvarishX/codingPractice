var array = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, 13]];

var flatArray = [];
function convertToFlat(arr) {
    let flatArray = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])){
            convertToFlat(arr[i]);
        } else {
            flatArray.push(arr[i]);
        }
    }
    return flatArray;
}

var result = convertToFlat(array);

console.log("Result: ", result);