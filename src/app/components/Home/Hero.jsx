'use client'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';

const Hero = () => {
    // Dynamic data for the slider
    const sliderItems = [
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",
        "Revolutionize your workspace",
        "Boost productivity with AI",
        "Unlock creative solutions",
        "Tailored video production",
        "Stunning 3D designs",
        "Empower your digital presence",
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
        <div className='relative w-full py-24 px-4 md:px-20 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white border-b border-neutral-250 dark:border-neutral-800'>
            <div className='container mx-auto max-w-9xl relative z-10 flex flex-col lg:flex-row gap-16 items-center'>
                <div className='flex-[7] text-left flex flex-col gap-8'>
                    <h1 className='text-5xl md:text-7xl lg:text-8xl font-thin leading-tight tracking-tight'>
                        Revolutionize your <span className='decoration-red-800 dark:decoration-red-400 rounded underline underline-offset-8'>Workspace</span> with <span className='underline decoration-red-800 dark:decoration-red-400 underline-offset-8'>Intelligence</span>
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
                        Deploy smart automated workflows, conversational commerce channels, and stunning digital experiences designed to scale your operations.
                    </p>
                    <div className='mt-4'>
                        <Link href="#contact" className='inline-block text-xl p-5 px-10 text-white font-medium rounded-lg bg-red-800 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-650 shadow transition-all'>
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className="flex-[3] w-full lg:w-auto relative">
                    <div className="relative slider-container border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 overflow-hidden shadow">
                        <Slider {...settings} >
                            {sliderItems.map((item, index) => (
                                <div key={index} className='hover:bg-red-800 hover:text-white p-6 border-b border-neutral-100 dark:border-neutral-800/60 transition-colors'>
                                    <h3 className='text-lg font-normal text-center'>{item}</h3>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
