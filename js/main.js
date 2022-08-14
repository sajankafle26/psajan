$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
	$(this).parent(".sub-menu").children("ul").slideToggle("100");
	$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

$(".mb").click(function(){
    $("aside").css({"display":"block", "width":"100%"})
})
$(".fa-angle-double-left").click(function(){
    $("aside").css({"display":"none"})
})