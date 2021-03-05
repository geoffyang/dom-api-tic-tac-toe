// counter to determine whether x or o,
// grab divs on the board,
// add event listener 'click' to each, allow 1 click
// counter mod 2 === 0 to be x turn
//
// when something is clicked
//  - if child === null
//  - add the graphic, player-x.svg & player-o.svg
//  - increment the counter
//  -

let counter = 0;
const squares = document.querySelectorAll("#tic-tac-toe-board div");
squares.forEach((square) => {
  square.addEventListener("click", (event) => {
    console.log(event.target);
    if (!square.hasChildNodes()) {
      //square is a div
      setImage(event.target);
    }
  }, {once: true});
});

function setImage(square) {
  const imgDiv = document.createElement('div');
  const imgX = '<img src="player-x.svg">';
  const imgO = '<img src="player-o.svg">';

  if (counter % 2 === 0) {
    // even
    imgDiv.innerHTML = imgX;
  } else {
    // odd
    imgDiv.innerHTML = imgO;
  }

  square.append(imgDiv);
}

// let dogContainer = document.getElementById("dog-img-container");
// let img = '<img src="./dog.png" class = "dog-img" />';
// dogContainer.innerHTML = img;
