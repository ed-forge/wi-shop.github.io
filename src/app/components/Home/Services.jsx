import { ShoppingBag, Bot, ReceiptText, Palette } from "lucide-react";

export const Services = () => (
  <div className="w-full px-4 md:px-20 py-16 bg-white dark:bg-black">
    <div className="container mx-auto max-w-9xl">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <span className="text-base font-medium tracking-wider text-red-800 dark:text-red-400 uppercase">Our Expertise</span>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-normal text-left text-neutral-900 dark:text-white">
              Tailored Digital Solutions
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-300 text-left">
              From backend automation and conversational commerce to bespoke design assets, we help your business thrive.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: WhatsApp Commerce */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 h-full lg:col-span-2 p-8 flex justify-between flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-800 dark:text-red-400 mb-8">
              <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium mb-2 text-neutral-900 dark:text-white">WhatsApp Commerce</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                Supercharge your business with WhatsApp Shopping. Enable customer catalog browsing, order placement, and checkout flows directly inside the conversation, powered by the official WhatsApp Business API.
              </p>
            </div>
          </div>

          {/* Service 2: AI Support Agent */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 flex justify-between flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-800 dark:text-red-400 mb-8">
              <Bot className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium mb-2 text-neutral-900 dark:text-white">AI Support Agents</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                Automate support operations with intelligent, context-aware AI agents that resolve customer queries, track packages, and process returns 24/7.
              </p>
            </div>
          </div>

          {/* Service 3: Supplier Invoicing */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-8 flex justify-between flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-800 dark:text-red-400 mb-8">
              <ReceiptText className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium mb-2 text-neutral-900 dark:text-white">Trade & Invoicing</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                Streamline supplier payments. Automate invoice verification, schedule payments, and manage bulk trade operations securely with modern financial workflows.
              </p>
            </div>
          </div>

          {/* Service 4: Brand Scaling & Design */}
          <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 h-full lg:col-span-2 p-8 flex justify-between flex-col hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center text-red-800 dark:text-red-400 mb-8">
              <Palette className="w-6 h-6 stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium mb-2 text-neutral-900 dark:text-white">Creative & Design Assets</h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
                Stand out with premium aesthetics. Our creative team produces high-end promotional video assets, custom web designs, and 3D graphics that engage your target audience and capture attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);