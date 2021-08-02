//Set global variable that would contain the position, velocity and the html element "ball"
var velocity = 100;
var positionX = 0;
var positionY = 0;
var ball = document.getElementById('ball');
//write a function that can change the position of the html element "ball"
function moveBall() {
  positionX = positionX + velocity;
  ball.style.left = positionX + 'px';
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;

  if (positionX > Xmax) {
    velocity = -100;
  }

  if (positionX < Xmin) {
    velocity = 100;
  }

  var Ymin = 0;
  var Ymax = 300;

  positionY = positionY + velocity;
  ball.style.top = positionY + 'px';

    if (positionY > Ymax) {
    velocity = -100;
    }

    if (positionY < Ymin) {
    velocity = 100;
    }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
