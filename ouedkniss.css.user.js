// ==UserScript==
// @name        ouedkniss-css
// @namespace   ouedkniss
// @description Affichage css personalisé de ouedkniss.com
// @include     http://www.ouedkniss.com/*
// @include     https://www.ouedkniss.com/*
// @version     1
// @grant       none
// ==/UserScript==


if(window.location.href.indexOf('/membre/') == -1)
{
try{ document.getElementById("page_left").style.paddingRight = "0px"; }catch(e){}
  
$(".bouton_details , .annonce_left a").attr("target","_blank");

try{document.querySelector("#page_right").remove();}catch(e){}

$('#page_top').remove();
//$('#page_annonces_top').remove();
$('#page').css({
  'width': '100%'
});
$('#menu').css({
  'position': 'fixed',
  'top': 0,
  'left': 0,
  'z-index': 999999,
  'width': '100%',
  'padding-right': '20px'
});
$('#page_contenu').css({
  padding: '20px',
  width: '100%'
});
$('#page_middle').css({
  width: '100%'
});
$('#footer').remove();
$('#menu_contenu').css({
  width: '100%'
});
$('#menu_sousmenu_annonces_categories').css({
  display: 'none'
});

if (document.location.href == 'http://www.ouedkniss.com/') // si page == http://www.ouedkniss.com/
$('#menu_annonces_a').click(function () {
  if ($('#menu_sousmenu_annonces_categories').css('display') == 'none')
  $('#menu_sousmenu_annonces_categories').css('display', 'block');
   else
  $('#menu_sousmenu_annonces_categories').css('display', 'none');
});

var removeIrames = function(){
	var tt = document.getElementsByTagName("iframe");
	for(var i=0;i<tt.length;i++) 
		if(tt[i].src.toString().indexOf("//www.ouedkniss.com/chat/chatbox.php") == -1) tt[i].remove();	
}

removeIrames();

setInterval(removeIrames, 1000);
  
}
