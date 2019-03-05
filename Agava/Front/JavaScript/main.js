var build4 = document.querySelector("#build4");
var window4 = document.querySelector("#wind4");
var window6 = document.querySelector("#wind6");
var window2 = document.querySelector("#wind2");
var build2 = document.querySelector("#build2");
var lines = document.querySelector("#lines");
var Weird = document.querySelector("#Weird");
var allwind = document.querySelector("#allwind");
var microwave = document.querySelector("#microwave");
var right = document.querySelector(".right2");
var left = document.querySelectorAll(".left");
var spinner = document.querySelector(".spinner-border");
var Enter = document.querySelector("#Enter");
var header = document.querySelector("#blah");
var main = document.querySelector("#blah2");
var footer = document.querySelector("#blah3");

for (var i = 0; i < left.length; i++) {
	left[i].addEventListener("click", function () {
		build4.src = "../../Source/org4buildings.png";
		window4.src = "../../Source/org4windows.png";
		window6.src = "../../Source/org6windows.png";
		build2.src = "../../Source/org2buildings.png";
		lines.src = "../../Source/orglines.png";
		Weird.src = "../../Source/orgWeird.png";
		allwind.src = "../../Source/orgallwindows.png";
		microwave.src = "../../Source/orgmicrowawe.png";
		window2.src = "../../Source/org2windows.png";
	});
}

build4.addEventListener("click", function() {
	this.src = "../../Source/4buildings.png";
	right.style.backgroundImage = "url(../../Source/Ohokay.png)";
});
window4.addEventListener("click", function() {
	this.src = "../../Source/4windows.png";
	right.style.backgroundImage = "url(../../Source/Uniqueanddedicated.png)";
});
window6.addEventListener("click", function() {
	this.src = "../../Source/6windows.png";
	right.style.backgroundImage = "url(../../Source/creativepartner.png";
});
window2.addEventListener("click", function() {
	this.src = "../../Source/2windows.png";
	right.style.backgroundImage = "url(../../Source/Solaris.png)";
});
build2.addEventListener("click", function() {
	this.src = "../../Source/2buildings.png";
	right.style.backgroundImage = "url(../../Source/portfolio.png)";
});
lines.addEventListener("click", function() {
	this.src = "../../Source/line.png";
	right.style.backgroundImage = "url(../../Source/branding.png)";
});
Weird.addEventListener("click", function() {
	this.src = "../../Source/Weird.png";
	right.style.backgroundImage = "url(../../Source/card.png)";
});
allwind.addEventListener("click", function() {
	this.src = "../../Source/allwindows.png";
	right.style.backgroundImage = "url(../../Source/alot.png)";
});
microwave.addEventListener("click", function() {
	this.src = "../../Source/microwawe.png";
	right.style.backgroundImage = "url(../../Source/Lemons.jpg)";
});
Enter.addEventListener("click", function() {
	header.style.display = "block";
	main.style.display = "block";
	footer.style.display = "block";
	spinner.style.display = "none";
	this.style.display = "none";
});