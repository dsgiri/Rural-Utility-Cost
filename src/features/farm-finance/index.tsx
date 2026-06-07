import React from 'react';
import { Calculator, Truck, Map, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Farm Finance & Loan Calculators",
  "description": "Farm and equipment financing tools designed for rural purchases.",
  "applicationCategory": "BusinessApplication",
  "url": "https://ruralutilitycost.com/farm-finance"
};

export default function FarmFinanceLandingPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      <SEO 
        title="Farm Finance & Loan Calculators | Rural Utility Cost" 
        description="Farm and equipment financing tools designed for rural purchases. Calculate loan payments, land affordability, and equipment carrying costs." 
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Farm Finance & Loan Calculators
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional-grade, easy-to-use financial tools for farm, ranch, and rural land planning. Understand your monthly obligations before approaching a lender.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/farm-finance/loan-payment" className="group">
            <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Loan Payment Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Estimate periodic payments for general farm loans. Supports amortized and fixed principal structures commonly used by ag lenders.
              </p>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                Calculate Payment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/farm-finance/equipment-payment" className="group">
            <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:border-blue-300 dark:hover:border-blue-700">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Equipment Payment Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Calculate the real costs of financing tractors and implements, including trade-in values and dealer fees.
              </p>
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                Finance Equipment <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          <Link to="/farm-finance/land-affordability" className="group">
            <div className="h-full bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:border-green-300 dark:hover:border-green-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                <Map className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Land Affordability Calculator
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Determine if your expected land operating revenue can cover the annual debt service and safety reserve.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                Check Affordability <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
