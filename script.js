let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calculateSquareRoot() {
    display.value = Math.sqrt(parseFloat(display.value)).toFixed(2);
}
