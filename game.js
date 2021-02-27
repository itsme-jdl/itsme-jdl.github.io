var secretNo = 4;



while (Number(guess != secretNo)) {

    var guess = prompt("Guess a no :");


    if (Number(guess) == secretNo) {
        alert("You guessed it correct");
    }
    else if (Number(guess) > secretNo) {
        alert("Too high, Guess again!");
    }
    else {
        alert("Too low, Guess again!");
    }
}