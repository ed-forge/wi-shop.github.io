import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | WiSHOP WhatsApp Messaging Services",
  description: "Privacy policy and terms of service for WiSHOP WhatsApp messaging API integrations and developer solutions.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-950/50 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-red-800 dark:hover:text-red-400 transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-red-100 dark:bg-red-950/50 text-red-800 dark:text-red-400 rounded-lg">
              <Shield className="w-8 h-8" />
            </span>
            <span className="text-sm font-bold tracking-wider uppercase text-red-800 dark:text-red-400">
              Developer &amp; Tech Provider Policy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Privacy Policy for WhatsApp Messaging Services
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Last Updated: May 28, 2026
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto py-16 px-6 md:px-20">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
          
          {/* Section 1 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">1. Scope and Introduction</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  WiSHOP (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides high-performance API integration, routing, and developer tools (&quot;Services&quot;) that enable our business clients (&quot;Clients&quot;) to connect with their customers (&quot;End Users&quot;) via the WhatsApp Business Platform (using the WhatsApp Business API or Cloud API operated by Meta Platforms, Inc.).
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                  This Privacy Policy applies specifically to the processing of data in connection with our WhatsApp messaging services. By integrating with or using our Services, our Clients agree to the data practices and terms outlined in this policy.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">2. Roles in Data Processing</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Depending on the type of data, WiSHOP operates under distinct regulatory roles:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-lg border border-slate-150 dark:border-zinc-800">
                    <h3 className="font-bold text-red-800 dark:text-red-400 mb-1">WiSHOP as a Data Controller</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      We act as the Data Controller for our Clients&apos; account information, registration details, billing records, API configuration credentials, and technical usage logs. We process this information to manage accounts, process payments, and support system infrastructure.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-lg border border-slate-150 dark:border-zinc-800">
                    <h3 className="font-bold text-red-800 dark:text-red-400 mb-1">WiSHOP as a Data Processor</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      We act as a Data Processor for the contents, recipient telephone numbers, media files, and message metadata transmitted by our Clients to their End Users (&quot;Messaging Data&quot;). Our Clients act as the Data Controllers for their End Users&apos; data, and we process such data strictly in accordance with their documented instructions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">3. Information We Collect and Process</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    We collect and process the following categories of data to provide our WhatsApp integration:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Client Profile Information:</strong> Name, contact details, organization name, billing details, and WhatsApp Business Account (WABA) IDs.
                    </li>
                    <li>
                      <strong>Messaging Data:</strong> Phone numbers (recipient and sender), text content, media attachments, template configurations, delivery receipts (sent, delivered, read statuses), and associated timestamps.
                    </li>
                    <li>
                      <strong>System Logs &amp; Technical Metadata:</strong> IP addresses, API requests, routing paths, failure error codes, and response latency logs, analyzed purely for API optimization and monitoring.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">4. WhatsApp Policy &amp; Client Consent Obligations</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  To utilize our WhatsApp integration Services, Clients must strictly adhere to the WhatsApp and Meta ecosystem rules. As a Client, you warrant, represent, and agree to the following:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Explicit Opt-in Consent:</strong> You must obtain prior, explicit, and legally valid opt-in consent from End Users before sending them any messages (transactional, promotional, or otherwise) via WhatsApp.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Immediate Opt-out Options:</strong> You must provide a clear, accessible, and instantaneous mechanism for End Users to opt out of messaging (e.g., by replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot;) and must immediately stop messaging any End User who opts out.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>WhatsApp Business Policies:</strong> You agree to comply in full with Meta&apos;s <em>WhatsApp Business Messaging Policy</em>, <em>WhatsApp Business Terms of Service</em>, and <em>Meta Developer Policies</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 (Protection / Liability Disclaimers) */}
          <section className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-950/50 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-400 rounded-lg shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-red-850 dark:text-red-400 mb-2">5. Disclaimer of Liability &amp; Indemnification</h2>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  <p>
                    <strong>Independent Provider Status:</strong> WiSHOP is an independent technology service provider. We are not officially associated, sponsored, endorsed, or affiliated directly with WhatsApp Inc., Meta Platforms, Inc., or any of their affiliates.
                  </p>
                  <p>
                    <strong>Platform Outages and Account Suspension:</strong> The API integration is dependent on third-party channels operated by Meta. WiSHOP shall not be held liable or responsible for any platform changes, rate-limit enforcements, API modifications, or server/network outages initiated by Meta. If Meta suspends, terminates, or limits your WhatsApp Business Account (WABA), WiSHOP holds zero liability for loss of business or service disruption.
                  </p>
                  <p className="font-semibold text-red-800 dark:text-red-400">
                    <strong>Indemnification Obligation:</strong> You (the Client) agree to defend, indemnify, and hold harmless WiSHOP, its directors, officers, employees, and agents from and against any and all claims, liabilities, damages, fines, penalties, losses, and costs (including legal fees and court costs) arising out of or related to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your failure to obtain necessary opt-in consents from End Users.</li>
                    <li>Your transmission of prohibited, spam, deceptive, or unsolicited messages via the Service.</li>
                    <li>Any violation of local privacy laws (including GDPR, CCPA, TCPA) or Meta’s developer policies by you or your agents.</li>
                  </ul>
                  <p>
                    <strong>Cap on Liability:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WISHOP&apos;S TOTAL LIABILITY FOR ALL CLAIMS AND DAMAGES ARISING OUT OF OR IN CONNECTION WITH THE WHATSAPP MESSAGE SERVICES EXCEED THE TOTAL FEES PAID BY CLIENT TO WISHOP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM event.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">6. Data Sub-Processors &amp; Security</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We share data with Meta Platforms, Inc. (as the operator of the WhatsApp core communication systems) to facilitate transmission. Our database and routing software run on top of secure, ISO 27001-certified cloud infrastructure. We implement industry-standard AES-256 encryption for data at rest and TLS 1.3 encryption for data in transit.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">7. Data Retention Policy</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  We cache Messaging Data only for a limited timeframe necessary to confirm delivery and conduct system debugging (typically not exceeding thirty (30) days), unless a longer retention period is explicitly requested by our Client or required by law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">8. Rights of Data Subjects (End Users)</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Under global data protection laws (such as GDPR in Europe and CCPA in California), End Users have rights regarding their personal data, including the right to access, rectify, or request erasure. Since WiSHOP processes Messaging Data as a Processor on behalf of the Client, End Users wishing to exercise these rights should contact the respective Client (the Data Controller) directly. If an End User contacts WiSHOP directly, we will refer their inquiry to the Client.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">9. Contact and Inquiries</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  For questions regarding this WhatsApp privacy policy, please contact our support department:
                </p>
                <div className="p-4 bg-slate-50 dark:bg-zinc-900 rounded-lg space-y-1">
                  <p className="text-sm font-semibold">WiSHOP Data Protection Officer</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Representative: Vaibhav Baranwal</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Phone: +91 931515961</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Email: support@wishop.github.io</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
