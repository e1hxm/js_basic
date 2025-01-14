/*Задание:

1 - Автоматизировать вопросы пользователю про фильмы с помощью цикла

2 - Сделать так чтобы пользователь не мог оставить ответ в виде пустой 
строки, отменить ответ или ввести название фильма длиннее чем 50 символов. Автоматизировать
Если это происходит - возвращаем пользователя к вопросам опять. 
(К любой строке можно обратиться с помощью str.length и узнать ее длину)

3 - С помощью условий проверить personalMovieDB.count 
и если он меньше 10 вывести сообщение 
"Вы посмотрели мало фильмов"
Если от 10 до 30 - "Вы классический зритель"
Если больше 30 - "Вы киноман"
Если ни один ответ не подходит вывести сообщение с ошибкой 
"Произошла ошибка!"

4 - Переписпть цикл еще 2 способами


*/


const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false,
};


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

if (personalMovieDB.count < 10 ) {
    console.log('Вы посмотрели мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);