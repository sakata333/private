//アンカーリンク スムーズに
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(document).ready( function(){
  $('.clip_left').addClass("on");
});

$(function(){
  $('.more .btn').click(function(){
    $(this).fadeOut();
    $('.more .detail').fadeIn().css('display','flex');
  });
});

$(function(){
  $('.wrapper #top').on('inview', function() {
    $('.wrapper #top').addClass("active");
  });
  $('.wrapper #art').on('inview', function() {
    $('.wrapper #art').addClass("active");
    $('#art li').fadeIn(4000).css("transform","translateY(0)");
  });
  $('.wrapper #about').on('inview', function() {
    $('.wrapper #about').addClass("active");
    $('#about').delay(4000).queue(function(){
      $('#about').addClass("slide");
    });
    $('#about .skill').delay(6000).queue(function(){
      $('#about .skill').addClass("on");
    });
  });
  $('.wrapper #works').on('inview', function() {
    $('.wrapper #works').addClass("active");
  });
  $('.wrapper #contact').on('inview', function() {
    $('.wrapper #contact').addClass("active");
  });
});

$(document).ready( function(){
  $('#loding').addClass("active");
  $('#loding .text02').delay(4000).queue(function(){
    $('#loding').addClass("on");
  });
  $('#loding').delay(8000).queue(function(){
    $('#loding').css({'opacity':'0','transition':'all 3s ease'});
    $('.main').fadeIn(1000);
  });
});
