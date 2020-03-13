const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.querySelector("#backdrop");

const cancelModalButton = addMovieModal.querySelector(".btn--passive");

const addModalButton = cancelModalButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll("input");

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

const closeModal = () => {
addMovieModal.classList.remove("visible");
backdrop.classList.remove("visible");
}

const addMoviewModalHandler = () => {
const titleValue = userInputs[0].value;
const imageUrlValue = userInputs[1].value;
const ratingValue = userInputs[2].value;

if (titleValue.trim() === "" || 
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5) {
        alert("Please enter valid values (rating between 1 and 5)")
    }
}

startAddMovieButton.addEventListener("click", toggleMovieModal);
// startAddMovieButton.addEventListener("click", toggleBackdrop);
cancelModalButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
addModalButton.addEventListener("click", addMoviewModalHandler)

