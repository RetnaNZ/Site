const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');
const menuButton_news = document.getElementById('news');

const iconButton = document.getElementById('icon_home');

const team_panels = document.getElementById('the_team_panels');

const member1 = document.getElementById('member_1');
const member2 = document.getElementById('member_2');
const member3 = document.getElementById('member_3');

const member1_info = document.getElementById('member1_info');
const member2_info = document.getElementById('member2_info');
const member3_info = document.getElementById('member3_info');


iconButton.onclick = function() {
	location.href = "../index.html";
}

menuButton_home.onclick = function() {
	location.href = "../index.html";
}

menuButton_about.onclick = function() {
	location.href = "./aboutindex.html";
}

menuButton_games.onclick = function() {
	location.href = "../games/gamesindex.html";
}

menuButton_contact.onclick = function() {
	location.href = "../contact/contactindex.html";
}

menuButton_news.onclick = function() {
	location.href = "../news/newsindex.html";
}

member1.addEventListener("click", function(){
	member1_info.style.display = "block";
	member1_info.style.width= "100%";
});

member1.addEventListener("mouseleave", function(){
	member1_info.style.width= "0%";
	member1_info.style.display = "none";
});

member2.addEventListener("click", function(){
	member2_info.style.display = "block";
	member2_info.style.width= "100%";
});

member2.addEventListener("mouseleave", function(){
	member2_info.style.width= "0%";
	member2_info.style.display = "none";
});

member3.addEventListener("click", function(){
	member3_info.style.display = "block";
	member3_info.style.width= "100%";
});

member3.addEventListener("mouseleave", function(){
	member3_info.style.width= "0%";
	member3_info.style.display = "none";

});

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
	window.open('https://www.instagram.com/retnastudios/', '_blank');
}