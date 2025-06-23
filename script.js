
 function VideoConAnimation(){
    var videocon=document.querySelector("#video-container")
var playbtn=document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
        


    })
})
videocon.addEventListener("mouseleave",function(){{
    gsap.to(playbtn,{
        scale:0,
        opacity:0

    })
}})
videocon.addEventListener("mousemove",function(dets){{
    gsap.to(playbtn,{

        left:dets.x,
        top:dets.y

    })
}})

 }
 VideoConAnimation()

 function loding(){
     gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.2
 })
 gsap.from(".nav .nav-options ",{
    y:-40,
    delay:0.8,
    opacity:0,
    duration:0.9,
    stagger:0.6
 })
 gsap.from("#video-container ",{
    y:100,
    delay:0.8,
    opacity:0,
    duration:0.9,
    stagger:0.6
 })

 }
loding()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var el=document.querySelector("#elem1")
el.addEventListener("mouseenter",function(){
    gsap.to(".box1",{
        opacity:1
    })
})
var el=document.querySelector("#elem2")
el.addEventListener("mouseenter",function(){
    gsap.to(".box2",{
        opacity:1
    })
})

var el=document.querySelector("#elem3")
el.addEventListener("mouseenter",function(){
    gsap.to(".box3",{
        opacity:1
    })
})
var el=document.querySelector("#elem1")
el.addEventListener("mouseleave",function(){
    gsap.to(".box1",{
        opacity:0
    })
})
var el=document.querySelector("#elem2")
el.addEventListener("mouseleave",function(){
    gsap.to(".box2",{
        opacity:0
    })
})

var el=document.querySelector("#elem3")
el.addEventListener("mouseleave",function(){
    gsap.to(".box3",{
        opacity:0
    })
})


