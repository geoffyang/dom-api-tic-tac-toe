// counter to determine whether x or o,
// grab divs on the board,
// add event listener 'click' to each, allow 1 click
// counter mod 2 === 0 to be x turn
//
// when something is clicked
//  - if child === null
//  - add the graphic
//  - increment the counter
//  -

let counter = 0;
const squares = document.querySelectorAll("#tic-tac-toe-board div")
squares.forEach(square => {
  square.addEventListener('click', event => {
    if (!square.hasChildNodes()) {
      //square is a div


    }
  })
})

function setImage() {
  if ()
    //set image based on counter conditional.
}


let dogContainer = document.getElementById('dog-img-container')
let img = '<img src="./dog.png" class = "dog-img" />'
dogContainer.innerHTML = img;
