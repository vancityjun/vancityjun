var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade', //fade slide
  loop: true,
  preventClicks: false,
  preventClicksPropagation: false,
  // hashNavigation:true,
  mousewheel: {
    sensitivity: 1,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
  direction: 'vertical'
});

$('.toggle-menu').click(function() {
  $(this).toggleClass('active');
  $('.menu').fadeToggle(600);
});

$(function() {
  // $('.top_bar').midnight();
  function contentOpen() {

    $(".swiper-slide-active").find('.content_wrapper').css('right', '-45%');
    var htmlWidth = window.innerWidth;
    if (htmlWidth <= 576) {
      $(".swiper-slide-active").find('.content_wrapper').css('right', '-100%');
    };
    $(".swiper-slide-active").find('.blog-slider__img').css('right', '0px');
    $(".swiper-slide").find('.videoWrapper').css('display', 'block');
    $('.closeBtn').fadeIn(600);
    $(".swiper-slide-active").find('.project-info').addClass('active');
    if (htmlWidth > 576) {
      $(".swiper-slide-active").find('.scrollDown').fadeIn(600);
    };
    $(".swiper-slide-active").find('.project-content').addClass('active');
    $(".blog-slider__pagination").fadeOut(400);
    $(".arrows").fadeOut(400);
    $('.swiper-wrapper').addClass("swiper-no-swiping");
    swiper.mousewheel.disable();
    swiper.keyboard.disable();
    $(".swiper-slide-active").addClass('scroll');
    $('.scroll').animate({
      scrollTop: 0
    }, 0);
  };
  /* VIEW CASE BUTTON */
  $(".blog-slider__button").on('click', function(e) {
    e.preventDefault();
    contentOpen();
  });

  function contentClose(fod) {
    $('.scroll').animate({
      scrollTop: 0
    }, 400);
    $(".swiper-slide").removeClass('scroll');
    $(".swiper-slide").find('.content_wrapper').css('right', '0px');
    $(".swiper-slide").find('.videoWrapper').css('display', 'none');
    $(".swiper-slide").find('.blog-slider__img').css('right', '300px');
    $('.closeBtn').fadeOut(600);
    $(".swiper-slide").find('.project-info').removeClass('active');
    $(".swiper-slide").find('.scrollDown').fadeOut(fod);
    $(".swiper-slide").find('.project-content').removeClass('active');
    $(".blog-slider__pagination").fadeIn(fod);
    $(".arrows").fadeIn(fod);
    $('.swiper-wrapper').removeClass("swiper-no-swiping");
    swiper.mousewheel.enable();
    swiper.keyboard.enable();
  };
  /* CLOSE BUTTON */
  $(".closeBtn").on('click', function(e) {
    e.preventDefault();
    contentClose(400);
  });
  /*
  $(".swiper-pagination-bullet").mouseover(function(){
    $(this).removeClass('swiper-pagination-bullet-active');
  })
  .mouseout(function(){
    $(this).addClass('swiper-pagination-bullet-active');
  });
  */

  $('.menu a').click(function(e) {
    e.preventDefault();
    $('.toggle-menu').removeClass('active');
    $('.menu').fadeOut(600);
    contentClose(400);
    $(this).parents().siblings().find('.link').removeClass('active');
    $(this).addClass('active');
  });

  $('.scrollDown').on('click', function(e) {
    e.preventDefault();
    $('.scroll').animate({
      scrollTop: $('.project-content').offset().top
    }, 500, 'linear');
  });
});

$('.btnDesktop').on('click', function(e){
  e.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  $(this).closest('.project-content').find('.desktop').fadeIn(400);
  $(this).closest('.project-content').find('.mobile').fadeOut(400);
});
$('.btnMobile').on('click', function(e){
  e.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  $(this).closest('.project-content').find('.mobile').fadeIn(400);
  $(this).closest('.project-content').find('.desktop').fadeOut(400);
});


$(document).ready(function() {
  /*
	$(".swiper-slide-active").mCustomScrollbar({
		theme			: "dark",
		scrollButtons	: { scrollType: "stepped" },
		live			: "on"
	});
  */
});
