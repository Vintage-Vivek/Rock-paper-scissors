let userScore = 0;
let computerScore = 0;
let drawTimes = 0;
let yourScore = document.querySelector("#yourScore");
let compScore = document.querySelector("#compScore");

const choices = document.querySelectorAll(".choiceBlocks");
const gameStatus = document.querySelector("#status");


const genCompChoice = () => {
    // rock, paper, scissors
    let options = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random()*3);
    // console.log(idx);
    return options[idx];
}

const drawGame = () => {
    console.log("Game was draw")
    drawTimes++;
    gameStatus.innerText = `${drawTimes} Draw Game`;
    gameStatus.style.backgroundColor = "rgb(105, 188, 221)";

}

let showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin === true){
        userScore++;
        console.log("You Win, yay")
        gameStatus.innerText = `You Win\n\nYour - ${userChoice.toUpperCase()} \n\nBEATS \n \nComputer's -  ${compChoice.toUpperCase()}`;
        gameStatus.style.backgroundColor = "green"
        yourScore.innerText = userScore;
    } else {
        computerScore++;
        console.log("Comp Win")
        gameStatus.innerText = `YOU LOOSE\n \nComputer's -  ${compChoice.toUpperCase()} \n\nBEATS \n\nYour - ${userChoice.toUpperCase()}`;
        gameStatus.style.backgroundColor = "red"
        compScore.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log("Your - ", userChoice.toUpperCase()); // your chice 
    const compChoice = genCompChoice(); 
    console.log("comp - ", compChoice.toUpperCase()); // computer's choice

    let userWin = true;
    if(userChoice === compChoice){
        return drawGame();
    } else {
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }  else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
    }

    showWinner(userWin, userChoice, compChoice);

}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});


// theme------------------------------------------------ {
    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark");
    //   let body = document.querySelector("body")
    //   body.classList.toogle("scorelight")
      let scoreboard = document.querySelector("#scoreboard");
      let themeHead = document.querySelector("#themeHead");
      let chooseHead= document.querySelector("#chooseHead");
      // scoreboard.style.color = "white"
      scoreboard.classList.toggle("scoreLight");
      themeHead.classList.toggle("scoreLight");
      chooseHead.classList.toggle("scoreLight");



    })

//-------------------------------------------------------}