import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Forward declaration for GSAP
declare const gsap: any;
declare const ScrollTrigger: any;

const App: React.FC = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Fade-in animations for sections
        gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
            gsap.fromTo(section, 
                { autoAlpha: 0, y: 50 }, 
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    }, []);

    return (
        <div className="bg-k-white text-k-text-muted font-sans">
            <Header />
            <main>
                <Hero />
                <WhyUs />
                <Services />
                <Gallery />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
