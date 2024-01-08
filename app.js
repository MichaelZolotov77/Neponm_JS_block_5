// Sort
const numbers = [7, 3, 35, 6, 2, 8, 20];
const cities = ["Madrid", "Amsterdam", "Paris", "Berlin", "Kiev"];

numbers.sort((a, b) => a - b);
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);
numbers.reverse();
console.log(numbers);

cities.sort((a, b) => a - b); // подход для цифр
console.log(cities);

// подход для букв
function sorting(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

cities.sort(sorting);
console.log(cities);

const developers = [
  {
    id: 1,
    fullname: "John Doe",
    skills: ["HTML", "CSS", "JavaScript"],
    area: "frontend",
  },
  {
    id: 2,
    fullname: "Adam Smith",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    area: "frontend",
  },
  {
    id: 3,
    fullname: "Will Dowson",
    skills: ["HTML", "PHP", "Laravel"],
    area: "backend",
  },
  {
    id: 4,
    fullname: "Sam Wilson",
    skills: ["HTML", "CSS", "JavaScript", "PHP"],
    area: "fullstack",
  },
];

// Подход для сортировки объектов по значениям ключей
developers.sort((a, b) => sorting(a.area, b.area));
console.log(developers);
