import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Target, Lightbulb, Calculator, CheckCircle2, Factory, Search } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full h-full flex flex-col bg-white">
      <SEO 
        title="About | Rural Utility Cost" 
        description="A public, free-to-use, open-source, and community-driven platform providing simple, stress-free estimation tools for rural living and homesteading."
      />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-12 px-4 shadow-sm shrink-0">
        <div className="max-w-4xl mx-auto rounded-xl bg-gray-50 p-8 sm:p-12 text-center border border-gray-100 shadow-sm">
          <p className="text-[#1a5f3f] font-bold tracking-wider uppercase text-xs mb-3">About The Platform</p>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">Simple tools for peaceful living.</h1>
          <p className="text-gray-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            We build easy-to-use tools to help you plan your homestead, budget for utilities, and grow your community with confidence—stress-free.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow bg-white py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Core Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50/80 rounded-xl p-5 text-center border border-green-100">
              <span className="block text-green-900 font-bold text-lg mb-1">Public</span>
              <span className="text-sm text-green-700 font-medium">Accessible to everyone</span>
            </div>
            <div className="bg-green-50/80 rounded-xl p-5 text-center border border-green-100">
              <span className="block text-green-900 font-bold text-lg mb-1">Free to Use</span>
              <span className="text-sm text-green-700 font-medium">No paywalls, ever</span>
            </div>
            <div className="bg-green-50/80 rounded-xl p-5 text-center border border-green-100">
              <span className="block text-green-900 font-bold text-lg mb-1">Open Source</span>
              <span className="text-sm text-green-700 font-medium">Transparent code</span>
            </div>
            <div className="bg-green-50/80 rounded-xl p-5 text-center border border-green-100">
              <span className="block text-green-900 font-bold text-lg mb-1">Community-Driven</span>
              <span className="text-sm text-green-700 font-medium">Built with your feedback</span>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[#1a5f3f]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To replace stress with clarity. We want to empower families, homesteaders, and communities to understand their costs simply and easily, giving you true peace of mind before you break ground.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-[#1a5f3f]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To support a growing movement toward sustainable, community-focused living. We are continuously expanding our platform to provide simple, reliable tools that make off-grid and rural life accessible to everyone.
              </p>
            </div>
          </div>

          {/* What We Build */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-3">
              <Calculator className="h-6 w-6 text-[#1a5f3f]" /> What We Build
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-3xl">
              Our tools focus specifically on the costs associated with rural living and development that standard calculators ignore. We currently offer tools across several categories:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Property & Construction</h3>
                  <p className="text-sm text-gray-500 mt-1">Estimates for land value, septic systems, fill dirt, and fencing.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Energy & Utilities</h3>
                  <p className="text-sm text-gray-500 mt-1">Calculators for well drilling, off-grid solar, propane, and internet.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Animal & Farm</h3>
                  <p className="text-sm text-gray-500 mt-1">Tools for managing livestock water, gestation, and incubation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-gray-200 p-4 rounded-xl">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">Business & Compliance</h3>
                  <p className="text-sm text-gray-500 mt-1">USDA/FDA readiness checks and profit expansion models.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why It Matters */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight flex items-center gap-3">
              <Factory className="h-6 w-6 text-[#1a5f3f]" /> Why It Matters
            </h2>
            <div className="prose prose-green max-w-none text-gray-600">
              <p className="mb-4">
                Building your dream property or joining a rural community should be an exciting journey, not an overwhelming puzzle. Going off-grid or moving to the country involves unique steps, from managing your own utilities to understanding the land.
              </p>
              <p className="mb-4">
                By providing clear, honest, and simple calculation models, we aim to remove the anxiety of the unknown. Our tools are completely free to use, designed to help you focus less on the stress of budgeting, and more on enjoying the land and your community.
              </p>
              <p>
                We believe in sharing wisdom, which is why this project is proudly <strong>open-source</strong>. It is built transparently for the community, by the community—so we can all learn and grow together, stress-free.
              </p>
            </div>
          </div>

          {/* Trust Note */}
          <div className="bg-[#1a5f3f]/5 border border-[#1a5f3f]/20 rounded-xl p-6 text-sm text-[#1a5f3f]">
            <h3 className="font-bold mb-2 uppercase tracking-wide">Methodology & Trust</h3>
            <p>
              The tools on this site generate helpful <strong>estimates</strong> based on common community averages and general guidelines. They are designed to bring peace of mind to your early planning. For final decisions, always partner with local experts and certified professionals, as every piece of land is uniquely beautiful.
            </p>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-200">
             <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
               Suggest a Tool or Say Hello
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
