import React from 'react';
import RankCard from './RankCard';

const ranks = [
    {
        name: 'DUKE',
        price: '125K',
        color: '#a855f7', // Purple-500
        icon: 'fa-chess-king',
        features: [
            '/fly (active)',
            '/repair all (unlimited)',
            '/enderchest, /nick, /feed, /heal',
            '/home 15x',
            'Premium Purple Prefix [DUKE]',
            'Access Crate DUKE'
        ]
    },
    {
        name: 'COUNT',
        price: '75K',
        color: '#22c55e', // Green-500
        popular: true,
        icon: 'fa-chess-queen',
        features: [
            '/fly (specific zones)',
            '/repair (max 50x/day)',
            '/feed, /back, /enderchest',
            '/home 12x',
            'Elegant Green Prefix [COUNT]',
            '/kit count',
            'Limit land 6000'
        ]
    },
    {
        name: 'BARON',
        price: '50K',
        color: '#ec4899', // Pink-500
        icon: 'fa-chess-knight',
        features: [
            '/fly active',
            '/repair (max 30x/day)',
            '/enderchest, /workbench, /feed',
            '/home 9x',
            'Soft Pink Prefix [BARON]',
            '/kit baron',
            'Limit land 5000'
        ]
    },
    {
        name: 'KNIGHT',
        price: '30K',
        color: '#f8fafc', // Slate-50 (White/Black theme)
        icon: 'fa-chess-bishop',
        features: [
            '/back, /kit knight, /feed',
            '/repair (max 15x/day)',
            '/home 6x',
            'Bold B&W Prefix [KNIGHT]',
            'Limit land 4000'
        ]
    },
    {
        name: 'SQUIRE',
        price: '15K',
        color: '#d97706', // Amber-600 (Brownish)
        icon: 'fa-chess-pawn',
        features: [
            '/home 4x',
            '/kit squire',
            'Limit land 3000',
            'Brown Prefix [SQUIRE]'
        ]
    }
];

const RankList = () => {
    return (
        <section id="ranks" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Server Ranks
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Support the server and unlock exclusive perks, commands, and kits.
                        Choose the rank that suits your playstyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {ranks.map((rank, index) => (
                        <div key={index} className="flex justify-center">
                            <RankCard {...rank} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-sm text-gray-500 italic">
                    * Rank features are subject to change.
                </div>
            </div>
        </section>
    );
};

export default RankList;
