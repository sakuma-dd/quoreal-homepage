/* ==========================================================
   Quoreal Corporate Site
   script.js
========================================================== */

"use strict";

/* ==========================================================
   GSAP
========================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ==========================================================
   LENIS
========================================================== */

const lenis = new Lenis({

    duration:1.2,

    smoothWheel:true,

    touchMultiplier:1.5

});

function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* ==========================================================
   HEADER
========================================================== */

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==========================================================
   SMOOTH SCROLL
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",e=>{

        const target=document.querySelector(anchor.getAttribute("href"));

        if(!target)return;

        e.preventDefault();

        lenis.scrollTo(target,{

            offset:-80

        });

    });

});

/* ==========================================================
   REVEAL
========================================================== */

gsap.utils.toArray(".fade-up").forEach(el=>{

    gsap.fromTo(

        el,

        {

            opacity:0,

            y:50

        },

        {

            opacity:1,

            y:0,

            duration:1,

            ease:"power3.out",

            scrollTrigger:{

                trigger:el,

                start:"top 85%"

            }

        }

    );

});

gsap.utils.toArray(".fade-left").forEach(el=>{

    gsap.fromTo(

        el,

        {

            opacity:0,

            x:-60

        },

        {

            opacity:1,

            x:0,

            duration:1,

            ease:"power3.out",

            scrollTrigger:{

                trigger:el,

                start:"top 85%"

            }

        }

    );

});

gsap.utils.toArray(".fade-right").forEach(el=>{

    gsap.fromTo(

        el,

        {

            opacity:0,

            x:60

        },

        {

            opacity:1,

            x:0,

            duration:1,

            ease:"power3.out",

            scrollTrigger:{

                trigger:el,

                start:"top 85%"

            }

        }

    );

});
/* ==========================================================
   HERO SLIDER
========================================================== */

const slides=[...document.querySelectorAll(".slide")];

let currentSlide=0;

let heroTimer;

function showSlide(index){

    slides.forEach((slide,i)=>{

        slide.classList.toggle("active",i===index);

    });

}

function nextSlide(){

    currentSlide++;

    if(currentSlide>=slides.length){

        currentSlide=0;

    }

    showSlide(currentSlide);

}

function startHeroSlider(){

    if(slides.length<=1)return;

    heroTimer=setInterval(nextSlide,5000);

}

function stopHeroSlider(){

    clearInterval(heroTimer);

}

showSlide(currentSlide);

startHeroSlider();

/* ==========================================================
   PAUSE ON HOVER
========================================================== */

const heroSlider=document.querySelector(".hero-slider");

if(heroSlider){

    heroSlider.addEventListener("mouseenter",()=>{

        stopHeroSlider();

    });

    heroSlider.addEventListener("mouseleave",()=>{

        startHeroSlider();

    });

}

/* ==========================================================
   HERO IMAGE PARALLAX
========================================================== */

gsap.to(".hero-slider img",{

    scale:1.12,

    ease:"none",

    scrollTrigger:{

        trigger:".hero",

        start:"top top",

        end:"bottom top",

        scrub:true

    }

});

/* ==========================================================
   HERO CONTENT
========================================================== */

const heroTimeline=gsap.timeline();

heroTimeline

.from(".hero-label",{

    opacity:0,

    y:30,

    duration:.6

})

.from(".hero-message",{

    opacity:0,

    y:40,

    duration:.8

},"-=.3")

.from(".hero-copy",{

    opacity:0,

    y:30,

    duration:.7

},"-=.4")

.from(".hero-buttons",{

    opacity:0,

    y:30,

    duration:.6

},"-=.4")

.from(".hero-stats",{

    opacity:0,

    y:40,

    duration:.7

},"-=.4")

.from(".hero-right",{

    opacity:0,

    x:60,

    duration:1

},"-=.8");

/* ==========================================================
   HERO DATA CARD
========================================================== */

gsap.from(".hero-data-card",{

    opacity:0,

    y:50,

    delay:1,

    duration:.8,

    ease:"power3.out"

});

/* ==========================================================
   INTERSECTION OBSERVER
========================================================== */

const heroObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startHeroSlider();

        }else{

            stopHeroSlider();

        }

    });

});

if(heroSlider){

    heroObserver.observe(heroSlider);

}
/* ==========================================================
   COUNT UP
========================================================== */

const counters=document.querySelectorAll("[data-count]");

counters.forEach(counter=>{

    const end=Number(counter.dataset.count);

    gsap.fromTo(counter,

        {

            innerText:0

        },

        {

            innerText:end,

            duration:2,

            ease:"power2.out",

            snap:{innerText:1},

            scrollTrigger:{

                trigger:counter,

                start:"top 85%"

            },

            onUpdate:function(){

                counter.innerText=

                Math.floor(counter.innerText).toLocaleString();

            }

        }

    );

});

/* ==========================================================
   SERVICE CARD
========================================================== */

gsap.utils.toArray(".service-card").forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:70,

        duration:.8,

        delay:index*.08,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

/* ==========================================================
   WHY CARD
========================================================== */

gsap.utils.toArray(".why-card").forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:60,

        duration:.8,

        delay:index*.1,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

/* ==========================================================
   CASE CARD
========================================================== */

gsap.utils.toArray(".case-card").forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:80,

        duration:.9,

        delay:index*.1,

        ease:"power4.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

});

/* ==========================================================
   FLOW ITEM
========================================================== */

gsap.utils.toArray(".flow-item").forEach(item=>{

    gsap.from(item,{

        opacity:0,

        x:-60,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{

            trigger:item,

            start:"top 85%"

        }

    });

});

/* ==========================================================
   ABOUT IMAGE PARALLAX
========================================================== */

gsap.to(".about-image",{

    y:-80,

    ease:"none",

    scrollTrigger:{

        trigger:".about",

        start:"top bottom",

        end:"bottom top",

        scrub:true

    }

});

/* ==========================================================
   MESSAGE IMAGE
========================================================== */

gsap.from(".message-profile img",{

    scale:.85,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".message",

        start:"top 80%"

    }

});

/* ==========================================================
   COMPANY TABLE
========================================================== */

gsap.from(".company-table",{

    opacity:0,

    y:50,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".company",

        start:"top 80%"

    }

});
/* ==========================================================
   FAQ ACCORDION
========================================================== */

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const button=item.querySelector(".faq-question");

    const answer=item.querySelector(".faq-answer");

    button.addEventListener("click",()=>{

        const opened=item.classList.contains("active");

        faqItems.forEach(faq=>{

            faq.classList.remove("active");

            faq.querySelector(".faq-answer").style.maxHeight=null;

            faq.querySelector(".faq-question")
                .setAttribute("aria-expanded","false");

        });

        if(!opened){

            item.classList.add("active");

            answer.style.maxHeight=answer.scrollHeight+"px";

            button.setAttribute("aria-expanded","true");

        }

    });

});

/* ==========================================================
   BACK TO TOP
========================================================== */

const topButton=document.querySelector(".back-to-top");

if(topButton){

    topButton.addEventListener("click",e=>{

        e.preventDefault();

        lenis.scrollTo(0);

    });

}

/* ==========================================================
   SHOW BACK BUTTON
========================================================== */

gsap.set(".back-to-top",{

    autoAlpha:0,

    y:20

});

ScrollTrigger.create({

    start:300,

    onUpdate:self=>{

        if(self.scroll()>300){

            gsap.to(".back-to-top",{

                autoAlpha:1,

                y:0,

                duration:.3

            });

        }else{

            gsap.to(".back-to-top",{

                autoAlpha:0,

                y:20,

                duration:.3

            });

        }

    }

});

/* ==========================================================
   ACTIVE NAVIGATION
========================================================== */

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".global-nav a");

sections.forEach(section=>{

    ScrollTrigger.create({

        trigger:section,

        start:"top center",

        end:"bottom center",

        onEnter:()=>setActive(section.id),

        onEnterBack:()=>setActive(section.id)

    });

});

function setActive(id){

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+id){

            link.classList.add("active");

        }

    });

}

/* ==========================================================
   SCROLL PROGRESS
========================================================== */

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

    const total=

        document.documentElement.scrollHeight-

        window.innerHeight;

    const percent=

        window.scrollY/total*100;

    progress.style.width=percent+"%";

});

/* ==========================================================
   SECTION OBSERVER
========================================================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("in-view");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll("section").forEach(section=>{

    observer.observe(section);

});
/* ==========================================================
   BUTTON RIPPLE
========================================================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",e=>{

        const ripple=document.createElement("span");

        const rect=button.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=(e.clientX-rect.left-size/2)+"px";
        ripple.style.top=(e.clientY-rect.top-size/2)+"px";

        ripple.className="ripple";

        button.appendChild(ripple);

        ripple.addEventListener("animationend",()=>{

            ripple.remove();

        });

    });

});

/* ==========================================================
   CARD 3D HOVER
========================================================== */

document.querySelectorAll(

".service-card,.case-card,.why-card,.loop-item"

).forEach(card=>{

    card.addEventListener("mousemove",e=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=(x-rect.width/2)/20;

        const rotateX=-(y-rect.height/2)/20;

        gsap.to(card,{

            rotateX,

            rotateY,

            transformPerspective:1000,

            duration:.35,

            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            rotateX:0,

            rotateY:0,

            duration:.5,

            ease:"power3.out"

        });

    });

});

/* ==========================================================
   MAGNET BUTTON
========================================================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("mousemove",e=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;

        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(button,{

            x:x*.12,

            y:y*.12,

            duration:.3

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,

            y:0,

            duration:.4

        });

    });

});

/* ==========================================================
   IMAGE PARALLAX
========================================================== */

document.querySelectorAll("img[data-parallax]").forEach(image=>{

    gsap.to(image,{

        y:-80,

        ease:"none",

        scrollTrigger:{

            trigger:image,

            start:"top bottom",

            end:"bottom top",

            scrub:true

        }

    });

});

/* ==========================================================
   HERO STATS COUNT
========================================================== */

document.querySelectorAll(".hero-stat strong").forEach(el=>{

    const value=parseInt(el.innerText.replace(/\D/g,""));

    if(Number.isNaN(value)) return;

    gsap.fromTo(el,

        {

            innerText:0

        },

        {

            innerText:value,

            duration:2,

            snap:{innerText:1},

            ease:"power2.out",

            onUpdate:function(){

                el.innerText=Math.floor(
                    this.targets()[0].innerText
                )+"+";

            }

        }

    );

});

/* ==========================================================
   FLOATING ELEMENT
========================================================== */

gsap.to(".hero-data-card",{

    y:-10,

    duration:2,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

/* ==========================================================
   SECTION TITLE
========================================================== */

gsap.utils.toArray(".section-header h2").forEach(title=>{

    gsap.from(title,{

        opacity:0,

        y:40,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{

            trigger:title,

            start:"top 85%"

        }

    });

});
/* ==========================================================
   MOBILE MENU
========================================================== */

const menuButton=document.querySelector(".menu-toggle");
const mobileMenu=document.querySelector(".mobile-menu");

if(menuButton&&mobileMenu){

    menuButton.addEventListener("click",()=>{

        menuButton.classList.toggle("active");

        mobileMenu.classList.toggle("active");

        document.body.classList.toggle("menu-open");

    });

    mobileMenu.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            menuButton.classList.remove("active");

            mobileMenu.classList.remove("active");

            document.body.classList.remove("menu-open");

        });

    });

}

/* ==========================================================
   PAGE LOADER
========================================================== */

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loading");

    if(!loader)return;

    gsap.to(loader,{

        opacity:0,

        duration:.8,

        pointerEvents:"none",

        onComplete(){

            loader.remove();

        }

    });

});

/* ==========================================================
   HEADER AUTO HIDE
========================================================== */

let lastScroll=0;

window.addEventListener("scroll",()=>{

    const current=window.pageYOffset;

    if(current<=0){

        header.style.transform="translateY(0)";

        return;

    }

    if(current>lastScroll && current>120){

        header.style.transform="translateY(-100%)";

    }else{

        header.style.transform="translateY(0)";

    }

    lastScroll=current;

});

/* ==========================================================
   RESIZE
========================================================== */

let resizeTimer;

window.addEventListener("resize",()=>{

    clearTimeout(resizeTimer);

    resizeTimer=setTimeout(()=>{

        ScrollTrigger.refresh();

    },200);

});

/* ==========================================================
   REDUCED MOTION
========================================================== */

const reduceMotion=window.matchMedia(

    "(prefers-reduced-motion: reduce)"

);

if(reduceMotion.matches){

    gsap.globalTimeline.clear();

}

/* ==========================================================
   IMAGE LAZY ANIMATION
========================================================== */

document.querySelectorAll("img").forEach(image=>{

    if(image.complete)return;

    image.addEventListener("load",()=>{

        gsap.from(image,{

            opacity:0,

            duration:.6

        });

    });

});

/* ==========================================================
   PERFORMANCE
========================================================== */

ScrollTrigger.config({

    ignoreMobileResize:true

});

ScrollTrigger.normalizeScroll(true);

/* ==========================================================
   CONSOLE
========================================================== */

console.log(

`%cQuoreal Website Ready 🚀`,

`
color:#C6A76A;
font-size:18px;
font-weight:bold;
`

);
/* ==========================================================
   PAGE TRANSITION
========================================================== */

window.addEventListener("pageshow",()=>{

    gsap.from("body",{

        opacity:0,

        duration:.5,

        ease:"power2.out"

    });

});

/* ==========================================================
   SPLIT TYPE
========================================================== */

document.querySelectorAll(".split-text").forEach(element=>{

    const split=new SplitType(element,{

        types:"lines,words"

    });

    gsap.from(split.words,{

        y:30,

        opacity:0,

        stagger:.03,

        duration:.8,

        ease:"power3.out",

        scrollTrigger:{

            trigger:element,

            start:"top 85%"

        }

    });

});

/* ==========================================================
   SAVE SCROLL
========================================================== */

window.addEventListener("beforeunload",()=>{

    sessionStorage.setItem(

        "scrollPosition",

        window.scrollY

    );

});

window.addEventListener("load",()=>{

    const saved=sessionStorage.getItem(

        "scrollPosition"

    );

    if(saved){

        lenis.scrollTo(Number(saved),{

            immediate:true

        });

    }

});

/* ==========================================================
   ACCESSIBILITY
========================================================== */

document.querySelectorAll("button,a").forEach(el=>{

    if(!el.getAttribute("aria-label") &&

       !el.textContent.trim()){

        console.warn(

            "Missing aria-label",

            el

        );

    }

});

/* ==========================================================
   ERROR HANDLING
========================================================== */

window.addEventListener("error",event=>{

    console.error(

        "Application Error",

        event.message

    );

});

/* ==========================================================
   INITIALIZE
========================================================== */

function initializeSite(){

    ScrollTrigger.refresh();

    document.body.classList.add("loaded");

}

window.addEventListener(

    "load",

    initializeSite

);

/* ==========================================================
   CLEANUP
========================================================== */

window.addEventListener(

    "beforeunload",

    ()=>{

        ScrollTrigger.getAll().forEach(trigger=>{

            trigger.kill();

        });

    }

);

/* ==========================================================
   COMPLETE
========================================================== */

console.log(

`
██████╗ ██╗   ██╗ ██████╗ ██████╗ ███████╗ █████╗ ██╗
██╔═══██╗██║   ██║██╔═══██╗██╔══██╗██╔════╝██╔══██╗██║
██║   ██║██║   ██║██║   ██║██████╔╝█████╗  ███████║██║
██║▄▄ ██║██║   ██║██║   ██║██╔══██╗██╔══╝  ██╔══██║██║
╚██████╔╝╚██████╔╝╚██████╔╝██║  ██║███████╗██║  ██║███████╗
 ╚══▀▀═╝  ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝

Quoreal Corporate Site Ready 🚀
`

);
/* ==========================================================
   HEADER SCROLL
========================================================== */

const header = document.querySelector("#site-header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const current = window.scrollY;

    if (current > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

    if (current > lastScroll && current > 120) {

        header.style.transform = "translateY(-100%)";

    } else {

        header.style.transform = "translateY(0)";

    }

    lastScroll = current;

});

window.addEventListener("heroStart", () => {

    const tl = gsap.timeline();

    tl.fromTo(".hero-text-right",
        {
            x: 220,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: .9,
            ease: "power3.out"
        }
    )

    .fromTo(".hero-text-left",
        {
            x: -220,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: .9,
            ease: "power3.out"
        },
        "-=0.7"
    )

    .to(".hero-gold",{
        color:"#C6A76A",
        textShadow:"0 0 18px rgba(198,167,106,.28)",
        duration:.5
    })

    .to(".hero-copy",{
        opacity:1,
        y:0,
        duration:.6
    },"-=0.15")

    .to(".hero-buttons",{
        opacity:1,
        y:0,
        duration:.6
    },"-=0.35");

});