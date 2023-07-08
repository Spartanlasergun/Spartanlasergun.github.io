// Get the canvas element
const canvas = document.getElementById('canvas');

// Get the 2D context of the canvas
const ctx = canvas.getContext('2d');

// Set the canvas size to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let start_x = 50;
let start_y = 50;
let end_x = 500;
let end_y = 500;
let progress = 0;

// load images
img_one = new Image();
img_one.src = "images/abstract_idea.png";

function fissure() {
     // Clear the canvas
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.drawImage(img_one, 0, 0);

     // Calculate the current position based on the progress
     let currentPos_x = start_x + (end_x - start_x) * progress;
     let currentPos_y = start_y + (end_y - start_y) * progress;

     // Draw the line
     ctx.beginPath();
     ctx.moveTo(start_x, start_y);
     ctx.lineTo(currentPos_x, currentPos_y);
     ctx.strokeStyle = 'blue';
     ctx.lineWidth = 3;
     ctx.stroke();

     // Update the progress
     progress += 0.01;

     // Check if the animation is complete
     if (progress <= 1) {
          // Request the next frame
          requestAnimationFrame(fissure);
     }
}

fissure();
