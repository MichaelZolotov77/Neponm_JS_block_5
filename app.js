// Destructuring
const numbers = [7, 3, 35, 6, 2, 8, 20];
const cities = ["Madrid", "Amsterdam", "Paris", "Berlin", "Kiev"];

// Деструктуризация массива
const [madrid, amst, paris] = cities;
console.log(madrid, amst, paris);

// с пропусками
const [madrid2, , paris2, , kiev] = cities;
console.log(madrid2, paris2, kiev);

// с оператором остатка
const [madrid3, ams, ...otherCities] = cities;
console.log(otherCities);

// если данные null
const cities2 = null;
const [madrid4 = "Мадрид", ams2 = "Амстердам", ...otherCities2] = cities2 || [];
console.log(madrid4, ams2, otherCities2);

// вложенный массив
const numbers2 = [7, [3, 35], 6, 2, 8, 20];
const [a, [b, c], d] = numbers2;
console.log(a, b, c, d);

const [a1 = 0, [b1 = 1, c1 = 1] = [], d1 = 0] = cities2 || [];
console.log(a1, b1, c1, d1);

let x = 10;
let y = 20;
// значения переменных меняем местами
[y, x] = [x, y];
console.log(x, y); // 20 10

function getInfo() {
  return ["BMW", "X3"];
}

const [carName, carSeries] = getInfo();
console.log(carName, carSeries);
