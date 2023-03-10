$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="img/carousel/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right.png"></button>'
      });
  });