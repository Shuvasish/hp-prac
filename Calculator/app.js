const container = document.querySelector('.center');
const displayBottom = document.querySelector('.display_3');
const displayMiddle = document.querySelector('.display_2');
const displayTop = document.querySelector('.display');


const showInnerTextToUI = function(e){

	displayBottom.textContent = displayBottom.textContent+e.target.classList.value;
}


const resultOfOperation = function(operator){
	const top = +displayTop.textContent;
	const bottom = +displayBottom.textContent;
	let result;
	if (operator == 'add') {
		result = `${top + bottom}`;
	}else if (operator == 'sub') {
		result = `${top - bottom}`;
	}else if (operator == 'mul') {
		result = `${top * bottom}`;
	}else if (operator == 'div') {
		result = `${top / bottom}`;
	}
	result = +result;
	return result;
	}


const solution = function(operator){

	const result = resultOfOperation(operator);
	displayBottom.textContent = result.toFixed(1);
	displayTop.textContent='';
	displayMiddle.textContent='';
}


const solutionExtention = function(operator,secondOperator){
	const result = resultOfOperation(operator);
	displayBottom.textContent = '';
	displayTop.textContent=result.toFixed(1);
	displayMiddle.textContent=secondOperator;
}


const operation = function(e,gennericMethod){
	const secondOperator =e.target.classList.value;
	if (displayMiddle.textContent == '+') {
		gennericMethod('add',secondOperator);
	}else if (displayMiddle.textContent == '-') {
		gennericMethod('sub',secondOperator);
	}else if (displayMiddle.textContent == '*') {
		gennericMethod('mul',secondOperator);
	}else if (displayMiddle.textContent == '/') {
		gennericMethod('div',secondOperator);
	}
}


container.addEventListener('click',function(e){
	if(e.target.classList.value == '0' || e.target.classList.value == '1' || e.target.classList.value == '2' || e.target.classList.value == '3' ||e.target.classList.value == '4' || e.target.classList.value == '5' || e.target.classList.value == '6' || e.target.classList.value == '7' || e.target.classList.value == '8' || e.target.classList.value == '9' || e.target.classList.value == '.' ){

		showInnerTextToUI(e);	
	}
	if ( e.target.classList.value == '+' || e.target.classList.value == '-' || e.target.classList.value == '*' || e.target.classList.value == '/') {
		if(displayTop.textContent){
			
			operation(e,solutionExtention);
			

		}else{
			displayTop.textContent = displayBottom.textContent;
			displayBottom.textContent= '';
			displayMiddle.textContent= e.target.classList.value;
		}
	}if(e.target.classList.value == '='){
		
		operation(e,solution);
		
	}if(e.target.classList.value == 'c'){
		displayBottom.textContent ='';
		displayTop.textContent='';
		displayMiddle.textContent='';
	}
	if(e.target.classList.value == 'x'){
		displayBottom.textContent ='';
		
	}
	
})