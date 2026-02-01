// Display Screen
const display = document.getElementById("screen");

// Append numbers or operators to the display
function appendValue(input) {
    display.value += input;
}

// Clear the entire display
function clearScreen() {
    display.value = "";
}

// Delete the last character (DEL button)
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        // eval() is dangerous in real apps, but standard for simple calculator projects
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1500); // Clear error after 1.5s
    }
}

document.getElementById("year").textContent = new Date().getFullYear();