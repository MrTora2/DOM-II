// Your code goes here
let atags= document.querySelectorAll('a');
let footer= document.querySelector('footer');
const image = document.querySelectorAll('img');
//mouseover
atags[0].addEventListener("mouseover", function( event ) {event.target.style.backgroundColor = "khaki"; 
setTimeout(function() {event.target.style.color = "";}, 500);}, false);

//Keydown
document.addEventListener('keydown', logKey);

function logKey(e) {
  footer.textContent += ` ${e.code}`;
}

//Wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    image.style.transform = `scale(${scale})`;
  }
  let scale = 1;
image.onwheel = zoom;

//Drag and Drop


//Load: displays a message when the page is fully loaded

window.addEventListener('load', (event) => {
    console.log('Web 10 is the best!');
  });

//Focus: focuses on first button
focusMethod = function getFocus() {          
    document.getElementByClass("btn").focus();
  }

//resize
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

//select
function logSelection(event) {
    const introduction = document.getElementByClass('intro');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    introduction.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

  //dblclick

//prevent default
  document.querySelector("nav").addEventListener("click", function(event) {
    event.preventDefault();
}, false);