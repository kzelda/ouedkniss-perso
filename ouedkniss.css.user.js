// ==UserScript==
// @name        ouedkniss-css
// @namespace   ouedkniss
// @description Affichage css personalisé de ouedkniss.com
// @include     http://www.ouedkniss.com/*
// @include     https://www.ouedkniss.com/*
// @version     22.12.16
// @grant       none
// ==/UserScript==


(function(){



function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
    args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate)
        func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow)
      func.apply(context, args);
  };
};

var style = document.createElement("style");

style.textContent = `
#app .v-application--wrap > header {
  position: fixed !important;
  width: 100%;
  background-color: #2e3031 !important;
  border-bottom: solid 1px #2e3031;
}

.v-toolbar__content {
    background-color: #2e3031 !important;
}

.v-toolbar__items button, .v-btn--outlined .v-btn__content .v-icon, .v-btn--round .v-btn__content .v-icon {
    color: #eee !important;
}

.v-toolbar .v-input {
    background-color: #eee;
}
`;

document.body.appendChild(style);

window.addEventListener("scroll", debounce(function () {

    setTimeout(() => {
      document.querySelector("header").attributes.style.value = "height: 56px; margin-top: 0px;left: 0px; right: 0px;";
    }, 50)
  }, 200));

var remove_frames = function () {
	var tt = document.getElementsByTagName("iframe");
	for (var i = 0; i < tt.length; i++)
		if (tt[i].src.toString().indexOf("//www.ouedkniss.com/chat/chatbox.php") == -1)
			tt[i].remove();
}

remove_frames();
	
setInterval(remove_frames, 1000);

})()
