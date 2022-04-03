$(document).ready(function(){
    $("#navbar-btn").click(function(){
        $(".navbar-collaps").slideToggle("very-slow");
    });
    $(window).scroll(function(){
        let pos = $(window).scrollTop();
        if(pos >= 100){
            $(".navbar").addClass("cng-navbar");
        }else{
            $(".navbar").removeClass("cng-navbar");
        }
    });
})