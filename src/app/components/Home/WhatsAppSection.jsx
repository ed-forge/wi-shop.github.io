'use client'
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const WhatsAppSection = () => {
    return (
        <section id="whatsapp-provider" className="relative w-full py-24 bg-red-950 border-t border-red-900 overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 relative z-10">

                {/* Upper Hero Grid */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
                    {/* Left Column: Information (Original Typography) */}
                    <div className="flex-[6] flex flex-col text-left">
                        <div>
                            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-300/80 mb-6">
                                Platform Infrastructure
                            </p>
                        </div>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-thin text-white mb-8">
                            Build your own WhatsApp engine.
                        </h2>
                        <p className="text-lg text-red-100/60 leading-relaxed max-w-xl mb-10">
                            Stop renting bloated CRM wrappers. We connect you directly to the WhatsApp Business API. Onboard instantly, own your data, and automate customer engagement with pure, scalable infrastructure.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <a
                                href="https://waba.wishop.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap bg-white text-red-950 hover:bg-red-50 rounded-full px-8 h-12 text-sm font-thin shadow-sm transition-all"
                            >
                                Start Onboarding
                            </a>
                            <Link
                                href="#contact"
                                className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-white border border-red-800 hover:bg-red-900 rounded-full px-6 h-12 text-sm font-thin transition-colors"
                            >
                                Talk to an Expert
                            </Link>
                        </div>

                        <div className="mt-12 flex flex-col gap-3">
                            <div className="flex items-center gap-3 text-red-100/80">
                                <CheckCircle2 className="w-5 h-5 text-red-400" />
                                <span className="text-sm font-thin">Verified Business Profile</span>
                            </div>
                            <div className="flex items-center gap-3 text-red-100/80">
                                <CheckCircle2 className="w-5 h-5 text-red-400" />
                                <span className="text-sm font-thin">Unlimited Automated Flows</span>
                            </div>
                            <div className="flex items-center gap-3 text-red-100/80">
                                <CheckCircle2 className="w-5 h-5 text-red-400" />
                                <span className="text-sm font-thin">100% Data Ownership</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sleek Abstract Chat Mockup */}
                    <div className="flex-[6] w-full relative">
                        <div className="relative max-w-md mx-auto bg-[#0a0a0a] border border-red-900/50 rounded-3xl overflow-hidden shadow-2xl p-6">
                            {/* Mock Header */}
                            <div className="flex items-center gap-4 pb-6 border-b border-neutral-900 mb-6">
                                <div className="w-12 h-12 rounded-full bg-red-900 flex items-center justify-center text-white font-bold text-lg">
                                    W
                                </div>
                                <div>
                                    <h4 className="text-white font-thin">WiSHOP Support</h4>
                                    <p className="text-xs text-red-400 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> Online
                                    </p>
                                </div>
                            </div>

                            {/* Mock Chat Bubbles */}
                            <div className="space-y-6">
                                {/* Agent Bubble */}
                                <div className="flex justify-start">
                                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl rounded-tl-sm p-4 max-w-[85%] text-sm text-neutral-300">
                                        Hi! I noticed you left some items in your cart. Would you like a 10% discount to complete your order?
                                    </div>
                                </div>

                                {/* Rich Media Button */}
                                <div className="flex justify-start">
                                    <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 max-w-[85%] w-full flex items-center justify-center text-red-400 text-sm font-thin hover:bg-neutral-800 cursor-pointer transition-colors">
                                        Apply Discount & Checkout
                                    </div>
                                </div>

                                {/* User Bubble */}
                                <div className="flex justify-end pt-2">
                                    <div className="bg-red-900 text-white rounded-2xl rounded-tr-sm p-4 max-w-[85%] text-sm">
                                        Yes, please! That would be great.
                                    </div>
                                </div>

                                {/* Agent Bubble */}
                                <div className="flex justify-start pt-2">
                                    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl rounded-tl-sm p-4 max-w-[85%] text-sm text-neutral-300">
                                        Done! Your cart is updated. Tap below when you're ready. 🚀
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/5 blur-[120px] rounded-full"></div>
                    </div>
                </div>

                {/* Compliance Links */}
                <div className="mt-20 pt-8 border-t border-red-900/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
                    <p className="text-sm text-red-200/50 max-w-2xl leading-relaxed">
                        Usage of WiSHOP solutions is governed by Meta&apos;s {" "}
                        <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-red-400 underline hover:text-red-300">Business Policy</a> and{" "}
                        <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener noreferrer" className="text-red-400 underline hover:text-red-300">Developer Policies</a>.
                    </p>
                    <a
                        href="https://waba.wishop.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-red-400 font-thin hover:text-red-300 transition-colors group"
                    >
                        Developer Console <span className="transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhatsAppSection;
