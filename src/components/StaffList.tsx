import React from 'react';
import StaffCard from './StaffCard';

const staffMembers = [
    {
        name: 'Alfikz',
        role: 'Owner',
        roleColor: '#ef4444', // Red-500
    },
    {
        name: 'Valensca',
        role: 'Penasehat',
        roleColor: '#a855f7', // Purple-500
    },
    {
        name: 'shemska',
        role: 'Developer',
        roleColor: '#3b82f6', // Blue-500
    },
    {
        name: 'Aangmdmask',
        role: 'Builder',
        roleColor: '#22c55e', // Green-500
    },
    {
        name: 'Arya',
        role: 'Helper',
        roleColor: '#eab308', // Yellow-500
    }
];

const StaffList = () => {
    return (
        <section id="staff" className="py-20 px-4 relative bg-black/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                        Meet the Team
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The dedicated team behind Alfikz SMP working hard to provide the best experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
                    {staffMembers.map((staff, index) => (
                        <div key={index} className="flex justify-center">
                            <StaffCard {...staff} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StaffList;
