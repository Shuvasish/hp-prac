const container = document.querySelector('.center');
const displayBottom = document.querySelector('.display_3');
const displayMiddle = document.querySelector('.display_2');
const displayTop = document.querySelector('.display');
const inputs = [];

const showInnerTextToUI = function(e){
	if(displayBottom.textContent){
		displayBottom.textContent = '';
		displayBottom.textContent = displayBottom.textContent+e.target.classList.value;
	}else{
		displayBottom.textContent = displayBottom.textContent+e.target.classList.value;
	}
	// return displayBottom.textContent+e.target.classList.value;
}
const solution = function(operator){
				const top = +displayTop.textContent;
				// console.log(top);
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
				// console.log(top,bottom);
				result = +result;
				// console.log(typeof result ,result);
				displayBottom.textContent = result.toFixed(2);
				displayTop.textContent='';
				displayMiddle.textContent='';
			}
const solutionExtention = function(operator,secondOperator){
	const top = +displayTop.textContent;
	// console.log(top);
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
	// console.log(top,bottom);
	result = +result;
	// console.log(typeof result ,result);
	displayBottom.textContent = '';
	displayTop.textContent=result.toFixed(2);
	displayMiddle.textContent=secondOperator;
}
container.addEventListener('click',function(e){
	// console.log(e.target.classList.value);
	if(e.target.classList.value == '0' || e.target.classList.value == '1' || e.target.classList.value == '2' || e.target.classList.value == '3' ||e.target.classList.value == '4' || e.target.classList.value == '5' || e.target.classList.value == '6' || e.target.classList.value == '7' || e.target.classList.value == '8' || e.target.classList.value == '9' || e.target.classList.value == '.' ){

		showInnerTextToUI(e);	
	}
	if ( e.target.classList.value == '+' || e.target.classList.value == '-' || e.target.classList.value == '*' || e.target.classList.value == '/') {
		if(displayTop.textContent){
			const secondOperator =e.target.classList.value;
			// console.log(displayMiddle.textContent);
			if (displayMiddle.textContent == '+') {
				solutionExtention('add',secondOperator);
			}else if (displayMiddle.textContent == '-') {
				solutionExtention('sub',secondOperator);
			}else if (displayMiddle.textContent == '*') {
				solutionExtention('mul',secondOperator);
			}else if (displayMiddle.textContent == '/') {
				solutionExtention('div',secondOperator);
			}
			
			

		}else{
			displayTop.textContent = displayBottom.textContent;
			displayBottom.textContent= '';
			displayMiddle.textContent= e.target.classList.value;
		}
		
		// inputs.push(showInnerTextToUI(e));
	}if(e.target.classList.value == '='){
		
		// console.log(bottom);
		if(displayMiddle.textContent == '+'){
			solution('add');
		}else if(displayMiddle.textContent == '-'){
			solution('sub');
		}else if(displayMiddle.textContent == '*'){
			solution('mul');
		}else if(displayMiddle.textContent == '/'){
			solution('div');
		}
		
	}if(e.target.classList.value == 'c'){
		displayBottom.textContent ='';
		displayTop.textContent='';
		displayMiddle.textContent='';
	}
	if(e.target.classList.value == 'x'){
		displayBottom.textContent ='';
		
	}
	
})