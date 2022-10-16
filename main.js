///function to generate random choice
let arr = ["rock", "paper", "scissors"];

const compChoice = function generateComputerChoice() {
    ///define choice
    console.log(arr);
    //generate random index value
    const randomItem = arr[Math.floor(Math.random() * arr.length)];

    ///value in select index
    console.log(randomItem);
    //     const choice = arr[randomItem];
    //     return choice;
}

// const round = function setRoundLimit() {
//     const roundInput = parseInt(document.getElementById("").value);
// }

function playTheRound(round) {
    let compScore = 0;
    let userScoring = 0;
    let userEchoScore = document.getElementById("user-score");
    let userChoice = document.getElementById("user-choice");
    let compEchoChoice = document.getElementById("comp-choice");
    let roundWinner = document.getElementById("round-winner");
    let gamesplayed = document.getElementById("games-played");
    let gamewinner = document.getElementById("game-winner");

    for (n = 1; n <= 5; n++) {

        ///if user Select rock in that round
        if (document.getElementById("rock").addEventListener("click", function() {
                if (compChoice == "scissors") {
                    //     alert("rock beats scissors, user wins");
                    userScoring += 1;
                    if (compScore > 0) {
                        compScore--;
                    } else {
                        compScore;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Rock");
                    compEchoChoice.innerHTML("scissors");

                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )

                } else if (compChoice == "rocks") {
                    userScoring;
                    compScore;
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Rock");
                    compEchoChoice.innerHTML("Rock");
                    roundWinner.innerHTML("Tie")

                } else {
                    compScore++
                    if (userScoring > 0) {
                        userScoring--;
                    } else {
                        userScoring;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Rock");
                    compEchoChoice.innerHTML("Paper");

                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )

                }
            })

        );
        // if user selects scissors in that round
        if (document.getElementById("scissors").addEventListener("click", function() {
                if (compChoice == "scissors") {
                    userScoring;
                    compScore;
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Scissors");
                    compEchoChoice.innerHTML("Scissors");
                    roundWinner.innerHTML("Tie")
                } else if (
                    compChoice == "paper"
                ) {
                    userScoring++
                    if (compScore > 0) {
                        compScore--;
                    } else {
                        compScore;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Scissors");
                    compEchoChoice.innerHTML("Paper");
                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )

                } else {
                    compScore++
                    if (userScoring > 0) {
                        userScoring--;
                    } else {
                        compScore;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Scissors");
                    compEchoChoice.innerHTML("Rock");
                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )

                }


            }));

        /// if user selects paper in that round
        if (document.getElementById("paper").addEventListener("click", function() {
                if (compChoice == "scissors") {
                    compScore++
                    if (userScoring > 0) {
                        userScoring--;
                    } else {
                        userScoring;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Paper");
                    compEchoChoice.innerHTML("Scissors");
                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )
                } else if (
                    compChoice == "paper"
                ) {
                    userScoring;
                    compScore;
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Paper");
                    compEchoChoice.innerHTML("Paper");
                    roundWinner.innerHTML("Tie")

                } else {
                    userScoring++
                    if (compScore > 0) {
                        compScore--;
                    } else {
                        compScore;
                    }
                    userEchoScore.innerHTML(userScoring);
                    userChoice.innerHTML("Paper");
                    compEchoChoice.innerHTML("Rock");
                    if (userScoring > compScore) {
                        roundWinner.innerHTML("User");
                    } else if (
                        userScoring < compScore) {
                        roundWinner.innerHTML("Comp");
                    } else(
                        roundWinner.innerHTML("Tie")
                    )
                };

            }));
    };
}
playTheRound();