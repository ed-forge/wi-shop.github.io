import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Work = () => {
    return (
        <section className="py-24 bg-[#fdfaf6] dark:bg-black transition-colors duration-300">
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-700/80 dark:text-red-500/80 mb-5">
                            Our Work
                        </p>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-medium text-neutral-900 dark:text-white max-w-2xl tracking-tight">
                            Proof in production.
                        </h2>
                    </div>
                    <Link href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white transition-all font-medium text-sm group">
                        View all case studies
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Project 1 */}
                    <div className="group cursor-pointer">
                        <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-6 relative border border-neutral-200 dark:border-neutral-800">
                            <div className="absolute inset-0 bg-red-900/10 dark:bg-red-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            {/* Placeholder for project image */}
                            <div className="w-full h-full flex items-center justify-center text-neutral-500 dark:text-neutral-500 font-mono text-sm bg-neutral-100 dark:bg-neutral-900">
                                [ E-Commerce Platform Snapshot ]
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">
                            Global Retail Scaling
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            We unified their web frontend, mobile app, and WhatsApp support into a single high-performance ecosystem, increasing conversion by 42%.
                        </p>
                    </div>

                    {/* Project 2 */}
                    <div className="group cursor-pointer mt-0 md:mt-12">
                        <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-900 rounded-2xl overflow-hidden mb-6 relative border border-neutral-200 dark:border-neutral-800">
                            <div className="absolute inset-0 bg-red-900/10 dark:bg-red-500/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            {/* Placeholder for project image */}
                            <div className="w-full h-full flex items-center justify-center text-neutral-500 dark:text-neutral-500 font-mono text-sm bg-neutral-100 dark:bg-neutral-900">
                                [ AI Agent Dashboard Snapshot ]
                            </div>
                        </div>
                        <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-2 group-hover:text-red-800 dark:group-hover:text-red-400 transition-colors">
                            Automated Healthcare Triage
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            Deployed a HIPAA-compliant AI agent that reduced human support volume by 60% while improving patient satisfaction scores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
