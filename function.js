//!Call Stack
function greet(who) {
  console.log("Hello" + who);
}
greet("Harry");
console.log("Bye");

//!Operational Arguments
function minus(a, b) { 
  if (b == undefined) return -a;
  else return a - b;
}
console.log(minus(10));
console.log(minus(10, 4));