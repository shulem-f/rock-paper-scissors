console.log("Lets play Rock Paper Scissors!");

// Write a function to randomly select Rock paper or scissors.
    // get computers choice / getComputerChoice
    function getComputerChoice() {

    // store a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // if the random number is 0 return rock, 
    let computerChoice;
    if (randomNumber === 0) {
        computerChoice = "rock";
    // if 1 return paper, 
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    // if 2 return scissors
    } else {
        computerChoice = "scissors";
    } 

        console.log("Computer chose: " + computerChoice);
    
    return computerChoice;
    }

// Store Human score / humanScore set to 0
    let humanScore = 0;

// Store Computer score / computerScore set to 0
    let computerScore = 0;



// create a function playGame that plays 5 rounds of playGame function
    // play game / playGame
    function playGame(buttonClicked) {

  //store computer choice in a variable computerChoice by calling the getComputerChoice function
    let computerSelection = getComputerChoice();

    // store human choice in a variable humanChoice by using the buttonClicked parameter
    let humanSelection = buttonClicked;

        // play round / playRound based on humanChoice and computerChoice
        function playRound(humanChoice, computerChoice) {
        // if humanChoice is equal to computerChoice console.log("It's a tie!")
        if (humanChoice === computerChoice) {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " It's a tie!";
        }
        // if humanChoice is rock and computerChoice is scissors console.log("You win! Rock beats Scissors") increment humanScore by 1
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You win! Rock beats Scissors";
            humanScore++;
        }
        // if humanChoice is paper and computerChoice is rock console.log("You win! Paper beats Rock") increment humanScore by 1 
        else if (humanChoice === "paper" && computerChoice === "rock") {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You win! Paper beats Rock";
            humanScore++;
        }
        // if humanChoice is scissors and computerChoice is paper console.log("You win! Scissors beats Paper") increment humanScore by 1
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You win! Scissors beats Paper";
            humanScore++;
        }
        // if humanChoice is rock and computerChoice is paper console.log("You lose! Paper beats Rock") increment computerScore by 1
        else if (humanChoice === "rock" && computerChoice === "paper") {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You lose! Paper beats Rock";
            computerScore++;
        }
        // if humanChoice is paper and computerChoice is scissors console.log("You lose! Scissors beats Paper") increment computerScore by 1
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You lose! Scissors beats Paper";
            computerScore++;
        }
        // if humanChoice is scissors and computerChoice is rock console.log("You lose! Rock beats Scissors") increment computerScore by 1
        else {
            choicesParagraph.textContent = "Computer chose: " + computerChoice + " You lose! Rock beats Scissors";
            computerScore++;
        }
        }

            if (roundNumber === 0) {
            gameOverParagraph.textContent = "";
        }

        playRound(humanSelection, computerSelection);
        scoresParagraph.textContent = `You: ${humanScore} Computer: ${computerScore}`;

        roundNumber++;

        if (roundNumber === 5) {
            gameOverParagraph.textContent = `Game Over! Final Score: You: ${humanScore} Computer: ${computerScore} ${humanScore > computerScore ? "You win!" : humanScore < computerScore ? "Computer wins!" : "It's a tie!"}`;
            // Reset scores and round number for a new game
            humanScore = 0;
            computerScore = 0;
            roundNumber = 0;
        }
        
    }
    // store round number in a variable roundNumber set to 0
     let roundNumber = 0;


        

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const choicesParagraph = document.getElementById("choices");
const scoresParagraph = document.getElementById("scores");
const gameOverParagraph = document.getElementById("gameOver");

rockButton.addEventListener("click", () => {
    playGame("rock");
});

paperButton.addEventListener("click", () => {
    playGame("paper");
}); 

scissorsButton.addEventListener("click", () => {
    playGame("scissors");
});