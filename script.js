var $scrollContainer = $(".scroller");

function initCustomScrollbar() {
	$scrollContainer.mCustomScrollbar({autoHideScrollbar: true, mouseWheel:{ deltaFactor: 65 }});
}

function addScrollOnClick(anchorSelector, scrollDestination) {
	$(anchorSelector).on("click", function() {
		$scrollContainer.mCustomScrollbar("scrollTo", scrollDestination);
		
	});

}

(function () {
	var observer = new MutationObserver(function (mutationList, observer) {
	  var allReviews = $(".eagr-slider-item");
	  var foo = allReviews.length > 0;
	  allReviews.each(function () {
		var haveText = $(this).find(".eagr-review-card-template-bubble-text").length > 0;
		if (!haveText) {
		  $(this).css("display", "none");
		}
	  });
	  if(foo){
		observer.disconnect();
	  }
	});
  
	var settings = { childList: true, subtree: true };
	observer.observe($("[class^='elfsight-app']")[0], settings);
  })();