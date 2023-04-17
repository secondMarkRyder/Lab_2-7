// task 1.1
function сar(brand, year, model) {
  this.brand = brand;
  this.year = year;
  this.model = model;
}

let car1 = new сar("Ford", "Fusion", 2019);
console.log(car1);

// task 1.2

class сarr {
  constructor(brand, year, model) {
    this.brand = brand;
	this.year = year;
    this.model = model;
  }
}

let car2 = new сar("Ford", "Fusion", 2019);
console.log(car2);

// task 2

function сar(brand, year, model) {
  this.brand = brand;
  this.year = year;
  this.model = model;
}

const car1 = Object.create(сar.prototype);
car1.brand = 'Ford';
car1.model = 'Fusion';
car1.year = 2019;

const car2 = Object.create(сar.prototype);
car2.brand = 'Segway';
car2.model = 'GT1';
car2.year = 2022;

console.log(car1); 
console.log(car2);

// task 3

function Person(birthYear, firstName, lastName) {
  this.birthYear = birthYear;
  this.firstName = firstName;
  this.lastName = lastName;
}
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};
Person.prototype.getFullAge = function() {
  let today = new Date();
  let age = today.getFullYear() - this.birthYear;
  return age;
};
let person1 = new Person(2003, "Mark", "Ryder");
console.log(person1.getFullName());
console.log(person1.getFullAge());

// task 4

function Person(birthYear, firstName, lastName) {
  this.birthYear = birthYear;
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
};

Person.prototype.getFullAge = function() {
  let today = new Date();
  let age = today.getFullYear() - this.birthYear;
  return age;
};

function worker(birthYear, firstName, lastName, job) {
  Person.call(this, birthYear, firstName, lastName);
  this.job = job;
}

worker.prototype = Object.create(Person.prototype);
worker.prototype.constructor = worker;

worker.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName + " (" + this.job + ")";
};

let person1 = new Person(2003, "Mark", "Ryder");
let employee1 = new worker(1995, "Alex", "Alexov", "Taxi");

console.log(person1.getFullName());
console.log(person1.getFullAge());
console.log(employee1.getFullName());
console.log(employee1.getFullAge());

// task 5

function classcollate(obj1, obj2) {
  if (obj1.constructor.name === obj2.constructor.name) {
    console.log(`${obj1.constructor.name} , ${obj2.constructor.name}`);
  }
}
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}
const person = new Person("Mark", "Ryder");
const animal = new Animal("Greta", "Dog");

classcollate(person, animal);

// task 6

function createObservedPerson(person) {
  let count = {};

  const observedPerson = {};

  Object.keys(person).forEach((key) => {
    if (typeof person[key] === "function") {
      observedPerson[key] = function (...args) {
        count[key] = (count[key] || 0) + 1;
        console.log(`Number of times ${key} method has been called: ${count[key]}`);
        return person[key](...args);
      }
    } else {
      Object.defineProperty(observedPerson, key, {
        get() {
          return person[key];
        },
        set(newValue) {
          person[key] = newValue;
        },
        enumerable: true
      });
    }
  });

  return observedPerson;
}

// task 7

class Shape {
  abstract calculateArea();
  abstract calculatePerimeter();
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// task 8

class Shape {
  calculateArea() {
    throw new Error('Abstract method has no implementation');
  }
  calculatePerimeter() {
    throw new Error('Abstract method has no implementation');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const shapes = [
  new Circle(5),
  new Rectangle(3, 4),
  new Circle(2),
  new Rectangle(5, 7)
];

shapes.forEach(shape => {
  console.log("Area:", shape.calculateArea());
  console.log("Perimeter:", shape.calculatePerimeter());
});