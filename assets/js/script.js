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