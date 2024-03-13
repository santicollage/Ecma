const array = [1, 2, 3, 2, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(2));

const array2 = [1, 2, 3, 2, 6, 3];
console.log(array2.flatMap(v => [v, v * 2]));