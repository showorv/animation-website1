//locomotive for smooth

function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotive()


//scroller

// function scrolling(){

// gsap.to('.part1 svg',{
//   transform:'translateY(-100%)',

//   ScrollTrigger:{
//     trigger:'#page1',
//     scroller:'.main',
    
//     start: 'top 0',
//       end: 'top -5%',
//     scrub:true

//   }
// })
// gsap.to('.part2 .links',{
  
//   transform: 'translateY(-100%)',
//   opacity:0,
 
//   ScrollTrigger:{
//     trigger:'#page1',
//     scroller:'.main',
//     start: 'top top',
//     end: 'bottom top',
//     scrub:true

//   }
// })

// }

// scrolling()


//video play animation

function videoicon(){

  let video= document.querySelector('.video-div')
  let playbtn= document.querySelector('.play')
  
  
  //gsap is js library for object moving.
  video.addEventListener('mouseenter',()=>{
    gsap.to(playbtn,{
      scale:1,
      opacity:1
    })
  })
  
  video.addEventListener('mouseleave',()=>{
    gsap.to(playbtn,{
      scale:0,
      opacity:0
    })
  })
  
  video.addEventListener('mousemove', (move)=>{
  
    gsap.to(playbtn,{
      left:move.x-60,
      top:move.y-50
    })
  })

}

videoicon()


//top heading animation

function textanimation(){

  gsap.from('#page1 h1',{
    y:100,
    opacity:0,
    delay:0.3,
    duration:1,
    stagger:0.3
  })
  gsap.from('.video-div',{
    y:50,
    opacity:0,
    delay:1.2,
    duration:1,
    
  })
}
textanimation()

document.addEventListener('mousemove',(dets)=>{
  gsap.to('.cursor',{
    left: dets.x,
    top: dets.y
  })
})

// document.querySelector('.page3-div').addEventListener('mouseenter',()=>{
//   gsap.to('.cursor',{
//     transform: 'translate(-50%,-50%) scale(1)'
//   })
// })
// document.querySelector('.page3-div').addEventListener('mouseleave',()=>{
//   gsap.to('.cursor',{
//     transform: 'translate(-50%,-50%) scale(0)'
//   })
// })

document.querySelectorAll('.page3-div').forEach(function(em){
  em.addEventListener('mouseenter',()=>{
    gsap.to('.cursor',{
      transform:'translate(-50%,-50%) scale(1)'
    })
  })
  em.addEventListener('mouseleave',()=>{
    gsap.to('.cursor',{
      transform:'translate(-50%,-50%) scale(0)'
    })
  })
})