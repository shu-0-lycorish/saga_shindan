jQuery.noConflict();
(function ($) {
	$(function () {
		$(".qa_btn").on("click", function () {
			$(this).closest("div").css("display", "none");
			id = $(this).attr("href");
			$(id).fadeIn("500");
			$("html,body").animate({ scrollTop: $("#contents-qa").offset().top }, 'normal', 'swing');
		});
	});

})(jQuery)

