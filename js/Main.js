$(document).ready(function () {
    $(".name, .student, .small-intro").lettering();
    //images overlay effect
    anime({
        targets: '.home .person-overlay',
        translateX: 1100,
        delay: 1000,
        duration: 1500,
        easing: 'easeInSine'

    })
    /*easing effect 특수한 움직임 ,person img*/
    anime({
        targets: '.home .person img',
        opacity: 1,
        delay: 1500,
        duration: 1500,
        easing: 'easeInSine'
    })
    /*easing effect 특수한 움직임, Student*/
    anime({
        targets: '.student span',
        opacity: 1,
        duration: 1500,
        easing: 'easeInSine',
        delay: anime.stagger(100, {
            start: 3000
        })
    })
    /*easing effect 특수한 움직임, name*/
    anime({
        targets: '.name span',
        opacity: 1,
        duration: 3000,
        easing: 'easeInSine',
        delay: anime.stagger(100, {
            start: 2000
        })
    })
    /*UP AND DOWN easing effect*/
    anime({
        targets: '.name .char3,.name .char6,.name .char9',
        keyframes: [{
            translateY: -100,
            duration: 1500
        }],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    anime({
        targets: '.name .char2,.name .char5,.name .char8,.name .char10',
        keyframes: [{
            translateY: 100,
            duration: 1500
        }],
        easing: 'easeInOutExpo',
        delay: 8000,
    })
    //LOGO
    anime({
        targets: '.logo',
        opacity: 1,
        duration: 3000,
        delay: 3000
    })
    //menu
    anime({
        targets: '.menu li',
        opacity: 1,
        duration: 3000,
        delay: anime.stagger(150, {
            start: 4000
        })
    })
    //Intro
    anime({
        targets: '.small-intro span',
        opacity: 1,
        duration: 1000,
        easing: 'easeInSine',
        delay: anime.stagger(50, {
            start: 5000
        })
    })
});