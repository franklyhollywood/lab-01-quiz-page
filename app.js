// import functions and grab DOM elements
import { answerCounts } from './utils.js';
const result = document.getElementById('resultsSpan');
const button = document.getElementById('quizButton');

// set event listeners
button.addEventListener('click', () => {
	// initialize state
	let correctAnswers = 0;

	// get user input
	//Ask the user's name. Their name should be used in subsequent prompts
	const firstName = prompt('Hi.  What is your first name?');
	const lastName = prompt('What is your last name?');
	// use user input to update state
	const takeQuiz = prompt(
		`Do you REALLY want to take this quiz ${firstName} ${lastName} ?`
	);
	//Confirm that the user really wants to take the quiz. If not, return from your event listener function.
	if (!takeQuiz) return;

	// update DOM to reflect the new state
	//Three YES/NO questions (using prompt calls) about the subject.
	const answer1 = prompt(
		`Was skiing practiced in China hundreds of years ago?`
	);
	//....Use your countsAsAYes function to determine the user's response,
	if (answerCounts(answer1)) correctAnswers++;

	const answer2 = prompt(`is "Alpine" one of the main types of skiing?`);
	if (answerCounts(answer2)) correctAnswers++;

	const answer3 = prompt(`is Whistler one of my favorite places to ski?`);
	if (answerCounts(answer3)) correctAnswers++;

	alert(
		`Thank you ${firstName} for taking the quiz.  We will let you know how you did.`
	);

	result.textContent = `${firstName} ${lastName}, you got ${correctAnswers} correct answers!`;
});

//then compare to the correct answer. Track number of correct responses.
//Alert the user that the quiz is complete and their results will now be written to the webpage.
//Write a response to the page with their name and number correct, for example: "Okay Bernice, you got 2/3 correct".
//STRETCH goal(s):
//Add a class to style the result differently based on good or bad score.
//Add different text content ('Great work!' 'Needs improvement!', etc) based on user's results
//Include a percentage, without decimal places.
