$(document).ready(function() {
 
    /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
      if (direction== "down") {
          $('nav').addClass('sticky');
      } else {
          $('nav').removeClass('sticky');
      }
  }, {
    offset: '60px;'
  });
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');
        
       nav.slideToggle(200);
        
       if (icon.hasName('menu-outline')) {
           icon.addName('close-outline');
           icon.removeName('menu-outline');
       } else {
           icon.addName('menu-outline');
           icon.removeName('close-outline');
       }
    });
});