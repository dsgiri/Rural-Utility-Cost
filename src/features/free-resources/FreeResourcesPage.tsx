import React from 'react';
import { SEO } from '../../components/SEO';
import { RESOURCES, CATEGORIES } from './resource-data';
import { ResourceSection } from './ResourceSection';
import { Tractor, Sprout, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreeResourcesPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      <SEO 
        title="Top Free Resources for Farmers, Ranchers & Homesteaders | Rural Utility Cost" 
        description="A curated guide to the best free programs, extension offices, grants, and USDA support for new and experienced farmers." 
      />

      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Top Free Resources for Farmers, Ranchers & Homesteaders
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Navigating agricultural support doesn't have to be overwhelming. We've curated the most useful, highly-credible free resources to help you fund your land, manage your business, and get expert local advice.
            </p>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map(category => (
                <a 
                  key={category} 
                  href={`#${category.toLowerCase().replace(/\\s+/g, '-')}`}
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Quick Start Highlight */}
        <div className="bg-[#1a5f3f] rounded-2xl p-6 md:p-8 mb-12 shadow-lg text-white">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="bg-white/20 p-4 rounded-xl shrink-0">
              <Landmark className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">The Best Starting Point</h2>
              <p className="text-white/90 max-w-2xl text-sm md:text-base leading-relaxed mb-4">
                If you do nothing else today, visit your local USDA Service Center. The Farm Service Agency (FSA) can issue you a Farm Number (required for most grants), and the NRCS can help you plan conservation improvements that the government will pay for.
              </p>
              <a 
                href="https://offices.sc.egov.usda.gov/locator/app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold bg-white text-[#1a5f3f] hover:bg-gray-100 transition-colors shadow-sm"
              >
                Find Your Local Service Center
              </a>
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="space-y-12">
          {CATEGORIES.map(category => {
            const categoryResources = RESOURCES.filter(r => r.category === category);
            return (
              <ResourceSection 
                key={category} 
                title={category} 
                resources={categoryResources} 
              />
            );
          })}
        </div>
        
        {/* Closing Note / Related */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-5 rounded-full shrink-0">
            <Tractor className="w-10 h-10 text-amber-700 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Need to run the numbers?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-2xl">
              While you are waiting on guidance or grant approvals, use our free calculators to estimate your direct farm input costs, evaluate livestock margins, and plan basic infrastructure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/farm-inputs" className="text-[#1a5f3f] dark:text-[#6ee7b7] font-semibold hover:underline">
                Farm Input Calculators &rarr;
              </Link>
              <Link to="/livestock" className="text-[#1a5f3f] dark:text-[#6ee7b7] font-semibold hover:underline">
                Livestock Profit Tools &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
