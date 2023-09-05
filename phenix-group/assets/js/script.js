jQuery(document).ready(function () {
//Timer/Sleeper
    var hhhh = new Date().getHours();
	if (hhhh >= 0 && hhhh <= 5){
	$(".sleepper00").css({"display":"none"});
	$(".sleepper01").css({"display":"flex"});
	$(".sleeppy01").css({"display":"block"});
	$(".dayly01").css({"display":"none"});
}
console.log(hhhh);
function timerDay(){
	function onInactive(ms, cb) {
		var wait = setTimeout(cb, ms);
		document.onmousemove = document.mousedown = document.mouseup = document.onkeydown = document.onkeyup = document.focus = function () {
			clearTimeout(wait);
			wait = setTimeout(cb, ms);
		};
		$(".timerBtn").click(function() {
			clearTimeout(wait);
			onInactive();
			onInactive = function() {return false;};
		});
	}
	var onDisactive = function(){
		$(".timerBtn").click();
		onInactive();
		onInactive = function() {return false;};
	};
	var yyy = 20;
	onInactive(1000*yyy, function(){
		onDisactive();
	});
}
$(function(){
	$(".munth-text1").click(function() {
		$(".md-right").css('display','flex');
	});
	$(".md-right-close").click(function() {
		$(".md-right").css('display','none');
	});
});
window.onresize = function() {
    if (window.innerWidth >= 1500) { $(".md-right").css('display','flex') }
    if (window.innerWidth <= 1500) { $(".md-right").css('display','none') }
};

var h = new Date().getHours();
if (h >= 0){
	timerDay();
}


    // скрипт табов //
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // скрипт табов //

    $('.slider41').click(function () {
        $('.sld4').removeClass('active');
        $(this).addClass('active');
        $('.block_slider_4').toggleClass('slider-active');
    });
    $('.slider42').click(function () {
        $('.sld4').removeClass('active');
        $(this).addClass('active');
        $('.block_slider_4').toggleClass('slider-active');
    });

    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);

    function f_acc() {
        //скрываем все кроме того, что должны открыть
        $('#accordeon .acc-body').not($(this).next()).slideUp(200);
        // открываем или скрываем блок под заголовоком, по которому кликнули
        $(this).next().slideToggle(200);
    }

    jQuery('.frmchck').click(function () {
        jQuery(this).toggleClass('active');
    });

    jQuery('.acc-head').click(function () {
        jQuery('.acc-head').removeClass('active');
        jQuery(this).toggleClass('active');
    });


    jQuery('#mobile-menu li').click(function () {
        jQuery('#mobile-menu').toggleClass('show_mobile_menu');
        jQuery('#burger-menu').toggleClass('active');
    });

	$('a[href^="#"]').on('click', function(e){
        var el = $(this).attr('href');
        if($(el).length > 0) {
            $('html, body').stop().animate({
                scrollTop: $(el).offset().top-80}, 400);
            e.preventDefault();
        }
    });

    jQuery(".totop").click(function () {
        jQuery('html, body').animate({
            scrollTop: jQuery(".sec01").offset().top - 90
        }, 400);
    });

});
