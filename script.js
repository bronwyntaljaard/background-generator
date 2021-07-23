var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomGradientButton = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function randomGradient() {
  var newColor1RgbArray = makeColor();
  console.log(newColor1RgbArray);
  var newColor2RgbArray = makeColor();
  console.log(newColor2RgbArray);

  console.log("------");

  var newColor1RgbString = toRgbString(newColor1RgbArray);
  console.log(newColor1RgbString);
  var newColor2RgbString = toRgbString(newColor2RgbArray);
  console.log(newColor2RgbString);

  body.style.background =
    "linear-gradient(to right, rgb" +
    newColor1RgbString +
    ", rgb" +
    newColor2RgbString +
    ")";

  css.textContent = body.style.background + ";";
  color1.value = rgbToHex(
    newColor1RgbArray[0],
    newColor1RgbArray[1],
    newColor1RgbArray[2]
  );
  color2.value = rgbToHex(
    newColor2RgbArray[0],
    newColor2RgbArray[1],
    newColor2RgbArray[2]
  );
  //   var newColor1NumOnly = rgbToHex(newColor1);
  //   console.log(rgbToHex(217, 118, 117));
  //   console.log(newColor1);
  //   console.log(rgbToHex((152,213,13)
  //   var newColor1Hex = rgbToHex(newColor1);
  //   color1.value = newColor1Hex;
}

// var rgbToHex = function (rgb) {
//   var hex = Number(rgb).toString(16);
//   if (hex.length < 2) {
//     hex = "0" + hex;
//   }
//   return hex;
// };

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// returns a RGB array
function makeColor() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    var num = Math.floor(Math.random() * 256);
    arr.push(num);
  }
  return arr;
}

// returns a RGB string in the format "(R, G, B)"
function toRgbString(rgbArray) {
  var newRgb = "(" + rgbArray[0] + "," + rgbArray[1] + "," + rgbArray[2] + ")";
  return newRgb;
  //   console.log(newRgb);
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomGradientButton.addEventListener("click", randomGradient);
