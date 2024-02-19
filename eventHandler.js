// window.addEventListener("click", () => alert("You Clicked"));
let clickMe = document.getElementsByTagName("p")[1];
clickMe.style.cursor = "pointer";
clickMe.style.fontSize = 40 + "px";
clickMe.addEventListener("click", () => alert("Text was Clcked"));

let button = document.querySelector("button");
button.addEventListener("mousedown", (event) => {
  if (event.button == 0) {
    console.log("Left button");
  } else if (event.button == 1) {
    console.log("Middle button");
  } else if (event.button == 2) {
    console.log("Right button");
  }
});

//!DEFAULT ACTIONS
let link = document.querySelector("a");
link.addEventListener("click", (event) => {
  console.log("Nope.");
  event.preventDefault();
});

//!KEY EVENTS
window.addEventListener("keydown", (event) => {
  if (event.key == "v") {
    document.body.style.background = "violet";
  }
});
window.addEventListener("keyup", (event) => {
  if (event.key == "v") {
    document.body.style.background = "";
  }
});

//!MOUSE EVENTS
let drawing = document.querySelector(".draw");
drawing.addEventListener("click", (event) => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = event.pageX - 4 + "px";
  dot.style.top = event.pageY - 4 + "px";
  drawing.appendChild(dot);
});

//!MOUSE MOTION
let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector(".bar");

bar.addEventListener("mousedown", (event) => {
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
  }
});

function moved(event) {
  if (event.buttons == 0) {
    window.removeEventListener("mousemove", moved);
  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
  }
}

//!SCROLL EVENTS

// Create some content
document.body.appendChild(
  document.createTextNode("supercalifragilisticexpialidocious ".repeat(1000))
);
let Bar = document.querySelector("#progress");
// The global innerHeight binding gives us the height of the window, which
// we have to subtract from the total scrollable height—you can’t keep scrolling
// when you hit the bottom of the document. There’s also an innerWidth for the
// window width. By dividing pageYOffset(scrollY), the current scroll position, by the
// maximum scroll position and multiplying by 100, we get the percentage for the
// progress bar
window.addEventListener("scroll", () => {
  let max = document.body.scrollHeight - innerHeight;
  Bar.style.width = `${(scrollY / max) * 100}%`;
});
