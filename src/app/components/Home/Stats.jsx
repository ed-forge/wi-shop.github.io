import React from 'react';

const Stats = () => {
    return (
        <section className="relative w-full py-16 bg-red-950 text-white">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-red-800/50">
                    <div className="text-center px-4">
                        <p className="text-4xl font-light mb-2">99%</p>
                        <p className="text-xs tracking-[0.15em] uppercase text-red-300">Uptime</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-4xl font-light mb-2">24/7</p>
                        <p className="text-xs tracking-[0.15em] uppercase text-red-300">Support</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-4xl font-light mb-2">10k+</p>
                        <p className="text-xs tracking-[0.15em] uppercase text-red-300">Users</p>
                    </div>
                    <div className="text-center px-4">
                        <p className="text-4xl font-light mb-2">50+</p>
                        <p className="text-xs tracking-[0.15em] uppercase text-red-300">Integrations</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;