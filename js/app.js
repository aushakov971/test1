'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('сколько фильмов ?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('сколько фильмов ?','');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('один із переглянутих фільмів?');
}

const a = prompt('один із переглянутих фільмів?',''),
      b = prompt('на скільки ви його оціните?',''),
      c = prompt('один із переглянутих фільмів?',''),
      d = prompt('на скільки ви його оціните?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);