$(document).ready(function () {
    
    // Navigation //
    
    $('#navburger').click(function(){
        $('.nav').stop(true).toggleClass('navin');
		$('.navburgeron').stop(true).toggleClass('navshow');
        $('.nav ul').stop(true).toggleClass('in');
        $('.navcontact').stop(true).toggleClass('up');
	});

    // Fadin inview //
    
    $(window).scroll(function() {
        $('.inview').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ) {
                $(this).addClass('fade');
            } else {
                $(this).removeClass('fade');
            }
        }); 
    }).scroll();
    
    
    // Accordion
    
     $('.accTitle').click(function() {        
        $accordion_content = $(this).next('.accList');
        $('.accList').not($accordion_content).slideUp(400);
        $accordion_content.stop(true, false).slideToggle(400);
    });
    
    // Projektcontroller //
    
    $('#neubau').click(function(){
        $('.gridpro').removeClass('projecthide');
        $('.add').removeClass('proactiv');
        $('.umbau').addClass('projecthide');
        $('#neubau').addClass('proactiv');
	});
    
    $('#umbau').click(function(){
        $('.gridpro').removeClass('projecthide');
        $('.add').removeClass('proactiv');
        $('.neubau').addClass('projecthide');
        $('#umbau').addClass('proactiv');
	});
    
    $('#project').click(function(){
        $('.gridpro').removeClass('projecthide');
        $('.add').removeClass('proactiv');
        $('#project').addClass('proactiv');
	});
    
    // impressum //
    $('.data-target').click(function() {
        var $target = $($(this).data("target"));
        
        if ($target.is(":visible")) {
            $target.slideUp(300);
        } else {
            $('.target-footer').slideUp(300);
            setTimeout(function() {
                $target.slideDown(300, function() {
                    $('html,body').animate({scrollTop: $target.offset().top}, 600);
                });
            }, 300);
        }
    });
    
    
});