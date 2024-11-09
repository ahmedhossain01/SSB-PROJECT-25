// ex6
function textShow(){
  document.getElementById('ts').style.display = "block";
}
function textHide(){
  document.getElementById('ts').style.display = "none";
}

// ex5
function changeStyle(){
  document.getElementById('cs').style.border = "1px solid red";
}

// ex4
function bulbOn(){
  document.getElementById('bulb').src = "images/on.gif";
}
function bulbOff(){
  document.getElementById('bulb').src = "images/off.gif";
}

// ex3
function showDate(){
  document.getElementById('sd').innerHTML = Date();
}

// ex2
function changeText(){
  document.getElementById('ct').innerHTML = "Hello World!";
}

// ex1
function showText(){
  document.getElementById('st').innerHTML = "Hello World!";
}