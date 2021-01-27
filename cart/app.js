const subLabel = document.getElementById('sub');
const taxLabel = document.getElementById('tax');
const totalLabel = document.getElementById('total');

const cardParent = document.querySelector('.card__area');

const plus = document.querySelector('.fa-plus');
const minus = document.querySelector('.fa-minus');
const del = document.querySelector('.fa-trash');

const cardOne = document.querySelector('.card-1');
const cardTwo = document.querySelector('.card-2');
const cardTitle = document.querySelector('.card-title');
const checkout = document.querySelector('.checkout');

const addOne = function(container,temp){
		// console.log('added');
		// console.log(e.classList)
		// console.log(container);
		if(!container) return;
		const quaLabel = document.querySelector(`.${container} .quantity`);
		const priceLabel = document.querySelector(`.${container} .price span`);
		let value = +quaLabel.textContent;
		price = +priceLabel.textContent;
		
		
		value++;
		quaLabel.textContent = value;
		// console.log(price);
		price = temp * value ;
		// console.log(price);
		priceLabel.textContent = price;
		// console.log(value);
		// console.log(quaLabel);
		const sub = +subLabel.textContent;
		// console.log(sub);
		subLabel.textContent=sub+temp;
		const totalLab = +totalLabel.textContent;
		// console.log(sub);
		totalLabel.textContent=totalLab+temp;
		// console.log(temp);
		// console.log(sub);
	}
	const subOne = function(container,temp){
		// console.log('added');
		// console.log(e.classList)
		// console.log(container);
		if(!container) return;
		const quaLabel = document.querySelector(`.${container} .quantity`);
		const priceLabel = document.querySelector(`.${container} .price span`);
		let value = +quaLabel.textContent;
		price = +priceLabel.textContent;
		
		
		value--;
		if(value<0) return;
		quaLabel.textContent = value;
		// console.log(price);
		price = temp * value ;
		// console.log(price);
		priceLabel.textContent = price;
		// console.log(value);
		// console.log(quaLabel);
		const sub = +subLabel.textContent;
		// console.log(sub);
		subLabel.textContent=sub-temp;
		const totalLab = +totalLabel.textContent;
		// console.log(sub);
		totalLabel.textContent=totalLab-temp;
		// console.log(temp);
		// console.log(sub);
	}
	const cardTwoEsn = function(e){
		const container = e.originalTarget.parentElement.parentElement.classList.contains('card-2') && 'card-2';
			// console.log(container);

			let value;
			let price;
			let temp = 12;
			addOne(container,temp);
	}

cardParent.addEventListener('click',function(e){
	// console.log(e);
	// console.log(e.target);

	// console.log(e.target.closest('.card-1'));
	if(e.target.closest('.card-1')){
		// console.log(e.target);
		// console.log('care1');
		// console.log(e.target.classList.contains('fa-minus'));
		if(e.target.classList.contains('fa-plus')){
			// console.log(e.originalTarget.parentElement.parentElement);
			const container = e.originalTarget.parentElement.parentElement.classList.contains('card-1') && 'card-1';
			// console.log(container);

			let value;
			let price;
			let temp = 120;
			addOne(container,temp);
			// subOne(container,temp);
		}
		if(e.target.classList.contains('fa-minus')){
			const container = e.originalTarget.parentElement.parentElement.classList.contains('card-1') && 'card-1';
			// console.log(container);

			let value;
			let price;
			let temp = 120;
			// addOne(container,temp);
			subOne(container,temp);
		}if(e.target.classList.contains('fa-trash')){

			const container = e.originalTarget.parentElement.parentElement.classList.contains('card-1') && 'card-1';
			const priceLabel = document.querySelector(`.${container} .price span`);
			subLabel.textContent = subLabel.textContent - priceLabel.textContent;
			totalLabel.textContent = totalLabel.textContent - priceLabel.textContent;
			document.querySelector(`.${container}`).setAttribute('style', 'display:none !important');
			// console.log('dkds')
			// container.style.display = 'none';
		}
	}else if(e.target.closest('.card-2')){
		if(e.target.classList.contains('fa-plus')){
			// console.log(e.originalTarget.parentElement.parentElement);
			cardTwoEsn(e);
			
			// subOne(container,temp);
		}
		if(e.target.classList.contains('fa-minus')){
			const container = e.originalTarget.parentElement.parentElement.classList.contains('card-2') && 'card-2';
			// console.log(container);

			let value;
			let price;
			let temp = 12;
			// addOne(container,temp);
			subOne(container,temp);
		}if(e.target.classList.contains('fa-trash')){
			const container = e.originalTarget.parentElement.parentElement.classList.contains('card-2') && 'card-2';
			document.querySelector(`.${container}`).setAttribute('style', 'display:none !important');
			const priceLabel = document.querySelector(`.${container} .price span`);
			subLabel.textContent = subLabel.textContent - priceLabel.textContent;
			totalLabel.textContent = totalLabel.textContent - priceLabel.textContent;
			// console.log('dkds')
			// container.style.display = 'none';
		}
	}
})