"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`hidden md:block absolute top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${scrolled
                    ? 'opacity-0 blur-sm -translate-y-4 pointer-events-none border-transparent'
                    : 'opacity-100 blur-0 translate-y-0 bg-transparent border-white/5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                {/* Navigation */}
                <nav className="flex items-center gap-8">
                    <Link href="/" className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium">
                        Home
                    </Link>
                    <a href="https://minecraft-mp.com/server/350419/vote/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium">
                        Vote
                    </a>
                    <Link href="/#ranks" className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium">
                        Ranks
                    </Link>
                    <Link href="/#staff" className="text-gray-300 hover:text-white hover:text-primary transition-colors font-medium">
                        Staff
                    </Link>
                    <div className="h-4 w-px bg-white/10"></div>
                    <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                        TOS
                    </Link>
                    <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                        Privacy
                    </Link>
                </nav>

                {/* CTA */}
                <button
                    onClick={() => {
                        navigator.clipboard.writeText('play.alfikz.my.id');
                        alert('IP Copied!');
                    }}
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-all text-sm font-bold flex items-center gap-2"
                >
                    <i className="fas fa-copy"></i>
                    play.alfikz.my.id
                </button>
            </div>
        </header>
    );
};

export default Header;
