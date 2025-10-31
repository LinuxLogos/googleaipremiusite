import React from 'react';
import { SERVICES_DATA } from '../constants';

const ServiceCard: React.FC<{ icon: string; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
    return (
        <div 
            className="fade-in-section bg-white rounded-lg shadow-lg p-8 text-center flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            style={{ transitionDelay: `${delay * 100}ms` }}
        >
            <div className="bg-k-primary-dark text-white rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  { icon === 'building-office-2' && <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 12h6m-6 5.25h6M5.25 3h13.5v18h-13.5z" /> }
                  { icon === 'clipboard-document-check' && <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" /> }
                  { icon === 'user-group' && <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.75-5.462A9.094 9.094 0 0 0 18 7.78l-3.75 5.462a9.094 9.094 0 0 0 3.75 5.462ZM12.5 15.01a9.094 9.094 0 0 1-3.75-5.462A9.094 9.094 0 0 1 12.5 4.08l3.75 5.462a9.094 9.094 0 0 1-3.75 5.462ZM12 19.5a9.094 9.094 0 0 0-3.75-5.462A9.094 9.094 0 0 0 12 8.58l3.75 5.462A9.094 9.094 0 0 0 12 19.5ZM12 4.5a9.094 9.094 0 0 1-3.75 5.462A9.094 9.094 0 0 1 12 15.42l-3.75-5.462A9.094 9.094 0 0 1 12 4.5Z" /> }
                  { icon === 'home-modern' && <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /> }
                </svg>
            </div>
            <h3 className="text-xl font-bold text-k-dark mb-2">{title}</h3>
            <p className="text-k-dark-gray flex-grow">{description}</p>
        </div>
    );
};


export const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-k-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-k-dark">Des Services Complets pour un Projet Serein</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-k-dark-gray">
                        De la première esquisse à la remise des clés, nous vous accompagnons avec expertise et passion.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.title} {...service} delay={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
