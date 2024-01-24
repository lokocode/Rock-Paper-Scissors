let userSocre = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSocrepara = document.querySelector("#user-score");
const compSocrepara = document.querySelector("#comp-score");
const genCompChoice = () => {
    const Option = ["rock", "papar", "scissor"];
    const randIdx =  Math.floor(Math.random() * 3);
    return Option[randIdx];
}
const drawGame = () => {
    console.log("Game was draw.");
};

const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin) {
        userSocre++;
        userSocrepara.innerText = userSocre;
        msg.innerText = `You win! Your ${userChoice} beats Your ${compChoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compSocrepara.innerText = compSocre;
        msg.innerText = `You lose! Your ${userChoice} beats  Your ${compChoice}`;
        msg.style.backgroundColor = "red"
    }
};

const playGame  = (userChoice) => {
console.log("user choice =",userChoice);
const compChoice = genCompChoice();
console.log("comp choice = ",compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
    msg.innerText = "Game Was Draw. play again."
    msg.style.backgroundColor = "#081b31";
} else {
    let userWin = true;
    if(userChoice === "rock") {
        userWin = compChoice === "papar" ? false : true;
    } else if (userChoice === "papar") {
       userWin = compChoice === "scissor" ? false : true;
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
}
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
})
