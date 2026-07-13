'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
    // Dynamic data for the slider
    const sliderItems = [
        "Find traction, not theater",
        "Build autonomous AI agents",
        "Deploy custom web apps",
        "Own your data architecture",
        "Automate manual workflows",
        "Stop renting SaaS wrappers",
        "Find traction, not theater",
        "Build autonomous AI agents",
        "Deploy custom web apps",
        "Own your data architecture",
        "Automate manual workflows",
        "Stop renting SaaS wrappers",
    ];

    const settings = {
        infinite: true,
        slidesToShow: 6,
        arrows: false,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <section className='relative min-h-[90vh] flex items-center bg-[#fdfaf6] dark:bg-black overflow-hidden transition-colors duration-300'>
            <div className='container mx-auto px-4 md:px-8 max-w-7xl relative pt-32 pb-20 lg:pt-40 lg:pb-28 flex flex-col lg:flex-row gap-16 items-center'>
                
                <div className='flex-[7] text-left flex flex-col'>
                    <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-700 dark:text-red-500 mb-6 flex items-center gap-3">
                        <span className="w-8 h-px bg-red-700/50 dark:bg-red-500/50"></span>
                        Product, Growth, and Internal Tools
                    </p>
                    <h1 className='text-[3.5rem] md:text-[5.5rem] leading-[1.05] font-medium tracking-tight text-neutral-900 dark:text-white mb-8'>
                        Stop buying features. <br/><span className='text-red-800 dark:text-red-500 italic font-serif'>Build solutions.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl mb-10 leading-relaxed font-light">
                        We diagnose the stage you are actually in, find what will land with the cheapest possible experiments, then ship the custom apps, AI agents, and automations that prove it.
                    </p>
                    <div className='flex flex-wrap items-center gap-4'>
                        <Link href="#contact" className='inline-flex shrink-0 items-center gap-2 justify-center whitespace-nowrap bg-red-900 text-white hover:bg-red-800 dark:bg-red-700 dark:hover:bg-red-600 rounded-full px-8 py-4 text-sm font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 group'>
                            Book a Clarity Session
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                        <Link href="#contact" className='inline-flex shrink-0 items-center justify-center whitespace-nowrap text-red-900 dark:text-red-400 border border-red-900/20 dark:border-red-400/20 hover:border-red-900/50 dark:hover:border-red-400/50 hover:bg-red-50 dark:hover:bg-red-950 rounded-full px-8 py-4 text-sm font-medium transition-all group'>
                            View our methodology
                        </Link>
                    </div>
                </div>

                <div className="flex-[4] w-full lg:w-auto relative">
                    <div className="relative slider-container rounded-sm border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm backdrop-blur-sm">
                        <Slider {...settings} >
                            {sliderItems.map((item, index) => (
                                <div key={index} className='hover:bg-red-900 dark:hover:bg-red-800 hover:text-white dark:hover:text-white p-6 border-b border-neutral-100 dark:border-neutral-800 transition-colors cursor-pointer group'>
                                    <h3 className='text-lg font-medium text-center text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors'>{item}</h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                
            </div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="text-[0.6875rem] tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-600 font-medium">Scroll</span>
                <div className="w-px h-8 bg-neutral-300 dark:bg-neutral-800"></div>
            </div>
        </section>
    );
};

export default Hero;
