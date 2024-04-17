const display = document.getElementById("display");

function writeOnDisplay(button) {
    if (button == "*" || button == "/" || button == ".") {
        display.innerHTML += button;
    } else{
        display.innerHTML += button.innerHTML;
    }
}

function calculate() {
    display.innerHTML = eval(display.innerHTML);
}

function clearDisplay() {
    display.innerHTML = "";
}

function back() {
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
}