import { Globe, Smartphone, Bot, Zap } from "lucide-react";
import Link from "next/link";

export const Services = () => (
  <section className="py-24 bg-red-950 text-white border-y border-red-900">
    <div className="container mx-auto max-w-7xl px-4 md:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-300/80 mb-5">
            Our Expertise
          </p>
          <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-thin text-white max-w-2xl">
            Tailored Digital Solutions
          </h2>
          <p className="text-lg text-red-100/70 max-w-xl mt-4 leading-relaxed">
            From modern web and mobile experiences to intelligent AI agents and seamless automations, we build software that scales your business.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden">

        {/* Service 1: Websites */}
        <div className="bg-red-950 p-8 lg:p-12 h-full group flex flex-col hover:bg-red-900/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-red-300">
              <Globe className="w-5 h-5 stroke-[1.5]" />
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-red-200 text-[0.65rem] font-semibold tracking-widest uppercase">
              Web Development
            </span>
          </div>
          <h3 className="text-2xl font-thin text-white mb-4">Custom Websites</h3>
          <p className="text-red-100/60 text-base leading-relaxed group-hover:text-red-100/80 transition-colors flex-1">
            Build a commanding online presence with blazing-fast, responsive, and beautifully designed web applications. We specialize in corporate platforms, e-commerce, and bespoke web apps.
          </p>
        </div>

        {/* Service 2: Mobile Apps */}
        <div className="bg-red-950 p-8 lg:p-12 h-full group flex flex-col hover:bg-red-900/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-red-300">
              <Smartphone className="w-5 h-5 stroke-[1.5]" />
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-red-200 text-[0.65rem] font-semibold tracking-widest uppercase">
              Mobile Engineering
            </span>
          </div>
          <h3 className="text-2xl font-thin text-white mb-4">Mobile Applications</h3>
          <p className="text-red-100/60 text-base leading-relaxed group-hover:text-red-100/80 transition-colors flex-1">
            Engage your users on the go. We design and develop native and cross-platform mobile experiences for iOS and Android that are intuitive, secure, and highly performant.
          </p>
        </div>

        {/* Service 3: AI Agents */}
        <div className="bg-red-950 p-8 lg:p-12 h-full group flex flex-col hover:bg-red-900/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-red-300">
              <Bot className="w-5 h-5 stroke-[1.5]" />
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-red-200 text-[0.65rem] font-semibold tracking-widest uppercase">
              Artificial Intelligence
            </span>
          </div>
          <h3 className="text-2xl font-thin text-white mb-4">AI Agents</h3>
          <p className="text-red-100/60 text-base leading-relaxed group-hover:text-red-100/80 transition-colors flex-1">
            Transform customer engagement with context-aware AI. Deploy intelligent support and sales agents that resolve queries, recommend products, and operate autonomously 24/7.
          </p>
        </div>

        {/* Service 4: Automations */}
        <div className="bg-red-950 p-8 lg:p-12 h-full group flex flex-col hover:bg-red-900/40 transition-colors duration-500">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-red-300">
              <Zap className="w-5 h-5 stroke-[1.5]" />
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-red-200 text-[0.65rem] font-semibold tracking-widest uppercase">
              Business Workflows
            </span>
          </div>
          <h3 className="text-2xl font-thin text-white mb-4">Intelligent Automations</h3>
          <p className="text-red-100/60 text-base leading-relaxed group-hover:text-red-100/80 transition-colors flex-1">
            Eliminate manual tasks and streamline operations. We integrate your existing software stack and build custom backend automations to make your business run flawlessly.
          </p>
        </div>

      </div>
    </div>
  </section>
);