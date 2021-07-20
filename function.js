const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');



const iconButton = document.getElementById('icon_home');

const emailInput = document.getElementById('email_input');

iconButton.onclick = function() {
	location.href = "index.html";
}

menuButton_home.onclick = function() {
	location.href = "index.html";
}

menuButton_about.onclick = function() {
	location.href = "./about/aboutindex.html";
}

menuButton_games.onclick = function() {
	location.href = "./games/gamesindex.html";
}

menuButton_contact.onclick = function() {
	location.href = "./contact/contactindex.html";
}

function EmailInput(){
	emailInput.value = null;
}

function EmailSubmit(){
	debug.log(emailInput.value);
}

function Game_1(){
	location.href = "./games/gamesindex.html";
	
}

function Game_2(){
	location.href = "./games/gamesindex.html";
}

function Game_3(){
	location.href = "./games/gamesindex.html";
}

function Game_4(){
	location.href = "./games/gamesindex.html";
}

function youtube(){
	location.href="https://www.youtube.com/channel/UC3DlwulmKD2_5hSQW-8BZpQ";
}

function twitter(){
	location.href="https://twitter.com/retnastudios"
}

function instagram(){
	location.href="https://www.instagram.com/retnastudios/"
}

function artstation(){
	location.href="https://www.artstation.com/retnastudios"
}