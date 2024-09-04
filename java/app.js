let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let nameInput = document.querySelector("#name-input");
let container = document.querySelector(".container")
let playerX = window.prompt("Enter name for 'X' ");
let playerO = window.prompt("Enter name for 'O' ");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const newGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.innerHTML = "";
 resetBtn.classList.remove("hide"); container.classList.remove("hide");
  msgContainer.classList.add("hide");
  newGameBtn.classList.remove("new-btn");
  
};

const resetGame1 = () => {
  turnO = true;
  count = 0;
  enableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
      resetGame1();
    }
  });
});

const gameDraw = () => {
  msgContainer.innerHTML += `<p># Game was a Draw.</p>` 
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
 // Get the player's name or use a default
 if (winner=='X') {
     msgContainer.innerHTML += `<p># Congratulations, <b>${playerX}!</b> You won! </p>`;
 }
 else{
    msgContainer.innerHTML += `<p># Congratulations,<b> ${playerO}! </b> You won! </p>`;
 }
  
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame1);
