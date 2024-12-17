let crsr = document.querySelector('#cursor');
let crsrBlur = document.querySelector('#cursorBlur');

document.addEventListener('mousemove', (dets) => {
    crsr.style.left = dets.x +"px";
    crsr.style.top = dets.y+"px";

    crsrBlur.style.left = dets.x - 150 +"px";
    crsrBlur.style.top = dets.y - 150 +"px";
});

const h4all = document.querySelectorAll('#nav h4');
h4all.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
        crsr.style.scale = 3;
        crsr.style.border = '0.5px solid #fff';
        crsr.style.backgroundColor = 'transparent';
    });

    elem.addEventListener('mouseleave', () => {
        crsr.style.scale = 1;
        crsr.style.border = '0px solid #95C11E';
        crsr.style.backgroundColor = '#95C11E';
    });
});

gsap.to('#nav', {
    // start the animation when "#nav" enters the viewport (once)
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:1.5
    }
});

gsap.to('#main', {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub:1
    }
});

// gsap.to("#about-us img, #about-us-in", {
//     y:90,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:"about-us",
//         scroller:"body",
//         markers: true,
//         start:"top 60%",
//         end:"top 50%",
//         scrub:1
//     }
// });