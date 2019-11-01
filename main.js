let button = document.querySelector('#submit')
	button.addEventListener('click', calculate);

	function calculate() {
var input = prompt("How Much Was Your Meal?");
var input2 = input;
var tipAmount = 1.15;
var total = (input * tipAmount).toFixed(2);
var output = document.querySelector('.output');
	output.innerHTML = 'Total: $' + total;
	output.style.marginTop = "100px";
};
