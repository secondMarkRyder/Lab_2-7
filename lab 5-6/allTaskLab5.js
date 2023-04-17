
// task1
function avg(...args) {
  const sum = args.reduce((acc, val) => acc + val, 0);
  console.log(args.length);
  return sum / args.length;
}

console.log(avg(4, 11, 114, 1)); 

// task2

function values(f, low, high) {
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(f(i));
  }
  return result;
}
const squares = values(x => x * x, 2, 10);
console.log(squares); 

// task 3

function callWithContext(context, callback) {
  callback.call(context);
}
const person = {
  name: 'Andrea',
  age: 19  
};

function sayHappyBirthday() {
  const now = new Date().toLocaleDateString();
  console.log(`Today is ${now}! Happy birthday ${this.name}.`);
}

callWithContext(person, sayHappyBirthday);

// task4
function createNumerator() {
  let value = 0;
  return {
    increment() {
      value++;
    },
    getValue() {
      return value;
    }
  };
}
const numerator = createNumerator();
console.log(numerator.getValue());
numerator.increment();
numerator.increment();
console.log(numerator.getValue());

// task 5

function getGreeting() {
  let lastName = null;
  let cached = null;
  
  return function(name) {
    if (name === lastName) {
      return cached;
    } else {
      lastName = name;
      cached = `Hello ${name}`;
      return cached;
    }
  }
}
const greet = getGreeting();

console.log(greet('John'));
console.log(greet('Mary')); 
console.log(greet('John')); // значення з кешу
console.log(greet('Jane')); 

// task 6

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add1 = makeAdder(4);
const add2 = makeAdder(8);

console.log(add1(5));
console.log(add2(100));

// task 7

function InArray(arr) {
  return function(frg) {
    return arr.includes(frg);
  };
}
const words = ["cat", "dog", "bird"];
const Word = InArray(words);

console.log(Word("cat")); 
console.log(Word("bird")); 
console.log(Word("cot"));
console.log(Word("dog"));

// task 8

const register = arr => arr.map(obj => ({ ...obj, name: obj.name.toUpperCase() }));

const input = [
  { name: "Andrea"},
  { name: "Anton"},
  { name: "Bogdan"}
];

const output = register(input);
console.log(output);

// task 9

const person = {
  firstName: 'Mark',
  lastName: 'Ryder',
};

function dem(ttext) {
  console.log(`${ttext} ${this.firstName} ${this.lastName}`);
}
dem.call(person, 'Hello');

const args = ['Hello'];
dem.apply(person, args); 

const boundGreeting = dem.bind(person, 'Hello');
boundGreeting(); 

// task 10

function callWithLog(callback) {
  return function(...args) {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${callback.name} called with arguments ${args} at ${timestamp}`);
    return callback(...args);
  }
}
function myCallback(a, b) {
  return a + b;
}

const loggedCallback = callWithLog(myCallback);

console.log(loggedCallback(2, 3));

// task 11

let lastCall = null;

function cachedFunction(input) {
  const now = new Date().getTime();
  if (lastCall && (now - lastCall.timestamp) < 10000 && lastCall.input === input) {
    console.log('Get back value:', lastCall.output);
    return lastCall.output;
  }
  console.log('Result');
  const output = input * 5;
  lastCall = {
    input,
    output,
    timestamp: now
  };
  return output;
}
console.log(cachedFunction(2)); 
console.log(cachedFunction(2));
