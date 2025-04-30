function moveForward() {
  console.log("Moving forward...");
}
function moveLeft() {
  console.log("Turning left...");
}
function moveRight() {
  console.log("Turning right...");
}
function moveBackward() {
  console.log("Moving backward...");
}
function gps() {
  console.log("GSP Turned on!");
}
function Light() {
  console.log("LED is blinking");
}
function Camera() {
  console.log("Camera turned on");
}
function Conveyor() {
  console.log("Conveyor turned on");
}
function Power() {
  console.log("Power On/Off!");
}
function About() {
  console.log("About Us!!");
}

const express = require("express");
const App = express();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyDICMXaLzAHspqClJRMjmHRP0roZbJ198Y",
//   authDomain: "proud-skein-416318.firebaseapp.com",
//   projectId: "proud-skein-416318",
//   storageBucket: "proud-skein-416318.appspot.com",
//   messagingSenderId: "565865241668",
//   appId: "1:565865241668:web:9961a9ea79bd351c937011",
//   measurementId: "G-6XK0LYJQVE",
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
App.set("view engine", "Main_Webpage.html");
App.listen(3000, () => {
  console.log("Listening on port 3000");
});
