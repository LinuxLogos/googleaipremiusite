import React from 'react';

const Card: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="fade-in-section bg-k-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-k-light-gray">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-k-primary text-white mb-6 mx-auto">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                {icon === 'shield-check' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 13.036h.008v.016h-.008v-.016Z" />}
                {icon === 'currency-dollar' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.09-.659-1.172-.879-1.172-2.303 0-3.182.59-.44 1.366-.659 2.09-.659 1.172 0 2.344.879 2.344 2.344v.005h-2.345" />}
                {icon === 'academic-cap' && <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />}
             </svg>
        </div>
        <h3 className="text-xl font-bold text-k-dark text-center mb-3">{title}</h3>
        <p className="text-center text-k-dark-gray">{children}</p>
    </div>
);


export const WhyUs: React.FC = () => {
    return (
        <section id="pourquoi-nous" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-k-dark">Votre Projet, Notre Priorité</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-k-dark-gray">
                        Choisir Koneksi, c'est opter pour la tranquillité d'esprit, un budget maîtrisé et une qualité irréprochable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card icon="shield-check" title="La Sécurité Avant Tout">
                        Évitez les risques de malfaçons et les dangers structurels. Nos ingénieurs garantissent des constructions conformes aux normes les plus strictes pour la sécurité de votre famille et de votre investissement.
                    </Card>
                    <Card icon="currency-dollar" title="Un Coût Juste et Transparent">
                        Un accompagnement professionnel est plus abordable que vous ne le pensez. Nous optimisons les plans et les matériaux pour respecter votre budget sans jamais compromettre la qualité.
                    </Card>
                    <Card icon="academic-cap" title="L'Expertise qui Fait la Différence">
                        Bénéficiez de notre savoir-faire pour naviguer les complexités techniques et administratives. Nous transformons vos idées en un projet concret, viable et esthétique.
                    </Card>
                </div>
            </div>
        </section>
    );
};
