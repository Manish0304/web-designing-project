// DOMContentLoaded ensures the code runs after the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let playerScore = 0;
    let computerScore = 0;

    const choices = ["rock", "paper", "scissors"];

    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const resultText = document.getElementById("resultText");
    const score = document.getElementById("score");

    // Adding event listeners after DOM is fully loaded
    rock.addEventListener("click", function() {
        playGame("rock");
    });
    paper.addEventListener("click", function() {
        playGame("paper");
    });
    scissors.addEventListener("click", function() {
        playGame("scissors");
    });

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You win! " + playerChoice + " beats " + computerChoice;
            playerScore++;
        } else {
            result = "You lose! " + computerChoice + " beats " + playerChoice;
            computerScore++;
        }

        resultText.innerText = result;
        score.innerText = "Player: " + playerScore + " | Computer: " + computerScore;
    }
});