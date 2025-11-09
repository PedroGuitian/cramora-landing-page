'use client';

export default function PrivacyPolicy() {
  return (
    <div className="font-inter bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#493DC6] mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-10">Last updated: November 2025</p>

        <div className="space-y-6 leading-relaxed text-gray-700">
          <p>
            Welcome to <strong>Cramora AI</strong>. Your privacy is important to us. 
            This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and platform.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">1. Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li><strong>Account Information:</strong> Email and password when you sign up.</li>
            <li><strong>Uploaded Files:</strong> Study materials (PDFs, notes, etc.) that you upload to generate summaries or questions.</li>
            <li><strong>Usage Data:</strong> Basic analytics such as page visits, browser type, and time spent on the site.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">2. How We Use Your Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc ml-6">
            <li>Provide, operate, and improve Cramora AI.</li>
            <li>Generate study summaries and practice questions from your uploads using AI.</li>
            <li>Send important updates, security notices, or feature announcements.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">3. How Your Data Is Processed</h2>
          <p>
            Uploaded content may be securely processed through third-party AI services (such as OpenAI) to generate responses or summaries.
            Files and outputs are stored in <strong>Supabase</strong> and can be deleted upon request.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">4. Data Protection</h2>
          <p>
            We implement industry-standard security measures to protect your data. 
            However, no online system is completely secure, and we cannot guarantee absolute protection.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">5. Your Rights</h2>
          <p>You may request to:</p>
          <ul className="list-disc ml-6">
            <li>Access, correct, or delete your data.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Request account deletion at any time.</li>
          </ul>
          <p>
            To make a request, contact us at <strong>team@cramora.com</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">6. Cookies</h2>
          <p>
            We may use cookies or similar technologies for analytics and performance tracking.
            You can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">7. Children’s Privacy</h2>
          <p>
            Cramora AI is designed for high school and college students aged 16 and older. 
            We do not knowingly collect personal data from children under 16.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. 
            The latest version will always be available on this page with an updated “Last Updated” date.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">9. Contact Us</h2>
          <p>
            For privacy-related questions or requests, please email us at{" "}
            <a href="mailto:privacy@cramora.com" className="text-[#493DC6] underline">
              team@cramora.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
