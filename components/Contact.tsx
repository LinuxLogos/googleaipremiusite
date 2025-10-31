import React, { useState, useMemo } from 'react';
import { SERVICES_DATA } from '../constants';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
    const [status, setStatus] = useState('');

    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Le nom est requis.';
                if (!/^[a-zA-Z\s'-]+$/.test(value)) return 'Le nom contient des caractères invalides.';
                return '';
            case 'email':
                if (!value.trim()) return "L'email est requis.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "L'adresse email est invalide.";
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        const error = validateField(name, value);
        setErrors(prev => ({
            ...prev,
            [name]: error,
        }));
    };

    const isFormValid = useMemo(() => {
        const hasNoErrors = !validateField('name', formData.name) && !validateField('email', formData.email);
        const areAllFieldsFilled = formData.name.trim() !== '' &&
                                 formData.email.trim() !== '' &&
                                 formData.service !== '' &&
                                 formData.message.trim() !== '';
        return hasNoErrors && areAllFieldsFilled;
    }, [formData]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Trigger validation for all fields to show errors if empty
        const nameError = validateField('name', formData.name);
        const emailError = validateField('email', formData.email);

        if (nameError || emailError || !isFormValid) {
            setErrors({ name: nameError, email: emailError });
            return;
        }

        // This is a mock submission. In a real app, you would send this to a backend API.
        setStatus('Merci ! Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.');
        setFormData({ name: '', email: '', service: '', message: '' });
        setErrors({});
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-20 bg-k-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-k-dark">Donnons Vie à Votre Projet</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-k-dark-gray">
                        Contactez-nous pour une consultation gratuite. Parlons de vos idées, de vos envies et de votre budget.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                    <div className="fade-in-section">
                        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                            <div>
                                <label htmlFor="name" className="sr-only">Nom complet</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nom complet"
                                    aria-invalid={!!errors.name}
                                    aria-describedby="name-error"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-k-primary focus:border-k-primary transition-colors ${errors.name ? 'border-red-500' : 'border-k-gray'}`}
                                />
                                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Adresse Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Adresse Email"
                                    aria-invalid={!!errors.email}
                                    aria-describedby="email-error"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-k-primary focus:border-k-primary transition-colors ${errors.email ? 'border-red-500' : 'border-k-gray'}`}
                                />
                                {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
                            </div>
                             <div>
                                <label htmlFor="service" className="sr-only">Quel service vous intéresse ?</label>
                                <select
                                    name="service"
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-k-gray rounded-lg focus:ring-k-primary focus:border-k-primary text-k-dark-gray"
                                >
                                    <option value="" disabled>Sélectionnez un service...</option>
                                    {SERVICES_DATA.map(service => (
                                        <option key={service.title} value={service.title}>{service.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Votre Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Décrivez-nous votre projet..."
                                    className="w-full px-4 py-3 border border-k-gray rounded-lg focus:ring-k-primary focus:border-k-primary"
                                />
                            </div>
                            <div>
                                <button type="submit" disabled={!isFormValid} className="w-full bg-k-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-k-primary-dark transition-colors duration-300 disabled:bg-k-dark-gray disabled:cursor-not-allowed">
                                    Envoyer le Message
                                </button>
                            </div>
                        </form>
                        {status && (
                            <p className="mt-4 text-center p-3 bg-green-100 text-green-800 rounded-lg">{status}</p>
                        )}
                    </div>
                    <div className="fade-in-section space-y-6 text-k-dark-gray md:mt-2">
                         <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 text-k-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-k-dark">Notre Bureau</h3>
                                <p>123 Avenue de la Libération, Lomé, Togo</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                           <div className="flex-shrink-0 h-6 w-6 text-k-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                           </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-k-dark">Téléphone</h3>
                                <p>+228 90 00 00 00</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                            <div className="flex-shrink-0 h-6 w-6 text-k-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-k-dark">Email</h3>
                                <p>contact@koneksi.tg</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};