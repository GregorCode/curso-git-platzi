function contador(numero) {
  return (numero += 1);
}

const hola = (hey) => {};
contador(10);

const aver = () => {};

const array = [1, 2, 3, 4, 5, 6, 7];

const arrayGroup = array.groupBy((x) => (x % 2 === 0 ? "Par" : "Impar"));

console.log(arrayGroup);

const array = [1, 2, 3, 4, 5, 6, 7];
for (arr in array) {
  if (arr % 2 === 0) {
    console.log(`par ${arr}`);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
const arrayMap = array.map((x) =>
  x % 2 === 0 ? console.log(`par ${x}`) : console.log(`impar ${x}`)
);
