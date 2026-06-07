import React from 'react';
import { SEO } from '../components/SEO';
import { Handshake, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Partners | RuralUtilityCost.com" 
        description="Partnerships and collaboration for RuralUtilityCost.com. We collaborate with extension programs, universities, and rural organizations." 
        path="/partners"
      />
      
      <div className="mb-10 text-center border-b border-gray-200 pb-10">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Handshake className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Partners</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          RuralUtilityCost.com welcomes partnerships that help rural users make better decisions. We are especially interested in collaborations that improve education, accuracy, and practical value.
        </p>
      </div>

      <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 mb-12">
        <h2 className="text-2xl font-semibold mt-8 mb-4">What we look for</h2>
        <p>We are interested in working with:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Extension programs.</li>
          <li>Universities.</li>
          <li>Farm and livestock organizations.</li>
          <li>Rural service providers.</li>
          <li>Educational content collaborators.</li>
          <li>Tool and data partners with relevant expertise.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Partnership goals</h2>
        <p>Good partnerships should help us:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>Improve calculator accuracy.</li>
          <li>Expand useful tools.</li>
          <li>Provide better educational resources.</li>
          <li>Support rural users with clear, reliable information.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Partnership types</h2>
        <p>Partnerships may include:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 list-none pl-0 mt-6">
          <li className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 m-0">Content collaboration</li>
          <li className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 m-0">Calculator review</li>
          <li className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 m-0">Resource sharing</li>
          <li className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 m-0">Educational cross-linking</li>
          <li className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-700 m-0">Joint outreach</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 mt-8 relative overflow-hidden">
        {/* Subtle decorative background element */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-100 rounded-full opacity-50 pointer-events-none"></div>
        
        <h2 className="text-2xl font-bold text-blue-900 mb-6 items-center flex gap-3 relative z-10">
          <Mail className="hidden sm:inline-block text-blue-600 w-6 h-6" />
          How to contact us
        </h2>
        <p className="text-blue-800 mb-6 text-lg relative z-10">
          If your organization serves rural communities and wants to collaborate, contact us through the site's contact page with:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-blue-800 relative z-10 font-medium">
          <li>Your organization name.</li>
          <li>Your area of expertise.</li>
          <li>How you think we could work together.</li>
        </ul>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm relative z-10"
        >
          Go to Contact Page
        </Link>
      </div>

      <div className="mt-8 text-center text-gray-500 italic pb-8">
        Any partnership we list must be real, relevant, and clearly explained.
      </div>
    </div>
  );
}
