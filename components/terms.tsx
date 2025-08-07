import { useState, FC } from "react";

const TermsModal: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        View Terms and Conditions
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-xl w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>

            <div className="text-sm text-gray-800 space-y-4">
              <p><strong>Last Updated:</strong> July 26, 2025</p>

              <p>
                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the services provided by <strong>[Your Agency Name]</strong> ("us", "we", or "our"). By engaging us for web development, design, or related digital services, you ("Client", "you") agree to be bound by these Terms.
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
                Contact us at: [email@youragency.com]<br />
                [Your Business Address]<br />
                [Phone Number]
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TermsModal;
