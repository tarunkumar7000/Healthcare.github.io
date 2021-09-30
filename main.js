$(document).ready(function(){
    $(window).on('load scroll',function(){
        if($(window).scrollTop()>10){
            $('navbar').addClass('header-active');
        }
        else{
            $('navbar').remove('header-active');
        }
    })
}
)