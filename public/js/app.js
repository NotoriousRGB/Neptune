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
			slideshowSpeed: 7000,          
			animationDuration: 600,
			controlsContainer: ".flex-container",
      start: function(){
        $('#slider h3').hide().fadeIn(2000);
      },
      before: function(){
        $('#slider h3').hide().fadeIn(2000);
      },
    });

   $('#portfolio img').hover(function(){
      $(this).animate({ opacity: '.4'}, 200);
    }, function(){
      $(this).animate({ opacity: '1'}, 200);
    });


});