const navToggle = document.querySelector(".nav-toggle");
const ul = document.querySelector("ul");
const links = document.querySelectorAll('.links');
const sections = document.querySelectorAll('section');

// When clicking on hamburger menu it will display the navigation as a toggle
navToggle.addEventListener("click", () => {
    console.log(ul.classList);

    if (ul.classList.contains("show-links") === false) {
        ul.classList.add("show-links");
    } else ul.classList.remove("show-links");

    console.log(ul.classList.contains("show-links"));
});


// Iterate the list of sections from last to first until finding a match
// Then remove .active class from all links
// Then add it to the link at the active index
function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);