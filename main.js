$(document).ready(function() {
	var displayNum = NaN,
		currentNumber,
		firstNum,
		result,
		operator1;

	$("button").on("click", function() {
		$("#calculate").slideToggle('slow');
	});

	$(".number").on('click', function() {
		currentNumber = currentNumber || 0; //if currentNumber is falsey set it to 0
		currentNumber = currentNumber * 10 + ($(this).html() * 1); // mult by 1 changes the string to a number
		$("#display").html(currentNumber);
	});

	$(".operator").on('click', function() {
		if (!operator1) { // if value operator1 is undefined
			firstNum = currentNumber;
			currentNumber= 0;
			operator1 = $(this).html();
			$("#display").html(operator1);
			return; // this return stops the if clause unless operator gets set to something else
		}
		else { // we have the first operand
	
			firstNum = doOperation(currentNumber, firstNum, operator1);
			$("#display").html(firstNum);
		}
	});

	function doOperation(b,a,op) {
		console.log(b, a, op);
		switch (op) {
			case "+":
				return b + a;
				break;
			case "-":
				return a - b;
				break;
			case "*":
				return b * a;
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

// clear button