import { data } from "./data.js";
let parsedData = JSON.parse(data);
console.log(parsedData);

parsedData.forEach((obj) => {
  let { id, title } = obj;
  let list = document.querySelector("#movieList");
  let movieList = `<li id = ${id}>${title}</li>`;
  list.innerHTML += movieList;
});

function display() {
  let movie = parsedData.find((movie) => movie.id == this.id);
  let { title, image, description } = movie;
  display.innerHTML = `
  <h2 id = "movieHeader">${title}</h2>
  <img id = "movieImg" src="${image}" alt=${title} />
  <p id = "movieInfo">${description}</p>
  `;
}

// listItems.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     item.style.backgroundColor = "darkblue";
//   });
//   item.addEventListener("mouseleave", () => {
//     item.style.backgroundColor = "blue";
//   });
//   item.addEventListener("click", () => {
//     item.style.backgroundColor = "red";
//     display();
//   });
// });
