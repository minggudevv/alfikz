import React from 'react';

interface RankCardProps {
    name: string;
    price: string;
    color: string;
    features: string[];
    icon?: string;
    popular?: boolean;
}

const RankCard: React.FC<RankCardProps> = ({ name, price, color, features, icon, popular }) => {
    const borderColor = popular ? `border-${color}` : 'border-white/10';
    const shadowColor = popular ? `shadow-[0_0_30px_${color}40]` : '';

    return (
        <div
            className={`relative flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${borderColor} ${shadowColor} transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/10 h-full`}
            style={{ borderColor: popular ? color : undefined }}
        >
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Most Popular
                </div>
            )}

            <div className="text-center mb-6">
                <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl shadow-lg"
                    style={{ backgroundColor: `${color}20`, color: color }}
                >
                    <i className={`fas ${icon || 'fa-crown'}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: color }}>{name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-400">IDR</span>
                    <span className="text-4xl font-bold text-white">{price}</span>
                </div>
            </div>

            <div className="flex-grow">
                <ul className="space-y-3 text-sm text-gray-300">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <i className="fas fa-check text-primary mt-1 flex-shrink-0"></i>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <a
                    href={`https://wa.me/6285283123145?text=Halo%20Admin,%20saya%20ingin%20membeli%20rank%20${name}%20seharga%20${price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-bold transition-all transform active:scale-95 block text-center hover:opacity-90"
                    style={{ backgroundColor: color, color: '#000' }}
                >
                    Buy via WhatsApp
                </a>
            </div>
        </div>
    );
};

export default RankCard;
