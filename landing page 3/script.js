// var hover = document.querySelector("#hover");

// hover.addEventListener("mouseenter", function(){
// hover.style.opacity = 1;
// });

// hover.addEventListener("mouseleave" , function(){
//     hover.style.opacity=0;
// })

let textdiv= document.querySelector("#text-div");
let hover = document.querySelector("#hover");

textdiv.addEventListener("mouseenter" , function(){
    hover.style.opacity =1;
});

textdiv.addEventListener("mouseleave",function(){
    hover.style.opacity=0;
})

