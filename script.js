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
        computerChoice = "scissors"
    } 

        console.log("Computer chose: " + computerChoice);
    
    return computerChoice;
    }


// Write logic to get the human input choice need to break this down
    // get human choice / getHumanChoice

    function getHumanChoice() {

    // store the human input in a variable using prompt
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
    
    // Convert the human input to lower case to make it case insensitive
    humanChoice = humanChoice.toLowerCase();
        console.log("You chose: " + humanChoice);
    return humanChoice;
    }

// Store Human score / humanScore set to 0
    let humanScore = 0;

// Store Computer score / computerScore set to 0
    let computerScore = 0;



// create a function playGame that plays 5 rounds of playGame function
    // play game / playGame
    function playGame() {

  //store computer choice in a variable computerChoice by calling the getComputerChoice function
    let computerSelection = getComputerChoice();

    // store human choice in a variable humanChoice by calling the getHumanChoice function
    let humanSelection = getHumanChoice();

        // play round / playRound based on humanChoice and computerChoice
        function playRound(humanChoice, computerChoice) {
        // if humanChoice is equal to computerChoice console.log("It's a tie!")
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }
        // if humanChoice is rock and computerChoice is scissors console.log("You win! Rock beats Scissors") increment humanScore by 1
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        // if humanChoice is paper and computerChoice is rock console.log("You win! Paper beats Rock") increment humanScore by 1 
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
        // if humanChoice is scissors and computerChoice is paper console.log("You win! Scissors beats Paper") increment humanScore by 1
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        // if humanChoice is rock and computerChoice is paper console.log("You lose! Paper beats Rock") increment computerScore by 1
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        // if humanChoice is paper and computerChoice is scissors console.log("You lose! Scissors beats Paper") increment computerScore by 1
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        // if humanChoice is scissors and computerChoice is rock console.log("You lose! Rock beats Scissors") increment computerScore by 1
        else {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        }

        playRound(humanSelection, computerSelection);
        
    }
    // store round number in a variable roundNumber set to 1
     let roundNumber = 1;

        // if roundNumber is less than or equal to 5 call the playRound function and increment roundNumber by 1
        while (roundNumber <= 5) {
            playGame();
            roundNumber++;
        }

        console.log(`Game Over! Final Score: You: ${humanScore} Computer: ${computerScore} ${humanScore > computerScore ? "You win!" : humanScore < computerScore ? "Computer wins!" : "It's a tie!"}`);

