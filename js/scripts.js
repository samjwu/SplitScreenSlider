document.addEventListener("DOMContentLoaded", function() {
     
});

var wrapper = document.querySelector(".screens");
var toplayer = wrapper.querySelector(".top");
var slider = wrapper.querySelector(".slider");

wrapper.addEventListener("mousemove", function(mouse) {
        slider.style.left = mouse.clientX + "px";
        toplayer.style.width = mouse.clientX + "px";
});