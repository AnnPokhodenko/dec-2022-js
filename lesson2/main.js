// // Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let life = ['year', 'month', 'week', 'day', 'hour', 'min', 'sec', 12, 24, 60];
console.log(life[0]);
console.log(life[1]);
console.log(life[2]);
console.log(life[3]);
console.log(life[4]);
console.log(life[5]);
console.log(life[6]);
console.log(life[7]);
console.log(life[8]);
console.log(life[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'Book lovers',
    pageCount: 416,
    genre: 'novel'
}

let book2 = {
    title: 'Da vinci code',
    pageCount: 689,
    genre: 'detective'
}

let book3 = {
    title: 'Throne of Glass',
    pageCount: 432,
    genre: 'fantasy'
}


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: '39 clues',
    pageCount: 220,
    genre: 'adventure',
    authors: [
        {name: 'Rick Riordan', age: 58},
        {name: 'Gordon Korman', age: 59},
        {name: 'Jude Watson', age: 66}
    ]
}


let book5 = {
    title: 'Squire',
    pageCount: 336,
    genre: 'fantasy',
    authors: [
        {name: 'Nadia Shammas', age: 23},
        {name: 'Sara Alfageeh', age: 25}
    ]
}

let book6 = {
    title: 'My Imaginary Mary',
    pagCount: 496,
    genre: 'fantasy',
    authors: [
        {name: 'Cynthia Hand', age: 45},
        {name: 'Brodi Ashton', age: 51},
        {name: 'Jodi Meadows', age: 41}
    ]
}


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'Goethe', username: 'faust', password: 1749},
    {name: 'DaVinci', username: 'vitruvianman', password: 1452},
    {name: 'Newton', username: 'applepie', password: 1643},
    {name: 'Leibnitz', username: 'calculus', password: 1646},
    {name: 'Mill', username: 'liberte', password: 1806},
    {name: 'Galilei ', username: 'sunny', password: 1564},
    {name: 'Descartes', username: 'ithinkthereforeiam', password: 1596},
    {name: 'Erasmus', username: 'humanist', password: 1466},
    {name: 'Michelangelo ', username: 'david', password: 1475},
    {name: 'Spinoza', username: 'ethics', password: 1632},
]

console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 0
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 37;
if (time <= 15) {
    console.log('Перша четверть')
} else if (time >= 16 && time <= 30) {
    console.log('Друга четверть')
} else if (time >= 31 && time <= 45) {
    console.log('Третя четверть')
} else if (time >= 46 && time < 60) {
    console.log('Четверта четверть')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 11;
if (day >= 1 && day <= 10) {
    console.log('Перша декада')
} else if (day >= 11 && day <= 20) {
    console.log('Друга декада')
} else if (day >= 21 && day >= 31) {
    console.log('Третя декада')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = 4
switch (week) {
    case 1:
        console.log('Monday');
        break;

    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 4;
let num2 = 4;
if (num1 > num2) {
    console.log('num1')
} else if (num1 === num2) {
    console.log('equal')
} else if (num1 < num2) {
    console.log('num2')
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = 'null';
let res = x || 'default';
console.log(res);


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}
