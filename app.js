alert("Welcome to my card game. We are playing a game of 20 if you go over I win and if I go over you win. If none of us go over the closest person to 20 wins.");

var user = []
var computer = []

do {
    var compTotal = 0
    var userTotal = 0

    alert("The computer will draw first");

    do {

        var ran = Math.floor(Math.random() * 10) + 1

        compTotal = compTotal + ran

        alert(`The computer drew ${ran}. The computer's total is ${compTotal} `);

    } while (compTotal < 16);

    alert(`The computer will stop at ${compTotal}`);

    if (compTotal > 20) {
        alert("The user automatically wins, because the computer went over 20.");
        user.push(1);
    } else {
        alert("now its your turn to draw");

    do {
        var dom = Math.floor(Math.random() * 10) + 1

        userTotal = userTotal + dom

        alert(`the card you drew is ${dom}. Your total is ${userTotal}.`);

        if (userTotal > 20) {
            alert("You went over 20 the computer automatically wins");
            computer.push(1)
            break;
        }

        var userquest = prompt("Would you like another card? Press y if you do.");



        } while (userquest == "y");

    }

    if ((userTotal > compTotal) && (userTotal < 21)) {

    alert(`The user won, the computer had ${compTotal} and the user had ${userTotal}`);
    user.push(1);

    } else if ((compTotal > userTotal) && (compTotal < 21)) {

    alert(`The computer won, the user had ${userTotal} and the computer had ${compTotal}`);
    computer.push(1);

    } else if (compTotal == userTotal) {
    alert(`It was a tie. No one gets a point.`);
    }

    alert(`the score is computer ${computer.length} and human ${user.length}`);

    var ques = prompt("Would you like to play again?  Press 'y' if you do and press 'n' if you do not.");

} while (ques == "y");
alert(`thanks for playing with me our final score was human ${user.length} and computer ${computer.length}`);