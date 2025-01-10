
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const movieListContainer = document.getElementById("movieListContainer");


  const movieList = JSON.parse(localStorage.getItem("movieList")) || [];

  if (movieList.length === 0) {
    movieListContainer.innerHTML = "<p>No movies saved!</p>";
    return;
  }


  movieList.forEach((movie) => {
    const movieHTML = `
      <div class="render">
        <div><img class="image" src="${movie.Poster}" alt="${movie.Title}" class="movie-poster"></div>
        <div>
          <h1 class="title">${movie.Title}</h1>
          <p>${movie.Year} - ${movie.Type}</p>
        </div>
      </div>
    `;
    movieListContainer.innerHTML += movieHTML;
  });
});