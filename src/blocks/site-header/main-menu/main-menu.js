jQuery(document).ready(function() {
	jQuery('.hamburger').click(function() {
		jQuery('.main-menu').slideToggle(300);

		jQuery(this).toggleClass(' is-active');
	})

	jQuery(window).resize(function() {		
		if (jQuery(window).width() > 768 ) {			
			jQuery('.main-menu').removeAttr('style');
		}
	});
})