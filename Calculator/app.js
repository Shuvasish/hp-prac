const container = document.querySelector('.center');
const displayBottom = document.querySelector('.display_3');
const displayMiddle = document.querySelector('.display_2');
const displayTop = document.querySelector('.display');
const inputs = [];

const showInnerTextToUI = function(e){
	displayBottom.textContent = displayBottom.textContent+e.target.classList.value;
	// return displayBottom.textContent+e.target.classList.value;
}

container.addEventListener('click',function(e){
	// console.log(e.target.classList.value);
	if(e.target.classList.value == '0' || e.target.classList.value == '1' || e.target.classList.value == '2' || e.target.classList.value == '3' ||e.target.classList.value == '4' || e.target.classList.value == '5' || e.target.classList.value == '6' || e.target.classList.value == '7' || e.target.classList.value == '8' || e.target.classList.value == '9' || e.target.classList.value == '.' ){

		showInnerTextToUI(e);	
	}
	if ( e.target.classList.value == '+' || e.target.classList.value == '-' || e.target.classList.value == '*' || e.target.classList.value == '/') {
		displayTop.textContent = displayBottom.textContent;
		displayBottom.textContent= '';
		displayMiddle.textContent= e.target.classList.value;
		// inputs.push(showInnerTextToUI(e));
	}if(e.target.classList.value == '='){
		const top = +displayTop.textContent;
		// console.log(top);
		const bottom = +displayBottom.textContent;
		// console.log(bottom);
		if(displayMiddle.textContent == '+'){
			const result = top + bottom;
			displayBottom.textContent = result.toFixed(2);
			displayTop.textContent='';
			displayMiddle.textContent='';
		}else if(displayMiddle.textContent == '-'){
			const result = top - bottom;
			displayBottom.textContent = result.toFixed(2);
			displayTop.textContent='';
			displayMiddle.textContent='';
		}else if(displayMiddle.textContent == '*'){
			const result = top * bottom;
			displayBottom.textContent = result.toFixed(2);
			displayTop.textContent='';
			displayMiddle.textContent='';
		}else if(displayMiddle.textContent == '/'){
			const result = top / bottom;
			displayBottom.textContent = result.toFixed(2);
			displayTop.textContent='';
			displayMiddle.textContent='';
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