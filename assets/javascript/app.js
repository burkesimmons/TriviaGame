$(function() {
	//  Interval Demonstration
    //  Set our number counter to 100.
    var number = 30;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
    //  When the stop button gets clicked, run the stop function.
    $("#start").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
      listQuestions ();
    }

    var score = {};


    var questions = [];
    questions[0] = 'Which beast was the most subltle of all beasts?';
    questions[1] = 'How many rivers flowed out of the garden of Eden?',
    questions[2] = 'What was Israel\'s given name at birth?';

    var choices = [];
    choices[0] = ['Cow', 'Snake', 'Iguana', 'Centipede'],
    choices[1] = ['3', '2', '4', '1'],
    choices[2] = ['Jacob', 'Moses', 'Esau', 'Isaac'];

    var answers = [];
    answers[0] = ['Snake'],
    answers[1] = ['4'],
    answers[2] = ['Jacob'];


    function listQuestions () {
    	if (var i = 0; i < questions.length) {
			$('#question').append('<h3>' + questions[i] + '</h3>');
			var choicesOutput=[];
			$('#choices').html(choicesOutput.join(""));
			console.log(choicesOutput);
			for (var k = 0; k < choices[i].length; k++){
				choicesOutput.push('<p><input type = "radio" name = "questionchoice">' + choices[i][k] + '</p>');
				console.log(choicesOutput);
    	        };
    	        $('#choices').html(choicesOutput.join(""));
    	        console.log(choicesOutput);
    	        $('#button').append('<p><button onClick = "getRadioValue()">Check</button></p><br>');
    	    }
    	};
    

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + 'Time remaining: ' + number + ' Seconds' + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();       
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    var questions = [
    	{
    		id: 1,
    		text: 'What is my birthday',
    		answers: [
    			{
    				text: 'Jan 2',
    				isCorrect: false,
    			}
    			{
    				text: 'Jan 1',
    				isCorrect: true,
    			}
    		]
    	},
    	{
    		id: 2,
    		text: 'What is my dad\'s birthday?',
    		answers: [
    		]
    	},
    	state: 'unanswered'
    }]

    var score = {};

    var questionsElement = $('.questions');
    var listWrapper = $('<ul>');
    questions.forEach(function(currentQuestion,index) {
    	var listElement = $('<li>');
    	listElement.html(currentQuestion.text);
    	var answersWrapper = $('<ul>');
    	currentQuestion.answers.forEach(function(currentAnswer) {
    		var anserListItem = $('<li>');
    		answerListItem.html('input type="radio" value="' + currentAnswer.text + '"name')
    		currentQuestion.id + '"' + currentAnswer.text + 
    	})
    	listWrapper.append(listElement)
    });
    questionsElement.append(listWrapper);

});