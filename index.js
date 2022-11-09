function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(Math.random() * 3)]
}

let playerScore = 0
let computerScore = 0

const msg = document.querySelector(".round--text")
const player = document.querySelector(".playerscore")
const computer = document.querySelector(".computerscore")
const final = document.querySelector(".final--msg")
const playerPoint = document.createTextNode(`${playerScore}`)
const computerPoint = document.createTextNode(`${computerScore}`)
player.appendChild(playerPoint)
computer.appendChild(computerPoint)

function playRound(playerSelection, computerSelection) {
    final.textContent = ""
    let player = playerSelection.toLowerCase()
    if (player === "rock" && computerSelection === "rock") {
        console.log("Tie")
        msg.textContent = "Tie! both are Rock"
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "paper" && computerSelection === "paper") {
        console.log("Tie")
        msg.textContent = "Tie! both are Paper"
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "scissors" && computerSelection === "scissors") {
        console.log("Tie")
        msg.textContent = "Tie! both are Scissors"
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
        msg.textContent = "You Lose! Paper beats Rock"
        computerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "rock" && computerSelection === "scissors") {
        console.log("You Won! Rock beats Scissors")
        msg.textContent = "You Won! Rock beats Scissors"
        playerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "paper" && computerSelection === "rock") {
        console.log("You Won! Paper beats Rock")
        msg.textContent = "You Won! Paper beats Rock"
        playerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beats Paper")
        msg.textContent = "You Lose! Scissors beats Paper"
        computerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "scissors" && computerSelection === "paper") {
        console.log("You Won! Scissors beats Paper")
        msg.textContent = "You Won! Scissors beats Paper"
        playerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    } else if (player === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        msg.textContent = "You Lose! Rock beats Scissors"
        computerScore++
        playerPoint.textContent = `${playerScore}`
        computerPoint.textContent = `${computerScore}`
    }

    console.log(playerScore, computerScore)

    if (playerScore === 5) {
        console.log("You won!")
        final.textContent = "Congratulations! You won against computer 🥳"
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore === 5) {
        console.log("You lose...")
        final.textContent = "Better luck next time...😔"
        playerScore = 0
        computerScore = 0
    }
}

let playerSelection
const rock = document.getElementById('rock')
rock.onclick = () => {
    playRound("rock", getComputerChoice())
}

const paper = document.getElementById('paper')
paper.onclick = () => {
    playRound("paper", getComputerChoice())
}

const scissors = document.getElementById('scissors')
scissors.onclick = () => {
    playRound("scissors", getComputerChoice())
}


