// Select screen and buttons
const displayScreen = document.querySelector(".display-screen");
const buttons = document.querySelectorAll(".btn");

// Initialize counter
let counter = 0;

// Loop through each button
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => { 
        const style = e.currentTarget.classList; // Get the class of the CLICKED button

        if (style.contains("decrement-btn")) { // If the class is DECREMENT...
            counter--;
            updateDisplay();
        } else if (style.contains("increment-btn")) { // If the class is INCREMENT...
            counter++;
            updateDisplay();
        }

        if (counter > 0) {
            displayScreen.style.color = "green";
        } else if (counter < 0) {
            displayScreen.style.color = "red";
        } else displayScreen.style.color = "white";
    });
});

function updateDisplay() {
    displayScreen.textContent = counter;
}
