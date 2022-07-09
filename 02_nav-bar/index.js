const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
// const singleLink = document.querySelectorAll('li a');

navToggle.addEventListener("click", () => {
    console.log(links.classList);

    // console.log(links.classList.contains('show-links'));

    if (links.classList.contains("show-links") === false) {
        links.classList.add("show-links");
    } else links.classList.remove("show-links");

    console.log(links.classList.contains("show-links"));
});

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("home")) {
        event.target.classList.add("active");
    }
});
