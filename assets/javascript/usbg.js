// navbar background color change on scroll

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 680){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(38, 38, 38, 0.97)');
    }
});