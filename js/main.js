"use strict";
 const slider = $('.ba-slick');
 slider.slick({
	infinite: true,
	slide:'.ba-slick__slide',
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '.ba-slick__prev',
	nextArrow: '.ba-slick__next',
	variableWidth: true,
	adaptiveHeight:true,
	responsive: [
		{
			breakpoint: 1640,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			}
		 },
		{
		  breakpoint: 1100,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			 arrows: false,
			 TouchMove: true,
		  }
		},
	 ]
 });
