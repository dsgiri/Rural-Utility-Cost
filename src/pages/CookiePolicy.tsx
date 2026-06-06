import React from 'react';
import { SEO } from '../components/SEO';

export default function CookiePolicy() {
  return (
    <div className="p-4 sm:p-8 w-full max-w-4xl mx-auto flex-grow flex flex-col mt-4 mb-16">
      <SEO 
        title="Cookie Policy | Rural Utility Cost" 
        description="Learn how Rural Utility Cost uses cookies and similar technologies." 
      />
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8 border-b border-gray-100 dark:border-gray-700 pb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">What Are Cookies?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">How We Use Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
              <li><strong>Essential:</strong> To remember your accessibility settings (like light/dark theme or font size) so that you have a consistent experience.</li>
              <li><strong>Analytics:</strong> To understand how our visitors use the website (e.g., via Google Analytics) so we can improve our calculators and content.</li>
              <li><strong>Advertising:</strong> To serve relevant advertisements (e.g., via Google AdSense). Note that third-party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Managing Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website (like your accessibility preferences) may become inaccessible or not function properly.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
              For more information on navigating your choices regarding advertising cookies, you can visit the <a href="https://optout.aboutads.info/" target="_blank" rel="noreferrer" className="text-[#1a5f3f] dark:text-[#6ee7b7] font-semibold hover:underline">Network Advertising Initiative Opt-Out page</a> or <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer" className="text-[#1a5f3f] dark:text-[#6ee7b7] font-semibold hover:underline">Google's Ad Settings</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
