//  window.onload = function() {
//     alert("Please register to continue!");
//   };

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navHeader = document.querySelector(".nav-header");
 
    hamburger.addEventListener("click", () => {
       navHeader.classList.toggle("active");
    });
 });

 