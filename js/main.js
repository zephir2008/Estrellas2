/*****************************/
/* Scroll handler */
+function(jQuery){
    var scrollStopEventEmitter = function(element, jQuery) {
        this.scrollTimeOut = false;
        this.element       = element;
        jQuery(element).on('scroll', $.proxy(this.onScroll, this));
    }

    scrollStopEventEmitter.prototype.onScroll = function() {
        if (this.scrollTimeOut != false) {
          clearTimeout(this.scrollTimeOut);
        }
        var context = this;
        this.scrollTimeOut = setTimeout(function(){ context.onScrollStop()}, 250);
    }

    scrollStopEventEmitter.prototype.onScrollStop = function() {
        this.element.trigger('scrollStop');
    }

    jQuery.fn.scrollStopEventEmitter = function(jQuery) {
        return new scrollStopEventEmitter(this, jQuery);
    };
}($);


function showTop(){
	$('.to-top').fadeIn('slow').css('animation','zamb 2s ease-in-out 0 infinite alternate');
}

function hideTop(){
	$('.to-top').fadeOut('slow')).css('animation','none');
}

$(document).ready(function(){
	document.addEventListener('scroll', function (event) {
		if ($(document).scrollTop() == 0) {
			hideTop();
		} else {
			showTop();
		}
//	    if (event.target.id === 'idOfUl') { // or any other filtering condition
//	        console.log('scrolling', event.target);
//	    }
	}, true /*Capture event*/);


//	$(window).scrollStopEventEmitter($);
//	$(window).on('scrollStop',function(){
//		if ($(document).scrollTop() == 0) {
//			hideTop();
//		} else {
//			showTop();
//		}
//	});

	$('.js-scrollTo').on('click', function() {
		var page = $(this).attr('href');
		var speed = 750;
		var high = parseInt($("#HEAD").css('height'));
		$('html, body').animate({
				scrollTop: $(page).offset().top - high
			}, speed, 'swing'
	 	);
	  	return false;
	});
});
