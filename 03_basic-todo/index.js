const ourForm = document.getElementById("ourForm");
const ourInputField = document.getElementById("ourInputField");
const ourList = document.getElementById('ourList')

ourForm.addEventListener("submit", (e) => {
    e.preventDefault();
    createItem(ourInputField.value);
    
});

function createItem(element) {
    let ourHTML = `<li>${element}<button onclick="deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML('beforeend', ourHTML)
    ourInputField.value = '' // Clear input field when submit
    ourInputField.focus(); // After submit input field still focused
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
}