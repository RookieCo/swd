

$(document).ready(function() {
    

    
    /* For the sticky navigation */
    $('.js-nextsection').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '200px;'
    });
    
    
    
    


 $(function () {

      $("#slider1").responsiveSlides({
        auto: true,
        pager: true,
        speed: 300,
        namespace: "centered-btns"
      });

       $("#slider2").responsiveSlides({
        auto: true,
        pager: true,
        speed: 200,
        maxwidth: 540
      });
   
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });

    });



    });