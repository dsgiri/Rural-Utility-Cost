import React from 'react';
import { SEO } from '../components/SEO';
import { BookOpen } from 'lucide-react';

export default function Sources() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <SEO 
        title="Sources and Science | RuralUtilityCost.com" 
        description="RuralUtilityCost.com uses practical, authoritative references to support our calculators and educational pages." 
        path="/sources"
      />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" />
          Sources and science
        </h1>
        <p className="text-xl text-gray-600 mt-4 leading-relaxed">
          RuralUtilityCost.com uses practical, authoritative references to support our calculators and educational pages. We prioritize sources that are clear, relevant, and useful for real-world rural decisions.
        </p>
      </div>

      <div className="prose prose-blue max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600">
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How we choose sources</h2>
        <p>We prefer references from:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Extension services.</li>
          <li>Universities.</li>
          <li>Government agencies.</li>
          <li>Veterinary and agricultural institutions.</li>
          <li>Other trusted educational organizations.</li>
        </ul>
        <p className="mt-4">
          When several sources are available, we choose the one that is most directly relevant to the calculator and easiest for users to verify.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Calculator methods</h2>
        <p>
          Our calculators are based on simple, transparent methods. Where appropriate, we explain the formula, assumptions, and limitations on the calculator page itself.
        </p>
        <p className="mt-4 font-medium text-gray-900">Examples:</p>
        <ul className="space-y-2 list-disc pl-6 mt-2">
          <li>Cattle age tools use dentition-based age estimates.</li>
          <li>Growth tools use average daily gain and target-weight projections.</li>
          <li>Utility and savings tools use standard comparison formulas.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-red-700 border-t pt-8">Limitations</h2>
        <p className="text-gray-800">
          Calculator results are estimates, not official records or medical diagnoses. Age, weight, growth, and cost can vary by breed, nutrition, wear, environment, and input accuracy.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4 border-t pt-8">Source categories</h2>
        <p className="mb-6">
          Use the links below to explore the categories that support our calculators and educational content.
        </p>
        <ul className="space-y-3 list-disc pl-6 mb-10 font-medium">
          <li><a href="#usda" className="text-blue-600 hover:underline">USDA and rural programs</a></li>
          <li><a href="#extension" className="text-blue-600 hover:underline">Extension and livestock science</a></li>
          <li><a href="#fda" className="text-blue-600 hover:underline">FDA and animal/veterinary safety</a></li>
          <li><a href="#nih" className="text-blue-600 hover:underline">NIH and research references</a></li>
          <li><a href="#cms" className="text-blue-600 hover:underline">CMS and health coverage</a></li>
        </ul>

        <h3 id="usda" className="text-xl font-medium mt-10 mb-4 text-gray-800 border-b pb-2 shrink-0 scroll-mt-24">USDA and rural programs</h3>
        <ul className="space-y-3 list-none pl-0">
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">USDA Home</span> <span className="text-gray-600">— Main USDA site covering agriculture, food, rural development, and farm programs.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Farmers.gov</span> <span className="text-gray-600">— USDA hub for programs, tools, and support for farmers and ranchers.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">USDA Rural Development</span> <span className="text-gray-600">— Rural housing, water systems, business development, and community resources.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Programs and Support for Small and Mid-Sized Farmers</span> <span className="text-gray-600">— Capital, land, conservation, and risk-management resources.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Livestock Operation Resources</span> <span className="text-gray-600">— USDA livestock support, disaster assistance, and service center access.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Resources for Small and Mid-sized Farmers</span> <span className="text-gray-600">— General USDA support for producers and beginning farmers.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Find Your Local USDA Service Center</span> <span className="text-gray-600">— Locate FSA, NRCS, and Rural Development offices.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">USDA Agency Page</span> <span className="text-gray-600">— Official agency summary and contact gateway.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">USDA Home / Programs and Partnerships</span> <span className="text-gray-600">— Broad entry point for USDA programs and partnerships.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">USDA Livestock Support Overview</span> <span className="text-gray-600">— Useful for cattle, sheep, goats, poultry, fish, and honeybees.</span></li>
        </ul>

        <h3 id="extension" className="text-xl font-medium mt-10 mb-4 text-gray-800 border-b pb-2 shrink-0 scroll-mt-24">Extension and livestock science</h3>
        <ul className="space-y-3 list-none pl-0">
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Oklahoma State Beef Extension Calculators</span> <span className="text-gray-600">— Free factsheets, calculator instructions, and spreadsheets.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Mississippi State: Estimating Cattle Age Using Dentition</span> <span className="text-gray-600">— Cattle age by teeth reference.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Texas A&amp;M Beef Extension Resources</span> <span className="text-gray-600">— Beef extension publications and tools.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">USU 4-H Livestock Calculator: Beef Weight Calculator</span> <span className="text-gray-600">— ADG and target-weight calculation.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">USU Customized Dairy Heifer Growth Chart</span> <span className="text-gray-600">— Growth chart guidance and calculator use.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Penn State Adjusting and Monitoring Meat Animal Growth Rate</span> <span className="text-gray-600">— ADG and growth monitoring reference.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Penn State Customized Dairy Heifer Growth Chart</span> <span className="text-gray-600">— Growth chart construction based on herd goals.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">University of Tennessee Age Determination in Beef Cattle</span> <span className="text-gray-600">— Dentition reference for cattle age.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">FutureBeef: Ageing Cattle by Their Teeth</span> <span className="text-gray-600">— Dentition table and breed variation.</span></li>
          <li className="pl-4 border-l-2 border-green-200"><span className="font-semibold text-gray-900">Montana State Average Daily Gain for the Fair</span> <span className="text-gray-600">— Simple ADG formula and example.</span></li>
        </ul>

        <h3 id="fda" className="text-xl font-medium mt-10 mb-4 text-gray-800 border-b pb-2 shrink-0 scroll-mt-24">FDA and animal/veterinary safety</h3>
        <ul className="space-y-3 list-none pl-0">
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Home</span> <span className="text-gray-600">— Main FDA site for human and animal health oversight.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA on USA.gov</span> <span className="text-gray-600">— Official agency summary and contact details.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Center for Veterinary Medicine</span> <span className="text-gray-600">— Veterinary drugs, feeds, and animal health regulation.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Animal Drugs @ FDA</span> <span className="text-gray-600">— Search approved animal drugs and labels.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Animal &amp; Veterinary</span> <span className="text-gray-600">— Core animal health and veterinary oversight page.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Veterinary Feed Directive</span> <span className="text-gray-600">— Guidance on animal feed-related rules and use.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Animal Drug Labels</span> <span className="text-gray-600">— Labeling and approved-use references.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA CVM Safety Resources</span> <span className="text-gray-600">— Animal safety and public health guidance.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Federal Register Agency Page</span> <span className="text-gray-600">— Rulemaking and notices.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">FDA Main Agency Overview</span> <span className="text-gray-600">— Public-facing overview and contact info.</span></li>
        </ul>

        <h3 id="nih" className="text-xl font-medium mt-10 mb-4 text-gray-800 border-b pb-2 shrink-0 scroll-mt-24">NIH and research references</h3>
        <ul className="space-y-3 list-none pl-0">
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH Home</span> <span className="text-gray-600">— Main NIH site and research gateway.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH on USA.gov</span> <span className="text-gray-600">— Official NIH agency summary.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">National Cancer Institute</span> <span className="text-gray-600">— Cancer research and patient information.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH News: Human-Based Research Technologies</span> <span className="text-gray-600">— NIH initiative and research direction.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NCBI Books: Animal Care and Use Program</span> <span className="text-gray-600">— Research animal care and use guidance.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH Office of the Director</span> <span className="text-gray-600">— NIH leadership and policy direction.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH News and Events</span> <span className="text-gray-600">— Updates and announcements.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH Research Training</span> <span className="text-gray-600">— Training and grants information.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH Grants</span> <span className="text-gray-600">— Funding and grant mechanisms.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">NIH Initiatives</span> <span className="text-gray-600">— NIH structure and mission reference.</span></li>
        </ul>

        <h3 id="cms" className="text-xl font-medium mt-10 mb-4 text-gray-800 border-b pb-2 shrink-0 scroll-mt-24">CMS and health coverage</h3>
        <ul className="space-y-3 list-none pl-0">
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS Home</span> <span className="text-gray-600">— Main CMS website for Medicare, Medicaid, CHIP, and Marketplace oversight.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS on USA.gov</span> <span className="text-gray-600">— Official agency summary and contact details.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Medicare.gov</span> <span className="text-gray-600">— Primary Medicare information and plan tools.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Medicaid.gov</span> <span className="text-gray-600">— Federal Medicaid policy and program information.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS Innovation Center</span> <span className="text-gray-600">— Innovation models and payment reform.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS Quality, Safety &amp; Value</span> <span className="text-gray-600">— Standards and quality improvement resources.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">Provider Enrollment (PECOS)</span> <span className="text-gray-600">— Enrollment system for Medicare providers.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS Marketplace</span> <span className="text-gray-600">— Health insurance marketplace information linked to CMS.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">State Medicaid Offices</span> <span className="text-gray-600">— State contact pathways for Medicaid.</span></li>
          <li className="pl-4 border-l-2 border-blue-200"><span className="font-semibold text-gray-900">CMS Agency Overview</span> <span className="text-gray-600">— High-level official overview.</span></li>
        </ul>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-gray-600 italic">
        We review and update our reference sets over time to keep the site practical, transparent, and useful.
      </div>
    </div>
  );
}
