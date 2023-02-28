/*
anime({
    targets: '#animation', // Select the shape div
    translateX: [
    { value: '-50px', duration: 8000, easing: 'easeInOutQuad' },
    { value: '1300px', duration: 8000, easing: 'easeInOutQuad' },
    { value: '0', duration: 8000, easing: 'easeInOutQuad' }
    ],
    translateY: [
    { value: '-50px', duration: 8000, easing: 'easeInOutQuad' },
    { value: '600px', duration: 8000, easing: 'easeInOutQuad' },
    { value: '0', duration: 8000, easing: 'easeInOutQuad' }
    ],
    rotate: '1turn', // Rotate the shape 360 degrees (1 turn)
    backgroundColor: '#FF4136', // Change the background color of the shape
    loop: true
});
*/

/*
function updateAnimation() {
  anime({
    targets: '#animation',
    backgroundColor: ['rgb(255, 0, 0, 0.4)', 'rgba(255, 0, 0, 0)'],
    translateX: anime.random(-600, 600) + 'px', // -50 1300
    translateY: anime.random(120, 600) + 'px',  // 120 800
    easing: 'easeInOutQuad',
    rotate: anime.random(-180, 180) + 'deg',
    duration: 5000,
    easing: 'easeInOutQuad'
  });
}

updateAnimation()
setInterval(updateAnimation, 10000);
*/

/*
class floatingShapes {
    constructor(objectName) {
        this.animation = objectName;
    }

    createAnimation() {
        anime({
            targets: this.animation,
            backgroundColor: ['rgb(255, 0, 0, 0.4)', 'rgba(255, 0, 0, 1)'],
            //opacity: [1, 0],
            translateX: () => anime.random(-400, 400),
            translateY: () => anime.random(120, 600),
            rotate: () => anime.random(-180, 180),
            duration: 5000,
            easing: 'easeInOutCubic',
            complete: () => {
                shapeOne.createAnimation();
            }
          });
    }
}

// create shape object
const shapeOne = new floatingShapes("#animation");
shapeOne.createAnimation();
setInterval(shapeOne.createAnimation, 5000);

const shapeTwo = new floatingShapes("#animation_1");
shapeTwo.createAnimation();
setInterval(shapeTwo.createAnimation, 5000);
*/


// Get the image element
const myImage = document.getElementById('butterfly');

// Define the animation properties
const animationProperties = {
  targets: myImage,
  opacity: [1, 0],
  translateX: () => anime.random(-500, 500),
  translateY: () => anime.random(120, 600),
  rotate: () => anime.random(-180, 180),
  duration: 10000,
  easing: 'easeInOutCubic',
  complete: () => {
    // Restart the animation once it's completed
    anime(animationProperties);
  },
};

// Start the animation
anime(animationProperties);

const myImage1 = document.getElementById('butterfly_1');

// Define the animation properties
const animationProperties1 = {
  targets: myImage1,
  opacity: [1, 0],
  translateX: () => anime.random(-500, 500),
  translateY: () => anime.random(120, 600),
  rotate: () => anime.random(-180, 180),
  duration: 8000,
  easing: 'easeInOutCubic',
  complete: () => {
    // Restart the animation once it's completed
    anime(animationProperties1);
  },
};

// Start the animation
anime(animationProperties1);

