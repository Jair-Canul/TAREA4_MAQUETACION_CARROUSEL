new WOW().init();

$("#abrir_menu").click(function(){
    $("#menu_responsive").addClass("abrir");
});

$("#cerrar_menu").click(function(){
    $("#menu_responsive").removeClass("abrir");
});

$("#btn-up").click(function() {

    $("html, body").animate({
        scrollTop: 0
    }, 800);
});