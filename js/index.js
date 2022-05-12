$(document).ready(function() {
    $('.lefts').marquee({
        duration: 15000,
        gap: 50,
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'right',
        duplicated: true
    });
    
    $('.rights').marquee({
        duration: 15000,
        gap: 50,
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        duplicated: true
    });

    let container = new ScrollMagic.Controller();

    //Step-1-Nav
    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav2", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav3", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav4", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav5", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle(".step-1-anim1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle(".step-1-img1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle(".step-1-anim2", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle(".step-1-text-1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-2"})
    .setClassToggle(".step-2-header", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-2"})
    .setClassToggle(".step-2-header-text", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-3-box-1"})
    .setClassToggle(".step-3-text-1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-3-box-2"})
    .setClassToggle(".step-3-text-2", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-3-box-3"})
    .setClassToggle(".step-3-text-3", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".step-4"})
    .setClassToggle(".step-4-header", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".box-1"})
    .setClassToggle(".box-1", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".box-2"})
    .setClassToggle(".box-2", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".box-3"})
    .setClassToggle(".box-3", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".box-4"})
    .setClassToggle(".box-4", "show")
    .addTo(container);
});