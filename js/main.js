/**
 * Created by rtur on 18.10.2016.
 */
//nav
 $(document).ready(function() {
     $( '.dropdown' ).hover(
         function(){
             $(this).children('.sub-menu').slideDown(200);
         },
         function(){
             $(this).children('.sub-menu').slideUp(200);
         }
     );
 });
 //carousel
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();


        $('.basic').fancySelect();

        $('.icheckbox').iCheck({
          checkboxClass: 'icheckbox_square-green',
          radioClass: 'iradio_square-green',
          increaseArea: '20%' // optional
        });
      });

        var $link = $('.menu li');

        $link.hover(function(e) {
          var $submenu = $(this).children('ul');
          $submenu.slideDown(200);
          $submenu.animate({
            backgroundColor: '#333',
            width: '180px'
          }, 250);
        }, function(e) {
          var $submenu = $(this).children('ul');
          $submenu.slideUp(200);
          $submenu.animate({
            backgroundColor: '#c83232',
            width: '150px'
          }, 1);
    })

})(jQuery);
