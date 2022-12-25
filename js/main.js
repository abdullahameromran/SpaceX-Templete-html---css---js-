// main-btn 
let mainBtn = document.querySelector(".detail1 button");

mainBtn.addEventListener("mousemove", () => {
    mainBtn.style = "color: black";
})
mainBtn.addEventListener("mouseout", () => {
    mainBtn.style = "color: #eee";
});
// ------------------

//btn-2 
let Btn2 = document.querySelector(".c2 .detail1 button");

Btn2.addEventListener("mousemove", () => {
    Btn2.style = "color: black";
})
Btn2.addEventListener("mouseout", () => {
    Btn2.style = "color: #eee";
});

//btn-3 
let Btn3 = document.querySelector(".c3 .detail1 button");

Btn3.addEventListener("mousemove", () => {
    Btn3.style = "color: black";
})
Btn3.addEventListener("mouseout", () => {
    Btn3.style = "color: #eee";
});

//btn-4 
let Btn4 = document.querySelector(".c4 .detail1 button");

Btn4.addEventListener("mousemove", () => {
    Btn4.style = "color: black";
})
Btn4.addEventListener("mouseout", () => {
    Btn4.style = "color: #eee";
});


//btn-5 
let Btn5 = document.querySelector(".c5 .detail1 button");

Btn5.addEventListener("mousemove", () => {
    Btn5.style = "color: black";
})
Btn5.addEventListener("mouseout", () => {
    Btn5.style = "color: #eee";
});

let fixed = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
    fixed.style = "display:block"
});

// window.addEventListener("scroll", () => {
//     fixed.style = "display:block"
// }, false);


// stack over flow <>
// (function() {
//     var timer;
//     $(window).bind('scroll', function() {
//         clearTimeout(timer);
//         timer = setTimeout(refresh, 150);
//     });
//     var refresh = function() {
//         // do stuff
//         fixed.style = "display:none";
//     };
// })();




// fixed navbar
let logo = document.querySelector(".logo");



let dropDown1 = document.querySelectorAll(".drop-down1");
for (let i = 0; i < dropDown1.length; i++) {
    dropDown1[i].addEventListener("click", () => {
        window.scrollTo(0, (i + 1) * 660);
    });
}

// let details = document.querySelectorAll(".det");

//     window.addEventListener("scroll", () => {

//         if (details[].getBoundingClientRect().top < window.innerHeight - 150) {
//             details[i].classList.add("active");
//         } else {
//             details[i].classList.remove("active");
//         }
//     })