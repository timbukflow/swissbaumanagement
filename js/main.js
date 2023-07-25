$(document).ready(function () {
    
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
        $target.slideToggle(500, function() {
            if ($target.is(":visible")) {
                $('html,body').animate({scrollTop: $target.offset().top}, 500);
            }
        });
      }); 
});