document.addEventListener("DOMContentLoaded", function () {
	// lazy load
	setTimeout(function () {
		$(".js-bg").each(function () {
			$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
		});
		$(".js-img").each(function () {
			$(this).attr('src', $(this).data("src"));
		});
	}, 200);
	// loader
	setTimeout(function () {
		$('body').removeClass('loaded');
	}, 400);
});

/* viewport width */
function viewport() {
	var e = window,
		a = 'inner';
	if (!('innerWidth' in window)) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width: e[a + 'Width'], height: e[a + 'Height'] }
};
/* viewport width */


// Tilt js
if ($('.js-tilt').length) {
	var tilt = $('.js-tilt').tilt({
		maxTilt: 20,
		perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
		easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
		scale: 1.05,      // 2 = 200%, 1.5 = 150%, etc..
		speed: 300,    // Speed of the enter/exit transition.
		transition: true,   // Set a transition on enter/exit.
		disableAxis: null,   // What axis should be disabled. Can be X or Y.
		reset: true,   // If the tilt effect has to be reset on exit.
		glare: true,  // Enables glare effect
		maxGlare: .5       // From 0 - 1.
	});
	tilt.on('tilt.mouseLeave', tiltOut); // parameters: event
	tilt.on('tilt.mouseEnter', tiltFocus); // parameters: event
	function tiltFocus() {
		$(this).css('zIndex', '1');
	}
	function tiltOut() {
		$(this).css('zIndex', 'auto');
	}
}



(function () {

	/* components */

	// accordeon
	// $(".accordeon .accordeon-hide:not(.active)").hide();
	// $(".accordeon .accordeon-hide").prev().click(function (e) {
	// 	e.preventDefault();
	// 	$(this).parents(".accordeon").find(".accordeon-hide").not(this).slideUp().prev().removeClass("active").parent().removeClass("active");
	// 	$(this).next().not(":visible").slideDown().prev().addClass("active").parent().addClass("active");
	// });

	// parallax
	if ($('#scene').length) {
		var scene = document.getElementById('scene');
		var parallaxInstance = new Parallax(scene, {
			relativeInput: false
		});
	}
	if ($('.js-rellax').length) {
		var rellax = new Rellax('.js-rellax');
	}

	if($('.wow').length) {
		new WOW().init();
	}
	/*
		if ($('.js-styled').length) {
		$('.js-styled').styler();
	};

	if ($('[data-fancybox]').length) {
		$('[data-fancybox]').fancybox();
	}

	//slick slider
	if ($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: false,
			arrows: true,
			infinite: false,
			speed: 300,
			fade: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1
		});
	};

	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

	/* components */

}());

var handler = function () {
	var viewport_wid = viewport().width;
	var viewport_height = viewport().height;

	if (viewport_wid < 768) {
		// Destroy instance
		tilt.tilt.destroy.call(tilt);
	} else {
		// Reset instance
		tilt.tilt.reset.call(tilt);
	}
}

$(window).bind('load', handler);
$(window).bind('resize', handler);