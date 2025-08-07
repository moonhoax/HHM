"use client";

import { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

type ModalType = "terms" | "privacy" | "content" | "optimization" | "marketing" | "retainer" | null;

const modalContent: Record<Exclude<ModalType, null>, { title: string; body: JSX.Element }> = {
  terms: {
    title: "Terms and Conditions",
    body: (
      <>
        
              <p><strong>Last Updated:</strong> July 26, 2025</p>

              <p>
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the services provided by <strong>Hidden Hand</strong> ("us", "we", or "our"). By engaging us for web development, design, or related digital services, you ("Client", "you") agree to be bound by these Terms.
              </p>

              <h3 className="text-lg font-semibold">1. Services</h3>
              <p>
                We provide web design, development, hosting, maintenance, and related digital services as described in our project proposals or service agreements. All services will be outlined in a formal written proposal, estimate, or contract approved by both parties before work begins.
              </p>

              <h3 className="text-lg font-semibold">2. Payment Terms</h3>
              <ul className="list-disc pl-5">
                <li><strong>Pricing & Invoicing:</strong> All fees are outlined in the proposal. Prices are in [USD or your currency] and exclusive of applicable taxes.</li>
                <li><strong>Deposits:</strong> A non-refundable deposit of 50% is required before project commencement unless otherwise agreed.</li>
                <li><strong>Final Payment:</strong> Remaining payment is due upon project completion, prior to launch or delivery of files.</li>
                <li><strong>Late Payments:</strong> Late payments are subject to a 5% monthly interest or the maximum allowed by law.</li>
              </ul>

              <h3 className="text-lg font-semibold">3. Client Responsibilities</h3>
              <p>You agree to:</p>
              <ul className="list-disc pl-5">
                <li>Provide all required content, images, and assets in a timely manner.</li>
                <li>Review and approve work within a reasonable timeframe (typically 5 business days).</li>
                <li>Respond to feedback requests and communications during the project lifecycle.</li>
              </ul>
              <p>Delays in client responses may result in project timeline adjustments and/or additional fees.</p>

              <h3 className="text-lg font-semibold">4. Revisions & Scope</h3>
              <p>
                The project includes a defined number of design and development revisions (typically 2 rounds unless specified).
                Additional revisions or features not agreed upon in the initial scope will be billed at our standard hourly rate.
              </p>

              <h3 className="text-lg font-semibold">5. Intellectual Property</h3>
              <ul className="list-disc pl-5">
                <li>Upon full payment, you will own the rights to the final website or digital product, excluding third-party components and any proprietary tools used by us.</li>
                <li>We reserve the right to display completed work in our portfolio, unless a written NDA is in place.</li>
              </ul>

              <h3 className="text-lg font-semibold">6. Cancellations & Termination</h3>
              <ul className="list-disc pl-5">
                <li>If the project is cancelled by you after the deposit is paid but before work begins, a refund may be issued minus administrative fees.</li>
                <li>If terminated mid-project, any completed work will be invoiced, and any unpaid balance must be settled within 15 days.</li>
                <li>We may terminate a project for non-payment or unresponsive communication lasting more than 30 days.</li>
              </ul>

              <h3 className="text-lg font-semibold">7. Timelines</h3>
              <p>
                Project timelines are estimated based on current workload and client cooperation. We will do our best to meet agreed deadlines,
                but delays caused by scope changes, late feedback, or unforeseen technical issues may affect delivery.
              </p>

              <h3 className="text-lg font-semibold">8. Warranty & Support</h3>
              <ul className="list-disc pl-5">
                <li>We offer a 30-day post-launch bug fix warranty for all custom development.</li>
                <li>Ongoing support, updates, or hosting are available through a separate maintenance agreement.</li>
              </ul>

              <h3 className="text-lg font-semibold">9. Third-Party Services</h3>
              <p>
                If we assist you in acquiring third-party services (e.g., hosting, plugins, domains), you are subject to those providers’ terms.
                We are not liable for service outages or issues related to those providers.
              </p>

              <h3 className="text-lg font-semibold">10. Limitation of Liability</h3>
              <p>
                We are not liable for:
              </p>
              <ul className="list-disc pl-5">
                <li>Loss of profits or data,</li>
                <li>Downtime due to third-party services,</li>
                <li>Security breaches resulting from unmanaged client credentials or third-party software.</li>
              </ul>
              <p>
                Our total liability under this agreement is limited to the amount you paid us for the services in question.
              </p>

              <h3 className="text-lg font-semibold">11. Privacy & Data</h3>
              <p>
                We respect your privacy. Any information shared with us is kept confidential and used solely to deliver the agreed-upon services.
                View our [Privacy Policy] for more details.
              </p>

              <h3 className="text-lg font-semibold">12. Governing Law</h3>
              <p>
                These Terms are governed by the laws of the State of [Your State or Country], without regard to its conflict of law principles.
              </p>

              <h3 className="text-lg font-semibold">13. Changes to Terms</h3>
              <p>
                We reserve the right to update these Terms at any time. The latest version will always be available on our website.
                Continued use of our services constitutes acceptance of any changes.
              </p>

              <p>
                <strong>Questions?</strong><br />
                Contact us at: <a href="mailto:creators@hiddenhand.biz">creators@hiddenhand.biz</a> <br />
              </p>
      </>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    body: (
      <>
        <div className="text-sm text-gray-800 space-y-4">
        <p><strong>Last Updated:</strong> July 26, 2025</p>
        <p>
          Hidden Hand (“we”, “our”, or “us”) is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your personal data when you interact with our website or services.
        </p>
        <p><strong>1. What Data We Collect</strong><br />
        Name, contact info, usage data, and anything submitted through forms.</p>
        <p><strong>2. How We Use Your Data</strong><br />
        To provide services, communicate with you, and meet legal obligations. We don’t sell your data.</p>
        <p><strong>3. Legal Basis</strong><br />
        Consent, contracts, legal duties, or legitimate interest.</p>
        <p><strong>4. Data Retention</strong><br />
        We keep data only as long as needed for the intended purpose.</p>
        <p><strong>5. Your Rights</strong><br />
        Access, correct, delete, or object. Email us to exercise rights.</p>
        <p><strong>6. Cookies</strong><br />
        Used for analytics. Disable via browser settings.</p>
        <p><strong>7. Security</strong><br />
        We protect your data with appropriate measures.</p>
        <p><strong>8. International Transfers</strong><br />
        We follow GDPR safeguards when transferring data outside the EU.</p>
        <p><strong>9. Contact Us</strong><br />
        <a href="mailto:creators@hiddenhand.biz">creators@hiddenhand.biz</a></p>
      </div>
      </>
    ),
  },
  content: {
    title: "Content Creation",
    body: (
      <>
        <p>
          We offer end-to-end content creation services including copywriting, blog content, SEO-optimized landing pages, video scripting, and branded storytelling.
        </p>
        <p>
          Our team works with you to define your voice, goals, and target demographics, then produces high-performing, original content tailored to your target audience.
        </p>
      </>
    ),
  },
  optimization: {
    title: "Website Optimization",
    body: (
      <>
        <p>
          We optimize your website for speed, SEO, accessibility, and conversions. Our audits and technical improvements help increase rankings and reduce bounce rates.
        </p>
        <p>
          We also provide A/B testing, core web vitals fixes, and CRO strategies tailored to your business goals.
        </p>
      </>
    ),
  },
  marketing: {
    title: "Online Marketing",
    body: (
      <>
        <p>
          Our digital marketing services include PPC (Google Ads, Meta Ads), email campaigns, social media strategy, and growth analytics.
        </p>
        <p>
          We help you reach more customers, retarget lost leads, and track ROI with monthly reports and performance insights.
        </p>
      </>
    ),
  },
  retainer: {
    title: "Retainer Packages",
    body: (
      <>
        <p>
          Flexible annual retainers give you access to our team Mon-Fri from 9-5 EST, for ongoing work: design, updates, marketing, SEO, maintenance, security, general consultation and analytics.
        </p>
        <p>
          Packages are tiered and scale with your business. Save on development time by paying in advance annually! No surprise billing, just reliable, consistent service that includes, email, hosting, domain registration, migration, security, and consultation. 
        </p>
      </>
    ),
  },
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpen = (modal: ModalType) => () => setActiveModal(modal);
  const handleClose = () => setActiveModal(null);

  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={handleOpen("content")}
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                >
                  Content Creation
                </button>
              </li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={handleOpen("optimization")}
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                >
                  Website Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={handleOpen("marketing")}
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                >
                  Online Marketing
                </button>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="space-y-2">
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={handleOpen("retainer")}
                  className="text-indigo-200/65 hover:text-indigo-500 transition"
                >
                  Retainer Packages
                </button>
              </li>
            </ul>
          </div>

          {/* Logo and terms */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © HiddenHand.biz
                <span className="text-gray-700"> · </span>
                <button
                  onClick={handleOpen("terms")}
                  className="text-indigo-200/65 hover:text-indigo-500  ml-1"
                >
                  Terms
                </button>
                <span className="text-gray-700"> · </span>
                <button
                  onClick={handleOpen("privacy")}
                  className="text-indigo-200/65 hover:text-indigo-500  ml-1"
                >
                  Privacy
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* MODAL RENDERING */}
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
                onClick={handleClose}
                aria-label="Close"
              >
                &times;
              </button>

              <h2 className="text-2xl text-gray-800 font-bold mb-4">{modalContent[activeModal].title}</h2>
              <div className="text-sm text-gray-800 space-y-4">{modalContent[activeModal].body}</div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
