$(document).ready(function() {
	var calcView = function() {   // declaring variable
		var $display = $("#display"), // convention for saving jquery handlers
			$button = $("#button"),
			$number = $("#number"),  // all numbers clicked
			$number = $("#operator"), // all operators clicked
			$reset = $("#reset"), // the reset button
			$calculate = $("#calculate");

		var clearAndShow = function(x) {}, //declaring funcions 
			init = function() {},
			clear = function() {$display.html("");},
			reset = function() {clear();};

			$button.on("click", function() {
				$calculate.slideToggle("slow");
			});

			return {       // we return methods as key value pairs
				clearAndShow : clearAndShow, //key : value function
				number : number,
				reset : reset,
			};
		}();
	
		var displayNum = NaN,
			currentNumber,
			firstNum,
			result,
			isFirstNum = true,
			operator1 = "";


		$("button").on("click", function() {
			$("#calculate").slideToggle('slow');
		});

		$(".number").on('click', function() {
			currentNumber = currentNumber || 0; //if currentNumber is falsey (since undefined) set it to 0
			currentNumber = currentNumber * 10 + ($(this).html() * 1); // mult by 1 changes the string to a number
			$("#display").html(currentNumber);
		});

		$(".operator").on('click', function() {
			if (isFirstNum === true) {
			// if (!operator1) { // if value operator1 is undefined
				firstNum = currentNumber;
				currentNumber= 0;
				operator1 = $(this).html();
				$("#display").html(operator1);
				isFirstNum = false;
				return; // this return stops the if clause unless operator gets set to something else
			}
			else { // we have the first operand
				if ($(this).html() === "=") {
					isFirstNum = true;
				}
				else {
					operator1 = $(this).html();
				}
				firstNum = doOperation(currentNumber, firstNum, operator1);
				$("#display").html(firstNum);
				currentNumber = 0;
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
			$("#display").html("")
		});




	});

