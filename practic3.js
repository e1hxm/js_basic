/*
Задание
1 - Первую часть задания повторить по уроку

2 - Создать функцию showMyDB которая будет проверять свойство privat
    Если стоит в позиции false выводим в консоль объект программы

3 - Создать функцию writeYourGenres в которой пользователь 
    будет 3 раза отвечать на вопрос 
    "Ваш любимый жанр под номером $(номер по порядку)"
    Кадый ответ записываем в массив данных genres

"функции вызывать не обязательно"
*/

let numberOfFilms;



function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let a = prompt('Один из фильмов который вы посмотрели?', ''),
            b = +prompt('На сколько баллов оцените фильм?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('Done!');
            } else {
                console.log('Error!!!');
                i--;
            }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 ) {
        console.log('Вы посмотрели мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log('Произошла ошибка!');
    }
}
detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.ganres[i - 1] = genre;
    }
}

writeYourGenres();