$(document).ready(function() {
  $(window).resize(function() {
    if ($(document).width() > 714)
      $(".responsive-menu").css("height", "0px");
  });

  var menu = $(".menu").html();
  $(".responsive-menu").append(menu);
  $(".responsive-menu ul").removeClass("main-menu");
  $(".responsive-menu ul").addClass("mobile-menu");

  $(".mobile-menu-icon").click(function() {
    var respMenu = $(".responsive-menu");
    var height = (respMenu.css("height") == "200px") ? "0px" : "200px";
    respMenu.animate({
      height: height
    }, 100);
  });



  function onScroll() {
    var scrollPos = $(document).scrollTop();
    $("#test").html(scrollPos);
    $('.menu li a').each(function() {
      var currLink = $(this);
      var refElement = $(currLink).attr("href");
      if ($(refElement).position().top - 190 <= scrollPos && $(refElement).position().top - 190 + $(refElement).height() >= scrollPos) {
        progressWidth = $(".progress-bar").css("width");
        console.log(progressWidth);
          if (refElement == "#section-skills" && progressWidth == "0px")
            {
              $(".progress-html").animate({
                width: ["40%", "linear"]
              }, 50);
              $(".progress-css").animate({
                width: ["30%", "linear"]
              }, 100);
              $(".progress-js").animate({
                width: ["15%", "linear"]
              }, 50);
              $(".progress-python").animate({
                width: ["20%", "linear"]
              }, 100);
            }


      }
    });
  }

});