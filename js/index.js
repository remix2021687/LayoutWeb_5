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

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav3", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav4", "show")
    .addTo(container);

    new ScrollMagic.Scene({triggerElement: ".topnav"})
    .setClassToggle("#nav5", "show")
    .addTo(container);
});