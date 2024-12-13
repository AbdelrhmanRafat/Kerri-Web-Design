let txtTitles = ["Photographer", "Designer", "Web Developer"];
let idx = 0;
let letterIdx = 0;
let interval;

function typeWriter() {
    if (letterIdx < txtTitles[idx].length) {
        headerTxt.innerHTML = `I'm <after>${txtTitles[idx].substring(0, letterIdx + 1)}</after>`;
        letterIdx++;
    } else {
        idx = (idx + 1) % txtTitles.length;
        letterIdx = 0;
    }
}
interval = setInterval(typeWriter, 150);
let colors = ["blue","green","yellow","aqua","pink"];
let colorBoxWidth = $(".color-box").outerWidth();
let headerTxt = document.querySelector(".header-content h1");
$(".setting-icon i").addClass("fa-gear fa-spin");
let isShown = false;
$(".setting").css("left",`-${colorBoxWidth}px`);
$(".color-box ul li").each(function(index){
    $(this).css("background-color",colors[index]);
})
$(".color-box ul li").on("click",function(){
    let currentColor = $(this).css("background-color");
    console.log(currentColor); 
    // $("h1, h2, h3, h4, h5, p").css({
    //     color : currentColor,
    // });
    $(":root").css("--main-color",currentColor);
});
$(".setting-icon ").on("click",function () {
    if(isShown == false){
        $(".setting").animate({
            left : `0px`,
            },300)
    $(".setting-icon i").removeClass("fa-gear fa-spin");
    $(".setting-icon i").addClass("fa-xmark");    
    }
    else {
        $(".setting").animate({
            left : `-${colorBoxWidth}px`,
            },300)
    $(".setting-icon i").addClass("fa-gear fa-spin");
    $(".setting-icon i").removeClass("fa-xmark");
    }
    isShown = !isShown;
  })
jQuery(function () { 
      $(".Loading").fadeOut(3000,() => {
       $("body").css("overflow","auto");
      });    
 });
 $("a.nav-link").on("click",function(){
    $(".active-nav").removeClass("active-nav");
    $(this).addClass("active-nav");
})

 const AboutSectionTop = $("#About").offset().top;
  $(window).on("scroll",function () { 
      if($(window).scrollTop() >= AboutSectionTop){
        $(".navbar").removeClass("bg-transparent shadow-none")
        $(".navbar").addClass("bg-light")
      }
      else {
        $(".navbar").addClass("bg-transparent shadow-none");
        $(".navbar").remove("bg-light")
      }
   })


