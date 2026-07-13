"use client";
import React from 'react';

const faqData = [
  {
    question: "What exactly does WiSHOP do?",
    answer: "We stop you from buying disconnected features and start building holistic solutions. WiSHOP offers a comprehensive ecosystem including websites, apps, agentic automations, and custom tools tailored to hook your audience and drive growth. We focus on traction, not theater."
  },
  {
    question: "How does pricing work?",
    answer: "We believe in zero hidden fees and absolute transparency. Pricing is based on the scope of the solution you need—whether it's a focused growth bet or a full platform build. We agree on the metrics and the cost before writing a single line of code."
  },
  {
    question: "What kind of businesses do you work with?",
    answer: "We partner with visionary founders, ambitious operators, and businesses ready to break out of the ordinary. Whether you're in e-commerce, SaaS, or retail, if you need a high-impact digital presence that actually converts, you're our kind of client."
  },
  {
    question: "Do I own what you build?",
    answer: "100%. When we ship a product, a growth system, or internal tooling, it's yours. We build it to empower your team, not to create vendor lock-in. We succeed when you have full control over your revenue engine."
  }
];

const FAQItem = ({ faq }) => {
  return (
    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 transition-all border border-neutral-100 dark:border-neutral-800">
      <h3 className="text-neutral-900 dark:text-white font-medium text-lg mb-4">{faq.question}</h3>
      <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
        {faq.answer}
      </p>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="py-24 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <p className="text-red-600 dark:text-red-500 font-semibold tracking-wide uppercase text-sm mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Frequently asked questions.
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
