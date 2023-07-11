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
        var $inview = $('.inview');
        var bottomwindow = $(window).scrollTop() + $(window).height();
        
        $inview.each(function() {
            var bottomobject = $(this).offset().top;
    
            if (bottomwindow > bottomobject) {
                $(this).addClass('fade');
            } else {
                $(this).removeClass('fade');
            }
        }); 
    }).scroll();    
    
    // Accordion
    $('.accTitle').click(function() {
        var $acc = $(this).next('.accList');
        var $accup = $('.accList').not($acc);
    
        $accup.slideUp(400);
        $acc.stop(true, false).slideToggle(400);
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