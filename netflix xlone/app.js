// const fadeOut = () =>{
//     const loaderWrapper =
//     document.querySelector('.wrapper');
//     loaderWrapper.classList.add('.fade');
// }

// window.addEventListener('load',fadeOut);
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

// var vid = document.getElementById("myVideo");

// function enableMute() { 
//   vid.muted = true;
//   document.getElementById("panel").style.display = "none";
// } 

// function disableMute() { 
//   vid.muted = false;
//   document.getElementById("pannel").style.display = "block";
// } 

const high = document.querySelector(".fa-volume-high")
const low =document.querySelector(".fa-volume-xmark")

high.addEventListener('click', ()=>{
    panel.style.display ='block'
    });

   low.addEventListener('click', ()=>{
        pannel.style.display ='block'
        });