var tl=gsap.timeline();
tl.from("#nav h3",{
    y: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
})
tl.from("#main h1",{
    x: -500,
     opacity: 0,
    duration: 0.7,
    stagger: 0.2,  
})
tl.from("#main img",{
    x: 100,
     opacity: 0, 
     rotate:45,
    duration: 0.5,
    stagger: 0.5,  
})
tl.from("#last h3",{
 x: -600,
    opacity: 0,
    duration: 0.4,
    stagger: 0.5,
})