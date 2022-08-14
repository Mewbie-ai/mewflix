const API_KEY = "05dd11d19f28344e864c39000bfb940c";
const API_URL = "https://api.themoviedb.org/3/";
const discover = "discover/movie";
function getDiscover(type, header, filter) {
  const url = `${API_URL}${discover}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${type}${filter}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      const main = document.querySelector(".main");
      const slider = document.createElement("div");
      slider.classList.add("slider");
      console.log(movies);

      movies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="" />
        `;
        slider.appendChild(card);
      });

      main.appendChild(slider);
    });
}
getDiscover(28, "Action");
getDiscover(20, "Horror");
getDiscover(19, "Popular");
getDiscover(18, "Best Dramas");
getDiscover(22, "Comedy");
console.log(getDiscover(28));
