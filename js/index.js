$(document).ready(function () {
    $('div.hidden').fadeIn(2000);
});
$(document).ready(function() {
	$(window).scroll( function(){
	    $('.fade-in').each( function(i){
	        let bottom_of_object = $(this).position().top + $(this).outerHeight()/3;
	        let bottom_of_window = $(window).scrollTop() + $(window).height();
	        if( bottom_of_window > bottom_of_object ){
	            $(this).animate({'opacity':'1'},500);
	        }    
	    }); 
	}); 
});