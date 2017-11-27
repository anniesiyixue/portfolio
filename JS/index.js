// For a full explanation of this code, please refer to the blogpost at http://www.bram.us/2014/01/01/skrollr-css-animations-linked-to-scroll-position/

// setSkrollr function extracted from https://www.pingdom.com/2013/
var setSkrollr = function($el, data) {
    for (var i = 0, l = data.length; i < l; i++) {
        var d = data[i],
            px = d[0];
            css = d[1];
        $el.attr('data-' + px, css);
    }
}

jQuery(function($) {
    setSkrollr($('.an-1'), [[0, 'stroke-dashoffset: 1500'], [300, 'stroke-dashoffset: 0']]);
    setSkrollr($('.an-2'), [[300, 'stroke-dashoffset: 1500'], [600, 'stroke-dashoffset: 0']]);
    setSkrollr($('.an-3'), [[600, 'stroke-dashoffset: 600'], [1000, 'stroke-dashoffset: 0']]);
    setSkrollr($('.an-4'), [[1000, 'stroke-dashoffset: 800'], [1400, 'stroke-dashoffset: 0']]);
    setSkrollr($('.an-5'), [[1400, 'stroke-dashoffset: 400'], [1800, 'stroke-dashoffset: 0']]);
    setSkrollr($('.an-6'), [[1800, 'stroke-dashoffset: 400'], [2000, 'stroke-dashoffset: 0']]);

    skrollr.init({
        smoothScrolling: false
    });
});

window.onload = function() {
    var $a2 = $('.an-2');
    var $a3 = $('.an-3');
    var $a4 = $('.an-4');
    var $a5 = $('.an-5');
    var $a6 = $('.an-6');
    var $a7 = $('.an-7');
    $(document).scroll(function() {
        $a2.css({visibility: $(this).scrollTop() > 300? "visible":"hidden"});
        $a3.css({visibility: $(this).scrollTop() > 600? "visible":"hidden"});
        $a4.css({visibility: $(this).scrollTop() > 1000? "visible":"hidden"});
        $a5.css({visibility: $(this).scrollTop() > 1400? "visible":"hidden"});
        $a6.css({visibility: $(this).scrollTop() > 1800? "visible":"hidden"});
        $a7.css({visibility: $(this).scrollTop() > 2000? "visible":"hidden"});
    });

}
