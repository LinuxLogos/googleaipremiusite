import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { PLANS_DATA, PLAN_CATEGORIES } from '../constants';
import { PlanCategory } from '../types';

export const Gallery: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<PlanCategory>(PlanCategory.ALL);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const filteredPlans = useMemo(() => {
        if (activeFilter === PlanCategory.ALL) {
            return PLANS_DATA;
        }
        return PLANS_DATA.filter(plan => plan.category === activeFilter);
    }, [activeFilter]);

    const openLightbox = (index: number) => {
        setSelectedImageIndex(index);
        setIsLightboxOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeLightbox = useCallback(() => {
        setIsLightboxOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    const showNextImage = useCallback(() => {
        setSelectedImageIndex(prevIndex => (prevIndex + 1) % filteredPlans.length);
    }, [filteredPlans.length]);

    const showPrevImage = useCallback(() => {
        setSelectedImageIndex(prevIndex => (prevIndex - 1 + filteredPlans.length) % filteredPlans.length);
    }, [filteredPlans.length]);

    useEffect(() => {
        if (!isLightboxOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNextImage();
            if (e.key === 'ArrowLeft') showPrevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto'; // Cleanup on component unmount
        };
    }, [isLightboxOpen, closeLightbox, showNextImage, showPrevImage]);

    const selectedPlan = filteredPlans[selectedImageIndex];
    
    return (
        <section id="galerie" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-k-dark">Explorez Nos Conceptions</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-k-dark-gray">
                        Découvrez une sélection de nos réalisations et trouvez l'inspiration pour votre futur projet.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-2 mb-10">
                    {PLAN_CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${activeFilter === category ? 'bg-k-primary text-white' : 'bg-k-light-gray text-k-dark-gray hover:bg-k-gray'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPlans.map((plan, index) => (
                        <div 
                            key={plan.id} 
                            className="fade-in-section group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => openLightbox(index)}
                        >
                            <div className="relative">
                                <img src={plan.imageUrl} alt={plan.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <span className="text-xs font-bold uppercase text-k-white bg-k-primary px-2 py-1 rounded">{plan.category}</span>
                                    <h3 className="text-2xl font-bold text-white mt-2">{plan.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-k-dark-gray">{plan.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isLightboxOpen && selectedPlan && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="lightbox-title"
                    className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Main Content */}
                    <div
                        className="relative bg-white p-4 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-start mb-2">
                             <div>
                                <h3 id="lightbox-title" className="text-xl font-bold text-k-dark">{selectedPlan.title}</h3>
                                <p className="text-sm text-k-dark-gray">{selectedPlan.description}</p>
                             </div>
                             <button
                                onClick={closeLightbox}
                                className="p-1 text-k-dark-gray hover:text-k-dark"
                                aria-label="Fermer la vue agrandie"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative flex-grow flex items-center justify-center min-h-0">
                             <img
                                src={selectedPlan.imageUrl}
                                alt={selectedPlan.title}
                                className="max-w-full max-h-[70vh] object-contain"
                            />
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full text-white"
                        aria-label="Image précédente"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); showNextImage(); }}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 p-2 rounded-full text-white"
                        aria-label="Image suivante"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};