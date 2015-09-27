window.onload = function () {
function getValue(id) {
  return document.getElementById(id).value;
}

function getFloat(id) {
  return parseFloat(getValue(id));
}

function setTo2DP(id) {
  return Math.round(id * 100) / 100;
}

function setHtml(id, html) {
  document.getElementById(id).innerHTML = html;
}

/* BASIC CALC */

function basicCalc() {
  var num1 = getFloat("basic-num-1");
  var num2 = getFloat("basic-num-2");
  var oper = getValue("basic-operation");
  var ans = null;

  switch(oper) {
  	case "+":
  	  ans = num1 + num2;
  	  break;
	case "-":
	  ans = num1 - num2;
	  break;
	case "*":
  	  ans = num1 * num2;
  	  break;
  	case "/":
  	  ans = num1 / num2;
  	  break;
  	default:
  	  console.log("Check")
  }

  ans = setTo2DP(ans);
  var basicMessage = num1 + " " + oper + " " + num2 + " = " + ans;
  setHtml("basic-answer-alert", basicMessage)
}

document.getElementById("basic-calc").addEventListener("click", basicCalc);


/* TRIP COST CALC */
function tripCalc() {
  var dist = getFloat("trip-distance");
  var mpg = getFloat("trip-mpg");
  var cost = getFloat("trip-cost");
  var speed = getFloat("trip-speed");
  var ans = null;

/* calculating trip cost */
/* formula for cost calculation for speeds > 60 did not work */
  costAns = dist / mpg * cost;
  costAns = setTo2DP(costAns);

/* calculating trip time */
  timeAns = dist / speed;
  timeAns = setTo2DP(timeAns);

  var tripMessage = "The trip will cost " + costAns + " and it will take " + timeAns + " hours.";

  setHtml("trip-answer-alert", tripMessage);
}

document.getElementById("trip-calc").addEventListener("click", tripCalc);


/* BMI CALC */
function bmiCalc() {
  var mass = getFloat("bmi-mass");
  var height = getFloat("bmi-height");

  bmiAns = mass / Math.pow(height, 2);
  bmiAns = setTo2DP(bmiAns);

  var bmiMessage = "Your BMI is " + bmiAns;

  setHtml("bmi-answer-alert", bmiMessage);
}

document.getElementById("bmi-calc").addEventListener("click", bmiCalc);



























/* this curly bracket goes with window.onload function and ends the program*/
}