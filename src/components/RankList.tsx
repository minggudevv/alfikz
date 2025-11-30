"use client";

import React, { useState } from 'react';
import RankCard from './RankCard';

type BillingCycle = 'monthly' | 'season';

const ranks = [
    {
        name: 'DUKE',
        basePrice: 125000,
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
        basePrice: 75000,
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
        basePrice: 50000,
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
        basePrice: 30000,
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
        basePrice: 15000,
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
    const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

    return (
        <section id="ranks" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Server Ranks
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                        Support the server and unlock exclusive perks, commands, and kits.
                        Choose the rank that suits your playstyle.
                    </p>

                    {/* Billing Cycle Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'season' : 'monthly')}
                            className="relative w-16 h-8 rounded-full bg-white/10 p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <div
                                className={`w-6 h-6 rounded-full bg-primary shadow-md transform transition-transform duration-300 ${billingCycle === 'season' ? 'translate-x-8' : 'translate-x-0'}`}
                            />
                        </button>
                        <div className="flex flex-col items-start">
                            <span className={`text-sm font-bold ${billingCycle === 'season' ? 'text-white' : 'text-gray-500'}`}>
                                Season <span className="text-xs text-primary ml-1">(3x Price)</span>
                            </span>
                            <span className="text-[10px] text-gray-500">Until End of Season (4 Months)</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {ranks.map((rank, index) => {
                        const price = billingCycle === 'season' ? rank.basePrice * 3 : rank.basePrice;
                        return (
                            <div key={index} className="flex justify-center">
                                <RankCard
                                    {...rank}
                                    price={price}
                                    billingCycle={billingCycle}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center text-sm text-gray-500 italic">
                    * Rank features are subject to change.
                </div>
            </div>
        </section>
    );
};

export default RankList;
