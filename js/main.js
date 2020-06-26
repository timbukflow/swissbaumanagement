$(document).ready(function () {
    
    setTimeout(function(){$('#loader').fadeOut(800)},800);
    
    $('#navburger').click(function(){
        $('.nav').stop(true).fadeToggle(500);
		$('.navburgeron').stop(true).toggleClass('navshow');
        $('.nav ul').stop(true).toggleClass('in');
	});

    $('.bookmark').click(function() {
        var position = $($(this).attr('href')).offset().top - 120;
        
        $('#navburger').removeClass('open');
        $('.nav').fadeToggle(1000);
        $('.nav ul').removeClass('up');
        $('.nav li').removeClass('open');
        $("body, html").animate({scrollTop: position}, 2000);
    });
    
    $('.goto').click(function() {
        var goto = $($(this).attr('href')).offset().top - 120;
        
        $("body, html").animate({scrollTop: goto}, 2000);
    });
    
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