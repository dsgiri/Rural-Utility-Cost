import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Landmark, TrendingUp, Search, ShieldCheck, Target, Scissors, ChevronRight, Info } from 'lucide-react';

export default function AgribusinessHub() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What grants are available for rural agribusinesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Options include the USDA Value-Added Producer Grant (VAPG), NRCS EQIP funding for conservation, SARE grants for sustainable agriculture, and REAP for rural energy systems. Each has specific matching and readiness requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my farm business needs USDA or FDA compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It depends on what you process and sell. Raw agricultural commodities have different rules than processed foods. Processing poultry or beef generally falls under USDA FSIS (or state equivalent), while processing jams, baked goods, or bottled products typically falls under FDA/State Health Department cottage food laws or commercial kitchen regulations."
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO 
        title="Agribusiness, Grants & Compliance Hub" 
        description="Tools for rural business planning, USDA grant finding, grant readiness assessment, and food processing compliance."
        url="/agribusiness"
        jsonLd={jsonLd}
      />

      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agribusiness & Grants Hub</h1>
        <p className="text-xl text-gray-600">
          Turn your rural property into a profitable enterprise. Assess your grant readiness, find USDA funding, calculate expansion profits, and check food processing compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Search className="text-emerald-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Agricultural Grant Finder</h2>
          <p className="text-gray-600 mb-4">
            Search for federal and state grants tailored to your farm, including USDA VAPG, SARE, and NRCS EQIP.
          </p>
          <Link to="/grant-finder" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Find Grants <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Landmark className="text-blue-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Grant Readiness Check</h2>
          <p className="text-gray-600 mb-4">
            Evaluate your farm's administrative readiness. Check if you have the SAM.gov registration and business structure required to apply.
          </p>
          <Link to="/grant-readiness" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Assess Readiness <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-rose-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <ShieldCheck className="text-rose-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Food Processing Compliance</h2>
          <p className="text-gray-600 mb-4">
            Determine whether your value-added farm product falls under USDA, FDA, or local Cottage Food regulations.
          </p>
          <Link to="/compliance" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Check Compliance <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="text-green-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Expand Profit Calculator</h2>
          <p className="text-gray-600 mb-4">
            Model the financial impact of expanding your farm enterprise. Estimate new revenue versus required capital and labor costs.
          </p>
          <Link to="/expand-profit" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Calculate Expansion <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Scissors className="text-orange-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Cut Cost Calculator</h2>
          <p className="text-gray-600 mb-4">
            Analyze your farm's operating expenses and calculate the ROI of investing in efficiency or equipment to reduce ongoing costs.
          </p>
          <Link to="/cut-cost" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Calculate Savings <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <Target className="text-indigo-600 w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pain Point Priority</h2>
          <p className="text-gray-600 mb-4">
            Weigh multiple farm challenges against each other based on cost, time, and impact to decide what to fix first.
          </p>
          <Link to="/pain-point-priority" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
            Prioritize Issues <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 focus:outline-none mb-2">How hard is it to get an agricultural grant?</h3>
            <p className="text-gray-600">Federal grants like the USDA VAPG are highly competitive and require a massive amount of paperwork, a solid business plan, and usually a matching capital requirement (often 1-to-1). State-level or local SARE grants for smaller projects ($5k-$15k) are more approachable for beginners.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 focus:outline-none mb-2">Do I need an LLC to apply for farm grants?</h3>
            <p className="text-gray-600">While sometimes possible as a sole proprietor, forming a formal business entity (LLC, S-Corp, Cooperative) and securing an EIN and a Unique Entity ID (UEI) on SAM.gov are almost always required to successfully receive federal or state funding.</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">Pro-Tip for Agribusiness</h3>
            <div className="mt-2 text-sm text-blue-700">
              <p>Don't chase a grant just because it exists. If a grant requires you to pivot your farm's core business model or spend heavily on matching funds for equipment you don't really need, it will cost you money in the long run. Only apply for funding that aligns with your existing expansion plans.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
