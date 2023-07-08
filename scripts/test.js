//start-------------------------Boilerplate Fullscreen Canvas----------------------------------

// Get the canvas element
const canvas = document.getElementById('canvas');

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Get the 2D context of the canvas
const ctx = canvas.getContext('2d');

//end-------------------------Boilerplate Fullscreen Canvas-----------------------------------

// load image
img_one = new Image();
img_one.src = "autumn_leaf.png";
img_one.onload = function () {
    ctx.drawImage(img_one, 0, 0);
}

let x = 0;
let y = 0;
let a = canvas.height;
let b = canvas.width;
let progress = 0;

function fall() {
     // Clear the canvas
     ctx.clearRect(0, 0, canvas.width, canvas.height);

     // Calculate the current position based on the progress
     let u = x + (b - x) * progress;
     let v = y + (a - y) * progress;

     ctx.drawImage(img_one, u, v);

     // Update the progress
     progress += 0.001;

     // Check if the animation is complete
     if (progress <= 1) {
          // Request the next frame
          requestAnimationFrame(fall);
     }
}

fall();
