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

//!Recursion
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  else {
    return base * power(base, exponent -1 )
  }
}
console.log(power(2, 3))