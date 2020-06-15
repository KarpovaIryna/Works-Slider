"use strict";
 const slider = $('.ba-slick');
 slider.slick({
	infinite: true,
	slide:'.ba-slick__slide',
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow: '.ba-slick__prev',
	nextArrow: '.ba-slick__next',
	centerMode: true,
	centerPadding: '100px',
	responsive: [
		{
		  breakpoint: 1025,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 1,
			 infinite: true,
			 centerPadding: '40px',
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
			 slidesToShow: 2,
			 slidesToScroll: 2,
			 centerPadding: '20px',
			 arrows: false,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			 slidesToShow: 1,
			 slidesToScroll: 1,
			 centerPadding: '10px',
			 arrows: false,
		  }
		}
	 ]
 });

