$(document).ready(function() {
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

		return {       // we return methods as key value pairs
			clearAndShow : clearAndShow, //key : value function
			reset : reset,
		};

	}();
	
	
	var currentNumber = null,
		leftNumber = null,
		negNumber = false,
		operator2 = null,
		operatorToDo = null, // null is falsey
		solution = null;

	$(".number").on('click', function() {
		currentNumber = currentNumber || 0; //if currentNumber is falsey (since undefined) set it to 0
		currentNumber = currentNumber * 10 + ($(this).html() * 1); // mult by 1 changes the string to a number
		//$("#display").html(currentNumber);
		operator2 = false;
		calcView.clearAndShow(currentNumber);
	});

	$(".operator").on('click', function(event) {
		// console.log(event);
		if (currentNumber === null && ($(this).html() === "=" || $(this).html() === "+" || $(this).html() === "*" || $(this).html() === "/")) {
			alert("Pick a number idiot");
		}
		else if (currentNumber === null && ($(this).html() === "-")) {
			negNumber = true;
			return negNumber;
		}
		else if (currentNumber !== null && $(this).html() === "=" && leftNumber == null) {
			alert("type an operator first...");
		}
		else {
		 	 leftNumber = currentNumber;
			 currentNumber = 0; 
			 operatorToDo = $(this).html();
			 solution = doOperation(currentNumber, leftNumber, operatorToDo);
			 console.log(currentNumber, leftNumber, operatorToDo);
			 operator2 = true;
		}

	});

		
	function doOperation(b,a,op) {
		// operator1 = "";
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

