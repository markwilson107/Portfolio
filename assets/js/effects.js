$('.view-work-btn').hover(function () {
   let mobile = window.matchMedia("(min-width: 767px)")
   let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
   if (mobile.matches || supportsTouch === false) {
      $('.banner-img2').css('opacity', '1');
      $('.typewrite').css('color', 'black');
      $('.banner-title h1').css('color', 'black');
      $('.banner-title .btn').removeClass("btn-secondary");
      $('.banner-title .btn').addClass("btn-primary");
      $('.navbar').removeClass("navbar-dark");
      $('.navbar').addClass("navbar-light");
      $('.banner-name').css("color", "rgb(255, 102, 0)")
   }
},
   function () {
      $('.banner-img2').css('opacity', '0');
      $('.typewrite').css('color', 'white');
      $('.banner-title h1').css('color', 'white');
      $('.banner-title .btn').removeClass("btn-primary");
      $('.banner-title .btn').addClass("btn-secondary");
      $('.navbar').removeClass("navbar-light");
      $('.navbar').addClass("navbar-dark");
      $('.banner-name').css("color", "rgb(0, 140, 255)")
   });

