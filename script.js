(function() {
  "use ctrict";

  const numberOfFilms = +prompt('Сколько фильмов?', '');

  console.log(numberOfFilms);

  const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

  let a = prompt('Один из последних фильмов', ''),
      b = +prompt('На сколько его оцените?', ''),
      c = prompt('Один из последних фильмов', ''),
      d = +prompt('На сколько его оцените?', '');

  personalMuvieDB.movies[a] = b;
  personalMuvieDB.movies[c] = d;

  console.log(personalMuvieDB);

})();