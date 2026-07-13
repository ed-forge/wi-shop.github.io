import React from 'react';

const HowWeShowUp = () => {
    return (
        <section className="py-24 bg-red-950 text-white border-y border-red-900">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="mb-16">
                    <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-300/80 mb-5">
                        Our Philosophy
                    </p>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-thin text-white max-w-2xl">
                        How we engineer success. Every single time.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {/* Point 01 */}
                    <div className="flex gap-6">
                        <span className="text-red-300/50 font-mono text-4xl leading-none mt-1">01</span>
                        <div>
                            <h3 className="text-white text-xl font-thin mb-3">Architect First. Build Second.</h3>
                            <p className="text-red-100/60 text-base leading-relaxed">
                                Most agencies rush to write code. We stop and map the entire ecosystem. We ask the hard questions about your data models, user flows, and scalability before a single pixel is pushed. Precision in planning prevents chaos in production.
                            </p>
                        </div>
                    </div>

                    {/* Point 02 */}
                    <div className="flex gap-6">
                        <span className="text-red-300/50 font-mono text-4xl leading-none mt-1">02</span>
                        <div>
                            <h3 className="text-white text-xl font-thin mb-3">Zero Vanity Metrics.</h3>
                            <p className="text-red-100/60 text-base leading-relaxed">
                                We don't care about arbitrary traffic spikes or flashy features that no one uses. We measure success by bottom-line impact: conversion rates, operational hours saved, and tangible revenue growth. If it doesn't move the needle, we don't build it.
                            </p>
                        </div>
                    </div>

                    {/* Point 03 */}
                    <div className="flex gap-6">
                        <span className="text-red-300/50 font-mono text-4xl leading-none mt-1">03</span>
                        <div>
                            <h3 className="text-white text-xl font-thin mb-3">Ship and Iterate.</h3>
                            <p className="text-red-100/60 text-base leading-relaxed">
                                Software isn't a static painting; it's a living engine. We deploy lean, robust versions of your product quickly to gather real user data. We rely on market feedback—not boardroom assumptions—to dictate the next phase of development.
                            </p>
                        </div>
                    </div>

                    {/* Point 04 */}
                    <div className="flex gap-6">
                        <span className="text-red-300/50 font-mono text-4xl leading-none mt-1">04</span>
                        <div>
                            <h3 className="text-white text-xl font-thin mb-3">Transparent Partnerships.</h3>
                            <p className="text-red-100/60 text-base leading-relaxed">
                                No black boxes. No technical jargon meant to confuse you. We treat your budget like our own and provide complete visibility into our codebase and project roadmap. When you work with us, you own the IP and the strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeShowUp;
