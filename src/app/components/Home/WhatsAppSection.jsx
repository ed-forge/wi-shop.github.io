'use client'
import React from 'react';
import { Shield, MessageSquare, Code, Play, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const WhatsAppSection = () => {
    return (
        <section id="whatsapp-provider" className="relative w-full py-24 px-4 md:px-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white border-y border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto max-w-9xl relative z-10">
                {/* Upper Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
                    {/* Left Column: Information */}
                    <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                        <div>
                            <span className="text-base font-medium tracking-widest text-amber-700 dark:text-amber-400 uppercase p-2 rounded-lg">
                                WhatsApp API Platform
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight text-neutral-900 dark:text-white leading-tight">
                            Scale your business with WhatsApp API
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
                            WiSHOP simplifies access to the WhatsApp Business Platform. Onboard phone numbers, configure message templates, and automate customer engagement using Meta&apos;s secure Embedded Signup.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href="https://waba.wishop.xyz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-400 text-white dark:text-neutral-950 font-medium px-6 py-4 rounded-lg shadow transition-all cursor-pointer text-base"
                            >
                                Start Onboarding
                            </a>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-neutral-800 dark:text-white border border-neutral-250 dark:border-neutral-700 font-medium px-6 py-3.5 rounded-lg transition-all cursor-pointer text-base"
                            >
                                Talk to Expert
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Code/Dashboard Mockup (Sleek Flat Container) */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg">
                            {/* Window Top Bar */}
                            <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-905 border-b border-neutral-200 dark:border-neutral-800">
                                <div className="flex gap-1.5">
                                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                                </div>
                                <span className="text-base text-neutral-500 dark:text-neutral-400 font-mono select-none">POST /messages</span>
                                <div className="w-6"></div>
                            </div>
                            {/* Window Content */}
                            <div className="p-6 font-mono text-base overflow-x-auto text-left bg-neutral-950 text-neutral-105">
                                <pre className="text-amber-500 dark:text-amber-400">
                                    {`{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "+16505551234",
  "type": "template",
  "template": {
    "name": "wishop_order_delivery",
    "language": {
      "code": "en_US"
    }
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Steps Section */}
                <div>
                    <div className="text-center max-w-xl mx-auto mb-16">
                        <span className="text-base font-medium tracking-wider text-amber-850 dark:text-amber-400 uppercase">Onboarding Guide</span>
                        <h3 className="text-3xl font-medium mt-2 text-neutral-900 dark:text-white">Get Started in 4 Steps</h3>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 mt-2">Connect your business details and launch WhatsApp services within minutes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 relative text-left shadow-sm hover:shadow transition-shadow">
                            <div className="text-base font-mono font-thin text-amber-600 dark:text-amber-400 mb-3">STEP 01</div>
                            <h4 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Open Platform Console</h4>
                            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Go to <a href="https://waba.wishop.xyz" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 font-medium underline">waba.wishop.xyz</a> and sign in with your business credentials.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 relative text-left shadow-sm hover:shadow transition-shadow">
                            <div className="text-base font-mono font-thin text-amber-600 dark:text-amber-400 mb-3">STEP 02</div>
                            <h4 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Connect Meta Profile</h4>
                            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Authorize permissions securely via Meta Javascript SDK to link WABA properties.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 relative text-left shadow-sm hover:shadow transition-shadow">
                            <div className="text-base font-mono font-thin text-amber-600 dark:text-amber-400 mb-3">STEP 03</div>
                            <h4 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Verify Phone Number</h4>
                            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Register your business phone number and complete OTP verification via SMS/voice.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 relative text-left shadow-sm hover:shadow transition-shadow">
                            <div className="text-base font-mono font-thin text-amber-600 dark:text-amber-400 mb-3">STEP 04</div>
                            <h4 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Deploy & Send</h4>
                            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                Build notifications, save message templates, and invoke the API in real time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Compliance Links (Simplified and Sleek) */}
                <div className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-left">
                    <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
                        Usage of WiSHOP WhatsApp solutions is governed by Meta&apos;s {" "}
                        <a href="https://www.whatsapp.com/legal/business-policy/" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-450 underline hover:text-amber-500">WhatsApp Business Policy</a>,{" "}
                        <a href="https://www.whatsapp.com/legal/business-terms/" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-450 underline hover:text-amber-500">WhatsApp Business Terms</a>, and{" "}
                        <a href="https://developers.facebook.com/policy/" target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-450 underline hover:text-amber-500">Meta Developer Policies</a>.
                    </p>
                    <a
                        href="https://waba.wishop.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-base text-amber-600 dark:text-amber-400 font-medium hover:text-amber-500 dark:hover:text-amber-350 transition-colors cursor-pointer"
                    >
                        Developer Console <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default WhatsAppSection;
