import React from 'react';

interface StaffCardProps {
    name: string;
    role: string;
    roleColor: string;
    skinUrl?: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, role, roleColor, skinUrl }) => {
    return (
        <div className="group relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:border-primary/30">
            <div className="relative mb-4 w-24 h-24 rounded-xl overflow-hidden shadow-lg border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                <img
                    src={skinUrl || `https://mc-heads.net/avatar/${name}/100`}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
            <div
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-opacity-20 border border-opacity-30"
                style={{ backgroundColor: `${roleColor}20`, color: roleColor, borderColor: `${roleColor}40` }}
            >
                {role}
            </div>
        </div>
    );
};

export default StaffCard;
