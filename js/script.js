

$(document).ready(function(){
  $('.js-preloader').preloadinator({
    minTime: 1000,
    animation: 'fadeOut',
    animationDuration: 100,
    


  });

   


})
$(document).ready(function(){
 
  
  $(".num").numScroll({
    'number': 23467,
    'time': 1500,
    'delay': 5,
    'fromZero': true
  });

})





$(document).ready(function(){
  $('.wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300, 

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
  autoplaySpeed: 5000,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
        }
      }
      
    ]
  });

  
})
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,

  });
  });
  AOS.init({
    duration:1000,
    delay:200,
    
});
$(document).ready(function(){
  $('.counter').counterUp({
    delay: 100,
    time: 1000
  

});
  


})





