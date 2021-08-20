$(function(){
  $('.header__burger-btn').on('click', function () {
    $('.header__burger-items').toggleClass('header__burger-items--active');
  });


  $(".header__menu-list a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

    $(window).scroll(function () {
      if ($(window).scrollTop() > 700) {
        $('.header').addClass("header--anycolor");
      }
      else {
        $('.header').removeClass("header--anycolor");
      }
    });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 5) {
      $('.header').addClass("header--none");
    }
    else {
      $('.header').removeClass("header--none");
    }
  });


  $('.header__burger-btn, .header__menu-list a').on('click', function () {
    $('.header__menu-list').toggleClass('header__menu-list--column');
  });


  $('.footer-top__content-title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('footer-top__content-list--active');
  });
 
});
