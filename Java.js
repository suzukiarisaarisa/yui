$(function(){
$('a[href^="#"]').click(function(){
	var speed = 1000;
	var href= $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top-120;
	$("html, body").animate({scrollTop:position}, speed, "swing");
  });
});// JavaScript Document

$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			var target = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var height = $(window).height();
			if (scroll > target - height){
				$(this).addClass('active');
			}
		});
	});
});
$(function () {
  var urlHash = location.hash;
  if (urlHash) {
    $('index,html').stop().scrollTop(0);
    setTimeout(function(){
	var speed = 1000;
      var headerHight = 120;
      var target = $(urlHash);
      var position = target.offset().top - headerHight;
      $('index,html').stop().animate({scrollTop:position}, speed, "swing");
  }, 100);
}
});

$(function(){
	const hum = $('.spmenu,.sp-nav div a,.close')
	const nav = $('.sp-nav')
	hum.on('click', function(){
	nav.toggleClass('toggle');
});
});
