import React from 'react';
import { TESTIMONIALS_DATA } from '../constants';

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-k-dark text-k-light-gray parallax-bg" style={{backgroundImage: "url('https://picsum.photos/seed/texture/1920/1080')"}}>
            <div className="absolute inset-0 bg-k-dark opacity-80"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-k-white">Ce que Nos Clients Disent</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-k-gray">
                        La confiance et la satisfaction de nos clients sont notre plus grande fierté.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div 
                            key={testimonial.id}
                            className="fade-in-section bg-k-dark-gray/30 backdrop-blur-sm p-8 rounded-lg flex flex-col"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <p className="text-k-light-gray italic text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <img className="h-14 w-14 rounded-full object-cover" src={testimonial.imageUrl} alt={testimonial.name} />
                                <div className="ml-4">
                                    <p className="font-bold text-k-white">{testimonial.name}</p>
                                    <p className="text-sm text-k-gray">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
