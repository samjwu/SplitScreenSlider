document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("container");
    let toplayer = container.querySelector(".top");
    let slider = container.querySelector(".slider");
    
    container.addEventListener("mousemove", function(mouse) {
        toplayer.style.width = mouse.clientX + "px";
        slider.style.left = mouse.clientX + "px";
    });
});
