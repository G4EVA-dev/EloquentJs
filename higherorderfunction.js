// let total = 0, count = 1;
// while (count <= 10) {
// total += count;
// count += 1;
// }
// console.log(total);

//!ABSTRACTING REPETITION
// function repeat (n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// repeat(3, console.log);

// let labels = [];
// repeat (5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

//!HIGHER-ORDER FUNCTIONS
//Functions that operate on other functions, either by taking them as arguments or by returning them
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

//!STRINGS AND CHARACTER CODES
let horseShoe = "🐴👟";
console.log(horseShoe.length);
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)
console.log(horseShoe);

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
