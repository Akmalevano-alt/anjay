// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// ================= CLOSE MENU =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= TYPING EFFECT =================

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Programmer",
    "Future Entrepreneur",
    "student of smk krian 1"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }
    }

    const speed = deleting ? 50 : 100;

    setTimeout(typingEffect, speed);
}

typingEffect();


// ================= YEAR FOOTER =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Validasi
    if (name === "" || email === "" || message === "") {

        alert("Please fill in all required fields!");

        return;
    }


    // Proses kirim simulasi
    const btn = form.querySelector(".btn-submit");

    const originalText = btn.textContent;

    btn.textContent = "Sending...";
    btn.disabled = true;


    setTimeout(() => {

        alert("Thank you! Your message has been sent.");

        form.reset();

        btn.textContent = originalText;
        btn.disabled = false;

    }, 1500);

});


    