const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');
const menuButton_news = document.getElementById('news');

const bashful = document.getElementById('Bashful');



const iconButton = document.getElementById('icon_home');

const emailInput = document.getElementById('email_input');

iconButton.onclick = function() {
	location.href = "https://www.retna.co.nz";
}

menuButton_home.onclick = function() {
	location.href = "https://www.retna.co.nz";
}

menuButton_about.onclick = function() {
	location.href = "./about/";
}

menuButton_games.onclick = function() {
	location.href = "./games/";
}

menuButton_contact.onclick = function() {
	location.href = "./contact/";
}

menuButton_news.onclick = function() {
	location.href = "./news/";
}

function EmailInput(){
	emailInput.value = null;
}

function EmailSubmit(){
	debug.log(emailInput.value);
}

function Game_1(){
	location.href = "./games/";
	
}

function Game_2(){
	location.href = "./games/";
}

function Game_3(){
	location.href = "./games/";
}

function Game_4(){
	location.href = "./games/";
}

function BlogPost(){
	location.href = "./news/";
}

function youtube(){
	window.open('https://www.youtube.com/channel/UC3DlwulmKD2_5hSQW-8BZpQ', '_blank');
}

function twitter(){
	window.open('https://twitter.com/retnastudios', '_blank');
}

function instagram(){
	window.open('https://www.instagram.com/retnastudios', '_blank');
}

function artstation(){
	window.open('https://www.artstation.com/retnastudios', '_blank');
}