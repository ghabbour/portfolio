$(function(){
    
    // Loading screen
    $(window).on('load',function(){
       $('.loading-screen .spinner').fadeOut(1000,function(){
           $(this).parent().fadeOut(500,function(){
                $(this).remove();     
           });
       });
       
    });
    
    // sidebar 
        $('.sidebarBtn').click(function(e){
            e.stopPropagation();
           $('.sidebar').toggleClass('active');
        });
        
        // when click to any space on screen but the sidebar-menu will close sidebar-menu
        $(document).click(function(e){

            var clickover = $(e.target);
            if(! clickover.closest('.sidebar').length && $('.sidebar').hasClass('active')){

                $('.sidebar').removeClass('active'); 
            }
        });

    
    
    // scroll to About
    $('.hero .next').click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
    
    // Magnific Popup
       $('.work-lightbox').magnificPopup({
            gallery: {
              enabled: true
            },
          type: 'image'

        });
    
   // mixitup ====================
    var mixer = mixitup('.items');

                  var mixer = mixitup(containerEl);

                  var mixer = mixitup(containerEl, {
                    selectors: {
                        target: '.blog-item'
                    },
                    animation: {
                        duration: 300
                    }
                }); 
    
    
    
    
    
     
    
});