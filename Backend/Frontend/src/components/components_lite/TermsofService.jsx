import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-[#fdfbff] to-[#f6f0fe] min-h-screen py-10 px-6 sm:px-10 md:px-20 lg:px-40">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
        <h1 className="text-3xl font-extrabold text-[#6B3AC2] mb-6 border-b pb-2">
          Terms and Conditions
        </h1>

        <section className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">1. Introduction</h2>
            <p>
              Welcome to <span className="font-medium">[Your Website Name]</span>. These Terms and Conditions govern your use of our website located at <span className="font-medium">[Your Website URL]</span>. By accessing or using our website, you agree to comply with these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">2. Acceptance of Terms</h2>
            <p>
              By using our website, you confirm that you accept these Terms and Conditions and that you agree to comply with them. If you do not agree with any part of these terms, you must not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">3. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes your acceptance of the new Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">4. User Responsibilities</h2>
            <p>
              You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">5. Intellectual Property</h2>
            <p>
              All content, trademarks, and other intellectual property on the website are owned by or licensed to <span className="font-medium">[Your Website Name]</span>. You may not reproduce, distribute, or create derivative works from any content without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, <span className="font-medium">[Your Website Name]</span> shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">7. Governing Law</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of <span className="font-medium">[Your Jurisdiction]</span>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of <span className="font-medium">[Your Jurisdiction]</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#FA4F09]">8. Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at <span className="font-medium">[Your Contact Information]</span>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
