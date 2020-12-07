"use strict";

// alert('Hello!');

// const result = confirm("Arу you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "");
// console.log(typeof (answer));

// const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// const category = ('toys');
// console.log(`https://web-punch.ru/${category}/5`);

// const user = prompt('Как ваше имя?');
// alert(`Привет, ${user}`);


// let incr = 10,
//   decr = 10;
// incr++; // Опереатор инкримента ++ (увеличение на единицу)
// decr--; // Оператор декримента -- (уменьшение на единицу)
// console.log(incr);
// console.log(decr);

// // Значение не изменится т.к. постфиксный (после переменной)  оператор возврвщает сначала старое значение
// console.log(incr++);
// console.log(decr--);
// // Значенеие изменится на единицу (префиксный, т.е. перед переменной)
// console.log(++incr);
// console.log(--decr);


// // Оператор % - возвращения остатка от деления двух чисел
// console.log(5 % 2); // Выводит число 1, остаток при делении 5 на 2 


// // Оператор равенства ==
// // Возвратит true
// console.log(2 * 4 == 8);
// // Тоже значение true, хотя '8' уже строка, т.к. тут проверяется толлько значение данных
// console.log(2 * 4 == '8');
// // Оператор строгово равенства ===
// // Проверяются не только значения, но и тип данных
// // Значение false, т.к. '8' это не число, а строка
// console.log(2 * 4 === '8');
// // Значение true
// console.log(2 * 4 === 8);


// Оператор && (и), оперетор || (или)
// Оператор && (и) работает когда везде true(правда)
// Оператор || (или) работает когда true(правда) хотя бы в одном подопотном

// // Возвращает true
// const isChecked = true,
//   isClose = true;
// console.log(isChecked && isClose);

// // Вщзвращает false
// const isChecked = true,
//   isClose = false;
// console.log(isChecked && isClose);

// // Возвращает true
// const isChecked = true,
//   isClose = true;
// console.log(isChecked || isClose);

// // Возвращает true
// const isChecked = true,
//   isClose = false;
// console.log(isChecked || isClose);

// // Возвращает значение false
// const isChecked = false,
//   isClose = false;
// console.log(isChecked && isClose);
// console.log(isChecked || isClose);


// // Оператор ! (отрицания)
// const isChecked = false,
//   isClose = false;
// // В этом примере вернёт true, т.к. isClose уже не false
// console.log(isChecked || !isClose);


// // Оператор != (не равно по значению), оператор !== (строгое неравенство по значени и типу данных)
// // Вернёт true, т.к 6 не равно 8 и оперетор не строгий
// console.log(2 + 2 * 2 != 8);
// console.log(2 + 2 * 2 != '8');
// // Вернёт false, т.к. 6 равно 6, а оператор строгого НЕравенства
// console.log(2 + 2 * 2 !== 6);
// // Вернёт true, т.к. '6' не число а строка, а соответственно при строгом НЕравенстве число не равнятся строке
// console.log(2 + 2 * 2 !== '6');