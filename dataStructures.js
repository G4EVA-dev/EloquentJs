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
// → true
// console.log(object1 == object3);
// → false
// object1.value = 15;
// console.log(object2.value);
// → 15
// console.log(object3.value);
// → 10

//! THE LYCANTHROPE'S LOOP
// let journal = [];
// function addEntry(events, squirrel) {
//   journal.push({ events, squirrel });
// }

// addEntry(["work", "touched tree", "pizza", "running", "television"], false);
// addEntry(
//   [
//     "work",
//     "ice cream",
//     "cauliflower",
//     "lasagna",
//     "touched tree",
//     "brushed teeth",
//   ],
//   false
// );
// addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// console.log(journal);

//!Correlation
// function phi(table) {
//   return (
//     (table[3] * table[0] - table[2] * table[1]) /
//     Math.sqrt(
//         (table[2] + table[3]) *
//         (table[0] + table[1]) *
//         (table[1] + table[3]) *
//         (table[0] + table[2])
//     )
//   );
// }
// console.log(phi([76, 9, 4, 1]));

// //!Further Arrayology
// let todoList = [];
// function remember(task) {
//   todoList.push(task); //Add Element to End of Array
// }
// function getTask() {
//   return todoList.shift(); //Remove element from top of array
// }
// function rememberUrgently(task) {
//   todoList.unshift(task); //add element to top of array
// }

// remember("Joe");
// rememberUrgently("First");
// console.log(todoList);
// getTask();
// console.log(todoList);

// //!Search
// console.log("This is For indexOf and lastIndexOf");
// console.log([1, 2, 3, 2, 1].indexOf(2)); // Search element from the start
// → 1
// console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //Search element from the end
// → 3

// //!Select with slice
// console.log("This is For Slice");
// console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
// console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]


//!EXERCISE 1: THE SUM OF RANGE
function range (start, end, step) {
  let array = [];
  for (let i = start ; i <= end ; i++) {
    
    array.push(i);
  }
  return array;
}
console.log(range(1, 10, 2));

function sum (arr) {
  let count = 0;
  for (let j = 0 ; j < arr.length ; j++){
    count = count + arr[j];
  }
  return count;
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));

// function sayHi() {
//   console.log(name);
//   console.log(age);
//   var name = 'Lydia';
//   let age = 21;
// }
// sayHi();