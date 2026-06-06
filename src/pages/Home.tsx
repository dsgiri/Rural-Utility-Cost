import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Droplet, LayoutGrid, Shovel, Trees, ArrowDownToDot, PawPrint, Sun, Wifi, Tv, ArrowRight, CheckCircle2 } from 'lucide-react';

const calculators = [
  {
    path: '/water-fill',
    title: 'Water Fill Charge',
    desc: 'Calculate water delivery cost for rural homes, wells, septic, and pools.',
    icon: Droplet,
    features: ['Base delivery fees', 'Mileage calculations', 'Potable vs Non-potable', 'Truckload estimates'],
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    path: '/septic',
    title: 'Septic Tank Size',
    desc: 'Calculate the right septic tank size based on bedrooms, state codes, and soil type.',
    icon: LayoutGrid,
    features: ['EPA sizing formulas', 'Soil type impact', 'State requirements', 'Installation cost est.'],
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    path: '/fill-dirt',
    title: 'Fill Dirt Cost',
    desc: 'Calculate fill dirt cost for grading, backfill, landscaping, and construction.',
    icon: Shovel,
    features: ['Cubic yards to tons', 'Delivery fee guide', 'Regional cost averages', 'Truckload count'],
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    path: '/gravel',
    title: 'Gravel Cost',
    desc: 'Calculate gravel cost per ton for driveways, landscaping, and base materials.',
    icon: Trees,
    features: ['Crushed, Pea, River', 'Volume to weight', 'Delivery fee guide', 'Driveway depth guide'],
    color: 'text-stone-600',
    bg: 'bg-stone-50',
    border: 'border-stone-200',
  },
  {
    path: '/well',
    title: 'Well Water Drilling',
    desc: 'Calculate well drilling cost per foot based on depth, soil type, and region.',
    icon: ArrowDownToDot,
    features: ['Cost by soil type', 'Pump hardware estimates', 'Dry-hole warnings', 'Overall system cost'],
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
  },
  {
    path: '/livestock',
    title: 'Livestock Water',
    desc: 'Calculate daily water needs for cattle, sheep, goats, horses, pigs, and chickens.',
    icon: PawPrint,
    features: ['USDA water guidelines', 'Temperature adjustments', 'Lactation overhead', 'Trough sizing'],
    color: 'text-red-600',
    bg: 'bg-red-50',
    border: 'border-red-100',
  },
  {
    path: '/solar',
    title: 'Off-Grid Solar',
    desc: 'Calculate solar panel and battery size for off-grid homes, cabins, and homesteads.',
    icon: Sun,
    features: ['Load profiling', 'Battery DoD sizing', 'Inverter inefficiency', 'Panel count by sun hours'],
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
  {
    path: '/internet',
    title: 'Rural Internet Cost',
    desc: 'Compare internet options for rural homes: Starlink, 5G cell tower, DSL, fiber, cable.',
    icon: Wifi,
    features: ['Provider availability', 'Speed comparisons', 'Price analysis', 'Mesh network alerts'],
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    path: '/cable',
    title: 'Cable TV Cost',
    desc: 'Compare cable TV package costs: Satellite, Streaming Bundles by ZIP.',
    icon: Tv,
    features: ['Dish vs DirecTV', 'Streaming alternatives', 'Hardware fee warnings', 'Channel volume comparison'],
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <SEO 
        title="Rural Utility Cost Calculators - Water, Septic, Well, Solar, Internet & More" 
        description="Free online calculators for rural homeowners. Calculate water fill cost, septic tank size, well drilling cost, fill dirt, gravel, solar battery, livestock water, internet & cable TV."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Rural Utility Cost Calculators",
          "url": "https://ruralutilitycost.com",
          "description": "Free online calculators for rural homeowners and off-grid living."
        }}
      />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#1a5f3f] to-[#144a30] text-white py-16 px-6 sm:px-12 text-center rounded-b-3xl shadow-lg relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-black mb-4 tracking-tight">Calculate Rural Utility<br/>Costs Instantly.</h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-2xl mx-auto mb-8 font-medium">
            Stop guessing. Get accurate, data-driven estimates for land development, homesteading, and off-grid rural living.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm shadow-inner">
            <CheckCircle2 className="w-4 h-4 text-green-300" /> updated with 2026 industry averages
          </div>
        </div>
      </section>

      {/* CALCULATOR GRID */}
      <section className="px-4 py-12 max-w-7xl mx-auto w-full flex-grow">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Our Calculation Tools</h2>
          <div className="h-1 w-16 bg-[#1a5f3f] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, idx) => {
            const Icon = calc.icon;
            return (
              <Link key={idx} to={calc.path} className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`p-6 pb-5 border-b ${calc.border} flex items-start gap-4 transition-colors duration-300 group-hover:${calc.bg}`}>
                  <div className={`p-3 rounded-xl bg-white shadow-sm border ${calc.border}`}>
                    <Icon className={`w-7 h-7 ${calc.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-[#1a5f3f] transition-colors">{calc.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{calc.desc}</p>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <ul className="space-y-3 flex-grow mb-6">
                    {calc.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto flex items-center justify-between text-sm font-bold text-[#1a5f3f] group-hover:text-[#154d32] transition-colors bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <span>Calculate Now</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
      
      {/* FAQ SECTION */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">FAQs About Rural Utility Costs</h2>
            <div className="h-1 w-16 bg-[#1a5f3f] mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Why are rural utility costs generally higher than urban?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Urban environments benefit from massive economies of scale. High-density housing divides the cost of municipal sewer pipes, water mains, and internet fiber among thousands of users per square mile. In rural environments, you bear 100% of the infrastructure cost for the final mile to your home (e.g., drilling the well or installing the satellite dish).</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Are these estimates accurate for 2026?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Yes, our formulas embed baseline costs projected for 2026, accounting for inflation and current aggregate demands. However, isolated rural properties far from supplier depots will always incur higher delivery and mileage surcharges than standard regional averages.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">How frequently is the data updated?</h3>
              <p className="text-sm text-gray-600 leading-relaxed">We cross-reference our price matrices quarterly using data from USDA guidelines, EPA code updates, and commercial provider tariffs (like Starlink rate sheets, or regional gravel quarry averages).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
