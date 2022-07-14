let timer
let deleteFirstPhotoDelay


// This function fetches the breed list
async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        createBreedList(data.message);
    } catch {
        alert('There was a problem fetching the breed list');
    }
}

start();

// This function is responsible for creating the select element
function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
        <select onchange="loadByBreed(this.value)">
            <option>Choose a breed</option>
            ${Object.keys(breedList)
                .map((breed) => {
                    return `<option>${breed}</option>`;
                })
                .join("")}
        </select>
    `;
}

async function loadByBreed(breed) {
    if (breed !== "Choose a breed") {
        const response = await fetch(
            `https://dog.ceo/api/breed/${breed}/images`
        );
        const data = await response.json();
        createSlideshow(data.message);
    }
}

// This loads a new slideshow
function createSlideshow(images) {
    let currentPosition = 0;
    clearInterval(timer)
    clearTimeout(deleteFirstPhotoDelay)

    document.getElementById("slideshow").innerHTML = `
        <div class="slide" style="background-image: url('${images[0]}')"></div>
        <div class="slide" style="background-image: url('${images[1]}')"></div>
    `;

    currentPosition += 2;
    timer = setInterval(nextSlide, 2000);

    function nextSlide() {
        document
            .getElementById("slideshow")
            .insertAdjacentHTML(
                "beforeend",
                `<div class="slide" style="background-image: url('${images[currentPosition]}')"></div>`
            );
        deleteFirstPhotoDelay = setTimeout(() => {
            document.querySelector(".slide").remove;
        }, 1000);

        if (currentPosition + 1 >= images.length) {
            currentPosition = 0
        } else currentPosition++;
    }
}
