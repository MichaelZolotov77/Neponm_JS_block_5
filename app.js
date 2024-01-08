// Spread/rest operator
const numbers = [7, 3, 35, 6, 2, 8, 20];
const cities = ["Madrid", "Amsterdam", "Paris", "Berlin", "Kiev"];

console.log(cities);
console.log(...cities);
// используется как оператор распространения
const arr2 = ["Riga", ...cities, "Moscow"];
console.log(arr2);

const dev1 = {
  id: 1,
  fullname: "John Doe",
  skills: ["HTML", "CSS", "JavaScript"],
  area: "frontend",
};

const dev2 = { ...dev1 };
dev2.id = 18;
dev2.fullname = "Mikhail";
console.log(dev1);
console.log(dev2);

console.log(sum(4, 3));
console.log(sum(4, 3, 1));
console.log(sum(4, 3, 1, 2));

// ...args [] - массив
// здесь ... используется как оператор остатка
function sum(a, b, ...args) {
  let result = a + b;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}
