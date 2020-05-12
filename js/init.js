// Scrolling to top
// Scrolling to top
    
	var top_show = 200;
	var duration = 700;
	$(document).ready(function() {
		// Scroll
		$(window).scroll(function () {
			if ($(this).scrollTop() > top_show) {
				$('.back_to_top').fadeIn();
			} else {
				$('.back_to_top').fadeOut();
			}
		});
		// Click
		$('.back_to_top').click(function () {
			$('body, html').animate({scrollTop: 0}, duration);
		});
	});

// Scrolling to top //
// Scrolling to top //


$(document).ready(function() {

    // Sidebar burger //
	// Sidebar burger //

    $( window ).resize(function() {
        if ($(window).width() > 768) {
            if ($('.menu-l-content').css('display') == 'none') {
                $('.menu-l-content').css({ display: 'block' });
            }
        }
    });
    $('.menu-l-open-btn').click(function(){
        if ($('.menu-l-content').css('display') == 'none') {
            $('.menu-l-content').slideDown();
        } else {
            $('.menu-l-content').slideUp();
        }
    });


});


 // Sidebar menu //
 