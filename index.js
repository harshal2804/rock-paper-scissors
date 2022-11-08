function getComputerChoice() {
    let arr = ["rock","paper","scissors"]
    return arr[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    if(player==="rock" && computerSelection==="rock"){
        console.log("Tie")
    }else if(player==="paper" && computerSelection==="paper"){
        console.log("Tie")
    }else if(player==="scissors" && computerSelection==="scissors"){
        console.log("Tie")
    }else if(player==="rock" && computerSelection==="paper"){
        console.log("You Lose! Paper beats Rock")
    }else if(player==="rock" && computerSelection==="scissors"){
        console.log("You Won! Rock beats Scissors")
    }else if(player==="paper" && computerSelection==="rock"){
        console.log("You Won! Paper beats Rock")
    }else if(player==="paper" && computerSelection==="scissors"){
        console.log("You Lose! Scissors beats Paper")
    }else if(player==="scissors" && computerSelection==="paper"){
        console.log("You Won! Scissors beats Paper")
    }else if(player==="scissors" && computerSelection==="rock"){
        console.log("You Lose! Rock beats Scissors")
    }
}

function game() {
    for(let i=0; i<5; i++)
    {
        let playerSelection = window.prompt('Choose from Rock/Paper/Scissors')
        playRound(playerSelection, getComputerChoice())
    }
}

game()