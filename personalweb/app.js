const flightPath = {
    curviness: 1.25,
    autoRotate: true, 
    values: [{ x: 100, y: -100},{ x: 300, y: 10},{ x: 500, y: 100}]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".circuit", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const Controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration: 3000,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')
    .addTo(Controller);


