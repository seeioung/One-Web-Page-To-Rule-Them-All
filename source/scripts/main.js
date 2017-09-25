console.log("Hello World!");

// when scrolling
document.onscroll = function(){
    shrink_navbar();
    position_indicator();
    // console.log("scroll");
};

// nav bar change
function shrink_navbar() {
    let nav_bar = document.getElementsByClassName("navbar")[0];
    let nav_top = nav_bar.getBoundingClientRect().top;
    let video_sec = document.getElementsByClassName("video-sec")[0];
    let video_top = video_sec.getBoundingClientRect().top;
    // console.log("nav top:" + nav_top);
    // console.log("video top:" + video_top);

    if (nav_top > video_top) {
        addClass(nav_bar, "navbar-shrink");
    }else {
        removeClass(nav_bar, "navbar-shrink");
    }
}

function addClass(element, className) {
    element.classList.add(className);
    // console.log(element.className);
}

function removeClass(element, className) {
    let newClasses = "";
    let classes = element.className.split(" ");
    for (let i = 0; i < classes.length; i++) {
        if (classes[i] !== className) {
            newClasses += " " + classes[i];
        }
    }
    element.className = newClasses;
}

// positon indicator
function position_indicator() {
    let nav_bar = document.getElementsByClassName("navbar")[0];
    let nav_bottom = nav_bar.getBoundingClientRect().bottom;

    let albums = document.getElementById("albums");
    let albums_top = albums.getBoundingClientRect().top;

    let gallary = document.getElementById("gallary");
    let gallary_top = gallary.getBoundingClientRect().top;

    let album_tag = document.getElementsByClassName("albums-li")[0];
    let gallary_tag = document.getElementsByClassName("gallary-li")[0];

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // at the bottom of the page
        highlight(gallary_tag, album_tag);
        // console.log("at bottom");
    } else if (nav_bottom < albums_top) {
        deHighLight(album_tag, gallary_tag);
        // console.log("no high light");
    } else if (nav_bottom < gallary_top) {
        highlight(album_tag, gallary_tag);
        // console.log("high light album");
    } else {
        highlight(gallary_tag, album_tag);
        // console.log("high light gallary");
    }
}

let normalColor = "rgb(38, 38, 38)";
let highLightColor = "#D96C30";
function highlight(tag1, tag2) {
    tag1.style.backgroundColor = highLightColor;
    tag2.style.backgroundColor = normalColor;
}
function deHighLight(tag1, tag2) {
    tag1.style.backgroundColor = normalColor;
    tag2.style.backgroundColor = normalColor;
}


// smooth scrolling
// https://codepen.io/rleve/pen/iCbgy
'use strict';
let scrollButtons = document.querySelectorAll('.scroll-a');
for (let i = 0; i < scrollButtons.length; i++) {
    scrollButtons[i].addEventListener('click', function(e) {
        e.preventDefault();

        let destID = scrollButtons[i].getAttribute('href');
        let destElement = document.querySelector(destID);

        if (destElement) {
            smoothScroll(destElement);
        }
    }, false);
}

// animate the scroll
let smoothScroll = function (destElement) {
    // Calculate how far and how fast to scroll
    let startY = window.pageYOffset;
    let endY = destElement.offsetTop;
    let distance = endY - startY;
    let step = distance/20;

    let stopAnimation = function () {
        let currentY = window.pageYOffset;
        if ( step >= 0 ) {
            if ( (currentY >= (endY - step)) || ((window.innerHeight + currentY) >= document.body.offsetHeight) ) {
                clearInterval(runAnimation);
            }
        } else {
            if ( currentY <= endY ) {
                clearInterval(runAnimation);
            }
        }
    };
    // Scroll the page by an increment, and check if it's time to stop
    let animateScroll = function () {
        window.scrollBy(0, step);
        stopAnimation();
    };
    let runAnimation = setInterval(animateScroll, 10);
};



// models
function open_model(i){
    let model_id = "model" + i + "-div";
    let model_div = document.getElementById(model_id);
    addClass(model_div, 'model-visible');
}

function close_model(i) {
    let model_id = "model" + i + "-div";
    let model_div = document.getElementById(model_id);
    removeClass(model_div, 'model-visible');
}

let model_div_1 = document.getElementById("model1-div");
model_div_1.addEventListener('click', function() {
    close_model(1);
});

let model_div_2 = document.getElementById("model2-div");
model_div_2.addEventListener('click', function() {
    close_model(2);
});

let model_div_3 = document.getElementById("model3-div");
model_div_3.addEventListener('click', function() {
    close_model(3);
});


let album_img_1 = document.getElementById("album-img-1");
album_img_1.addEventListener('click', function() {
    open_model(1);
});

let album_img_2 = document.getElementById("album-img-2");
album_img_2.addEventListener('click', function() {
    open_model(2);
});

let album_img_3 = document.getElementById("album-img-3");
album_img_3.addEventListener('click', function() {
    open_model(3);
});


// carousel
let currSlide = 0;
let slider = document.getElementsByClassName("slider")[0];
let slides = document.getElementsByClassName("slide");

let next = document.getElementById('next_btn');
let prev = document.getElementById('prev_btn');
next.addEventListener('click', function() {
    if (currSlide === slides.length - 1) {
        return;
    }
    currSlide++;
    slider.children[0].style.marginLeft = (-100*currSlide)+"%";

});
prev.addEventListener('click', function() {
    if (currSlide === 0) {
        return;
    }
    currSlide--;
    slider.children[0].style.marginLeft = (-100*currSlide)+"%";

});
