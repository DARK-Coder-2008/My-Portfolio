// Ensure GSAP is loaded
if (typeof gsap === "undefined") {
    var script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    document.head.appendChild(script);
}

// Apply animations to all elements
window.addEventListener("load", function () {
    gsap.utils.toArray(".service-box").forEach(box => {
        let animation = gsap.to(box, {
            rotationY: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });
        
        const toggleAnimation = () => {
            if (animation.isActive()) {
                animation.pause();
                gsap.to(box, {
                    scale: 1.2,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut"
                });
            } 
        };
        

        box.addEventListener("click", toggleAnimation);
        box.addEventListener("touchstart", toggleAnimation);
    });

    let heroAnimation = gsap.to(".hero h2, .hero p", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
    });
    
    const toggleHeroAnimation = () => {
        if (heroAnimation.isActive()) {
            heroAnimation.pause();
        } else {
            heroAnimation.resume();
        }
    };

    document.querySelector(".hero").addEventListener("click", toggleHeroAnimation);
    document.querySelector(".hero").addEventListener("touchstart", toggleHeroAnimation);

    document.querySelectorAll(".service-box").forEach(box => {
        box.addEventListener("mousemove", (e) => {
            const { offsetX, offsetY, target } = e;
            const { offsetWidth, offsetHeight } = target;
            const xRotation = ((offsetY / offsetHeight) - 0.5) * 30;
            const yRotation = ((offsetX / offsetWidth) - 0.5) * 30;
            gsap.to(box, { rotateX: xRotation, rotateY: yRotation, duration: 0.2 });
        });

        box.addEventListener("mouseleave", () => {
            gsap.to(box, { rotateX: 0, rotateY: 0, duration: 0.3 });
        });
    });

    let toggleAnimation = gsap.to(".theme-toggle", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut"
    });

    const toggleThemeAnimation = () => {
        if (toggleAnimation.isActive()) {
            toggleAnimation.pause();
        } else {
            toggleAnimation.resume();
        }
    };

    document.querySelector(".theme-toggle").addEventListener("click", toggleThemeAnimation);
    document.querySelector(".theme-toggle").addEventListener("touchstart", toggleThemeAnimation);

    // Apply motion to all elements
    gsap.utils.toArray("* :not(script)").forEach(el => {
        let fadeInAnimation = gsap.fromTo(el, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1
        });
        
        const toggleFadeAnimation = () => {
            if (fadeInAnimation.isActive()) {
                fadeInAnimation.pause();
            } else {
                fadeInAnimation.resume();
            }
        };

        el.addEventListener("click", toggleFadeAnimation);
        el.addEventListener("touchstart", toggleFadeAnimation);
    });

    let bgAnimation = gsap.to("body", {
        backgroundPositionX: "+=50px",
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "linear"
    });

    const toggleBgAnimation = () => {
        if (bgAnimation.isActive()) {
            bgAnimation.pause();
        } else {
            bgAnimation.resume();
        }
    };

    document.body.addEventListener("click", toggleBgAnimation);
    document.body.addEventListener("touchstart", toggleBgAnimation);
});
// Ensure GSAP is loaded
if (typeof gsap === "undefined") {
    var script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    document.head.appendChild(script);
}

// Apply animations to all elements
window.addEventListener("load", function () {
    gsap.utils.toArray(".service-box").forEach(box => {
        let animation = gsap.to(box, {
            rotationY: 360,
            duration: 5,
            repeat: -1,
            ease: "linear"
        });
        
        const toggleAnimation = () => {
            if (animation.isActive()) {
                animation.pause();
                gsap.to(box, {
                    scale: 1.2,
                    duration: 0.5,
                    yoyo: true,
                    repeat: 1,
                    ease: "power1.inOut",
                    onComplete: () => animation.resume()
                });
            } 
        };

        box.addEventListener("click", toggleAnimation);
        box.addEventListener("touchstart", toggleAnimation);
    });

    let heroAnimation = gsap.to(".hero h2, .hero p", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
    });
    
    const toggleHeroAnimation = () => {
        if (heroAnimation.isActive()) {
            heroAnimation.pause();
            gsap.to(".hero", {
                scale: 1.1,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut",
                onComplete: () => heroAnimation.resume()
            });
        }
    };

    document.querySelector(".hero").addEventListener("click", toggleHeroAnimation);
    document.querySelector(".hero").addEventListener("touchstart", toggleHeroAnimation);

    let bgAnimation = gsap.to("body", {
        backgroundPositionX: "+=50px",
        repeat: -1,
        yoyo: true,
        duration: 5,
        ease: "linear"
    });

    const toggleBgAnimation = () => {
        if (bgAnimation.isActive()) {
            bgAnimation.pause();
            gsap.to("body", {
                scale: 1.02,
                duration: 0.5,
                yoyo: true,
                repeat: 1,
                ease: "power1.inOut",
                onComplete: () => bgAnimation.resume()
            });
        }
    };

    document.body.addEventListener("click", toggleBgAnimation);
    document.body.addEventListener("touchstart", toggleBgAnimation);
});