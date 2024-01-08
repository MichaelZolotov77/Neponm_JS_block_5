// Стандартные встроенные объекты

console.log(Number("12"));
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(String(12));
console.log(Boolean("")); // false
console.log(Boolean([])); // true

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // ['a', 'b', 'c']
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [Array(2), Array(2), Array(2)]

console.log(Array.isArray(obj)); // false
console.log(Array.from("hello")); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.of("hello", 1, true)); // ['hello', 1, true]
