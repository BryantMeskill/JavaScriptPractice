//import your function
import myName from "./myName";
import "./style.css";
import Icon from "./icon.png";
import Data from "./data.xml";
import Notes from "./data.csv";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  //use your function!
  element.textContent = myName("Bryant");
  element.classList.add("hello");

  btn.innerHTML = "Click me, and check the console!";
  btn.onclick = printMe;

  //add the image to our current div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  element.appendChild(btn);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
