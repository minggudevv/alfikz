import React from 'react';

const features = [
    {
        icon: 'fa-shield-alt',
        title: 'Antigrief',
        description: 'Protect your builds with our advanced land claiming system. No more griefing!'
    },
    {
        icon: 'fa-lock',
        title: 'Login System',
        description: 'Secure your account with our robust authentication system. Your progress is safe.'
    },
    {
        icon: 'fa-coins',
        title: 'Economy',
        description: 'Engage in a thriving player-driven economy. Trade, sell, and become the richest!'
    },
    {
        icon: 'fa-shopping-cart',
        title: 'Shop',
        description: 'Buy and sell items at the server shop or create your own player shop.'
    },
    {
        icon: 'fa-crown',
        title: 'Ranks',
        description: 'Climb the hierarchy with our unique rank system offering exclusive perks.'
    },
    {
        icon: 'fa-gift',
        title: 'Gacha',
        description: 'Try your luck with our exciting crate system. Win rare and legendary items!'
    },
    {
        icon: 'fa-khanda',
        title: 'PvP',
        description: 'Test your skills in our designated PvP arenas. Fight for glory and rewards.'
    },
    {
        icon: 'fa-users',
        title: 'Friendly Community',
        description: 'Join a welcoming and active community. Make new friends and build together.'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 px-4 relative bg-black/40">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Server Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover what makes Alfikz SMP the best place for your survival adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <i className={`fas ${feature.icon} text-2xl text-primary`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
