document.addEventListener("DOMContentLoaded", function () {

    const goBackButton = document.getElementById("goBack");

    goBackButton.addEventListener("click", function () {

        if (window.history.length > 1 && document.referrer) {
            window.history.back();
        } else {
            window.location.href = "index.html";
        }

    });

    if (typeof gsap !== "undefined") {

        const timeline = gsap.timeline({
            defaults: {
                ease: "power3.out"
            }
        });

        timeline
            .from(".error-logo", {
                opacity: 0,
                y: -25,
                duration: 0.6
            })
            .from(".error-number span", {
                opacity: 0,
                scale: 0.5,
                duration: 0.8,
                stagger: 0.15
            }, "-=0.2")
            .from(".error-globe", {
                opacity: 0,
                rotation: -180,
                scale: 0.3,
                duration: 0.9
            }, "-=0.6")
            .from(".error-text > *", {
                opacity: 0,
                y: 25,
                duration: 0.6,
                stagger: 0.15
            }, "-=0.3")
            .from(".error-actions", {
                opacity: 0,
                y: 20,
                duration: 0.6
            }, "-=0.2")
            .from(".error-footer", {
                opacity: 0,
                duration: 0.5
            }, "-=0.2");

        gsap.to(".error-plane", {
            x: 35,
            y: -20,
            rotation: 5,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".shape-one", {
            y: 40,
            x: 20,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".shape-two", {
            y: -35,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }

});