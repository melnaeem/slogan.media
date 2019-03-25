
$(document).ready(function(){

  endHeaderEffect = function(){
    $('.logoEffet').css('display', 'block');
    $('video').css('display', 'none');

    setTimeout(function(){
      $('.logoEffet').addClass('startEffect');
      setTimeout(function(){ 
        $('.content').css('opacity','1');
        $('body').removeClass('overflowHidden');
      }, 1500);
     }, 250);
  }

  var win = $(window);
    
  (function(){ 
    if (win.scrollTop() > 50){
      $('body').removeClass('overflowHidden');
      endHeaderEffect();
    }
  }());

  $('video').on('ended',function(){  
    endHeaderEffect();
  });

  $('.work-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

});