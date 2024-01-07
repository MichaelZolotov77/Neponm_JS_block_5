// Reduce
const staff = [
  {
    id: 1,
    name: "John Doe",
    salary: 1000,
  },
  {
    id: 2,
    name: "Sara Smith",
    salary: 900,
  },
  {
    id: 3,
    name: "Elton John",
    salary: 1100,
  },
  {
    id: 4,
    name: "Mo Williams",
    salary: 1000,
  },
];

const budget = staff.reduce((acc, user) => {
  return acc + user.salary;
}, 0);

console.log(budget);

const budgetForSmallPersonal = staff.reduce((acc, user) => {
  if (user.salary < 1000) {
    return acc + user.salary;
  }

  return acc;
}, 0);
console.log(budgetForSmallPersonal);

const salaries = staff.reduce((acc, user) => {
  return [...acc, user.salary];
}, []);
console.log(salaries);

const order = [
  {
    id: 1,
    name: "Лопата",
    price: 1000,
    quantity: 1,
  },
  {
    id: 2,
    name: "Удочка",
    price: 1200,
    quantity: 2,
  },
  {
    id: 3,
    name: "Ведро",
    price: 500,
    quantity: 3,
  },
  {
    id: 4,
    name: "Мороженое",
    price: 100,
    quantity: 8,
  },
];

const totalPrice = order.reduce(
  (acc, ord) => acc + ord.price * ord.quantity,
  0
);
console.log(totalPrice);
