

// Hero Section Mousemove gradient Effect

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    const angle = (x + y) * 0.3;

    const el = document.querySelector(".hero-sub");

    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
    el.style.setProperty("--angle", `${angle}deg`);
});



// Rotating Text Animation

const words=["hub","feed", "community", "playground", "circle"];

let index=0;
let charIndex=0;
let deleting=false;
const speed=100;
const element=document.getElementById("rotate");

 function type() {
    const word = words[index];

    if (!deleting) {
        element.textContent = word.substring(0,charIndex++);
        if (charIndex > word.length) {
            deleting = true;
            setTimeout(type,1200);
            return;
        }
    }

    else {
        element.textContent = word.substring(0,charIndex--);
        if (charIndex < 0){
            deleting = false;
            index = (index + 1) % words.length;

        }
    }

        setTimeout(type, deleting ? 60: speed);
 }

 type()


 // Custom Cursor

const ball = document.createElement("div");
ball.classList.add("cursor-ball");
document.body.appendChild(ball);

document.addEventListener("mousemove", (e) => {
    ball.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.querySelectorAll(".interactive").forEach(el => {
  el.addEventListener("mouseenter", () => {
    ball.style.transform += " scale(1.4)";
  });

  el.addEventListener("mouseleave", () => {
    ball.style.transform = ball.style.transform.replace(" scale(1.4)", "");
  });
});


// Testimonial Slider

const slider = document.querySelector(".testimonials-box");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".box-container1");

let index1 = 0;
const cardsPerPage = 3;
const totalPages = Math.ceil(cards.length / cardsPerPage);

function showPage(i) {
    index1 = i;

    const containerWidth = document.querySelector(".testimonial-slider").offsetWidth;
    slider.style.transform = `translateX(${-containerWidth * index1}px)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function autoSlide() {
    index1 = (index1 + 1) % totalPages;
    showPage(index1);
}

setInterval(autoSlide, 4000);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showPage(i));
});



// Animated Numbers on Scroll

document.addEventListener("DOMContentLoaded",() =>
    {

    const ratingScore = document.querySelector(".rating-score");
    const usersNumber = document.querySelector(".users-number");

    function animateNumber (element, target, duration, decimals = 0)
    {
        const start = 0;
        const startTime = performance.now();

    function update(now)
    {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const value = start + (target - start) * progress;

        element.textContent = value.toFixed(decimals);

        if (progress < 1) 
        {
            requestAnimationFrame(update);
        }
    }
     
        requestAnimationFrame(update);
    }

    if (ratingScore)
    {
        const targetRating = parseFloat(ratingScore.dataset.target);
        animateNumber(ratingScore, targetRating, 800, 1);

    }

    if (usersNumber)
    {
        const targetUsers = parseFloat(usersNumber.dataset.target);
        animateNumber(usersNumber, targetUsers, 1000, 0);
    }

});