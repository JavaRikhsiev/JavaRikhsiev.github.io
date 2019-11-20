function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	
	var correct = 0;


	if (question1 == "Variable") {
		correct++;
}
	if (question2 == "Inferential statistics") {
		correct++;
}	
	if (question3 == "Independent events") {
		correct++;
	}
	if (question4 == "Discrete") {
		correct++;
	}
	if (question5 == "Continuous") {
		correct++;
	}
	
	var pictures = ["images/greatj.gif", "images/tenor.gif", "images/fail.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	