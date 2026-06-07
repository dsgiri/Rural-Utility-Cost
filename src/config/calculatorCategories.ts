import { Tractor, Sprout, Bug, Truck, Droplet, LayoutGrid, Shovel, Trees, ArrowDownToDot, PawPrint, Sun, Wifi, Tv, Flame, Crop, CalendarHeart, Bird, Scissors, TrendingUp, Zap, ShieldCheck, Map, Leaf, Hexagon, Beaker, Scale, Tag, Clock, ZapOff, AlertOctagon, Landmark, Search, Calculator, Building2, Banknote, ShieldPlus } from 'lucide-react';

export const calculatorCategories = [
  {
    id: "hubs",
    title: "Resource Hubs",
    desc: "Curated collections of tools for specific projects",
    items: [
      {
        path: '/utility-cost',
        title: 'Utility Cost Hub',
        desc: 'Take control of your monthly bills. Estimate costs for propane, grid power, off-grid solar, and more.',
        icon: Flame,
        features: ['Propane estimates', 'Internet comparisons', 'Solar payback', 'Peak demand analysis'],
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        keywords: ['utilities', 'electricity', 'power', 'bills', 'costs']
      },
      {
        path: '/water-planning',
        title: 'Water Planning Hub',
        desc: 'Plan your water supply strategy by comparing well costs, calculating hauling budgets, and estimating septic.',
        icon: Droplet,
        features: ['Water hauling costs', 'Well drilling budget', 'Septic estimator'],
        color: 'text-cyan-600',
        bg: 'bg-cyan-50',
        border: 'border-cyan-100',
        keywords: ['water', 'wells', 'septic', 'plumbing', 'hauling']
      },
      {
        path: '/farm-costs',
        title: 'Farm & Livestock Hub',
        desc: 'Make data-driven decisions on the farm. Budget for feed costs, track yields, and manage breeding schedules.',
        icon: Tractor,
        features: ['Livestock feed budgets', 'Meat yield & cost', 'Beekeeping startup', 'Gestation tracking'],
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        keywords: ['farm', 'livestock', 'agriculture', 'yields', 'feed', 'animals']
      },
      {
        path: '/land-and-construction',
        title: 'Land & Construction Hub',
        desc: 'Tools for property development. Calculate budgets for fencing, dirt, gravel, and land purchases.',
        icon: Truck,
        features: ['Fill dirt calculator', 'Gravel volumes', 'Fencing estimator', 'Rural land valuation'],
        color: 'text-stone-600',
        bg: 'bg-stone-50',
        border: 'border-stone-100',
        keywords: ['land', 'construction', 'dirt', 'gravel', 'fencing', 'property']
      },
      {
        path: '/agribusiness',
        title: 'Agribusiness & Grants Hub',
        desc: 'Assess your grant readiness, find USDA funding, calculate expansion profits, and check food processing compliance.',
        icon: Landmark,
        features: ['Grant Finder', 'Grant Readiness Check', 'Profit Calculators', 'Food Compliance'],
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        keywords: ['business', 'grants', 'usda', 'funding', 'profits', 'compliance', 'money']
      },
      {
        path: '/generator-planning',
        title: 'Generator Planning Hub',
        desc: 'Everything you need to size, budget, and plan for backup power on a rural property.',
        icon: Zap,
        features: ['Runtime estimation', 'Fuel cost budget', 'Critical load sizing', 'Generator basics FAQ'],
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        keywords: ['generators', 'backup power', 'fuel', 'electricity', 'off-grid']
      },
      {
        path: '/farm-finance',
        title: 'Farm Finance Hub',
        desc: 'Farm and equipment financing tools designed for rural purchases. Calculate loan payments, land affordability, and equipment carrying costs.',
        icon: Calculator,
        features: ['Loan Payment', 'Equipment Financing', 'Land Affordability', 'Debt Service Analysis'],
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        keywords: ['finance', 'loans', 'equipment', 'mortgages', 'debt']
      }
    ]
  },
  {
    id: "property",
    title: "Property & Construction",
    desc: "Building, land prep, site work",
    items: [
      {
        path: '/rural-land',
        title: 'Rural Land Value',
        desc: 'Estimate selling proceeds or evaluate a parcel\'s suitability score for buying.',
        icon: Map,
        features: ['Net Proceeds Est.', 'Buyer Suitability Score', 'Cost to improve', 'Red flag analysis'],
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        keywords: ['real estate', 'valuation', 'acreage', 'buying land']
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
        keywords: ['wastewater', 'sewage', 'plumbing', 'septic systems']
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
        keywords: ['topsoil', 'loam', 'clay', 'excavation', 'grading']
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
        keywords: ['driveway', 'rock', 'crushed stone', 'aggregate']
      },
      {
        path: '/fencing',
        title: 'Fencing Cost',
        desc: 'Estimate the cost of rural fencing, including barbed wire, woven wire, wood, and electric.',
        icon: Crop,
        features: ['Material type pricing', 'Gate cost additions', 'Labor estimation', 'Custom perimeters'],
        color: 'text-lime-600',
        bg: 'bg-lime-50',
        border: 'border-lime-100',
        keywords: ['fence', 'barbed wire', 'electric fence', 'perimeter']
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
        keywords: ['groundwater', 'aquifer', 'boring', 'water pump']
      }
    ]
  },
  {
    id: "utilities",
    title: "Energy & Utilities",
    desc: "Water, propane, solar, internet, power",
    items: [
      {
        path: '/energy-demand',
        title: 'Peak Energy Demand',
        desc: 'Calculate peak kW demand charges by simulating simultaneous household appliance usage patterns.',
        icon: Zap,
        features: ['15-minute interval est.', 'Staggering advice', 'kW vs kWh impact', 'Rural co-op rates'],
        color: 'text-violet-600',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        keywords: ['kilowatts', 'demand charge', 'appliances', 'power usage']
      },
      {
        path: '/gen-runtime',
        title: 'Generator Runtime',
        desc: 'Estimate how long your generator can run on available fuel. Plan for power outages.',
        icon: Clock,
        features: ['Diesel/Propane/Gas', 'Load-adjusted burns', 'Hours & Days output'],
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        keywords: ['backup generator', 'outage', 'fuel consumption']
      },
      {
        path: '/gen-fuel-cost',
        title: 'Fuel Consumption & Cost',
        desc: 'Calculate estimated fuel usage and operating costs for backup generators.',
        icon: Flame,
        features: ['Gallons per hour', 'Total fuel cost', '24-hour rate'],
        color: 'text-orange-500',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        keywords: ['generator', 'diesel', 'gasoline', 'running costs']
      },
      {
        path: '/gen-critical-load',
        title: 'Critical Load Backup',
        desc: 'Determine if your current fuel reserve will support your mission-critical loads for your target duration.',
        icon: ZapOff,
        features: ['Capacity checking', 'Target shortfalls', 'Idle compensation'],
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        keywords: ['emergency power', 'critical circuits', 'battery backup', 'sizing']
      },
      {
        path: '/water-fill',
        title: 'Water Fill Charge',
        desc: 'Calculate water delivery cost for rural homes, wells, septic, and pools.',
        icon: Droplet,
        features: ['Base delivery fees', 'Mileage calculations', 'Potable vs Non-potable', 'Truckload estimates'],
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        keywords: ['bulk water', 'water truck', 'cistern', 'pool filling']
      },
      {
        path: '/propane',
        title: 'Propane Refill',
        desc: 'Calculate cost and volume to refill residential and agricultural propane tanks.',
        icon: Flame,
        features: ['80% max safe fill', 'Gallon estimates', 'Total cost estimation', 'Tank size selection'],
        color: 'text-red-600',
        bg: 'bg-red-50',
        border: 'border-red-100',
        keywords: ['lpg', 'liquid petroleum', 'heating gas', 'tank levels']
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
        keywords: ['photovoltaic', 'panels', 'renewable energy', 'batteries', 'inverters']
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
        keywords: ['broadband', 'satellite', 'connectivity', 'isp', 'starlink']
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
        keywords: ['television', 'streaming', 'satellite dish', 'entertainment']
      }
    ]
  },
  {
    id: "farm",
    title: "Agriculture & Habitat",
    desc: "Habitats, livestock, breeding, poultry, and meat processing",
    items: [
      {
        path: '/farm-inputs',
        title: 'Farm Input Costs',
        desc: 'Compare fertilizer pricing (N-P-K-S), seed cost per acre, and spot rates.',
        icon: Sprout,
        features: ['Fertilizer Cost/lb', 'Seed Rate/Acre', 'Spot Rate Tracker', 'Nutrient Value'],
        color: 'text-green-600',
        bg: 'bg-green-50',
        border: 'border-green-100',
        keywords: ['fertilizer', 'seeds', 'nitrogen', 'phosphorus', 'potassium', 'acre']
      },
      {
        path: '/crop-pest-economics',
        title: 'Pest Economics',
        desc: 'Estimate pest yield loss, break-even thresholds, and insect degree-days.',
        icon: Bug,
        features: ['Yield Loss Value', 'Economic Threshold', 'Action Horizon', 'Degree-Days Timing'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        keywords: ['insects', 'infestation', 'pesticide', 'damage', 'crops']
      },
      {
        path: '/livestock-age',
        title: 'Livestock Age Estimator',
        desc: 'Estimate the approximate age of cattle based on teeth and horn rings.',
        icon: PawPrint,
        features: ['Dentition stages', 'Breed variations', 'Wear level adjustment', 'Horn ring fallback'],
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        keywords: ['cows', 'aging', 'dentition', 'teeth', 'horns', 'cattle']
      },
      {
        path: '/meat-yield',
        title: 'Take-Home Meat Yield',
        desc: 'Estimate how much packaged meat you can expect from a live animal or hanging weight.',
        icon: Scale,
        features: ['Beef & Pork', 'Cooler shrink', 'Trim loss mapping', 'Pounds per quarter/half'],
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        keywords: ['butchering', 'carcass', 'freezer beef', 'hanging weight', 'dressing percentage']
      },
      {
        path: '/meat-processing',
        title: 'Meat Processing Cost',
        desc: 'Estimate total processing fees for butchering, cutting, wrapping, and extras.',
        icon: Scissors,
        features: ['Slaughter fees', 'Cut & wrap per lb', 'Disposal rates', 'Cost per hanging lb'],
        color: 'text-orange-600',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        keywords: ['butcher', 'slaughter', 'cut and wrap', 'processing fee']
      },
      {
        path: '/meat-cost-per-lb',
        title: 'Cost Per Lb & Break-Even',
        desc: 'Calculate your actual break-even cost per pound for livestock and target sales profit.',
        icon: Tag,
        features: ['Feed & Sunk costs', 'Break-even /lb', 'Sale margin', 'Total profit scale'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        keywords: ['profit margin', 'retail meat', 'livestock sales', 'pricing']
      },
      {
        path: '/hive-startup',
        title: 'Hive Startup Cost',
        desc: 'Estimate the initial cost of starting beekeeping. Plan your budget for hives, bees, tools, and gear.',
        icon: Hexagon,
        features: ['Bees & Gear', 'Contingency mapping', 'Per-hive vs Shared', 'Standard defaults'],
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        keywords: ['bees', 'apiary', 'honey bees', 'equipment']
      },
      {
        path: '/honey-yield',
        title: 'Honey Yield',
        desc: 'Estimate your apiary\'s honey production and potential revenue based on hive strength.',
        icon: Droplet,
        features: ['Success factors', 'Winter reserves', 'Market price scaling', 'Net harvest yield'],
        color: 'text-amber-500',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        keywords: ['honey extraction', 'super', 'nectar flow', 'harvesting']
      },
      {
        path: '/syrup-mix',
        title: 'Beekeeper Syrup Mix',
        desc: 'Calculate exact sugar and water amounts for feeding bees. Perfect for spring or winter feeding.',
        icon: Beaker,
        features: ['1:1 and 2:1 ratios', 'Output volume scaling', 'Custom combinations', 'Pounds to Pints check'],
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        keywords: ['feeding bees', 'sugar water', 'syrup recipe', 'fall feeding']
      },
      {
        path: '/habitat-cost',
        title: 'Habitat Restoration Cost',
        desc: 'Estimate site prep, seed, planting, and protection costs for converting acreage to native habitat.',
        icon: Leaf,
        features: ['Pollinator & Forest presets', 'Site prep included', 'Tree protection costs', 'NRCS Grant context'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        keywords: ['conservation', 'wildlife', 'prairie', 'reforestation', 'native plants']
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
        keywords: ['drinking water', 'hydration', 'troughs', 'animals', 'consumption']
      },
      {
        path: '/gestation',
        title: 'Animal Gestation',
        desc: 'Estimate due dates for livestock and farm animals based on breeding and service dates.',
        icon: CalendarHeart,
        features: ['Multiple animal types', 'Forward/backward dates', 'Gestation length', 'Due date calculation'],
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        keywords: ['pregnancy', 'due date', 'birthing', 'calving', 'lambing', 'farrowing', 'kidding', 'foaling']
      },
      {
        path: '/incubation',
        title: 'Egg Incubation',
        desc: 'Calculate chicken egg hatch dates, lockdown day, and stop-turning date for poultry.',
        icon: Bird,
        features: ['Set date tracking', 'Lockdown day', 'Stop turning dates', 'Multiple bird species'],
        color: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-100',
        keywords: ['hatching', 'eggs', 'chicks', 'poultry', 'incubator', 'lockdown']
      }
    ]
  },
  {
    id: "business",
    title: "Business & Profit",
    desc: "Revenue, savings, profit planning",
    items: [
      {
        path: '/pain-point-priority',
        title: 'Pain Point Priority',
        desc: 'Rank your biggest rural problems by severity, frequency, and impact so you know what to fix first.',
        icon: AlertOctagon,
        features: ['Live ranking', 'Quick-Win vs Long-Term tiers', 'Saved to local device'],
        color: 'text-rose-600',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        keywords: ['troubleshooting', 'prioritization', 'management', 'decision making']
      },
      {
        path: '/cut-cost',
        title: 'Cut Cost Calculator',
        desc: 'Estimate the expense reduction needed to hit profit targets for your business.',
        icon: Scissors,
        features: ['Monthly savings targets', 'Profit margin optimization', 'Variable vs fixed splits', 'Annual savings tracking'],
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        border: 'border-indigo-100',
        keywords: ['expenses', 'budgeting', 'cost cutting', 'savings', 'profitability']
      },
      {
        path: '/expand-profit',
        title: 'Expand Profit Calculator',
        desc: 'Calculate the required revenue growth to reach break-even or target margins.',
        icon: TrendingUp,
        features: ['Revenue forecasting', 'Profit targeting', 'Margin impact analysis', 'Break-even assessment'],
        color: 'text-fuchsia-600',
        bg: 'bg-fuchsia-50',
        border: 'border-fuchsia-100',
        keywords: ['revenue', 'sales', 'growth', 'margins', 'break-even']
      },
      {
        path: '/compliance',
        title: 'Food Processing Compliance',
        desc: 'Estimate organic certification costs, calculate organic label %, and assess FDA inspection readiness.',
        icon: ShieldCheck,
        features: ['Organic Cert Fee Est.', 'Label % Calculator', 'Exclude water/salt rules', 'FDA Readiness Score'],
        color: 'text-sky-600',
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        keywords: ['regulations', 'fda', 'usda', 'organic', 'safety', 'audits']
      }
    ]
  },
  {
    id: "finance",
    title: "Farm Finance & Loans",
    desc: "Calculate loan payments, land affordability, and equipment financing.",
    items: [
      {
        path: '/farm-finance/loan-payment',
        title: 'Loan Payment Calculator',
        desc: 'Estimate periodic loan payments for farm loans, mortgages, and structured debt.',
        icon: Landmark,
        features: ['Amortization tables', 'Total interest calculation', 'Annual vs Monthly', 'Interest vs Principal'],
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-100',
        keywords: ['loans', 'interest', 'amortization', 'mortgage', 'debt', 'payments']
      },
      {
        path: '/farm-finance/equipment-payment',
        title: 'Equipment Financing',
        desc: 'Calculate costs for financing tractors, implements, and heavy machinery.',
        icon: Truck,
        features: ['Down payment impact', 'Loan term modeling', 'Dealer rate comparison', 'Monthly payment cost'],
        color: 'text-slate-600',
        bg: 'bg-slate-50',
        border: 'border-slate-100',
        keywords: ['tractors', 'machinery', 'implements', 'financing', 'leases', 'loans']
      },
      {
        path: '/farm-finance/land-affordability',
        title: 'Land Affordability',
        desc: 'Determine if your land income or farm budget can comfortably cover the required debt service.',
        icon: Map,
        features: ['Debt service ratios', 'Income modeling', 'Affordability thresholds', 'Acreage cost limits'],
        color: 'text-teal-600',
        bg: 'bg-teal-50',
        border: 'border-teal-100',
        keywords: ['buying land', 'affordability', 'budgets', 'income', 'ratios', 'dsra']
      }
    ]
  },
  {
    id: "grants",
    title: "Government Aid & Grants",
    desc: "Funding, rebates, eligibility",
    items: [
      {
        path: '/grant-readiness',
        title: 'Grant Match & Readiness',
        desc: 'Calculate mandated cash match and reimbursable bridge funding needed for USDA/State grants.',
        icon: Landmark,
        features: ['Match % Calculation', 'Bridge Loan Modeling', 'Phase Reimbursables'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        keywords: ['grants', 'usda', 'funding', 'application', 'match', 'readiness']
      },
      {
        path: '/grant-finder',
        title: 'Grant & Aid Finder',
        desc: 'Search for static government programs, rebates, and aid fitting your business.',
        icon: Search,
        features: ['USDA & SBA loans', 'Sector-based search', 'Disaster relief resources', 'Eligibility basics'],
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        border: 'border-emerald-100',
        keywords: ['grants', 'loans', 'subsidies', 'relief', 'aid', 'programs']
      },
      {
        path: '/free-resources',
        title: 'Free Resources Hub',
        desc: 'A curated guide to the best free programs, extension offices, grants, and USDA support.',
        icon: Landmark,
        features: ['USDA Programs', 'Local Extension', 'Farm Aid', 'Funding Resources'],
        color: 'text-emerald-700',
        bg: 'bg-emerald-100',
        border: 'border-emerald-200',
        keywords: ['free resources', 'extension', 'usda', 'help']
      }
    ]
  },
  {
    title: "Home Services / Rural Living",
    desc: "Misc rural living tools",
    items: []
  }
];

// Combine into search map for Layout to use
export const flatNavCategories = calculatorCategories;
