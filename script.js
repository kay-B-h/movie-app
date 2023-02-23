//http://www.omdbapi.com/?i=tt3896198&apikey=6435aa8f&t=blacklist
let searchForm = document.querySelector("form");

let searchtext = document.querySelector(".search-text");

let moviesContainer = document.querySelector(".movies");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //console.log(searchtext.value);
  getMovies(searchtext.value);
});
function getMovies(searchterm) {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=6435aa8f&t=&{searchterm}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.Title) {
        //show user the movie title
        moviesContainer.innerHTML = "";
        let poster = document.createElement("img");
        poster.setAttribute("src", data.Poster);
        let title = document.createElement("h1");
        title.textContent = data.Title;
        let type = document.createElement("p");
        type.textContent = data.Type;

        moviesContainer.append(poster);
        moviesContainer.append(title);
        moviesContainer.append(type);
      } else {
        moviesContainer.textContent = data.Error;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

fetch()
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //country DOM COUNTRY PROFILES
  });

// assynchronous js -- open ai create a clone of chat gpt

// XAMPP Server
