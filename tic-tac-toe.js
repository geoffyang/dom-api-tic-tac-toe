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

    setImage(event.target);

  }, {once:true});
});

function setImage(square) {
  const imgDiv = document.createElement('div');
  const imgX = '<img src="player-x.svg" class="xImg">';
  const imgO = '<img src="player-o.svg" class="oImg">';

  if (counter % 2 === 0) {
    // even
    imgDiv.innerHTML = imgX;
    square.classList.add("x")
  } else {
    // odd
    imgDiv.innerHTML = imgO;
    square.classList.add("o")
  }

  square.append(imgDiv);
  counter++;
  checkWinner();
}

function checkWinner() {
// create a nodelist (qselector) for each row + each col 6 nodelists +2 diagnols
  // iterate through each nodelist

  let row1 = document.querySelectorAll(".row-1")
  let row2 = document.querySelectorAll(".row-2")
  let row3 = document.querySelectorAll(".row-3")
  let col1 = document.querySelectorAll(".col-1")
  let col2 = document.querySelectorAll(".col-2")
  let col3 = document.querySelectorAll(".col-3")
  // let forwardDiagnol
  // checkThree(row1)
}

function checkThree(values) {
  const xOrO = values[0].classList.contains("x")
  let xChecker = [];
  let oChecker = [];
  values.forEach(square => {
    if (square.classList.contains('x')) {
      xChecker.push(true);
    }
  });

  values.forEach(square => {
    if (square.classList.contains('o')) {
      oChecker.push(true);
    }
  });

  if (xChecker.every(true)) return "x";
  if (oChecker.every(true)) return "o";

}

