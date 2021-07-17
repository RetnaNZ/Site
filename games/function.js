const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');

const iconButton = document.getElementById('icon_home');

iconButton.onclick = function() {
	location.href = "../index.html";
}

menuButton_home.onclick = function() {
	location.href = "../index.html";
}

menuButton_about.onclick = function() {
	location.href = "../about/aboutindex.html";
}

menuButton_games.onclick = function() {
	location.href = "./gamesindex.html";
}

menuButton_contact.onclick = function() {
	location.href = "../contact/contactindex.html";
}