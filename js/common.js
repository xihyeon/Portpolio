$(function(){

  // mousemove

	$("#home").mousemove(function(e) {
		$(".img-single").each(function() {
			var layers = $(this).attr("data-val");
			// console.log(layers);
			var x = ($(window).innerWidth() - event.pageX * layers) / 100;
			var y = ($(window).innerWidth() - event.pageY * layers) / 100;
			$(this).css("margin-left", x + "px").css("margin-top", y + "px");
		});
	});

});
