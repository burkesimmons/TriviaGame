$(document).ready(function() {
	// alert('yes');
//  Interval Demonstration
    //  Set our number counter to 100.
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#start").on("click", run);

    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
      listQuestions ();
    }

    var questions = [];
    questions[0] = 'Which beast was the most subltle of all beasts?';
    questions[1] = 'What is the world\'s most common religion?',
    questions[2] = 'What is the second largest country (in size) in the world?';

    var choices = [];
    choices[0] = ['Cow', 'Snake', 'Iguana', 'Centipede'],
    choices[1] = ['Christianity', 'Buddhism', 'Hinduism', 'Islam'],
    choices[2] = ['USA', 'China', 'Canada', 'Russia'];

    var answers = [];
    answers[0] = ['Some difference'],
    answers[1] = ['Christianity'],
    answers[2] = ['Canada'];

    var score = 0;

    function listQuestions () {
    	for (var i = 0; i < questions.length; i++) {
			$('#question').append('<h3>'+questions[i]+'</h3>');
			var choicesOutput=[];
			for (var k = 0; k < choices[i].length; k++){
				choicesOutput.push('<p><input type = "radio" name = "questionchoice">' + choices[i][k] + '</p>');
    	        $('#choices').append(choicesOutput.join(""));
    	        $('#button').append('<p><button onClick = "getRadioValue()">Check</button></p><br>');
    	        };
    	        
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
    }//  Interval Demonstration
    //  Set our number counter to 100.
    var number = 30;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#start").on("click", run);

    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
      listQuestions ();
    }

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

    var score = 0;

    function listQuestions () {
    	for (var i = 0; i < questions.length; i++) {
			$('#question').append('<h3>'+questions[i]+'</h3>');
			var choicesOutput=[];
			for (var k = 0; k < choices[i].length; k++){
				choicesOutput.push('<p><input type = "radio" name = "questionchoice">' + choices[i][k] + '</p>');
				
    	        };
    	        
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
});

    //  Execute the run function.
    // run();