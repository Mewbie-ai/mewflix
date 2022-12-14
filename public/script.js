function getDiscover(type, header, filter, page) {
  const API_KEY = "05dd11d19f28344e864c39000bfb940c";
  const API_URL = "https://api.themoviedb.org/3/";
  const discover = "discover/movie";
  if (!page) {
    page = Math.floor(Math.random() * 5) + 1;
  }
  const url = `${API_URL}${discover}?api_key=${API_KEY}&include_adult=false&include_video=true&page=${page}&with_genres=${type}${filter}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const main = document.querySelector(".home-screen");
      const slider = document.createElement("div");
      slider.classList.add("slider");
      console.log(movies);
      const h2 = document.createElement("h2");
      h2.innerHTML = header;
      h2.classList.add("header");
      movies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" />
        `;
        slider.appendChild(card);
      });
      main.appendChild(h2);
      main.appendChild(slider);
    });
}

const dropdown = document.querySelector("#dropdown");
const dropdownMenu = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
const username = document.querySelector("#username");
const login = document.querySelector("#login");
login.addEventListener("click", () => {
  const loginScreen = document.querySelector(".login-screen");
  const homeScreen = document.querySelector(".home-screen");
  const name = document.querySelector("#name");
  if (username.value === "") {
    return;
  }
  name.textContent = "Hi, " + username.value;
  loginScreen.classList.toggle("active");
  homeScreen.classList.toggle("active");
});

getDiscover(28, "Popular Movies", "&sort_by=popularity.desc", 1);
getDiscover(1, "Action Movies");
getDiscover(5, "Horror Movies");
getDiscover(19, "Biography Movies");
getDiscover(18, "Best Dramas");
getDiscover(35, "Comedy Movies");
