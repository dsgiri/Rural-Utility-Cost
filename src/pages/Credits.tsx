import React from 'react';
import { SEO } from '../components/SEO';
import { Heart } from 'lucide-react';

export default function Credits() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Credits & Methodology" 
        description="Learn about the team and methods behind RuralUtilityCost.com's practical calculators for rural life." 
        path="/credits"
      />
      
      <div className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <Heart className="w-8 h-8 text-blue-600" />
          Credits
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          RuralUtilityCost.com is a project focused on practical calculators for rural life, livestock planning, and utility cost estimation.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Site ownership</h2>
          <p className="text-gray-600">
            This site was created and is maintained by the RuralUtilityCost.com team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Content and methodology</h2>
          <p className="text-gray-600 mb-3">
            Calculator logic, explanations, and page structure are designed to be practical, transparent, and easy to use.
          </p>
          <p className="text-gray-600">
            Where appropriate, we base calculator logic on publicly available extension materials, veterinary references, and other educational resources.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Visuals and design</h2>
          <p className="text-gray-600">
            Illustrations, diagrams, and calculator visuals may be created in-house or with the help of approved creative tools and contributors.
          </p>
        </section>

        <section className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Review policy</h2>
          <p className="text-gray-600 mb-4">We aim to keep content accurate and useful by:</p>
          <ul className="space-y-2 list-disc pl-5 text-gray-700">
            <li>Reviewing key calculator assumptions.</li>
            <li>Updating methods when better references are available.</li>
            <li>Clarifying limitations when a calculator is approximate.</li>
            <li>Keeping the site easy to understand on mobile devices.</li>
          </ul>
        </section>

        <section className="pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Thank you</h2>
          <p className="text-gray-600">
            We appreciate the educators, researchers, extension offices, veterinarians, and technical contributors whose public resources help make practical tools like these possible.
          </p>
        </section>
      </div>
    </div>
  );
}
