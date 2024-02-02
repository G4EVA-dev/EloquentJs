//!Meadowfield
// The village of Meadowfield isn’t very big. It consists of 11 places with 14 roads
// between them. It can be described with this array of roads:

const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  "Marketplace-Farm",
  "Marketplace-Post Office",
  "Marketplace-Shop",
  "Marketplace-Town Hall",
  "Shop-Town Hall",
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map((r) => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
//!How It Works
// Given an array of edges, buildGraph creates a map object that, for each node, stores an array of connected nodes.
// It uses the split method to go from the road strings, which have the form
// "Start-End", to two-element arrays containing the start and end as separate
// strings.
const roadGraph = buildGraph(roads);
console.log(roadGraph);

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }
  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          if (p.place != this.place) return p;
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

// The move method is where the action happens. It first checks whether there
// is a road going from the current place to the destination, and if not, it returns
// the old state since this is not a valid move.
// Then it creates a new state with the destination as the robot’s new place. But
// it also needs to create a new set of parcels—parcels that the robot is carrying
// (that are at the robot’s current place) need to be moved along to the new place.
// And parcels that are addressed to the new place need to be delivered—that is,
// they need to be removed from the set of undelivered parcels. The call to map
// takes care of the moving, and the call to filter does the delivering.
// Parcel objects aren’t changed when they are moved but re-created. The move
// method gives us a new village state but leaves the old one entirely intact.

let first = new VillageState("Post Office", [
  { palace: "Post Office", address: "Alice's House" },
]);
let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);

//!PERSISTANT DATA
/* Data Structures that don't change are called immutable ot persistent*/
// let object = Object.freeze({ value: 5 });
// object.value = 10;
// console.log(object.value);

//!SIMULATION
/*
A delivery robot looks at the world and decides in which direction it wants
to move. As such, we could say that a robot is a function that takes a
VillageState object and returns the name of a nearby place.

Because we want robots to be able to remember things, so that they can
make and execute plans, we also pass them their memory and allow them to
return a new memory. Thus, the thing a robot returns is an object containing
both the direction it wants to move in and a memory value that will be given
back to it the next time it is called.
*/

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

/*
Consider what a robot has to do to “solve” a given state. It must pick up
all parcels by visiting every location that has a parcel and deliver them by
visiting every location that a parcel is addressed to, but only after picking up
the parcel.
What is the dumbest strategy that could possibly work? The robot could
just walk in a random direction every turn. That means, with great likelihood,
it will eventually run into all parcels and then also at some point reach the
place where they should be delivered.
Here’s what that could look like:
*/

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

/*
To put this sophisticated robot to work, we’ll first need a way to create a
new state with some parcels. A static method (written here by directly adding
a property to the constructor) is a good place to put that functionality.
*/
VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

/* 
We don’t want any parcels that are sent from the same place that they are
addressed to. For this reason, the do loop keeps picking new places when it
gets one that’s equal to the address.
*/

//!Let's Start up a Virtual World
runRobot(VillageState.random(), randomRobot);

//!THE MAIL TRUCK'S ROUTE
/*
We should be able to do a lot better than the random robot. An easy improvement would be to take a hint from the way real-world mail delivery works. If
we find a route that passes all places in the village, the robot could run that
route twice, at which point it is guaranteed to be done. Here is one such route
(starting from the post office):
*/
const mailRoute = [
  "Alice's House",
  "Cabin",
  "Alice's House",
  "Bob's House",
  "Town Hall",
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  "Shop",
  "Grete's House",
  "Farm",
  "Marketplace",
  "Post Office",
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

//!PATHFINDING
