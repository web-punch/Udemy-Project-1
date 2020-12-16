"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            // если numberOfFilms равен пустой строке ("") или (||) отмене действия (null)
            // или(||) не числу(isNan()) то опять выводится сообщение
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) { // !hidden(отрицание hidden) это тоже самое что hidden == false
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            //интерполяция - вставка внутрь строки значения переменных, строка должна быть в косых ковычках (бэктиках)
            if (genre != null && genre != '') {
                personalMovieDB.genres[i - 1] = genre;
                // [i - 1] т.е. первый номер массива должен быть 0
            } else {
                console.log('Введите название жанра');
                i--;
            }
        }
        // personalMovieDB.genres.forEach(function (item, i) {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });
        // // или таже запись но со стрелочной функцией
        personalMovieDB.genres.forEach((item, i) => { // стрелочная ф-ция
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
    // // немного по другому вариант
    // writeYourGenres: function () {
    //     for (let i = 1; i < 2; i++) {
    //         const genre = prompt(`Введите ваши любимые жанры через запятую`);
    //         if (genre != null && genre != '') {
    //             personalMovieDB.genres = genre.split(', ');
    //             // split преобразует элементы строки в массив
    //             personalMovieDB.genres.sort();
    //             // сортировка данных
    //         } else {
    //             console.log('Вы ввели некорректные данные или не ввели их совсем');
    //             i--;
    //         }
    //     }
    //     personalMovieDB.genres.forEach((item, i) => { // стрелочная ф-ция
    //         console.log(`Любимый жанр ${i + 1} - это ${item}`);
    //     });
    // }
};