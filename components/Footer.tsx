import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-k-dark text-k-light-gray">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-k-white">
                        K<span className="text-k-primary">o</span>neksi Architecture
                    </h2>
                    <p className="mt-2 text-sm">Bâtir l'avenir, un projet à la fois.</p>
                    <div className="mt-4">
                        <p className="text-xs text-k-dark-gray">
                            &copy; {new Date().getFullYear()} Koneksi Architecture. Tous droits réservés.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
