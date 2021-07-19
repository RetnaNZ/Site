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