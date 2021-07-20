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
	location.href = "../games/gamesindex.html";
}

menuButton_contact.onclick = function() {
	location.href = "./contactindex.html";
}

function youtube(){
	location.href="https://www.youtube.com/channel/UC3DlwulmKD2_5hSQW-8BZpQ",
  '_blank';
}

function twitter(){
	location.href="https://twitter.com/retnastudios",
  '_blank';
}

function instagram(){
	location.href="https://www.instagram.com/retnastudios/",
  '_blank';
}

function artstation(){
	location.href="https://www.artstation.com/retnastudios",
  '_blank';
}