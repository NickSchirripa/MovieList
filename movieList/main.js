import "./style.css";

const button = document.getElementById("btn");
const feed = document.getElementById("feed");

button.addEventListener("click", async () => {
  const input = document.getElementById("movieName").value;
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
    <button class="addList">Add to list</button>
    </div>
    </div>`;
  }

  feed.innerHTML = movieHTML;
});
