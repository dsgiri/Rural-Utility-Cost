import React from 'react';
import { SEO } from '../components/SEO';
import { Heart } from 'lucide-react';

export default function Credits() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Credits | RuralUtilityCost.com" 
        description="RuralUtilityCost.com was created to make rural calculators easier to use and easier to trust." 
        path="/credits"
      />
      
      <div className="mb-8 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Heart className="w-8 h-8 text-blue-600" />
          Credits
        </h1>
        <p className="text-xl text-gray-600 mt-4 leading-relaxed">
          RuralUtilityCost.com was created to make rural calculators easier to use and easier to trust. We value clear methods, simple explanations, and practical tools for everyday decisions.
        </p>
      </div>

      <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
        <h2 className="text-2xl font-semibold mt-8 mb-4">Site team</h2>
        <p>This site is maintained by the RuralUtilityCost.com team.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What we credit</h2>
        <p>
          We acknowledge the educators, researchers, extension offices, veterinarians, designers, and technical contributors whose public resources help inform our work.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Content and visuals</h2>
        <p>
          Calculator logic, explanations, and page layout are designed to be practical and mobile-friendly. Some visuals and diagrams may be created in-house or with approved creative tools.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Review policy</h2>
        <p>We aim to keep our content accurate by:</p>
        <ul className="space-y-2 list-disc pl-6 mt-4">
          <li>Reviewing calculator assumptions.</li>
          <li>Updating methods when better references are available.</li>
          <li>Clarifying limitations where needed.</li>
          <li>Keeping content simple and useful.</li>
        </ul>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-lg text-gray-700 font-medium">
        If you use one of our calculators, we hope it helps you make a better decision faster.
      </div>
    </div>
  );
}
