$(document).ready(function (){
  $("#anchor").on('click', function (e){
  	e.preventDefault();
    $('html, body').animate({
      scrollTop: $("html,body").offset().top
  	}, 750);
  });

  $('.tab-content-banners__info').on('click', function () {
    $(this).next().toggle();
    $(this).toggleClass('show');
  });

  $('.questions__text').on('click', function() {
    $(this).next().toggle();
  });

  $('.navbar-mobile').on('click', function() {
    $(this).closest('.navbar-mobile').find('.navbar-collapse').toggleClass('show');
  });
});