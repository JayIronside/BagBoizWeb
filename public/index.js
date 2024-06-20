$ (".menu-header").click(function() {
    $ ("#header-titles").slideDown().fadeIn();
    $("#header-titles").css("display", "flex");
    $(".close").css("display", "block");
})

$ (".close").click(function() {
    $ ("#header-titles").slideUp().fadeOut();
    /*$("#header-titles").css("display", "none");*/
})

