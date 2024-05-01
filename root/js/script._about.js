$(function(){
   $('.timeline-nav-about').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: '.timeline-slider',
      centerMode: true,
      focusOnSelect: true,
       mobileFirst: true,
      arrows: false,
       vertical:true,
      infinite:true,

       responsive: [
           {
               breakpoint: 1200,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                vertical:true,

               }
           },
           {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,


           }
          },
         {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
              vertical:true,
              adaptiveHeight: true,
              centerMode: true,

                        }
                  },
           {
               breakpoint: 728,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   vertical:true,
                   adaptiveHeight: true,
                   centerMode: true,



               }
           },
           {
               breakpoint: 0,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   vertical:true,
                   adaptiveHeight: true,
                   centerMode: true,



               }
           }

     ]
  });
  
   $('.timeline-slider-about').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.timeline-nav',
      centerMode: true,
       mobileFirst: true,
       speed: 500,
       vertical:true,
       responsive: [
           {
               breakpoint: 1200,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   centerMode: true,
                   vertical: true,

               }
           },
           {
               breakpoint: 991,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   vertical: true,
                   adaptiveHeight:true,
                   centerMode: true,

               }
           },
           {
               breakpoint: 728,
               settings: {
                   slidesToShow: 3,
                   slidesToScroll: 1,
                   centerMode: true,


               }
           },

         {
          breakpoint: 0,
          settings: {
              slidesToShow:3,
              slidesToScroll: 1,
              centerMode: true,
              vertical:true,
                       }
        },

     ]
  });

});


