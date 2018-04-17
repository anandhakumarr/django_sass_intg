
 
function allowDrop(ev) {
    ev.preventDefault();
}

function slickdot() {
     var slicklargefigcation = $('.slider-block-large figcaption').innerHeight();
     $('.slider-block-large .slick-dots').css({
         'bottom': slicklargefigcation - 5
     });
}

function PhotoURL(input) {
     if (input.files && input.files[0]) {
         var reader = new FileReader();
         reader.onload = function(e) {
             $('#db-image-blk').attr('src', e.target.result);
         }
         reader.readAsDataURL(input.files[0]);
     }
}

function setHeight() {
    windowheight();
     var maxHeight = Math.max.apply(null, $(".horizontal-images.content li").map(function() {
         return $(this).find('>div.tracksInfo').innerHeight();
     }).get());
     var total = (maxHeight + 140);
     $(".grey-bg").css('height', total); 
}
 