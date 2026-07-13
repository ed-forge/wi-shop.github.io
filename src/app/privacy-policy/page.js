import React from 'react';
import Link from 'next/link';
import { Shield, Lock, FileText, ArrowLeft, CheckCircle, AlertTriangle, Scale, UserCheck } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | WiSHOP",
  description: "Privacy policy, intermediary disclosures, and liability terms for WiSHOP services.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Hero Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-zinc-950/50 py-16 px-6 md:px-20">
        <div className="max-w-9xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-red-800 dark:hover:text-red-400 transition-colors mb-8 text-sm font-thin">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-red-100 dark:bg-red-950/50 text-red-800 dark:text-red-400 rounded-lg">
              <Shield className="w-8 h-8" />
            </span>
            <span className="text-sm font-thin tracking-wider uppercase text-red-800 dark:text-red-400">
              India Compliance &amp; Intermediary Policy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight mb-4">
            Privacy Policy &amp; Terms of Processing
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Last Updated: May 28, 2026 | Governing Jurisdiction: New Delhi, India
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-9xl mx-auto py-16 px-6 md:px-20">
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">

          {/* Section 1: Scope & Intermediary Status */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">1. Scope and Intermediary Status</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  WiSHOP (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides high-performance API integration, routing interfaces, and developer tools (&quot;Services&quot;) that enable business clients (&quot;Clients&quot;) to connect with their customers (&quot;End Users&quot;) via the WhatsApp Business Platform operated by Meta Platforms, Inc.
                </p>
                <div className="mt-4 p-4 bg-red-50/50 dark:bg-red-950/10 border border-red-100 dark:border-red-950/30 rounded-lg">
                  <p className="text-sm font-thin text-red-950 dark:text-red-400 mb-1">
                    Safe Harbor Protection under Section 79 of the IT Act, 2000
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    WiSHOP operates strictly as an **Intermediary** under Section 2(1)(w) of the (Indian) Information Technology Act, 2000. WiSHOP does not initiate, modify, or select the receiver of any transmission. As an intermediary, WiSHOP is entitled to full safe harbor protection under Section 79 of the Information Technology Act, 2000, and is not liable for any third-party information, data, or communication links transmitted or routed through our Services.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Roles under DPDP Act, 2023 */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">2. Roles under Digital Personal Data Protection (DPDP) Act, 2023</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  In compliance with the Digital Personal Data Protection Act, 2023 (&quot;DPDP Act&quot;) of India, the roles and responsibilities are allocated as follows:
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-lg border border-slate-150 dark:border-zinc-800">
                    <h3 className="font-thin text-red-800 dark:text-red-400 mb-1">Client as the Data Fiduciary</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      The Client is the **Data Fiduciary** under the DPDP Act. The Client determines the purpose and means of processing personal data. The Client warrants and represents that they have a lawful basis for processing the personal data of the Data Principals (End Users) and have obtained valid, free, specific, informed, unconditional, and unambiguous consent accompanied by a statutory notice in English and appropriate scheduled languages.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-900/50 rounded-lg border border-slate-150 dark:border-zinc-800">
                    <h3 className="font-thin text-red-800 dark:text-red-400 mb-1">WiSHOP as the Data Processor</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      WiSHOP acts strictly as the **Data Processor** on behalf of the Data Fiduciary. WiSHOP processes personal data (such as recipient mobile numbers and message contents) solely to execute the data routing instructions provided by the Client. WiSHOP does not use this data for any independent purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Data We Process */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">3. Information We Collect and Process</h2>
                <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    We collect and process personal data in a highly restricted manner, conforming to the principle of data minimization under Indian privacy regulations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Client Account Information:</strong> Registration details, billing address, contact numbers, tax identifiers (GSTIN/PAN), and API credentials.
                    </li>
                    <li>
                      <strong>Transit Messaging Data:</strong> Recipient phone numbers, message texts, template names, and transit metadata. Message contents are not persistently archived on our servers and are deleted immediately after routing or within a transient buffer window (not exceeding seven (7) days) solely for error resolution and logging.
                    </li>
                    <li>
                      <strong>Technical Logs:</strong> IP address, routing latency, and API error codes, processed solely to monitor system health and security.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Client Warranties & Consent Obligations */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">4. Client Consent &amp; Legal Compliance Obligations</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  The Client is solely responsible for compliance with the DPDP Act, 2023, the Information Technology Act, 2000, and Meta&apos;s WhatsApp Business Policies. The Client warrants and represents that:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Valid DPDP Notice and Consent:</strong> You have obtained valid, verifiable opt-in consent from each Data Principal (End User) prior to initiating any message. You must provide clear notice explaining the data category and processing purposes as per Section 5 of the DPDP Act.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Consent Withdrawal (Opt-out):</strong> You must provide an easy, immediate option for the Data Principal to withdraw consent (e.g., by replying &quot;STOP&quot;). Upon withdrawal, you must immediately cease sending messages to that individual and ensure their data is removed.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-green-600 dark:text-green-400 mt-1">✔</span>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      <strong>Prohibited Use Cases:</strong> You will not use the Service to transmit spam, unsolicited commercial communications, fraudulent alerts, or content violating Section 66A of the IT Act (or any subsequent equivalents under Indian law).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Exclusion & Limitation of Liability */}
          <section className="bg-red-50/50 dark:bg-red-950/10 border border-red-200 dark:border-red-950/50 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-400 rounded-lg shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin text-red-850 dark:text-red-400 mb-2">5. Complete Exclusion &amp; Limitation of Liability</h2>
                <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  <p>
                    <strong>&quot;As Is&quot; and &quot;As Available&quot; Service:</strong> The Services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, either express or implied. WiSHOP does not warrant that the API routing, transmission, or integration will be uninterrupted, error-free, or entirely secure.
                  </p>
                  <p>
                    <strong>Platform Outages and Third-Party Dependencies:</strong> The Service depends entirely on the WhatsApp Business Platform and Cloud API systems operated by Meta Platforms, Inc. WiSHOP is not liable for any service degradation, rate-limiting, API changes, message delivery delays, data loss, or server outages caused by Meta. If Meta suspends or terminates your WhatsApp Business Account (WABA), WiSHOP shall bear no liability whatsoever.
                  </p>
                  <p className="font-thin text-red-800 dark:text-red-400">
                    <strong>Limitation of Liability Cap:</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, WISHOP’S MAXIMUM AGGREGATE LIABILITY FOR ALL CLAIMS, LOSSES, ACTIONS, SUITS, PENALTIES, OR DAMAGES IN CONNECTION WITH THE SERVICES OR THIS POLICY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE, SHALL BE STRICTLY LIMITED TO INR 5,000 (INDIAN RUPEES FIVE THOUSAND ONLY) OR THE ACTUAL NET FEES PAID BY THE CLIENT TO WISHOP IN THE ONE (1) MONTH PRECEDING THE CLAIM EVENT, WHICHEVER IS LOWER.
                  </p>
                  <p>
                    <strong>Consequential Damages:</strong> In no event shall WiSHOP be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, data, or business goodwill.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Indemnification */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">6. Client Indemnification</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  The Client agrees to fully defend, indemnify, and hold harmless WiSHOP, its promoters, directors, employees, and agents from and against any and all claims, regulatory penalties (including those imposed by the Data Protection Board of India, CERT-In, or any other government authority), liabilities, losses, damages, costs, and expenses (including attorney fees) arising from:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm text-slate-600 dark:text-slate-300">
                  <li>Client&apos;s failure to secure valid legal consent or opt-in from Data Principals.</li>
                  <li>Violation of the DPDP Act, 2023, Information Technology Act, 2000, SPDI Rules, 2011, or other applicable Indian laws.</li>
                  <li>Transmission of spam, unsolicited promotional messages, or restricted content.</li>
                  <li>Any unauthorized use or leakage of Client API keys or WhatsApp configuration settings.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Security Practices */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">7. Security Practices &amp; Breach Disclosures</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  We maintain &quot;reasonable security practices and procedures&quot; as mandated under Section 43A of the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. This includes encryption of data in transit (TLS 1.3) and secure server environments.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mt-3">
                  In the event of a security breach or incident, WiSHOP will notify the Client (as Data Fiduciary) to allow them to comply with breach reporting guidelines under Section 8(6) of the DPDP Act, 2023, and directives of the Indian Computer Emergency Response Team (CERT-In).
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Governing Law & Jurisdiction */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">8. Governing Law and Dispute Jurisdiction</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                  This Policy, the Services, and all legal relations between WiSHOP and the Client shall be governed, interpreted, and construed solely in accordance with the laws of the Republic of India, without regard to conflict of law principles.
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mt-3">
                  Any dispute, claim, or legal action arising out of or in connection with these terms or the Services shall be subject to the exclusive jurisdiction of the competent courts located in <strong>New Delhi, India</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Grievance Redressal / Grievance Officer */}
          <section className="bg-white dark:bg-zinc-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
            <div className="flex gap-4 items-start mb-6">
              <div className="p-2 bg-slate-100 dark:bg-zinc-900 rounded-lg text-slate-700 dark:text-slate-300 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-thin mb-2">9. Grievance Officer &amp; Redressal</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4">
                  In accordance with the Information Technology Act, 2000, the SPDI Rules, 2011, and the DPDP Act, 2023, the contact details of the designated Grievance Officer for WiSHOP are provided below. Grievances will be addressed within the timelines prescribed by law.
                </p>
                <div className="p-4 bg-slate-50 dark:bg-zinc-900 rounded-lg space-y-1">
                  <p className="text-sm font-thin">WiSHOP Grievance Officer</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Officer Name: Baibhav Kumar</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Designation: Grievance &amp; Compliance Officer</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Email: support@wishop.xyz</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
