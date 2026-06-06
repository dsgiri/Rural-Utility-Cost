import React from 'react';
import { SEO } from '../components/SEO';
import { Handshake, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Partners() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Partners & Collaboration" 
        description="Partner with RuralUtilityCost.com. We collaborate with extension programs, universities, and rural organizations." 
        path="/partners"
      />
      
      <div className="mb-10 text-center">
        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Handshake className="w-8 h-8" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Partners</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          RuralUtilityCost.com is open to partnerships that help rural users make better decisions.
        </p>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden mb-8">
        <div className="p-8 border-b border-gray-100 bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">We are especially interested in collaborators who share a focus on:</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Rural utilities.</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Livestock management.</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Farm planning.</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Sustainable operations.</li>
            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Education and practical tools.</li>
          </ul>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What we look for</h2>
            <p className="text-gray-600 mb-3">Potential partners may include:</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Extension programs.</li>
              <li>Universities.</li>
              <li>Farm and livestock organizations.</li>
              <li>Rural service providers.</li>
              <li>Educational content collaborators.</li>
              <li>Tool or data partners with relevant expertise.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Partnership goals</h2>
            <p className="text-gray-600 mb-3">Good partnerships should help us:</p>
            <ul className="space-y-2 text-gray-700 list-disc pl-5">
              <li>Improve calculator accuracy.</li>
              <li>Expand useful tools.</li>
              <li>Provide better educational content.</li>
              <li>Support rural users with clear, reliable information.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How partnerships work</h2>
        <p className="text-gray-600 mb-4">A partnership can take many forms, including:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <li className="bg-gray-50 border rounded-lg p-3 text-center text-sm font-medium text-gray-700">Content collaboration</li>
          <li className="bg-gray-50 border rounded-lg p-3 text-center text-sm font-medium text-gray-700">Calculator review</li>
          <li className="bg-gray-50 border rounded-lg p-3 text-center text-sm font-medium text-gray-700">Resource sharing</li>
          <li className="bg-gray-50 border rounded-lg p-3 text-center text-sm font-medium text-gray-700">Educational cross-linking</li>
          <li className="bg-gray-50 border rounded-lg p-3 text-center text-sm font-medium text-gray-700">Joint outreach</li>
        </ul>
        <p className="text-gray-700 italic border-l-4 border-blue-500 pl-4 bg-gray-50 py-3 pr-4">
          Any partnership we list on this site must be real, relevant, and clearly explained.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Interested in working together?</h2>
        <p className="text-blue-800 mb-6 max-w-xl mx-auto">
          If your organization serves rural communities and wants to collaborate, we'd be glad to talk. Contact us through the site's contact page with:
        </p>
        <ul className="text-left max-w-sm mx-auto space-y-2 mb-8 text-blue-800">
          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-800 rounded-full"></div> Your organization name.</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-800 rounded-full"></div> Your area of expertise.</li>
          <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-800 rounded-full"></div> How you think we could work together.</li>
        </ul>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </Link>
      </div>
    </div>
  );
}
