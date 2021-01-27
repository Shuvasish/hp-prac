const logingPage = document.querySelector('.login__page');
const usernameInput = document.querySelector('.username');
const passwordInput = document.querySelector('.password');
const loginBtn = document.querySelector('.login__btn');

const mainPage = document.querySelector('.main__page');
const depositLabel = document.querySelector('.deposit');
const withdrawLabel = document.querySelector('.withdraw');
const balanceLabel = document.querySelector('.balance');
const depositBtn = document.querySelector('.deposit__btn');
const withdrawBtn = document.querySelector('.withdraw__btn');
const depositInput = document.querySelector('.deposit__input');
const withdrawInput = document.querySelector('.withdraw__input');

mainPage.style.display = 'none';

const user = {
	username: 'shuvasish',
	password: '1111',
	balance: 1230,
	deposit: 0,
	withdraw: 0
}
const showBalance = function(){
	depositLabel.textContent = user.deposit;
	withdrawLabel.textContent = user.withdraw;
	balanceLabel.textContent = user.balance;
}
loginBtn.addEventListener('click',function(e){
	e.preventDefault();
	const userInp = usernameInput.value;
	const passInp = passwordInput.value;
	if(userInp && passInp){

		if (user.username === userInp && user.password === passInp) {
			logingPage.style.display = 'none';
			showBalance();
			mainPage.style.display = 'block';
			// console.log('login');
			usernameInput.value ='';
			passwordInput.value ='';
		}else{
			usernameInput.value ='';
			passwordInput.value ='';
			usernameInput.focus();
			// console.log('wrong password');
		}
	}else{
		usernameInput.value ='';
		passwordInput.value ='';
		usernameInput.focus();
	}
	

});

depositBtn.addEventListener('click',function(e){
	e.preventDefault();
	const deposit = +depositInput.value;
	if( typeof deposit === 'number' && deposit>0){
		user.balance+=deposit;
		user.deposit+=deposit;
		showBalance();
		depositInput.value = '';
		// depositInput.focus();
	}
	// console.log(deposit);
});

withdrawBtn.addEventListener('click',function(e){
	e.preventDefault();
	const withdraw = +withdrawInput.value;
	if (typeof withdraw === 'number' && withdraw>0 && withdraw<= user.balance) {
		user.balance-=withdraw;
		user.withdraw+=withdraw;
		showBalance();
		withdrawInput.value = '';
		// withdrawInput.focus();
	}
	// console.log(withdraw);
})





