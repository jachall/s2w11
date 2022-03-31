var player = 0
var computer = 0
var wins = 0
var loses = 0
function askName() {
    var name = prompt("Please enter your name")
    return name;
}
function generate(){
    var ran = Math.floor(Math.random() * 10) + 1;
    return ran;
}
function userValue(random){
    do {
        var player = player + random;
        alert(`You drew ${random}. Your total is ${player} `);
        if (player > 20) {
            alert("You went over 20 the computer automatically wins");
            var loses = loses + 1;  
            break;
        }
        var userquest = prompt("Would you like another card? Press y if you do.");
    } while (userquest == "y");
}
function compValue(random){
    do {
        var computer = computer + random;
        alert(`The computer drew ${random}. The computer's total is ${computer} `);
        if (computer > 20) {
            alert("The computer went over 20 the you automatically win");
            var wins = wins + 1;  
            break;
        }
    } while (compTotal < 16);
}
function numComp(computer, player){
    if((player > computer) && (player < 21)) {
        alert(`The user won, the computer had ${computer} and the user had ${player}`);
        var wins = wins + 1;
        } else if ((computer > player) && (computer < 21)) {
        alert(`The computer won, the user had ${player} and the computer had ${computer}`)
        var loses = loses + 1;
    }

}
function gameStart(){
    numComp(compValue(),userValue());
    do{
        gameStart();
        var gameplay = prompt("Would you like another card? Press y if you do.");
    }while(gameplay =="y")
}
gameStart();