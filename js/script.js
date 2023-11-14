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
    const articleHeight = document.querySelector('article').offsetHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const maxY = articleHeight - circle.offsetHeight - footerHeight;
    const animationDuration = 6000; 

function updatePosition() {
    const newX = Math.random() * (window.innerWidth - circle.offsetWidth);
    const newY = Math.random() * maxY;

    circle.style.transform = `translate(${newX}px, ${newY}px)`;
    
    setTimeout(() => {
        requestAnimationFrame(updatePosition);
    }, animationDuration);
}

    requestAnimationFrame(updatePosition);
}