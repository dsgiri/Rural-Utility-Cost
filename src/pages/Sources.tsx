import React from 'react';
import { SEO } from '../components/SEO';
import { BookOpen } from 'lucide-react';

export default function Sources() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Sources and Science" 
        description="Learn about the sources, extension publications, and university resources RuralUtilityCost uses for our calculators and planning tools." 
        path="/sources"
      />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Sources and Science
        </h1>
        <p className="text-xl text-gray-600 mt-4 leading-relaxed">
          RuralUtilityCost.com is built to help people make practical decisions with clear calculators, simple explanations, and transparent assumptions.
        </p>
      </div>

      <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
        <p>
          We use authoritative references wherever possible, including extension publications, veterinary references, university resources, and other established educational sources.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">How we choose sources</h2>
        <p>We prefer sources that are:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Practical and directly relevant to rural use cases.</li>
          <li>Written by extension services, universities, veterinarians, or trusted institutions.</li>
          <li>Clear about methods, assumptions, and limitations.</li>
          <li>Updated enough to remain useful for real-world decisions.</li>
        </ul>
        <p className="mt-4">
          When there is variation between sources, we choose the source that is most specific to the calculator and most useful for everyday users.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2">Calculator methods</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-2">Cattle age estimator</h3>
        <p className="mb-4">
          Our cattle age estimator uses dentition-based age ranges, since tooth eruption is the most common method for estimating approximate age in live cattle.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Cattle growth chart</h3>
        <p className="mb-4">
          Our cattle growth chart uses average daily gain and related livestock growth formulas to show whether an animal is on track toward a target weight.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Utility, ROI, and savings tools</h3>
        <p className="mb-4">
          Our utility and savings calculators use standard comparison formulas so users can estimate cost, savings, payback, or return on investment in a simple, practical way.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Horn rings and other rough estimates</h3>
        <p>
          If a calculator includes a rough fallback method, such as horn rings, we label it clearly as low-confidence and approximate only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 border-b pb-2 text-red-700">Limitations</h2>
        <p className="font-medium">
          These calculators are decision tools, not medical or veterinary diagnostics.
        </p>
        <p className="mt-2">Results may vary based on:</p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2 list-disc pl-6">
          <li>Breed.</li>
          <li>Nutrition.</li>
          <li>Wear.</li>
          <li>Environment.</li>
          <li>Measurement accuracy.</li>
          <li>User input quality.</li>
        </ul>
        <p className="mt-4 bg-gray-50 border border-gray-200 p-4 rounded-md italic">
          For exact records, use official documentation, veterinary records, or direct measurements whenever available.
        </p>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-400">
        Last reviewed: June 2026
      </div>
    </div>
  );
}
