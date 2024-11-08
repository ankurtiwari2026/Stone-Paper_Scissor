let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultText = document.getElementById("result-text");

    if (playerChoice === computerChoice) {
        resultText.textContent = `🤝 It's a draw! You both chose ${emojiChoice(playerChoice)}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        resultText.textContent = `🎉 You win! ${emojiChoice(playerChoice)} beats ${emojiChoice(computerChoice)}.`;
        playerScore++;
    } else {
        resultText.textContent = `😞 You lose! ${emojiChoice(computerChoice)} beats ${emojiChoice(playerChoice)}.`;
        computerScore++;
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function emojiChoice(choice) {
    if (choice === 'rock') return '✊';
    if (choice === 'paper') return '✋';
    if (choice === 'scissors') return '✌️';
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
