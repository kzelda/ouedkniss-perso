// ==UserScript==
// @name        ouedkniss-lazy-loading
// @namespace   ouedkniss
// @description Lazy Loading Pager of ouedkniss.com
// @include     http://www.ouedkniss.com/*
// @include     https://www.ouedkniss.com/*
// @updateURL https://raw.githubusercontent.com/kzelda/ouedkniss-perso/master/ouedkniss.lazyloading.user.js
// @version     1.1
// @grant       none
// ==/UserScript==

//---------------- Pager Auto Suivant ----------------------------------

var show_loader = function () {
	console.log("Show_loader");
	if ($("#img_loader").length == 0)
		$("body").append("<img style='z-index: 9999;position: fixed;bottom: 0;' id='img_loader' src='https://i1.wp.com/cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif' />");
	else	{
		$("#img_loader").show();
		
	}
}

var hide_loader = function () {
	$("#img_loader").hide();
}

var remove_loader = function () {
	$("#img_loader").remove();
}

var isVisible_loader = function () {
	return ($("#img_loader:visible").length > 0);
}

var init_oued_pager = function () {
	

	$("body").append("<img style='display : none;z-index: 9999;position: fixed;bottom: 0;' id='img_loader' style='display:none;' src='https://i1.wp.com/cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif' />");	

	$("#divPages a").unbind("click");
	$("#divPages a").click(function () {

		show_loader();
		$.get($(this).attr("href") , function (data) {
			var $data = $(data);
			$data.find("script").remove();
			$("#divPages").remove();
			$("#resultat").append($data.find("#resultat").html());
			remove_loader();
			init_oued_pager();
		});

		return false;
	});

}

if(typeof(init_oued_pager_call) === "undefined"){
	init_oued_pager_call = true;
	init_oued_pager();
}


$(window).unbind("scroll");

$(window).scroll(function (a, b) {

	var diff = Math.abs($("#divPages").offset().top - $(document).scrollTop());
	if (diff < 1000){
			if(!isVisible_loader()){
				show_loader();
				console.log("Suivant => " + Math.random());
				$("a:contains(Suivant)").click();
			}
		}
});

//---------------- End  Pager Auto Suivant  ----------------------------------
