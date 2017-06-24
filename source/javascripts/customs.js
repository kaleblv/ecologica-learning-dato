
jQuery(function() {

	"use strict";



		/**
		 * introLoader - Preloader
		 */
		$("#introLoader").introLoader({

			animation: { name: 'gifLoader',
				options: {
					ease: "easeInOutCirc",
					style: 'dark bubble',
					delayBefore: 100,
					delayAfter: 0,
					exitTime: 300,
					onAfter: function(){

						var placeholderText = [
							"What do you want to study?",
							"Business?",
							"Computer & IT?",
							"Science?",
							"Design?",
							"Photography?",
							"Writing?"
						];

					},
				},

			}
		});



		/**
		 * Sticky Header
		 */
		$(".container-wrapper").waypoint(function() {
			$(".navbar").toggleClass("navbar-sticky-function");
			$(".navbar").toggleClass("navbar-sticky");
			return false;
		}, { offset: "-20px" });



		/**
		 * Main Menu Slide Down Effect
		 */

		// Mouse-enter dropdown
		$('#navbar li').on("mouseenter", function() {
				$(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
		});

		// Mouse-leave dropdown
		$('#navbar li').on("mouseleave", function() {
				$(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
		});



		/**
		 * Slicknav - a Mobile Menu
		 */
		var $slicknav_label;
		$('#responsive-menu').slicknav({
			duration: 300,
			easingOpen: 'easeInExpo',
			easingClose: 'easeOutExpo',
			closedSymbol: '<i class="fa fa-plus"></i>',
			openedSymbol: '<i class="fa fa-minus"></i>',
			prependTo: '#slicknav-mobile',
			allowParentLinks: true,
			label:""
		});



		/**
		 * Smooth scroll to anchor
		 */
		$('a.anchor[href*=#]:not([href=#])').on("click",function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: (target.offset().top - 70)
					}, 1000);
					return false;
				}
			}
		});



		/**
		 * Back To Top
		 */
		$(window).scroll(function(){
			if($(window).scrollTop() > 500){
				$("#back-to-top").fadeIn(200);
			} else{
				$("#back-to-top").fadeOut(200);
			}
		});
		$('#back-to-top').on("click",function() {
				$('html, body').animate({ scrollTop:0 }, '800');
				return false;
		});



		/**
		 * Effect to Bootstrap Dropdown
		 */
		$('.bt-dropdown-click').on('show.bs.dropdown', function(e) {
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown(500, 'easeInOutQuad');
		});
		$('.bt-dropdown-click').on('hide.bs.dropdown', function(e) {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp(250, 'easeInOutQuad');
		});



		/**
		 * Icon Change on Collapse
		 */
		$('.collapse.in').prev('.panel-heading').addClass('active');
		$('.bootstarp-accordion, .bootstarp-toggle').on('show.bs.collapse', function(a) {
			$(a.target).prev('.panel-heading').addClass('active');
		})
		.on('hide.bs.collapse', function(a) {
			$(a.target).prev('.panel-heading').removeClass('active');
		});



		/**
		 * Another Bootstrap Toggle
		 */
		$('.another-toggle').each(function(){
			if( $('h4',this).hasClass('active') ){
				$(this).find('.another-toggle-content').show();
			}
		});
		$('.another-toggle h4').on("click",function() {
			if( $(this).hasClass('active') ){
				$(this).removeClass('active');
				$(this).next('.another-toggle-content').slideUp();
			} else {
				$(this).addClass('active');
				$(this).next('.another-toggle-content').slideDown();
			}
		});



		/**
		 *  Arrow for Menu has sub-menu
		 */
		if ($(window).width() > 992) {
			$(".navbar-arrow > ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-down'></i>");
		}

		if ($(window).width() > 992) {
			$(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
		}



		/**
		 *  Bootstrap Tooltip
		 */
		$('[data-toggle="tooltip"]').tooltip()




		/**
		 * Show more-less button
		 */
		$('.btn-more-less').on("click",function(){
			$(this).text(function(i,old){
				return old=='Show more' ?  'Show less' : 'Show more';
			});
		});


		/**
		 * Payment Method
		 */

		$("div.payment-option-form").hide();

		$("input[name$='payments']").on("click",function() {
				var test = $(this).val();
				$("div.payment-option-form").hide();
				$("#" + test).show();
		});


});
