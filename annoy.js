
var answer = prompt("Are u ready?")
while (answer.indexOf("yes") === -1) {

    var answer = prompt("Are u ready , now?")
    if (answer == "yes") {
        alert("Ok! lets enter the website");

    }
    else {
        alert("Sry , try again")
    }

}



