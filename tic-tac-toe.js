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
function clickListener(event) {
  setImage(event.target);
}
const squares = document.querySelectorAll("#tic-tac-toe-board>div");
// const squareRow1 = document.querySelectorAll('.square.row-1')
squares.forEach((square) => {
  square.addEventListener(
    "click",
    clickListener,
    { once: true }
  );
});

function setImage(square) {
  const imgDiv = document.createElement("div");
  const imgX = '<img src="player-x.svg" class="xImg">';
  const imgO = '<img src="player-o.svg" class="oImg">';

  if (counter % 2 === 0) {
    // even
    imgDiv.innerHTML = imgX;
    square.classList.add("x");
  } else {
    // odd
    imgDiv.innerHTML = imgO;
    square.classList.add("o");
  }

  square.append(imgDiv);
  counter++;
  checkWinner();
}

function checkWinner() {
  // create a nodelist (qselector) for each row + each col 6 nodelists +2 diagnols
  // iterate through each nodelist

  let row1 = document.querySelectorAll(".square.row-1");
  let row2 = document.querySelectorAll(".square.row-2");
  let row3 = document.querySelectorAll(".square.row-3");
  let col1 = document.querySelectorAll(".square.col-1");
  let col2 = document.querySelectorAll(".square.col-2");
  let col3 = document.querySelectorAll(".square.col-3");

  let dia1 = [
    document.getElementById("square-0"),
    document.getElementById("square-4"),
    document.getElementById("square-8"),
  ];

  let dia2 = [
    document.getElementById("square-6"),
    document.getElementById("square-4"),
    document.getElementById("square-2"),
  ];
  const header = document.getElementById("game-status");

  const threes = [row1, row2, row3, col1, col2, col3, dia1, dia2];
  threes.forEach((three) => {
    let winner = checkThree(three);
    if (winner === "x") {
      header.innerHTML = "X is the winner";
      freezeBoard();
    } else if (winner === "o") {
      header.innerHTML = "O is the winner";
      freezeBoard();
    }

  });
  if (checkTie() === true) {
    header.innerHTML = "It's a tie!";
  }
}

function checkTie() {
  let boardFull = 0;
  squares.forEach(square => {
    if (square.hasChildNodes()) boardFull++;
  })
  return boardFull === 9;
}

function freezeBoard() {
  squares.forEach((square) => {
    square.removeEventListener('click', clickListener);
  })
}

function checkThree(values) {
  let xChecker = [];
  let oChecker = [];

  values.forEach((square) => {
    if (square.classList.contains("x")) {
      xChecker.push(true);
    } else {
      xChecker.push(false);
    }
  });

  values.forEach((square) => {
    if (square.classList.contains("o")) {
      oChecker.push(true);
    } else {
      oChecker.push(false);
    }
  });

  let sumX = xChecker.reduce((accum, ele) => {
    return accum + ele;
  }, 0);

  let sumO = oChecker.reduce((accum, ele) => {
    return accum + ele;
  }, 0);

  // console.log(`X: ${sumX}, O: ${sumO}`)
  if (sumX === 3) return "x";
  if (sumO === 3) return "o";
}
