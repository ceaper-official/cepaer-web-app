$(function() {
  $(window).scroll(function() {
    $(".pr-half, .medium, .iconset, img.shadow, .fade-up, .fade-l, .fade-r").each(function() {
      var targetAnime = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetAnime - windowHeight + 100) {
        $(this).addClass("moving");
      }
    });
  });
});

// Back Top Scroll
$(window).on('load scroll', function(){
  if ($(window).scrollTop() > 3000) {
    $('.backTop, .backPage').fadeIn(500);
   } else {
    $('.backTop, .backPage').fadeOut(200);
   }
});

// Back Top Animations
$(function(){
  var topBtn = $('.backTop');
  topBtn.click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
    return false;
  });
});


// ヘッダー
( function() {
  const target     = document.getElementById( 'app-nav' ),
        height     = 0;
  let offset       = 0,
      lastPosition = 0,
      ticking      = false;

  function onScroll() {
    if( lastPosition > height ) {
      if( lastPosition > offset ) {
        target.classList.add( 'header-move' );
      } else {
        target.classList.remove( 'header-move' );
        target.classList.add( 'header-sticky' );
      }
      offset = lastPosition;
    }
  }

  window.addEventListener( 'scroll', function(e) {
    lastPosition = window.scrollY;

    if( !ticking ) {
      window.requestAnimationFrame( function() {
        onScroll( lastPosition );
        ticking = false;
      });
      ticking = true;
    }
  });
})();
