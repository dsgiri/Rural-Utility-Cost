import React from 'react';
import { SEO } from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="p-4 sm:p-8 w-full max-w-4xl mx-auto flex-grow flex flex-col mt-4 mb-16">
      <SEO 
        title="Privacy Policy | Rural Utility Cost" 
        description="Privacy policy for Rural Utility Cost. Learn how we collect, use, and protect your information." 
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When you use RuralUtilityCost.com, we may collect certain information about your device and how you interact with our website. This includes data such as your IP address, browser type, referring URLs, and engagement metrics via standard web analytics tools. We do not require you to create an account or provide personal information to use our calculators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. Use of Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The information we collect is used solely to improve our website, analyze user trends, maintain website performance, and deliver relevant advertisements via third-party ad networks (like Google AdSense).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. Third-Party Services and Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use third-party services such as Google Analytics and Google AdSense that may place and read cookies on your browser or use web beacons to collect information as a result of ad serving on our website. Cookies are small data files stored on your device that help us provide better experiences.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. Controlling Your Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings. However, this may affect how you are able to interact with our site as well as other websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions or concerns regarding this Privacy Policy, please contact us via our <a href="/contact" className="text-[#1a5f3f] dark:text-[#6ee7b7] font-semibold hover:underline">Contact Page</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
