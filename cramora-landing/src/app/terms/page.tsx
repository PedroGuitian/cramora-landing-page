'use client';

export default function TermsOfService() {
  return (
    <div className="font-inter bg-gray-50 min-h-screen py-20 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-[#493DC6] mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-10">Last updated: November 2025</p>

        <div className="space-y-6 leading-relaxed text-gray-700">
          <p>
            Welcome to <strong>Cramora AI</strong>. These Terms of Service (“Terms”) govern your use of our website,
            platform, and related services. By accessing or using Cramora AI, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">1. Overview of the Service</h2>
          <p>
            Cramora AI is an educational software platform that helps students study more efficiently using artificial
            intelligence. Users can upload study materials and generate summaries, predicted questions, and quizzes to
            prepare for exams. The service is currently in <strong>beta</strong>, and features or performance may change
            without notice.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">2. Eligibility</h2>
          <p>
            You must be at least 16 years old to use Cramora AI. By using the service, you represent that you meet this
            requirement and that any information you provide is accurate and complete.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">3. Accounts and Responsibilities</h2>
          <ul className="list-disc ml-6">
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You agree not to share your login credentials with others or use the service for unlawful purposes.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">4. Acceptable Use</h2>
          <p>When using Cramora AI, you agree to:</p>
          <ul className="list-disc ml-6">
            <li>Use the service only for lawful and educational purposes.</li>
            <li>Not upload or share copyrighted or confidential materials without authorization.</li>
            <li>Not attempt to exploit, hack, or interfere with the service or its infrastructure.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">5. AI-Generated Content</h2>
          <p>
            Cramora AI uses artificial-intelligence models (such as OpenAI APIs) to generate summaries and questions
            based on your uploaded materials. AI-generated content may contain inaccuracies, and you agree to use it as
            a <strong>study aid only</strong>. Cramora AI does not guarantee the factual accuracy or completeness of any
            generated content.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">6. Academic Honesty</h2>
          <p>
            Cramora AI is intended to assist learning, not to encourage academic dishonesty. You agree not to submit
            AI-generated responses as your own work or violate your school’s academic integrity policies.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">7. Intellectual Property</h2>
          <p>
            All materials, trademarks, logos, and content on Cramora AI are the property of Cramora AI or its licensors.
            You retain ownership of the study materials you upload. By uploading, you grant Cramora AI a limited license
            to process the content solely for generating summaries and study tools.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access at any time if you violate these Terms or misuse
            the platform. Upon termination, your access to your account and any related data may be disabled or deleted.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">9. Disclaimer of Warranties</h2>
          <p>
            Cramora AI is provided “as is” and “as available.” We make no warranties of any kind, express or implied,
            including accuracy, reliability, or suitability for any particular purpose. You use the service at your own
            risk.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">10. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Cramora AI and its team shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the platform, including loss of data,
            academic results, or reputation.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">11. Changes to the Terms</h2>
          <p>
            We may update these Terms from time to time. The latest version will always be posted on this page with an
            updated “Last Updated” date. Continued use of the service constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the State of New York, without regard to its
            conflict of laws principles.
          </p>

          <h2 className="text-2xl font-semibold text-[#191545] mt-8">13. Contact Us</h2>
          <p>
            If you have any questions about these Terms, contact us at{" "}
            <a href="mailto:team@cramora.com" className="text-[#493DC6] underline">
              team@cramora.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
