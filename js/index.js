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
});