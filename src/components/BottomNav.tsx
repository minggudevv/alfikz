"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const BottomNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Bottom Navigation Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-t border-white/10 pb-safe">
                <div className="flex justify-around items-center h-16">
                    <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary active:text-primary transition-colors">
                        <i className="fas fa-home text-lg mb-1"></i>
                        <span className="text-[10px] font-medium">Home</span>
                    </Link>

                    <a href="https://minecraft-mp.com/server/350419/vote/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary active:text-primary transition-colors">
                        <i className="fas fa-check-to-slot text-lg mb-1"></i>
                        <span className="text-[10px] font-medium">Vote</span>
                    </a>

                    <div className="relative -top-5">
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText('play.alfikz.my.id');
                                alert('IP Copied!');
                            }}
                            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] border-4 border-background"
                        >
                            <i className="fas fa-play text-xl ml-1"></i>
                        </button>
                    </div>

                    <Link href="/#ranks" className="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary active:text-primary transition-colors">
                        <i className="fas fa-gem text-lg mb-1"></i>
                        <span className="text-[10px] font-medium">Ranks</span>
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`flex flex-col items-center justify-center w-full h-full transition-colors ${isMenuOpen ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
                    >
                        <i className="fas fa-bars text-lg mb-1"></i>
                        <span className="text-[10px] font-medium">Menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="absolute bottom-20 right-4 w-48 bg-background border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-2 flex flex-col gap-1">
                            <Link href="/#staff" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <i className="fas fa-users w-5 text-center text-accent"></i>
                                <span className="font-medium">Staff Team</span>
                            </Link>
                            <div className="h-px bg-white/5 my-1"></div>
                            <Link href="/terms" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <i className="fas fa-file-contract w-5 text-center text-gray-500"></i>
                                <span className="font-medium">Terms of Service</span>
                            </Link>
                            <Link href="/privacy" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <i className="fas fa-user-shield w-5 text-center text-gray-500"></i>
                                <span className="font-medium">Privacy Policy</span>
                            </Link>
                            <Link href="/cookie-policy" onClick={() => setIsMenuOpen(false)} className="px-4 py-3 hover:bg-white/5 rounded-lg flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <i className="fas fa-cookie w-5 text-center text-gray-500"></i>
                                <span className="font-medium">Cookie Policy</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BottomNav;
