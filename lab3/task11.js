let car = [
{name: "Andrea", model: "Tesla", engine: 500},
{name: "Anton", model: "BMW", engine: 600},
{name: "Vlad", model: "Ford", engine: 130}

];

let minEngine = Math.min(...car.map(x => x.engine));

console.log(minEngine);
