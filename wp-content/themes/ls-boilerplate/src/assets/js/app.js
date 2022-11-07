import $ from 'jquery';
import 'what-input';

window.$ = window.jQuery = $;

// require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';

require('./lib/jquery.fitVids.js');
require('./lib/jquery.matchHeight.js');
// require('./lib/jquery.slick.js');

$(document).ready(function() {

	$(document).foundation();

	$('body').fitVids({
		customSelector: 'iframe[src*="facebook"], iframe[src^="https://livestream.com"]'
	});

	$('nav.main-nav .menu-item-has-children>a, .off-canvas-navigation .menu-item-has-children>a').attr('aria-expanded', "false");

	$('nav.main-nav .menu-item-has-children>a, .off-canvas-navigation .menu-item-has-children>a').click(function(event) {
		event.stopPropagation();
		event.preventDefault();
		if ($(this).parent().hasClass('open')) {
			$('.open .sub-menu').slideUp('fast',
				function() {
				$('.open>a').attr('aria-expanded', "false");
			    $('.open').removeClass('open');
			});
		} else {
			$('.open .sub-menu').hide();
			$('.open').removeClass('open');
			$(this).parent().addClass('open');
			$(this).parent().find('.sub-menu').slideDown('fast');
			$(this).attr('aria-expanded', "true");
		}
	});

	// EXPANDABLE CONTENT
	$('.expandable-content .expand-question').click(function(event) {
		event.stopPropagation();
		event.preventDefault();
		if ($(this).hasClass('expand-open')) {
			$(this).parent().find('.expand-answer').slideUp(200);
			$(this).removeClass('expand-open');
		} else {
			$(this).parent().find('.expand-answer').slideDown(200);
			$(this).addClass('expand-open');
		}
	});

	// STICKY HEADER
	$(window).scroll(function(){
		var sticky = $('.sticky-nav'),
			scroll = $(window).scrollTop();
		if (scroll >= 100) sticky.addClass('scroll');
		else sticky.removeClass('scroll');
	});

	$('.alert-bar .close-button').click( function(){
        $(this).parent().slideUp('fast');
    });

});