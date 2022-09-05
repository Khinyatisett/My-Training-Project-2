//menu JS
$(document).ready(function() {
    $('.menu-btn').click(function() {
      $(this).toggleClass('active');
  
      if ($(this).hasClass('active')) {
          $('.menu').addClass('active');
      } else {
          $('.menu').removeClass('active');
      }
    });

    $('.footer-ttl a').click(function(event){

      var current = $('this');

      $(".footer-ttl a").removeClass("active-link");
      $('.footer-ttl a').addClass("active-link");

      $(content).show();

      event.preventDefault();

    });
  });