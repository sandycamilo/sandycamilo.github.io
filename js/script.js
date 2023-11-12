document.addEventListener("DOMContentLoaded", function () {
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {
    circle.addEventListener("click", function () {
        const link = this.getAttribute("data-link");
        if (link) {
            window.location.href = link;
        }
    });

    animateCircle(circle);
});
});

function animateCircle(circle) {
const maxX = window.innerWidth - circle.offsetWidth;
const maxY = window.innerHeight - circle.offsetHeight;
const animationDuration = 6000; 

function updatePosition() {
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    circle.style.transform = `translate(${newX}px, ${newY}px)`;
    
    setTimeout(() => {
        requestAnimationFrame(updatePosition);
    }, animationDuration);
}

    requestAnimationFrame(updatePosition);
}
