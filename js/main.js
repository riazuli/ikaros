(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

		//Sponsor Carousel
		$('.sponsor-carousel').owlCarousel({
			margin:5,
			loop:true,
			lazyLoad:true,
			autoplay:true,
			responsive:{
				0:{
					items:3
				},
				600:{
					items:5
				},
				1000:{
					items:6
				}
			}
		})
		
		//For Mobile Nav Menu
        $('#menu').slicknav({
			label: 'Menu',
			duration: 1000,
			easingOpen: "easeOutBounce",
		});


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	