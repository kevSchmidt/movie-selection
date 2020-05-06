import { data } from "./data.js";
let parsedData = JSON.parse(data);

const movieDescription = document.querySelector("#movieDescription");

// create the movie selection
parsedData.forEach((obj) => {
  let { id, title } = obj;
  let list = document.querySelector("#movieList");
  let movieList = `<li id = ${id}>${title}</li>`;
  list.innerHTML += movieList;
});

// display movies info
function display() {
  let movie = parsedData.find((movie) => movie.id == this.id);
  let { title, image, description } = movie;
  movieDescription.innerHTML = `
  <h2 id = "movieHeader">${title}</h2>
  <img id = "movieImg" src="${image}" alt=${title} />
  <p id = "movieInfo">${description}</p>
  `;
}

const listItems = document.querySelectorAll("#movieList li");

// active item
function onClick() {
  listItems.forEach((movie) => {
    if (movie.classList.contains("active")) {
      movie.classList.remove("active");
    }
    this.classList.remove("hover");
    this.classList.add("active");
  });
}

// event listener
listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
  });
  item.addEventListener("click", onClick);
  item.addEventListener("click", display);
});
