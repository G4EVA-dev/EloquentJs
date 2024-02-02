// The core idea in object-oriented programming is to divide programs into smaller
// pieces and make each piece responsible for managing its own state.

//!ENCAPSULATION
// This way, some knowledge about the way a piece of the program works can
// be kept local to that piece. Someone working on the rest of the program does
// not have to remember or even be aware of that knowledge. Whenever these
// local details change, only the code directly around it needs to be updated.

//!METHODS
// Methods are nothing more than properties that hold function values. This is a
// simple method:
// let rabbit = {};
// rabbit.speak = function (line) {
//   console.log(`The rabbit says '${line}'`);
// };
// rabbit.speak("I'm alive.");

// function speak(line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRabbit = { type: "white", speak };
// let hungryRabbit = { type: "hungry", speak };
// console.log(typeof whiteRabbit); => Object

// console.log(
//   whiteRabbit.speak("OH my ears and whiskers, " + "how late it's getting!")
// );

// console.log(speak.call(hungryRabbit, "Burp!"));

//!PROTOTYPES
// A prototype is another object that is used as a fallback
// source of properties. When an object gets a request for a property that it does
// not have, its prototype will be searched for the property, then the prototype’s
// prototype, and so on.
// let empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// let protoRabbit = {
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   },
// };
// let killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "killer";
// killerRabbit.speak("SKREEEEEE!");
// console.log(killerRabbit.speak);

// let spokeman = Object.create(protoRabbit);
// spokeman.type = "spoke";
// spokeman.speak("Oya");
// console.log(spokeman.speak);

//!CLASSSES
// A class defines the shape of a
// type of object—what methods and properties it has. Such an object is called
// an instance of the class.

//Class Constructor
// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// }

// function Rabbit(type) {
//   this.type = type;
// }
// Rabbit.prototype.speak = function (line) {
//   console.log(`The ${this.type} rabbit says '${line}'`);
// };
// let weirdRabbit = new Rabbit("weird");
// console.log(weirdRabbit.speak);

//!CLASS NOTATION
// So JavaScript classes are constructor functions with a prototype property. That
// is how they work, and until 2015, that was how you had to write them. These
// days, we have a less awkward notation.
// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// let blackRabbit = new Rabbit("black");
// console.log(typeof blackRabbit);

// let object = new (class {
//   getWord() {
//     return "hello";
//   }
// })();
// console.log(object.getWord());
// → hello

//!MAPS
// A map (noun) is a data structure that associates values (the keys) with other
// values. For example, you might want to map names to ages. It is possible to
// use objects for this.

// let ages = {
//   Boris: 39,
//   Liang: 22,
//   Julia: 62,
// };
// console.log(`Julia is ${ages["Julia"]}`);
// console.log("Is Jack's age known?", "Jack" in ages);

// let Ages = new Map();
// Ages.set("Mark", 45);
// Ages.set("Adoknow", 35);
// Ages.set("Marko", 12);
// console.log(`Marko is ${Ages.get("Marko")}`);
// console.log("Is Adoknow's age known?", Ages.has("Adoknow"));

//!POLYMORPHISM
// let Rabbit = {};
// Rabbit.prototype.toString = function () {
//   return `a ${this.type} rabbit`;
// };
// console.log(String(blackRabbit));

//!SYMBOLS

import six from "./modules.js";
console.log(`I imported ${six}`);
