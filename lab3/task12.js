let a = prompt("Введіть число a:");
let b = prompt("Введіть число b:");
let c = prompt("Введіть число c:");
let d = prompt("Введіть число d:");

let min1 = Math.min(a, b);
let min2 = Math.min(c, d);

let result = Math.max(min1, min2);

console.log(result);