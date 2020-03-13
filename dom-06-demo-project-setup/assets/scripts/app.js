const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.querySelector("#backdrop");
const cancelModalButton = addMovieModal.querySelector(".btn--passive");
const addModalButton = cancelModalButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movies = [];

const updateUI = () => {
   if (movies.length == 0) {
       entryTextSection.style.display = 'block';
   }else {
       entryTextSection.style.display = 'none';
   };
};

const renderNewMovieElement = (title, imageUrl, rating) => {
const newMovieElement = document.createElement('li'); 
newMovieElement.className = 'movie-elemnt';
newMovieElement.innerHTML = `
<div class="movie-element__image">
   <img src="${imageUrl}" alt="${title}">
</div>
<div class="movie-element__info">
   <h2>${title}</h2>
   <p>${rating}/5 stars</p>
</div>
`;
const listRoot = document.getElementById("movie-list");
listRoot.appendChild(newMovieElement);

};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const closeModal = () => {
    addMovieModal.classList.remove("visible");
    backdrop.classList.remove("visible");
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for (const input of userInputs) {
        input.value = '';
    }
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
        alert("Please enter valid values (rating between 1 and 5)");
        return;
    };

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    closeModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};



startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelModalButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
addModalButton.addEventListener("click", addMoviewModalHandler)

