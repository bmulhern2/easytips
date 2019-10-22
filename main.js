let button = document.querySelector('#submit')
	button.addEventListener('click', calculate);

	function calculate(cost, tipPercent, total) {
	cost = document.querySelector('#number');
	cost = parseInt(cost.value);
	var tipAmount = 0.15;
	total  = (cost * tipAmount) + cost; 
	var output = document.querySelector('.output')
	output.innerHTML = 'Total: $' +  total.toFixed(2);
};
