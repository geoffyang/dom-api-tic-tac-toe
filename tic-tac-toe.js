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
const squares = document.querySelectorAll("#tic-tac-toe-board>div");
// const squareRow1 = document.querySelectorAll('.square.row-1')
squares.forEach((square) => {
  square.addEventListener(
    "click",
    (event) => {
      setImage(event.target);
    },
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
  const header = document.getElementById("game-status");
  console.log(checkWinner())
  if (checkWinner() === "x") header.innerHTML = "X is the winner";
  if (checkWinner() === "o") header.innerHTML = "O is the winner";
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

  const threes = [row1, row2, row3, col1, col2, col3, dia1, dia2];
  threes.forEach((three) => {
    if (checkThree(three) === "x") return "x";
    if (checkThree(three) === "o") return "o";
  });

  // squares.forEach(square){};
}

function checkThree(values) {
  const xOrO = values[0].classList.contains("x");
  let xChecker = [];
  let oChecker = [];

  values.forEach((square) => {
    if (square.classList.contains("x")) {
      xChecker.push(true);
    } else { xChecker.push(false) }
  });

  values.forEach((square) => {
    if (square.classList.contains("o")) {
      oChecker.push(true);
    } else { oChecker.push(false) }

  });
  let test = xChecker.every(element => {
    return element === true;
  })
  console.log("every checker: ", test)
  debugger
  if (xChecker.every(element => false)) return "x";
  if (oChecker.every(element => true)) return "o";
}
