$(window).scroll(function(){
  if($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");
});

var s =skrollr.init();