const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,
};

let a = prompt('Один из фильмов который вы посмотрели?', ''),
    b = +prompt('На сколько баллов оцените фильм?', ''),
    c = prompt('Один из фильмов который вы посмотрели?', ''),
    d = +prompt('На сколько баллов оцените фильм?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);