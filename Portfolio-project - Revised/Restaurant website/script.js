$(window).scroll(function() {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    $('#parallax--mb').css('background-position','center '+(wScroll*0.4)+'px');
    console.log(wScroll);
}