// ==UserScript==
// @name        ouedkniss-css
// @namespace   ouedkniss
// @description Affichage css personalisé de ouedkniss.com
// @include     http://www.ouedkniss.com/*
// @include     https://www.ouedkniss.com/*
// @version     1.0.0.1
// @grant       none
// ==/UserScript==


(function(){

if (window.location.href.indexOf('/membre/') > -1) return;

var body = document.querySelector("body");
var menu = document.getElementById("menu");
var find = (selector) => document.querySelectorAll(selector);

var add_style = function () {

	// create custom css style
	var mystyle = document.createElement("style");
	mystyle.id = "mystyle";
	body.append(mystyle);
	body.append(menu);

	mystyle.innerText = `

	#banner {
	 display: none
	}

	.body_banner {
	  padding-top: 0!important;
	}

	#header {
	  display:none
	}

	#topbar {
	  display: none
	}

	#HTML {
	  padding-top: ${menu.offsetHeight}px!important;
	}

	#menu {
	  position:fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	}

	#page_interstitiel{
		display:none!important;
		z-index:-999;
	}
	
	#page_left {
		padding-left: 0!important;
		padding-right: 0!important;
	}

	`;
}

var remove_right = function () {
	find("#page_right").forEach(e => e.remove());
}

var remove_frames = function () {
	var tt = document.getElementsByTagName("iframe");
	for (var i = 0; i < tt.length; i++)
		if (tt[i].src.toString().indexOf("//www.ouedkniss.com/chat/chatbox.php") == -1)
			tt[i].remove();
}

remove_frames();

add_style();

remove_right();

setInterval(remove_frames, 1000);

})()
