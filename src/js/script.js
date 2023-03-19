// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1200,
//         // adaptiveHeight: true,
//         arrows: true,
//         prevArrow:'<button type="button" class="slick-prev"><img src="img/carousel/chevron-left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/chevron-right.png"></button>'
       
//       });
//   });

$(document).ready(function(){
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

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });  

  function toggleClass (item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });  
  };

  toggleClass('.catalog-item__back');
  toggleClass('.catalog-item__link');

});

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 1,
//     controls: false,
//     nav: false
//   });

//   document.querySelector('.prev').addEventListener('click', function () {
//     slider.goTo('prev');
//   });

//   document.querySelector('.next').addEventListener('click', function () {
//     slider.goTo('next');
//   });

  