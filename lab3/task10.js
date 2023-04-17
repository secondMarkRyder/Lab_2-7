let num = [5, -7, 6, 3, 9];
let b = [];
let x = Math.sqrt(num[2]);
let y = num[0] + num[4];

for(let i = 0; i < num.length; i++) {

if(num[i] < 0) {
	
		b.push(Math.pow(num[i], 2));
	}
}


console.log(x);
console.log(y);
console.log(b);

