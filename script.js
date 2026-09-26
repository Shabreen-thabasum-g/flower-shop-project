/* =========================================
   BLUSH & BLOOM
   Flower Shop - Main JavaScript
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------
       SMOOTH SCROLLING
       ----------------------------------------- */

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length <= 1
            ) {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    /* -----------------------------------------
       MOBILE NAVIGATION
       ----------------------------------------- */

    const menuButton = document.querySelector(
        ".menu-toggle, .mobile-menu-toggle, .hamburger"
    );

    const navigation = document.querySelector(
        "nav, .navigation, .nav-menu"
    );

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("active");
            menuButton.classList.toggle("active");

        });

    }


    /* -----------------------------------------
       CLOSE MOBILE MENU AFTER CLICK
       ----------------------------------------- */

    const mobileLinks = document.querySelectorAll(
        "nav a, .navigation a, .nav-menu a"
    );

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navigation) {
                navigation.classList.remove("active");
            }

            if (menuButton) {
                menuButton.classList.remove("active");
            }

        });

    });


    /* -----------------------------------------
       HEADER SCROLL EFFECT
       ----------------------------------------- */

    const header = document.querySelector(
        "header, .header, .navbar"
    );

    function handleHeaderScroll() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        handleHeaderScroll
    );

    handleHeaderScroll();


    /* -----------------------------------------
       REVEAL ELEMENTS ON SCROLL
       ----------------------------------------- */

    const revealElements = document.querySelectorAll(
        ".reveal, .fade-in, .animate-on-scroll"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    /* -----------------------------------------
       BUTTON HOVER / CLICK FEEDBACK
       ----------------------------------------- */

    const buttons = document.querySelectorAll(
        ".btn, .button, .cta, button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("clicked");

            setTimeout(function () {
                button.classList.remove("clicked");
            }, 300);

        });

    });


    /* -----------------------------------------
       FLOWER CATEGORY / OCCASION CARDS
       ----------------------------------------- */

    const cards = document.querySelectorAll(
        ".flower-card, .occasion-card, .service-card, .project-card"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.classList.add("hovered");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("hovered");
        });

    });


    /* -----------------------------------------
       IMAGE LOADING FALLBACK
       ----------------------------------------- */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.warn(
                "Image could not be loaded:",
                this.getAttribute("src")
            );

            this.classList.add("image-error");

        });

    });


    /* -----------------------------------------
       CURRENT YEAR
       ----------------------------------------- */

    const yearElements = document.querySelectorAll(
        ".current-year, #current-year"
    );

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* -----------------------------------------
       BACK TO TOP
       ----------------------------------------- */

    const backToTop = document.querySelector(
        ".back-to-top, #backToTop"
    );

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* -----------------------------------------
       CONSOLE MESSAGE
       ----------------------------------------- */

    console.log(
        "Blush & Bloom website loaded successfully."
    );

});
