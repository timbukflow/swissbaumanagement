$(document).ready(function () {
    
    setTimeout(function(){$('#loader').fadeOut(800)},800);
    
    
    // Navigation //
    
    $('#navburger').click(function(){
        $('.nav').stop(true).fadeToggle(500);
		$('.navburgeron').stop(true).toggleClass('navshow');
        $('.nav ul').stop(true).toggleClass('in');
	});

    // Fadin inview //
    
    $(window).scroll(function() {
        $('.inview').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('inview-fade');
            } else {
                $(this).removeClass('inview-fade');
            }
        }); 
    }).scroll();
    
    $(window).scroll(function() {
        $('.inviewr').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('inviewr-fade');
            } else {
                $(this).removeClass('inviewr-fade');
            }
        }); 
    }).scroll();
    
    $(window).scroll(function() {
        $('.inviewb').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('inviewb-fade');
            } else {
                $(this).removeClass('inviewb-fade');
            }
        }); 
    }).scroll();
    
    
    // impressum //

    $('.impressum').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).slideToggle(500);
        $(totoggle).next().hide();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000);
        }     
    });
    
});