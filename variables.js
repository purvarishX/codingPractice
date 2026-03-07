// adv 1
var isTrue = true;
if (isTrue) {
    console.log("Value is Success");
} else  {
    console.log("Value is Failure");
}

// adv 2
var firstName = "Sachin";
var middleName = "Ramesh";
var lastName = "Tendulkar";
function getChar() {
    const firstChar = firstName.charAt(0) + "-" + middleName.charAt(0) + "-"+ lastName.charAt(0);
    console.log(firstChar);
}

// adv 3
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate()
console.log("New date formatted: ", year + "/" + month + "/" + day );


//adv 4
var productName = "Samsung Galaxy s4";
var price = 98.56789;
var discount = 20;
var newPrice = price - (price*discount/100);
console.log(`Original price of ${productName} was Rs.${price} with ${discount}% discount, new price is ${newPrice}` );

// adv 5
function searchWord() {
    
}
