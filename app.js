// Mapping
// map, forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function print(el, index, array) {
  console.log(el);
}
// const result = numbers.forEach(print);
// console.log(result);

function doubleNum(num) {
  return num * 2;
}

// map() возвращает новым массив не изменяя оригинальный
const result = numbers.map(doubleNum); //[]
console.log(result);
console.log(numbers);
// то же самое через стрелочную функцию
const result2 = numbers.map((num) => num * 2);
console.log(result2);
