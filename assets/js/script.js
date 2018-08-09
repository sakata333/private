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
  $('#nav div').click(function(){
    $('#nav div').removeClass();
    $(this).addClass("on");
  });
});

$(function(){
  $('.wrapper #top').on('inview', function() {
    $('#nav div').removeClass("on");
    $('#nav .link01').addClass("on");
    $('.wrapper #top').addClass("active");
  });
  $('.wrapper #art').on('inview', function() {
    $('#nav div').removeClass("on");
    $('#nav .link02').addClass("on");
    $('.wrapper #art').addClass("active");
    $('#art li').fadeIn(4000).css("transform","translateY(0)");
  });
  $('.wrapper #about').on('inview', function() {
    $('#nav div').removeClass("on");
    $('#nav .link03').addClass("on");
    $('.wrapper #about').addClass("active");
  });
  $('.wrapper #works').on('inview', function() {
    $('#nav div').removeClass("on");
    $('#nav .link04').addClass("on");
    $('.wrapper #works').addClass("active");
  });
  $('.wrapper #contact').on('inview', function() {
    $('#nav div').removeClass("on");
    $('#nav .link05').addClass("on");
    $('.wrapper #contact').addClass("active");
  });
});