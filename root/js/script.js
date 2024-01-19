$(function(){
   $('.timeline-nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.timeline-slider',
      centerMode: true,
      focusOnSelect: true,
       mobileFirst: true,
      arrows: false,
      infinite:true,
       responsive: [
           {
               breakpoint: 1200,
               settings: {
                   slidesToShow: 5,
                   slidesToScroll: 1,
               }
           },
           {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
              slidesToScroll: 1,
           }
          },
         {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
                  },
           {
               breakpoint: 0,
               settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1,
               }
           }
     ]
  });
  
   $('.timeline-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.timeline-nav',
      centerMode: true,     

       mobileFirst: true,
       speed: 500,

       responsive: [
           {
               breakpoint: 992,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
               }
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
               }
           },
         {
          breakpoint: 0,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false
          }
        },
           {
          breakpoint: 768,
          settings: {
              centerMode: true
          }
        }
     ]
  });
 
});