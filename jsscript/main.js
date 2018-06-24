

var mybutton = document.querySelector('button');

var myHeading =  document.querySelector('h1');


function setUserName(){

	var myName = prompt('please input your welcome word');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'welcome to come here' +'__'+myName;
}

if(!localStorage.getItem('name')){

	setUserName();
} else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'welcome to come here' +storedName;
}

mybutton.onclick = function(){

	setUserName();
}