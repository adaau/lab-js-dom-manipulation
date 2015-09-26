window.onload = function () {
/* BASIC CALC */
function getValue(id) {
  return document.getElementById(id).value;
}

function getFloat(id) {
  return parseFloat(getValue(id));
}

function setHtml(id, html) {
  document.getElementById(id).innerHTML = html;
}

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

  var message = num1 + " " + oper + " " + num2 + " = " + ans;
  setHtml("basic-answer-alert", message)
}

document.getElementById("basic-calc").addEventListener("click", basicCalc);


/* TRIP CALC */








/* this curly bracket goes with window.onload function and ends the program*/
}