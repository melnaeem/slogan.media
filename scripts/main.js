

$(document).ready(function(){
    var win = $(window),
    navbar = $('.header'),
    
    sticky = function(){ 
            
        if (win.scrollTop() > 50) {
            navbar.addClass('scrolledNav');
        } else {
            navbar.removeClass('scrolledNav');
        }
    }

    sticky();

    win.scroll(sticky);

    $('.burger, .overlay').click(function(){
      $('.burger').toggleClass('clicked');
      $('.overlay').toggleClass('show');
      $('nav').toggleClass('show');
      $('body').toggleClass('overflow');
    });

    $(".navigationLink").on('click', function(event) {
        if (this.hash !== "") {
          
          event.preventDefault();
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 60
          }, 800, function(){
       
            window.location.hash = hash;
          });
        }
      });

    AOS.init();
  });
