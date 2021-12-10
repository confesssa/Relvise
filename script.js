function burgerMenu(){
	burger = document.getElementsByClassName('burger__menu')[0]
	headerMenu = document.getElementsByClassName('header__menu')[0]
	burger.classList.toggle('burger__active');
	headerMenu.classList.toggle('header__active');

	secondLine = document.getElementsByClassName('burger__line')[0]
	secondLine.classList.toggle('line__hide');

	bodyLock = document.getElementById('body');
	bodyLock.classList.toggle('body-lock');

	console.log(bodyLock);
}

function burgerOnScroll() {
	const header = document.querySelector('.header__container');
	window.onscroll = () =>{
		if(window.pageYOffset>80){
			header.classList.add('header__container-active');
		}
		else{
			header.classList.remove('header__container-active');
		}
	}
};

Window.onload = burgerOnScroll();
