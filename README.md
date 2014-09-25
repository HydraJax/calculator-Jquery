1. No operands yet, enters a operator
--> dont accept operator; except '-' will start a negative number
2. One operand entered, they enter '=' as operator
--> ignore '='
3. One operand entered, they enter a good operator, then enter another operator
--> use most recent operator




Use Cases:

 - as a user of the calculator, I want to ...

 1. Enter a number, operator, number, '=' 
 	and get my calculation

 2. Continue entering operator, number, operator
 	and get calculations ongoing

 3. Have a Reset button that clears the screen and all calculations.


 	Let's think about the order of entry into the calculator.  And to take it in
 	steps, lets just consider the happy cases where things are not entered out of
 	order.

 	Here's how the sequence of entry goes starting from left to right:

        operand1      operator1     operand2      operator2
                                                  or '='

    { Operands are numbers, operators are multiply, etc.., including '=' }

    Let's make a diagram that outlines all the states this implies.  We'll leave
    out the reset button since it can come at any time and doesn't rely on 
    other states.

   	On the vertical, we have all relevant events; on the horizontal is basic
   	progression of times delineating our states:

   			 State1	 State2	 State3	 State4	 State5	 

   	--------|		|		|		|		|		|		|
   	'-'			X			    X
   	--------|		|		|		|		|		|		|
   	operand    op1             op2 			  op1/2?
   	--------|		|		|		|		|		|		|
   	operator 			1+				1+ 
   	--------|		|		|		|		|		|		|
   	'='					N 				Y
   	--------|		|		|		|		|		|		|


   	Some things to note:
   	* State transitions are prompted by operator/operand events
   	* During state 2, '=' should be disregarded
   	* Durings states 1 and 3 user can toggle to make number negative
   	* During state 4, '=' not only shows result like any other operator here, but also
   		means next operand will be operand1, not operand2 (essentially a reset.)
   	* State 5 places us at either State3 or State1 depending on whether user hit
   		'=' or another operator in state4.  


 	About dealing with negative numbers:

 	We have to deal with '-' possibly being entered both before the first operand
 	and before the second operand - but after the first operator!  Hmm, wouldn't that
 	mean they want a minus instead of the operator.  This is vague.

 	Let's make the decision to have some UI element to click on to indicate a
 	negative number.  This decision makes some other stuff eaiser and provides us a 
 	chance to spice up the UI some more.

 	The UI interface for '-' will be a toggle.  You can toggle it on/off anytime during operand
 	entry.   As soon as a operator is clicked, its reset to being off (of course.)

