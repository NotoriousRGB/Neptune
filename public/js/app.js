$(document).ready(function() {

    $('#centeredmenu ul li').has('ul').hover(function(){
      $(this).find('ul').hide().slideDown(200);
    }, function(){
      $(this).find('ul').hide();
    });

    $('.flexslider').flexslider({
    	
    	animation: "slide",
    	directionNav: false,
			controlNav: true,
			slideshowSpeed: 6000,          
			animationDuration: 800,
			controlsContainer: ".flex-container",
      start: function(){
        $('#slider h3').hide().fadeIn(2000);
      },
      before: function(){
        $('#slider h3').hide().fadeIn(2000);
      },
    });

    $('#portfolio img').hover(function(){
      $(this).css({'opacity': '0.66'});
    }, function(){
      $(this).css({'opacity': '1'});
    });


});