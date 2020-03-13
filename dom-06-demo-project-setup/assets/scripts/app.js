const addMovieModal = document.getElementById("add-modal");

const startAddMovieButton = document.querySelector("header button");

const backdrop = document.querySelector("#backdrop");

const cancelModalButton = addMovieModal.querySelector(".btn--passive");

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

startAddMovieButton.addEventListener("click", toggleMovieModal);
// startAddMovieButton.addEventListener("click", toggleBackdrop);
cancelModalButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

