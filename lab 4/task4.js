let first = [1, 2, 3];
let second = [4, 5, 6];

let sum = [ ...first, ...second ];

console.log(sum);

let oth = [first.concat(second)];

console.log(oth);