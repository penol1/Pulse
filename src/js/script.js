// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         arrows: true,
//         prevArrow:'<button type="button" class="slick-prev"><img src="img/carousel/chevron-left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right.png"></button>'
       
//       });
//   });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 1,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

  