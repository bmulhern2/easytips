/* let button = document.querySelector('#submit')
	button.addEventListener('click', calculate); */

	/* function calculate(prompt, cost, tipPercent, total) { */
	var prompt2 = prompt("How Much Did Your Meal Cost?");
	prompt = parseInt(prompt2);
	var tipAmount = 0.15;
	var total  = (prompt * tipAmount) + prompt;
	var output = document.querySelector('.output')
	output.innerHTML = 'Total: $' + total;
	output.style.marginTop = "100px";

/* }; */
