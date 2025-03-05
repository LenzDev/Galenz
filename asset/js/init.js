
 jQuery(document).ready(function($) {
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false
 
       $(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: true,
        directionNav: false, // Menghilangkan tombol prev/next untuk layar kecil
        touch: true, // Memastikan dukungan geser (swipe) di Android
        smoothHeight: true
    });
});}








