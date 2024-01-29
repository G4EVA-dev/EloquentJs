// !DATA STRUCTURES OBJECTS AND ARRAYS
// let listOfNumbers = [2, 3, 4, 5, 0];
// console.log(listOfNumbers[3]); //Access Element in array

// //!PROPERTIES
// console.log(listOfNumbers["length"]);

//!METHODS
// let myname = "Ferdinard Marko Veratti"
// console.log(myname.toUpperCase());
// listOfNumbers.push(12); //Add Element to End Of Array While Pop removes from end
// console.log(listOfNumbers);

//!OBJECTS
// let day1 = {
//     squirrel: false,
//     events: ["work", "touched tree", "pizza", "running"]
// };
// console.log(day1.squirrel);
// delete day1.events[2];
// console.log(day1.events);

// let journal = [
//     {
//         events: ["work", "touched tree", "pizza", "runnind", "television"],
//         squirrel: "false",
//     },
//     {
//         events: ["work", "ice cream", "cauliflower","lasagna", "touched tree", "brushed teeth"],
//         squirrel: false
//     },
//     {
//         events: ["weekend", "cycling", "break", "peanuts", "beer"],
//         squirrel: true
//     }
// ]
// console.log(journal[1].events[1])

//!MUTABILITY
// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1 == object2);
// // → true
// console.log(object1 == object3);
// // → false
// object1.value = 15;
// console.log(object2.value);
// // → 15
// console.log(object3.value);
// // → 10

//THE LYCANTHROPE'S LOOP
let journal = [];
function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal)