"use client";
import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-background/80 to-background z-0"></div>

            {/* Content */}
            <div className="relative z-10 px-4 max-w-4xl mx-auto">
                <div className="mb-6 inline-block p-2 px-4 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">Season 1 Live Now</span>
                </div>

                <div className="mb-8 relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-float">
                    <img src="/logo.jpg" alt="Alfikz SMP Logo" className="w-full h-full object-cover" />
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 drop-shadow-xl">
                    Alfikz SMP
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                    Experience the ultimate <span className="text-primary font-semibold">Survival Economy</span> adventure in a meticulously crafted <span className="text-accent font-semibold">Medieval</span> world.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText('play.alfikz.my.id');
                            alert('IP Copied!');
                        }}
                        className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-full sm:w-auto overflow-hidden cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            <i className="fas fa-copy text-sm"></i> Copy IP: play.alfikz.my.id
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    </button>

                    <a href="#ranks" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2 hover:border-primary/50">
                        <i className="fas fa-gem text-accent"></i> View Ranks
                    </a>
                    <a href="https://minecraft-mp.com/server/350419/vote/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10 backdrop-blur-sm w-full sm:w-auto flex items-center justify-center gap-2 hover:border-primary/50">
                        <i className="fas fa-check-to-slot text-green-400"></i> Vote Now
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-3xl mx-auto bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/5">
                    <div className="flex flex-col items-center">
                        <i className="fas fa-server text-primary text-2xl mb-2"></i>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Server IP</span>
                        <span className="text-white font-bold">play.alfikz.my.id</span>
                    </div>
                    <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                        <i className="fas fa-network-wired text-accent text-2xl mb-2"></i>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Port</span>
                        <span className="text-white font-bold">25522 (Java & Bedrock)</span>
                    </div>
                    <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0">
                        <i className="fas fa-gamepad text-pink-500 text-2xl mb-2"></i>
                        <span className="text-gray-400 text-sm uppercase tracking-wider">Version</span>
                        <span className="text-white font-bold text-sm">Java 1.20-1.21.x | Bedrock Latest</span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
                <i className="fas fa-chevron-down text-2xl"></i>
            </div>
        </section>
    );
};

export default Hero;
