import React, { useEffect, useRef } from 'react';

// Forward declaration for GSAP
declare const gsap: any;

export const Hero: React.FC = () => {
    const heroRef = useRef(null);
    const bgRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(bgRef.current, { scale: 1.2 }, { scale: 1, duration: 1.5, ease: 'power3.out' });
        tl.fromTo(contentRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, "-=1");

        gsap.to(bgRef.current, {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            },
        });
    }, []);

    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://picsum.photos/seed/archihero/1920/1080')" }}
            ></div>
            <div className="absolute inset-0 bg-k-dark opacity-60"></div>
            <div ref={contentRef} className="relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    Construisons Ensemble le Togo de Demain
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-k-light-gray">
                    Votre partenaire de confiance pour des projets architecturaux et de génie civil qui allient esthétique, sécurité et durabilité.
                </p>
                <a href="#contact" onClick={scrollToContact} className="inline-block bg-k-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-k-primary-dark transition-colors duration-300 transform hover:scale-105">
                    Démarrer votre projet
                </a>
            </div>
        </section>
    );
};
