import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">Alfikz SMP</h3>
                    <p className="text-gray-400 text-sm">The best medieval survival experience.</p>
                </div>

                <div className="flex gap-6 mb-8">
                    <a
                        href="https://dsc.gg/alfikz-comunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-[#5865F2] flex items-center justify-center text-white hover:bg-[#4752C4] transition-colors shadow-lg hover:shadow-[#5865F2]/50"
                    >
                        <i className="fab fa-discord text-xl"></i>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors shadow-lg hover:shadow-pink-600/50"
                    >
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                    <a
                        href="#"
                        className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-600/50"
                    >
                        <i className="fab fa-youtube text-xl"></i>
                    </a>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Alfikz SMP. All rights reserved. <br />
                    Not affiliated with Mojang Studios.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
