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
      const main = document.querySelector(".main");
      const slider = document.createElement("div");
      slider.classList.add("slider");
      console.log(movies);
      const h2 = document.createElement("h2");
      h2.innerHTML = header;
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

getDiscover(28, "Popular Movies", "&sort_by=popularity.desc", 1);
getDiscover(11, "Horror Movies");
getDiscover(19, "Biography Movies");
getDiscover(18, "Best Dramas");
getDiscover(35, "Comedy Movies");

function navBurger() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  }),
    nav.addEventListener("click", () => {
      nav.classList.remove("nav-active");
    }),
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        nav.classList.remove("nav-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("nav-active");
      } else {
        nav.classList.remove("nav-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        burger.classList.add("burger-active");
      } else {
        burger.classList.remove("burger-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("nav-active");
      } else {
        nav.classList.remove("nav-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("nav-active");
      } else {
        nav.classList.remove("nav-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("nav-active");
      } else {
        nav.classList.remove("nav-active");
      }
    }),
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        nav.classList.add("nav-active");
      } else {
        nav.class;
      }
    });
}
navBurger();
