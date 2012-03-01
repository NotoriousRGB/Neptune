$(document).ready(function() {


    $('#centeredmenu ul li').has('ul').hover(function(){
      var menuState = 'closed';

      if ( menuState == 'closed') {
        $(this).find('ul').hide().slideDown(200);
        var menuState = 'open';
      };

    }, function(e){

      if ( $("#navigation").css("width") > "480px") {
        $(this).find('ul').slideUp(200);
      } else {
        $(this).find('ul').hide();
      }

    });

    





    $('.flexslider').flexslider({
    	
    	animation: "slide",
      slideDirection: "horizontal",
    	directionNav: false,
			controlNav: false,
      keyboardNav: true,
			slideshowSpeed: 7000,          
			animationDuration: 700,
			controlsContainer: ".flex-container",
      start: function(slider){
        $('.slides div.text-anim-1').css({ marginTop: '90px'});
      },
      before: function(slider){       
        $('.slides div.img-anim-1').stop().css({ opacity: '0' }).delay(700).animate({
          opacity: '1'
        }, 1200);

        $('.slides div.text-anim-1').stop().css({ opacity: '0' }).delay(750).animate({   
          opacity: '1'
        }, 1200);
      },
      after: function(slider){
        



      }
    });



   $('.photogrid img').hover(function(){
      $(this).animate({ opacity: '.4'}, 200);
    }, function(){
      $(this).animate({ opacity: '1'}, 200);
    });






});