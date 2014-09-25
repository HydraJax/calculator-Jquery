$(document).ready(function() {

	var calculationState = 1,
		currentNum = null,
		operand1 = null,
		operator1 = null,
		operand2 = null;

	var calcView = function() {   
		var $display = $("#display"),
			$number = $(".number"),  			// all clickable numbers
			$operator = $(".operator"), 		// all clickable operators
			$reset = $("#reset"), 				// the reset button
			$calculate = $("#calculate");		// enclosing div

		var clearAndShow = function(x) { 
				$display.html(x);
			},
			init = function() {},
			clear = function() {$display.html("");},
			reset = function() {clear();};


		$("button").on("click", function() {	// Don't need to cache $('button') since its ever only used once.
			$calculate.slideToggle("slow");
		});


		// Handle clicks on numbers - 
		// As long as digits are consequetively pressed, munge them together to make an operand.
		$number.on('click', function() {

			if ( calculationState === 2 ) {
				promoteCalculationState();
			}

			// Only allow operands in states 1 & 3
			if ( calculationState !== 1 && calculationState !== 3 ) return;

			currentNum = currentNum || 0; //if currentNum is falsey (since null) set it to 0
			currentNum = currentNum * 10 + ($(this).html() * 1); // mult by 1 changes the string to a number
			clearAndShow(currentNum);
		});



		// An operator was pressed
		$operator.on('click', function(event) {
			var op = $(this).html();

			if ( calculationState === 1 || calculationState === 3 ) {
				promoteCalculationState();
			}

			// Only allow operators in states 2 & 4
			if ( calculationState !== 2 && calculationState !== 4 ) return;

			// at this point we know we are in either state 2 or 4

			if ( calculationState === 2 ) {
				if ( op === '=' ) { return;	}	// disregard '=' in state 2
				else {
					operator1 = op;
					operand1 = currentNum;
					currentNum = null;
					clearAndShow( operator1 );
				}
			}
			else {			// state 4
				var result = doOperation( operand1, currentNum, operator1 );
				clearAndShow(result);
				operand1 = result;
				
				if ( op === '=' ) {  
					jumpToCalcState(2);
				}
				else { 				//
					operator1 = op;
					jumpToCalcState(3);
				}
				currentNum = null;
			}
		});


		return {       // we return methods as key value pairs
			clearAndShow : clearAndShow, //key : value function
			reset : reset,
		};

	}();
	


	function promoteCalculationState() {
		calculationState++;
	}

	function jumpToCalcState(which) {
		calculationState = which;
	}
		
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


	// TODO : this needs revision
	$("#reset").on('click', function() {
		currentNum = 0;
		firstNum = 0;
		result = 0;
		operator1 = "";
		//$("#display").html("")
		calcView.clearAndShow("");
	});


});
