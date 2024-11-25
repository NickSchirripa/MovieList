import "./style.css";
//api key http://www.omdbapi.com/?i=tt3896198&apikey=4c03152d

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
    movieHTML += `<p>${data.Search[i].Title}  ${data.Search[i].Year}</p>`;
  }

  feed.innerHTML = movieHTML;
});
