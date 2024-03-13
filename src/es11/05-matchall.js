const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, kiwi Apple, Orange';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}