/* ==========================================================
   QUOREAL OPENING
========================================================== */

window.addEventListener("load", () => {

    const opening = document.getElementById("opening");
    const header = document.querySelector(".header");
    const scrollHint = document.querySelector(".opening-scroll");
    const logo = document.querySelector(".opening-logo");

    if (!opening) return;

    let openingFinished = false;

    /* ==========================================================
       Scroll Lock
    ========================================================== */

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    window.scrollTo(0, 0);

    /* ==========================================================
       Opening Position
    ========================================================== */

    function updateOpeningPosition(){

        const doorScene = document.querySelector(".door-scene");

        if(!doorScene || !logo || !header) return;

        const offset = header.offsetHeight / 2;

        doorScene.style.transform =
            `translate(-50%, calc(-50% + ${offset}px))`;

        logo.style.paddingTop = `${offset}px`;

    }

    updateOpeningPosition();

    window.addEventListener("resize", updateOpeningPosition);

    /* ==========================================================
       Timeline
    ========================================================== */

    setTimeout(() => {
        opening.classList.add("line");
    }, 1000);

    setTimeout(() => {
        opening.classList.add("door-show");
    }, 2500);

    setTimeout(() => {
        opening.classList.add("open");
    }, 3000);

    setTimeout(() => {
        opening.classList.add("flash");
    }, 4800);

    setTimeout(() => {

        opening.classList.remove("flash");
       
        opening.classList.add("logo");

setTimeout(() => {

    opening.style.opacity = "0";
    opening.style.pointerEvents = "none";

}, 1200);
setTimeout(() => {

    opening.remove();

}, 2200);

        openingFinished = true;

        document.body.classList.add("opening-finished");

        /* スクロール解放 */

        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";

       if (scrollHint) {
    scrollHint.classList.add("show");
}

updateOpeningPosition();

/* ==========================
   HERO START
========================== */

console.log("heroStart");
window.dispatchEvent(new Event("heroStart"));

}, 6000);

    /* ==========================================================
       Logo Scroll Animation
    ========================================================== */

    window.addEventListener("scroll", () => {

        if (!openingFinished) return;

        const progress = Math.min(window.scrollY / 180, 1);

        if (logo) {

            logo.style.opacity = 1 - progress;

            logo.style.transform =
                `translateY(${-progress * 60}px)`;

            logo.style.filter =
                `blur(${progress * 10}px)`;

        }

        if (scrollHint) {

            scrollHint.style.opacity =
                1 - progress;

            scrollHint.style.transform =
                `translate(-50%, ${progress * 40}px)`;

            scrollHint.style.filter =
                `blur(${progress * 8}px)`;

        }

    });

});