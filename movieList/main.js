import "./style.css";

const button = document.getElementById("btn");
const feed = document.getElementById("feed");
const moviesAdded = document.getElementById("moviesAdded");
const berry = document.getElementById("berry");
let rotation = 0;

function spinImage() {
  if (rotation < 720) {
    rotation += 15;
    berry.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(spinImage);
  }
}

button.addEventListener("click", async () => {
  rotation = 0;
  const input = document.getElementById("movieName").value;
  if (input) {
    spinImage();
  }
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=4c03152d&s=${input}`
  );
  const data = await response.json();
  console.log(data);

  let movieHTML = ``;

  for (let i = 0; i < data.Search.length; i++) {
    movieHTML += `
    <div class= "render">
    <div><img class="image" src=${data.Search[i].Poster}/></div>
    <div>
  <div><h1 class="title">${data.Search[i].Title}<h1></div>
    <p>${data.Search[i].Year} ${data.Search[i].Type}</p>
    <button class="addList" data-movie='${JSON.stringify(
      data.Search[i]
    )}'>Add to list</button>
    </div>
    </div>`;
  }

  feed.innerHTML = movieHTML;
  document.querySelectorAll(".addList").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const movieList = [];
      const movieData = JSON.parse(e.target.getAttribute("data-movie"));
      movieList.push(movieData);
      console.log(movieList);
    });
  });
});
