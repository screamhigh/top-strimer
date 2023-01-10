$(window).scroll(function(){
    var left = $(this).scrollLeft();
    $('nav').css('left',-left);
  });