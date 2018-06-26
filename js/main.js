window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin:'bottom'
});
//sr.reveal('#case', {
  //duration: 2000,
  //origin:'top'
//});
sr.reveal('.showcase-left', {
  duration: 3000,
  origin:'left',
  distance:'300px'
});
sr.reveal('.showcase-right', {
  duration: 3000,
  origin:'bottom'
});
sr.reveal('.showcase-btn', {
  duration: 3000,
  delay: 2000,
  origin:'bottom'
});
sr.reveal('.info-left', {
  duration: 2000,
  origin:'left',
  viewFactor: 0.2
});
sr.reveal('.info-right', {
  duration: 2000,
  origin:'right',
  viewFactor: 0.2
});
sr.reveal('#logos', {
  duration: 2000,
  origin:'bottom',
  viewFactor: 0.2
});
sr.reveal('.portfolio', {
  duration: 2000,
  origin:'bottom',
  viewFactor: 0.2
});

//skillbar
$(document).ready(function(){
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },4000);
  });
});





//SMOOTH SCROLLING JQ
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
  if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' +this.hash.slice(1) +']');
  if(target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});
});
