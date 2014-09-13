$(document).ready(function() {
	var currentNumber = null,
		leftNumber = null,
		negNumberLeft = false,
		negNumberRight = false,
		operator2 = null,
		operatorToDo = null, // null is falsey
		solution = null;

	var calcView = function() {   // declaring variable
		var $display = $("#display"), // convention for saving jquery handlers
			$number = $(".number"),  // all numbers clicked
			$operator = $(".operator"), // all operators clicked
			$reset = $("#reset"), // the reset button
			$calculate = $("#calculate");

		var clearAndShow = function(x) { //declaring funcions 
				$display.html(x);
			},
			init = function() {},
			clear = function() {$display.html("");},
			reset = function() {clear();};

		$("button").on("click", function() {
			$calculate.slideToggle("slow");
		});

		$number.on('click', function() {
			currentNumber = currentNumber || 0; //if currentNumber is falsey (since undefined) set it to 0
			currentNumber = currentNumber * 10 + ($(this).html() * 1); // mult by 1 changes the string to a number
			//$("#display").html(currentNumber);
			clearAndShow(currentNumber);
		});

		$operator.on('click', function() {
			op = $(this).html();
			if ( currentNumber === null && ( ['=', '+', '*', '/'].indexOf(op) !== -1 ) ) { // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
				alert("Pick a number idiot");
			}
			else if (currentNumber === null && (op === "-")) {
				negNumberLeft = true;
				clearAndShow(op);
			}
			else if (currentNumber !== null && op === "=" && leftNumber == null)
			{
				alert("type an operator first...");
			}
			else if ( operator2 === null && ['-', '+', '*', '/'].indexOf(op) === -1 ) {  // this is the 1st operator ever clicked
					leftNumber = currentNumber;
				} 

			else if ( operator2 === null && operatorToDo !== null ) {  // they entered an op right after a previous op entry
					if (negNumberLeft === true) {
						// leftNumber = currentNumber * -1;
						// clearAndShow(operatorToDo + leftNumber);
						operatorToDo = op;
					}
					else {
						leftNumber = currentNumber;
						operatorToDo = op;
						return;
					}
				} 		
		});

		return {       // we return methods as key value pairs THIS IS ALL THAT YOU CAN CALL OUTSIDE OF THIS Fx
			clearAndShow : clearAndShow, //key : value function
			reset : reset
		}

	}();
	
	function doOperation(a,b,op) {
		
		switch (op) {
			case "+":
				return a + b;
				break;
			case "-":
				return a - b;
				break;
			case "*":
				return a * b;
				break;
			case "/":
				return a / b;
				break;
			default:
				break;
		}
	}

	$("#reset").on('click', function() {
		currentNumber = 0;
		firstNum = 0;
		result = 0;
		operator1 = "";
		//$("#display").html("")
		calcView.clearAndShow("");
	});
});