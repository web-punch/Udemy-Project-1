"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        // если numberOfFilms равен пустой строке ("") или (||) отмене действия (null)
        // или(||) не числу(isNan()) то опять выводится сообщение
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

// let i = 0;
// while (i < 2) {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }


// let i = 0;
// do {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }
// while (i < 2);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        //интерполяция - вставка внутрь строки значения переменных, строка должна быть в косых ковычках (бэктиках)
        // [i - 1] т.е. первый номер массива должен быть 0
    }
}
writeYourGenres();

// function writeYourGenres(genre) {
//     for (let i = 1; i < 4; i++) {
//         genre[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         //интерполяция - вставка внутрь строки значения переменных, строка должна быть в косых ковычках (бэктиках)
//     }
// }
// writeYourGenres(personalMovieDB.genres);

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    if (!hidden) { // !hidden(отрицание hidden) это тоже самое что hidden == false
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);