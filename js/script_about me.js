$('.skillbar').each(function() {
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-percent')
	}, 2000);
});

$('.count').each(function() {
	$(this).prop('Counter',0).animate({
		Counter:$(this).text()
	}, {
		duration: 2000,
		easing: 'swing',
		step:function(now) {
			$(this).text(Math.ceil(now));
		}
	});
});