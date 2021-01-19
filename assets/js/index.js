$(document).ready(function () { 
    $(".change-bg").click(function () {
        console.log('aaa');
        $("body").toggleClass("changeBG");
    });
    $('.slide').slick({
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        pauseOnHover:true
      });
})