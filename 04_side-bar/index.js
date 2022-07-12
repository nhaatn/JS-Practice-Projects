const xBtn = document.querySelector('.x-btn');
const navToggle = document.querySelector('.nav-toggle')
const sideContainer = document.querySelector('.side-container');

navToggle.addEventListener('click', () => {
    console.log(sideContainer.classList);

    // LONG WAY: if sidebar has class then remove. Else add class
    // if(sideContainer.classList.contains('show-sidebar')) {
    //     sideContainer.classList.remove('show-sidebar')
    // } else {
    //     sideContainer.classList.add('show-sidebar')
    // }
    
    // FAST WAY
    sideContainer.classList.toggle('show-sidebar');
})

xBtn.addEventListener('click', () => {
    sideContainer.classList.remove('show-sidebar');
})