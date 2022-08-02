$(document).ready(function(){

// Табы в контактах
  $('.js-tabs-link').on('click', function(){
    $('.js-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tabs-link');

    $('.js-tabs-content').removeClass('active');
    $('.js-tabs-content').eq(index).addClass('active');
  })

// Фильтры в работах
$('.js-filter-link').on('click', function(){
  let filter = $(this).data('filter');

  $('.js-filter-link').removeClass('active');
  $(this).addClass('active');

  if (filter === 'all') {
    $('.js-works-picture-box').show();

    return;
  }

  $('.js-works-picture-box').each(function(){
    let type = $(this).data('type');

    if (filter === type) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

// Slick-slider
  $('.js-slick-slider').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });



})
