$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#Btntop').fadeIn();
        } else {
            $('#Btntop').fadeOut();
        }
    });

    $("#Btntop").click(function(){
        $('html ,body').animate({scrollTop : 0},200);
    });
});