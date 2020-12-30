$(function(){
  var swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      draggable: true
    },
  });

  var swiper = new Swiper('.swiper2', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    parallax: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      draggable: true
    },
  });




  // mousemove

	$(".swiper-slide").mousemove(function(e) {
		$(".img-single").each(function() {
			var layers = $(this).attr("data-val");
			// console.log(layers);
			var x = ($(window).innerWidth() - event.pageX * layers) / 100;
			var y = ($(window).innerWidth() - event.pageY * layers) / 100;
			$(this).css("margin-left", x + "px").css("margin-top", y + "px");
		});
	});

});
