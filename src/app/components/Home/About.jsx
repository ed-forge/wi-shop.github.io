import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full py-32 bg-white dark:bg-neutral-950 border-t border-neutral-200/60 dark:border-neutral-900 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl px-4 md:px-8 relative z-10 text-center">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-700/80 dark:text-red-500/80 mb-6">
                The Paradigm Shift
            </p>
            <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-medium text-neutral-900 dark:text-white mb-8">
                The old agency model is dead.
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mx-auto">
                <p>
                    Most agencies measure success by lines of code and hours billed. They hand you a bloated product packed with features your users will never touch, leaving you with massive technical debt.
                </p>
                <p>
                    Software shouldn't be an endless construction project. It should be a precision tool. We focus on lean, purposeful engineering that directly targets your bottlenecks. We find out what works, we scale it, and we automate the rest.
                </p>
            </div>
        </div>
    </section>
  );
};

export default About;