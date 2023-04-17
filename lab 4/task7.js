const person = {name: "John", age: 23, city: "Boston"};
const {name, city} = person;
console.log(name);
console.log(city);

const persons = [
  {name: "John", age: 23, city: "Boston"},
  {name: "Vlad", age: 18, city: "Brovary"},
  {name: "Bogdan", age: 20, city: "Kiev"},
  {name: "Andrea", age: 19, city: "Odesa"},
  {name: "Anton", age: 25, city: "Dnipro"}
];
const [firstPerson] = persons;
console.log(firstPerson);
