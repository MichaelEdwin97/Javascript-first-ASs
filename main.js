let myName = prompt("What's is your name?")
let myWeight = prompt("Enter your weight in kg")

function resultDetail(){
    resultWeight = myWeight * 2.2;
    return "My name is " + myName + " and I weigh " + resultWeight + " pounds."
}
alert(resultDetail())