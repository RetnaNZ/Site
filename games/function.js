const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');
const menuButton_news = document.getElementById('news');

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

menuButton_news.onclick = function() {
	location.href = "../news/newsindex.html";
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