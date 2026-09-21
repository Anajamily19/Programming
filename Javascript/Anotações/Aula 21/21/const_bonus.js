const notas = [5,7,9,4];
const comBonus = notas.map((n) => n + 1);
console.log(comBonus); // [6,8,10,5]
const aprovados = notas.filter((n) => n > 6);
console.log(aprovados); // [7,9]
