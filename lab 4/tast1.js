let persons = [

{name: "John", age: 23, city: "Boston"},
{name: "Vlad", age: 18, city: "Brovary"},
{name: "Bogdan", age: 20, city: "Kiev"},
{name: "Andrea", age: 19, city: "Odesa"},
{name: "Anton", age: 25, city: "Dnipro"}

];

for( let i = 0; i < persons.length; i++) {
	
	persons[i].groupName = "A";
	persons[i].teacher = "Joan Doe";
	persons[i].year = 2023;
}

console.log(persons);