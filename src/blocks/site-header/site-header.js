jQuery(document).ready(function() {
	var $this = jQuery(this),
		 	st = $this.scrollTop();

	if( st > 5 ){
		jQuery('.site-header').addClass('site-header_scrolled');
	}else{
		jQuery('.site-header').removeClass('site-header_scrolled');
	}
		
	jQuery(window).scroll(function(){
		var $this = jQuery(this),
			 	st = $this.scrollTop();

		if( st > 5 ){
			jQuery('.site-header').addClass('site-header_scrolled');
		}else{
			jQuery('.site-header').removeClass('site-header_scrolled');
		}
	});	
})