// GSAP Animations
gsap.from("header", { duration: 1, y: -100, opacity: 0 });
gsap.from(".about-content img", { duration: 1, scale: 0.5, opacity: 0 });
gsap.from(".project-card", { duration: 1, y: 100, opacity: 0, stagger: 0.3 });
gsap.from(".skills-icons img", { duration: 1, scale: 0, stagger: 0.2 });
gsap.from("form", { duration: 1, y: 50, opacity: 0 });

// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Header Animation
    gsap.from("header", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });

    // About Section Animation
    gsap.from("#about .about-container", {
        scrollTrigger: "#about",
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });

    // Skills Section Animation
    gsap.from(".skill-bar", {
        scrollTrigger: "#skills",
        duration: 1,
        x: -100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Projects Animation
    gsap.from(".project-card", {
        scrollTrigger: "#projects",
        duration: 1,
        scale: 0.8,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Contact Info Animation
    gsap.from(".contact-info", {
        scrollTrigger: "#contact",
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out"
    });
});
