// ico menu
$('.hamburger').on("click", function() {
    $(this).toggleClass("is-active");
    $('.menu').fadeToggle(500);
});
// search bar
$('.search-ico').on("click", function(){
    $('.search-top').slideToggle();
});