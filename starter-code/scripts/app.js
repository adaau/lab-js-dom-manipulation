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
  setHtml("basic-answer-alert", basicMessage);
  document.getElementById("basic-answer").setAttribute("class", "");
  document.getElementById("trip-answer").setAttribute("class", "hide");
  document.getElementById("bmi-answer").setAttribute("class", "hide");
  document.getElementById("mortgage-answer").setAttribute("class", "hide");
}
document.getElementById("basic-answer").setAttribute("class", "hide");
document.getElementById("basic-calc").addEventListener("click", basicCalc);

/* TRIP COST CALC */
function tripCalc() {
  var dist = getFloat("trip-distance");
  var mpg = getFloat("trip-mpg");
  var cost = getFloat("trip-cost");
  var speed = getFloat("trip-speed");
  var costAns = null;
  var timeAns = null;

/* calculating trip cost */
/* formula for cost calculation for speeds > 60 did not work */
  costAns = setTo2DP(dist / mpg * cost);

/* calculating trip time */
  timeAns = setTo2DP(dist / speed);

  var tripMessage = "The trip will cost " + costAns + " and it will take " + timeAns + " hours.";
  setHtml("trip-answer-alert", tripMessage);
  document.getElementById("basic-answer").setAttribute("class", "hide");
  document.getElementById("trip-answer").setAttribute("class", "");
  document.getElementById("bmi-answer").setAttribute("class", "hide");
  document.getElementById("mortgage-answer").setAttribute("class", "hide");
}
document.getElementById("trip-answer").setAttribute("class", "hide");
document.getElementById("trip-calc").addEventListener("click", tripCalc);

/* BMI CALC */
function bmiCalc() {
  var mass = getFloat("bmi-mass");
  var height = getFloat("bmi-height");

  bmiAns = setTo2DP(mass / Math.pow(height, 2));

  var bmiMessage = "Your BMI is " + bmiAns;
  setHtml("bmi-answer-alert", bmiMessage);
  document.getElementById("basic-answer").setAttribute("class", "hide");
  document.getElementById("trip-answer").setAttribute("class", "hide");
  document.getElementById("bmi-answer").setAttribute("class", "");
  document.getElementById("mortgage-answer").setAttribute("class", "hide");
 }
document.getElementById("bmi-answer").setAttribute("class", "hide");
document.getElementById("bmi-calc").addEventListener("click", bmiCalc);


/* MORTGAGE CALC */
function mortgageCalc() {
  var loan = getFloat("mortgage-loan");
  var apr = getFloat("mortgage-apr");
  var term = getFloat("mortgage-term");
  var mortgageAns = null;

  mortgageAns = setTo2DP(loan * apr * ((1 + apr) ^ term) / (((1 + apr) ^ term) - 1));

  var mortgageMessage = "Your mortgage is " + mortgageAns;
  setHtml("mortgage-answer-alert", mortgageMessage);
  document.getElementById("basic-answer").setAttribute("class", "hide");
  document.getElementById("trip-answer").setAttribute("class", "hide");
  document.getElementById("bmi-answer").setAttribute("class", "hide");
  document.getElementById("mortgage-answer").setAttribute("class", "");
}
document.getElementById("mortgage-answer").setAttribute("class", "hide");
document.getElementById("mortgage-calc").addEventListener("click", mortgageCalc);

}