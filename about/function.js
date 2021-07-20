const menuButton_home = document.getElementById('home');
const menuButton_about = document.getElementById('about');
const menuButton_games = document.getElementById('games');
const menuButton_contact = document.getElementById('contact');

const iconButton = document.getElementById('icon_home');

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

member1.addEventListener("mouseover", function(){
	member1_info.style.display = "block";
});

member1.addEventListener("mouseleave", function(){
	member1_info.style.display = "none";
});

member2.addEventListener("mouseover", function(){
	member2_info.style.display = "block";
});

member2.addEventListener("mouseleave", function(){
	member2_info.style.display = "none";
});

member3.addEventListener("mouseover", function(){
	member3_info.style.display = "block";
});

member3.addEventListener("mouseleave", function(){
	member3_info.style.display = "none";
});

