const numberOfFilms = +prompt('сколько фильмов ?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    private: false
};

const a = prompt('один із переглянутих фільмів?',''),
      b = prompt('на скільки ви його оціните?',''),
      c = prompt('один із переглянутих фільмів?',''),
      d = prompt('на скільки ви його оціните?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);