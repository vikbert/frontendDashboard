(function ($) {
	'use strict';
	var mainNav = $('#main-nav');

	$.each(mainNav.find('.ubup-sub-menu'), function (index, el) {
		var subMenuJQ = $(el);
		var diff = mainNav.offset().left - subMenuJQ.offset().left;

		if (diff !== 0) {
			subMenuJQ.css('left', diff);
		}
	});


})(jQuery);