export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Creators Cloud, you accept and agree to be bound by these Terms and Conditions.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">2. User Accounts</h2>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>You must be 13 years or older to use this service</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You are responsible for all activities under your account</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">3. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Upload malicious content</li>
              <li>Attempt to breach security measures</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">4. Content Rights</h2>
            <p>You retain rights to content you upload, but grant us license to use it for service operation.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">5. Service Modifications</h2>
            <p>We reserve the right to modify or discontinue the service at any time.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>We are not liable for any indirect, incidental, or consequential damages.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">7. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p className="mt-2">legal@creators-cloud.com</p>
          </section>
        </div>
      </div>
    </div>
  )
} 