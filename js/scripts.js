document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("container");
    let layer1 = container.querySelector(".l1");
    let slider = container.querySelector(".slider");
    
    container.addEventListener("mousemove", function(mouse) {
        layer1.style.width = mouse.clientX + "px";
        slider.style.left = mouse.clientX + "px";
    });
});
