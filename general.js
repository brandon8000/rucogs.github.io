//Additional Content Switch
function loadAdditionalContent(){
	document.getElementById("forwardButton").style.display = "none";
	document.getElementById("additionalHomePageContent").style.display="initial";
}

// Modal Image Controls
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}

// Change style of navbar on scroll
var theNavbar = document.getElementById("myNavbar");
window.onscroll = function() {navControl(theNavbar)};
function navControl(navbar) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}