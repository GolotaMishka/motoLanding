$( "section.aw-accordion div" ).mouseover(function() {
  $(this).css('width','50%');
  $(this).siblings('div').css('width','14%');
});

// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });