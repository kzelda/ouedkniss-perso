// ==UserScript==
// @name        ouedkniss-lazy-loading
// @namespace   ouedkniss
// @description Lazy Loading Pager of ouedkniss.com
// @include     http://www.ouedkniss.com/*
// @include     https://www.ouedkniss.com/*
// @updateURL https://raw.githubusercontent.com/kzelda/ouedkniss-perso/master/ouedkniss.lazyloading.user.js
// @version     1.2
// @grant       none
// ==/UserScript==

//---------------- Pager Auto Suivant ----------------------------------
(
	function () {
	var show_loader = function () {
		console.log("Show_loader");
		if ($("#img_loader").length == 0)
			$("body").append(`<div style='z-index:9999;position:fixed;bottom:0;width:100%;' id='img_loader' ><svg width="64px" height="64px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-dual-ring" style="background: none;"><circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke="#1abb9c" stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(324 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></circle></svg></div>`);
		else {
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

		$("#divPages a").unbind("click");
		$("#divPages a").click(function () {

			show_loader();
			$.get($(this).attr("href"), function (data) {
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

	if (typeof(init_oued_pager_call) === "undefined") {
		init_oued_pager_call = true;
		init_oued_pager();
	}

	$(window).unbind("scroll");

	$(window).scroll(function (a, b) {

		var diff = Math.abs($("#divPages").offset().top - $(document).scrollTop());
		if (diff < 1000) {
			if (!isVisible_loader()) {
				show_loader();
				console.log("Suivant => " + Math.random());
				$("a:contains(Suivant)").click();
			}
		}
	});

})();
