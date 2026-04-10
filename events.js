function readTextValue() {
    alert("Button Click");
}

function changeText() {
    console.log("Change value");
}

function onCityChange() {
    alert('City Change');
}

function clickButton(event, language) {
    alert(language);
    console.log(event, "Event");
    console.log(event.target, "Event");
    console.log(event.target.innerText, ":InnerText");
}

function onMouseEnterDiv() {
    console.log("Mouse Enter");
}

function onMouseLeaveDiv() {
    console.log("Mouse Leave");
}

function onKeyDown() {
    console.log("KEY DOWN")
}

function onPageScroll() {
    console.log("On Scroll div")
}

function resizeLog() {
    console.log('Rezise page');
}

//to get mouse position where it is click event
function getPosition(event) {
    console.log(event.clientX, event.clientY);
}