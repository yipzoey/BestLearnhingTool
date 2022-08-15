var myQuestions = [
	{
		question: "Which one is not the feature of Hot Desserts?",
		answers: {
			a: 'served warm',
			b: 'served long time after having been cooked',
			c: 'have been warmed prior to service'
		},
		correctAnswer: 'b'
	},
	{
		question: "Which one is not considered as Bloom strength for Gelatine?",
		answers: {
			a: 'bronze',
			b: 'silver',
			c: 'hard'
		},
		correctAnswer: 'c'
	},
    {
		question: "Where does the name 'biscuit' come from?",
		answers: {
			a: 'bis',
			b: 'ques',
			c: 'amor'
		},
		correctAnswer: 'a'
	},
	{
		question: "What is the form of Shortbread?",
		answers: {
			a: 'rolled biscui',
			b: 'dropped biscuit',
			c: 'somewhere in between between rolled and dropped biscuit'
		},
		correctAnswer: 'c'
	},
    {
		question: "What is the first step of making bread?",
		answers: {
			a: 'dough',
			b: 'Knead',
			c: 'Shape'
		},
		correctAnswer: 'a'
	},
	{
		question: "The yeast converts the fermentable sugars into what product?",
		answers: {
			a: 'ethanol and other byproducts',
			b: 'carbon dioxide',
			c: 'oxygen'
		},
		correctAnswer: 'a'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
	//Store the output and the answer choices
	var output = [];
	var answers;

	for(var i=0; i<questions.length; i++){
		
		//reset the list of answers
		answers = [];
		for(letter in questions[i].answers){

			//add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// combine output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

	function showResults(questions, quizContainer, resultsContainer){
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
    for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);