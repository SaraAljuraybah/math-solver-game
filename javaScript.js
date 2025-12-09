

var userName = "";
var currentRound = 0;
var correctAnswer = 0;

function setUserName() {

	userName=prompt("Enter your name");

	let aside=document.getElementsByTagName("aside")[0];
	aside.innerHTML=userName+"<hr>";

	generateQuestion();
}

function generateQuestion() {
  var num1 = Math.floor(Math.random() * 10) + 1;
  var num2 = Math.floor(Math.random() * 10) + 1;
  var operators = ["+", "-", "*"];
  var operator = operators[Math.floor(Math.random() * operators.length)];
	if(operator=="+"){
		correctAnswer=num1 + num2;
	}
	else if(operator=="-"){
		correctAnswer=num1 - num2;
	}
	else if(operator=="*"){
		correctAnswer=num1 * num2;
	}

	container=document.getElementById("qst");
	container.innerHTML="Solve: "+num1+" "+ operator+" "+ num2;

	document.getElementById("ans").value = "";

}

function checkAnswer() {
  var userInput =  document.getElementById("ans").value;;
  var table = document.getElementsByTagName("table")[0];
  var row = table.rows[currentRound];
  var userTD = row.cells[0];
  var resultTD = row.cells[1];
  userTD.textContent = userInput;


	if(userInput==correctAnswer){
		resultTD.innerHTML="Correct!"
		resultTD.style.backgroundColor="green";
	}
	else if(userInput!=correctAnswer){
		resultTD.innerHTML="Wrong!"
		resultTD.style.backgroundColor="red";
		
	}
	currentRound++;
	
	if(currentRound==5){
		let aside=document.getElementsByTagName("aside")[0];
		aside.innerHTML+="<i>Game over</i>";
		document.getElementById("ans").value = "";
        document.getElementById("enter").style.display = "none";

	}
	else if(currentRound<5){
		document.getElementById("ans").value = "";
		generateQuestion();
	}


}

function resetGame() {

	currentRound=0;
    let table = document.getElementsByTagName("table")[0];

    for (let i = 0; i < 5; i++) {
        table.rows[i].cells[0].innerHTML = "";
        table.rows[i].cells[1].innerHTML = "";
        table.rows[i].cells[1].style.backgroundColor = "initial";
    }
    let aside = document.getElementsByTagName("aside")[0];
    aside.innerHTML = userName + "<hr>";
    document.getElementById("enter").style.display = "inline-block";

    generateQuestion();


}
