$(function(){
    console.log("load")
    $(".main-nav").mouseenter(function(){
        $(".drop").stop().slideDown();
    })
    $(".main-nav").mouseleave(function(){
        $(".drop").stop().slideUp();
    })

    var slidePosition=0;
    var slideLength=0;
    var $sliders=$(".slide-wrap")
    var $slide=$sliders.children(".slide")
    slideLength=$slide.length;
    $auto=null

    $(".slide-wrap>.slide:gt(0)").hide();
    function slideEvent(){
        function nextPlay(){
            if(slidePosition==slideLength-1){
                slidePosition=0;
            }else{
                slidePosition++;
            }
            $slide.fadeOut();
            $slide.eq(slidePosition).fadeIn();
        }
        function prevPlay(){
            if(slidePosition<=0){
                slidePosition=slideLength-1
            }else{
                slidePosition--;
            }
            $slide.fadeOut();
            $slide.eq(slidePosition).fadeIn();
        }
        $(".nextbt").click(function(){
            nextPlay();
        })
        $(".prevbt").click(function(){
            prevPlay();
        })
        function autoPlay(){
            $auto=setInterval(function(){
                nextPlay();
            },8000)
        }
        autoPlay();
    }
    slideEvent();

    $(".n-g-list a").click(function(){
        $(".tab-content").hide();
        $(this.hash).show().css({display:"flex"});
        $(".n-g-list a").removeClass("active");
        $(this).addClass("active")
    })
    $("#notic>ul>li:first-child").click(function(){
        $(".modal-wrap").show();
    })
    $(".modal-close").click(function(){
        $(".modal-wrap").hide();
    })

    $(".family select").change(function(){
        var $href=$(this).val();
        // location.href=$href;
        window.open($href,"_self")
    })
})