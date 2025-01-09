export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
            <p>When you use Creators Cloud, we collect information that you provide directly to us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Profile information</li>
              <li>Content you upload</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
            <p>We do not share your personal information except:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">5. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">privacy@creators-cloud.com</p>
          </section>
        </div>
      </div>
    </div>
  )
} 
