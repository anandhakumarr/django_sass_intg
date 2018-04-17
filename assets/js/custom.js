
$(window).on('load', function() {
  var winWidth = $(window).width();
  if (winWidth > 641){
      $('.banner-mob').addClass('removeBanner');
   }
   else  {
      $('.banner-mob').removeClass('removeBanner');
   }
}); 


$( window ).resize(function() {
  var winWidth = $(window).width();
  if (winWidth > 641){
      $('.banner-mob').addClass('removeBanner');
   }
   else  {
      $('.banner-mob').removeClass('removeBanner');
   }
});