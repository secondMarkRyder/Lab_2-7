let persons = [

{name: "John", age: 23, city: "Boston"},
{name: "Vlad", age: 18, city: "Brovary"},
{name: "Bogdan", age: 20, city: "Kiev"},
{name: "Andrea", age: 19, city: "Odesa"},
{name: "Anton", age: 25, city: "Dnipro"}

];

persons.forEach(person => {
	Object.defineProperty(person, "yearOfBirth", {
		get() {
			return new Date().getFullYear() - this.age;
		}
	});
});

console.log(persons[0].yearOfBirth);