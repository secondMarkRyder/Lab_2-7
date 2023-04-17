let persons = [

{name: "John", age: 23, city: "Boston"},
{name: "Vlad", age: 18, city: "Brovary"},
{name: "Bogdan", age: 20, city: "Kiev"},
{name: "Andrea", age: 19, city: "Odesa"},
{name: "Anton", age: 25, city: "Dnipro"}

];
let older = persons.filter(persons => persons.age > 20);

console.log(older);