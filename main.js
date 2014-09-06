$(document).ready(function() {
	var operand1 = 0;
	var firstNum;

	$("button").on("click", function() {
		$("#calculate").slideToggle('slow');
	});

	$(".number").on('click', function() {
		var num1 = $(this).html();
		// changes to a number
		operand1 = operand1 * 10 + (num1 * 1);
		$("#display").html(operand1);
	});
// keep track of 2 operands and then execute

	$(".operator").on('click', function() {
		if (operand1 !== 0) {
			var secondNum = operand1;
			$("#display").html("");
			operand1 = 0;
			var op1 = $(this).html();
			var firstOperator = $("#display").html(op1);
		}
		var solution = 
		$("#display").html(solution);
		
	});

});