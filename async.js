/*An asynchronous model allows multiple things to happen at the same time.
When you start an action, your program continues to run. When the action
finishes, the program is informed and gets access to the result (for example,
the data read from disk).
*/

//! CALLBACKS
// One approach to asynchronous programming is to make functions that perform
// a slow action take an extra argument, a callback function. The action is started,
// and when it finishes, the callback function is called with the result.
// As an example, the setTimeout function, available both in Node.js and in
// browsers, waits a given number of milliseconds (a second is a thousand milliseconds) and then calls a function.

// import spotProblem from "./bugsandErrors.js";
// console.log("Start...");
// setTimeout(spotProblem, 5000);
// console.log("Waiting...");

//!PROMISES
// This is what the standard class Promise is for. A promise is an asynchronous
// action that may complete at some point and produce a value. It is able to
// notify anyone who is interested when its value is available.
// The easiest way to create a promise is by calling Promise.resolve. This
// function ensures that the value you give it is wrapped in a promise. If it’s
// already a promise, it is simply returned—otherwise, you get a new promise
// that immediately finishes with your value as its result.
let fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));

let start = Date.now();
setTimeout(() => {
  console.log("Timeout ran at", Date.now() - start);
}, 20);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);
