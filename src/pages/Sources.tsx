import React, { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { BookOpen } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type TabId = 'usda' | 'extension' | 'fda' | 'nih' | 'cms';

export default function Sources() {
  const [activeTab, setActiveTab] = useState<TabId>('usda');
  const location = useLocation();
  const navigate = useNavigate();

  const tabs: { id: TabId; label: string }[] = [
    { id: 'usda', label: 'USDA' },
    { id: 'extension', label: 'Extension' },
    { id: 'fda', label: 'FDA' },
    { id: 'nih', label: 'NIH' },
    { id: 'cms', label: 'CMS' },
  ];

  useEffect(() => {
    const hash = location.hash.replace('#', '') as TabId;
    if (tabs.some(t => t.id === hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    navigate(`/sources#${tabId}`, { replace: true });
  };

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

        <h2 className="text-2xl font-semibold mt-12 mb-6 border-t pt-8">Source categories</h2>
        
        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-6 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`py-3 px-6 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="min-h-[400px]">
          {activeTab === 'usda' && (
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">USDA and rural programs</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usda.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">USDA Home</a> <span className="text-gray-600">— Main USDA site covering agriculture, food, rural development, and farm programs.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.farmers.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Farmers.gov</a> <span className="text-gray-600">— USDA hub for programs, tools, and support for farmers and ranchers.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.rd.usda.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">USDA Rural Development</a> <span className="text-gray-600">— Rural housing, water systems, business development, and community resources.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usda.gov/farming-and-ranching/resources-small-and-mid-sized-farmers/programs-and-support-small-and-mid-sized-farmers" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Programs and Support for Small and Mid-Sized Farmers</a> <span className="text-gray-600">— Capital, land, conservation, and risk-management resources.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.farmers.gov/your-business/livestock" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Livestock Operation Resources</a> <span className="text-gray-600">— USDA livestock support, disaster assistance, and service center access.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usda.gov/farming-and-ranching/resources-small-and-mid-sized-farmers" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Resources for Small and Mid-sized Farmers</a> <span className="text-gray-600">— General USDA support for producers and beginning farmers.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.farmers.gov/working-with-us/service-center-locator" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Find Your Local USDA Service Center</a> <span className="text-gray-600">— Locate FSA, NRCS, and Rural Development offices.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/u-s-department-of-agriculture" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">USDA Agency Page</a> <span className="text-gray-600">— Official agency summary and contact gateway.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.farmers.gov/working-with-us/USDA-service-centers" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Get Started at Your USDA Service Center</a> <span className="text-gray-600">— How to prepare for a visit and what to bring.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fsa.usda.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Farm Service Agency</a> <span className="text-gray-600">— Loans, farm programs, and service access through USDA.</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'extension' && (
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">Extension and livestock science</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.okstate.edu/programs/beef-extension/calculators" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Oklahoma State Beef Extension Calculators</a> <span className="text-gray-600">— Free factsheets, calculator instructions, and spreadsheets.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.msstate.edu/publications/estimating-cattle-age-using-dentition" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Mississippi State: Estimating Cattle Age Using Dentition</a> <span className="text-gray-600">— Cattle age by teeth reference.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://animalscience.tamu.edu/extension-resources/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Texas A&amp;M Beef Extension Resources</a> <span className="text-gray-600">— Beef extension publications and tools.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.usu.edu/4H-Livestock-Calculator/beef-weight-calculator" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">USU 4-H Beef Weight Calculator</a> <span className="text-gray-600">— ADG and target-weight calculation.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.usu.edu/4H-Livestock-Calculator/user-guide" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">USU Livestock Calculators User Guide</a> <span className="text-gray-600">— Growth chart guidance and calculator use.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.psu.edu/adjusting-and-monitoring-meat-animal-growth-rate/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Penn State Adjusting and Monitoring Meat Animal Growth Rate</a> <span className="text-gray-600">— ADG and growth monitoring reference.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://extension.psu.edu/customized-dairy-heifer-growth-chart/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Penn State Customized Dairy Heifer Growth Chart</a> <span className="text-gray-600">— Growth chart construction based on herd goals.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://utbeef.tennessee.edu/wp-content/uploads/sites/127/2020/11/AgeDeterminationinBeefCattle154.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">University of Tennessee Age Determination in Beef Cattle</a> <span className="text-gray-600">— Dentition reference for cattle age.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://futurebeef.com.au/resources/ageing-cattle-by-their-teeth/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FutureBeef: Ageing Cattle by Their Teeth</a> <span className="text-gray-600">— Dentition table and breed variation.</span></li>
                <li className="pl-4 border-l-2 border-green-200"><a href="https://animalrangeextension.montana.edu/beef/articles/dailygain.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Montana State Average Daily Gain for the Fair</a> <span className="text-gray-600">— Simple ADG formula and example.</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'fda' && (
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">FDA and animal/veterinary safety</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Home</a> <span className="text-gray-600">— Main FDA site for human and animal health oversight.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Animal &amp; Veterinary</a> <span className="text-gray-600">— Core animal health and veterinary oversight page.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/food-and-drug-administration" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA on USA.gov</a> <span className="text-gray-600">— Official agency summary and contact details.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.accessdata.fda.gov/scripts/animaldrugsatfda/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Animal Drugs @ FDA</a> <span className="text-gray-600">— Search approved animal drugs and labels.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Veterinary Feed Directive</a> <span className="text-gray-600">— Guidance on animal feed-related rules and use.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Animal Drug Labels</a> <span className="text-gray-600">— Labeling and approved-use references.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA CVM Safety Resources</a> <span className="text-gray-600">— Animal safety and public health guidance.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.federalregister.gov/agencies/food-and-drug-administration" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Federal Register Agency Page</a> <span className="text-gray-600">— Rulemaking and notices.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Veterinary Medicine Guidance</a> <span className="text-gray-600">— Veterinary product and use guidance.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.fda.gov/animal-veterinary" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">FDA Animal &amp; Veterinary Main Resources</a> <span className="text-gray-600">— Primary veterinary resource hub.</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'nih' && (
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">NIH and research references</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH Home</a> <span className="text-gray-600">— Main NIH site and research gateway.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/national-institutes-of-health" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH on USA.gov</a> <span className="text-gray-600">— Official NIH agency summary.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.cancer.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">National Cancer Institute</a> <span className="text-gray-600">— Cancer research and patient information.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/news-events/news-releases/nih-prioritize-human-based-research-technologies" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH News: Human-Based Research Technologies</a> <span className="text-gray-600">— NIH initiative and research direction.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.ncbi.nlm.nih.gov/books/NBK54045/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NCBI Books: Animal Care and Use Program</a> <span className="text-gray-600">— Research animal care and use guidance.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/news-events" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH News and Events</a> <span className="text-gray-600">— Updates and announcements.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/research-training" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH Research Training</a> <span className="text-gray-600">— Training and grants information.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/grants-funding" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH Grants and Funding</a> <span className="text-gray-600">— Funding and grant mechanisms.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/about-nih/what-we-do/nih-almanac" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH Almanac</a> <span className="text-gray-600">— NIH structure and mission reference.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.nih.gov/institutes-nih" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">NIH Main Institutes and Centers</a> <span className="text-gray-600">— Overview of NIH institutes.</span></li>
              </ul>
            </div>
          )}

          {activeTab === 'cms' && (
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800">CMS and health coverage</h3>
              <ul className="space-y-3 list-none pl-0">
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS Home</a> <span className="text-gray-600">— Main CMS website for Medicare, Medicaid, CHIP, and Marketplace oversight.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/centers-for-medicare-and-medicaid-services" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS on USA.gov</a> <span className="text-gray-600">— Official agency summary and contact details.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.medicare.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Medicare.gov</a> <span className="text-gray-600">— Primary Medicare information and plan tools.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.medicaid.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">Medicaid.gov</a> <span className="text-gray-600">— Federal Medicaid policy and program information.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.cms.gov/priorities/innovation" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS Innovation Center</a> <span className="text-gray-600">— Innovation models and payment reform.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://pecos.cms.hhs.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS Provider Enrollment (PECOS)</a> <span className="text-gray-600">— Enrollment system for Medicare providers.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">HealthCare.gov</a> <span className="text-gray-600">— Health insurance marketplace information.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS Quality, Safety &amp; Value</a> <span className="text-gray-600">— Quality improvement and program standards.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/centers-for-medicare-and-medicaid-services" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">State Medicaid Offices</a> <span className="text-gray-600">— State contact pathways for Medicaid.</span></li>
                <li className="pl-4 border-l-2 border-blue-200"><a href="https://www.usa.gov/agencies/centers-for-medicare-and-medicaid-services" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:text-blue-900 hover:underline">CMS Agency Overview</a> <span className="text-gray-600">— High-level official overview.</span></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 text-gray-600 italic">
        We review and update our reference sets over time to keep the site practical, transparent, and useful.
      </div>
    </div>
  );
}
