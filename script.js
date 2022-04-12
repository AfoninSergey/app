let numberOfFilms = prompt('Сколько фильмов?', '');
  while (numberOfFilms < 0 || numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt('Сколько фильмов?', '');
  }
  
  console.log(numberOfFilms);
  

  const personalMuvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };
  

  for (let i = 0; i < 2; i++ ) {
    let a = prompt('Один из последних фильмов', ''),
        b = +prompt('На сколько его оцените?', '');
    if (a == "" || b == "" || a == null || b == null || a.length > 50 || b.length > 50) {
      i--;
    } else {
      personalMuvieDB.movies[a] = b;
    }        
  }
  console.log(personalMuvieDB);

  if (personalMuvieDB.count < 10) {
    console.log("МАЛО!");
  } else if (personalMuvieDB.count >= 10 && personalMuvieDB.count < 30) {
    console.log("НОРМАЛЬНО!");
  } else if (personalMuvieDB.count >= 30) {
    console.log("СУПЕР!");
  } else {
    console.log("ОШИБКА!");
  }
  

  
