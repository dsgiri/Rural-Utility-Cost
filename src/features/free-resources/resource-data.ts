import { Resource } from './types';

export const RESOURCES: Resource[] = [
  // Getting Started
  {
    title: 'USDA Beginning Farmers and Ranchers',
    url: 'https://www.farmers.gov/your-business/beginning-farmers',
    description: 'The official starting line for anyone new to farming. Covers everything from getting a farm number to understanding basic USDA programs.',
    category: 'Getting Started',
    bestFor: 'Beginners who need help navigating official processes first',
    type: 'official'
  },
  {
    title: 'Farmers.gov',
    url: 'https://www.farmers.gov/',
    description: 'A centralized hub for USDA resources, conservation programs, disaster assistance, and loan information.',
    category: 'Getting Started',
    bestFor: 'General farm business management and finding USDA support',
    type: 'official'
  },
  
  // USDA Resources
  {
    title: 'USDA Service Center Locator',
    url: 'https://offices.sc.egov.usda.gov/locator/app',
    description: 'Find your local Farm Service Agency (FSA) and Natural Resources Conservation Service (NRCS) offices. These local reps are essential for grants and programs.',
    category: 'USDA Resources',
    bestFor: 'Finding the physical office where you apply for funding',
    type: 'official'
  },
  {
    title: 'Small and Mid-Sized Farmer Resources',
    url: 'https://www.usda.gov/topics/farming/resources-small-and-midsize-farmers',
    description: 'USDA resources specifically tailored to operations that are not massive commercial setups, including specialized loan programs.',
    category: 'USDA Resources',
    bestFor: 'Family farms and medium-scale producers',
    type: 'official'
  },

  // Extension and Education
  {
    title: 'Cooperative Extension Offices',
    url: 'https://www.nifa.usda.gov/about-nifa/how-we-work/extension/cooperative-extension-system',
    description: 'Your local land-grant university extension provides free, hyper-local advice on soil tests, crop diseases, growing seasons, and livestock care.',
    category: 'Extension and Education',
    bestFor: 'Getting regional advice from actual agronomists for free',
    type: 'extension'
  },
  {
    title: 'SARE (Sustainable Agriculture Research & Education)',
    url: 'https://www.sare.org/',
    description: 'Farmer-driven research grants and thousands of free practical guides on sustainable growing methods, cover crops, and soil health.',
    category: 'Extension and Education',
    bestFor: 'Farmers wanting to transition to sustainable or regenerative practices',
    type: 'official'
  },

  // Funding and Support
  {
    title: 'Farm Aid Resource Network',
    url: 'https://www.farmaid.org/our-work/resources-for-farmers/',
    description: 'A crisis and support network offering free hotlines, legal resources, and mental health support, plus a massive directory of local organizations.',
    category: 'Funding and Support',
    bestFor: 'Farmers in distress or needing rapid referrals to local help',
    type: 'nonprofit'
  },
  {
    title: 'Farm Credit Knowledge Center',
    url: 'https://www.farmcreditknowledgecenter.com/',
    description: 'Free business, finance, and educational resources for farmers, often focused on how to make farm finances pencil out.',
    category: 'Funding and Support',
    bestFor: 'Learning how to secure ag financing and loans',
    type: 'nonprofit'
  },

  // Conservation and Land Help
  {
    title: 'NRCS Conservation Programs',
    url: 'https://www.nrcs.usda.gov/programs-initiatives/eqip-environmental-quality-incentives',
    description: 'Information on the EQIP program and others that literally pay farmers to install fencing, water lines, cover crops, and high tunnels.',
    category: 'Conservation and Land Help',
    bestFor: 'Getting financial help for land improvements (fencing, water, soil)',
    type: 'official'
  },
  {
    title: 'Web Soil Survey',
    url: 'https://websoilsurvey.sc.egov.usda.gov/App/HomePage.htm',
    description: 'A free, incredibly detailed map of your exact property’s soil types and capabilities provided by the USDA. Essential before buying land.',
    category: 'Conservation and Land Help',
    bestFor: 'Checking soil quality and drainage before planting or buying',
    type: 'official'
  },

  // Community and Learning
  {
    title: 'Local Farm Tours & Pasture Walks',
    url: 'https://grassland2-0.org/pasture-walks/', // A representative link, though usually state-specific. Will add a note.
    description: 'Nothing beats walking someone else’s land. Search your state extension or local grazing networks for "pasture walks" or "field days."',
    category: 'Community and Learning',
    bestFor: 'Learning directly from successful local farmers in person',
    type: 'local'
  },
  {
    title: 'ATTRA Sustainable Agriculture',
    url: 'https://attra.ncat.org/',
    description: 'Managed by NCAT, ATTRA provides hundreds of deep-dive publications, podcasts, and hotlines for sustainable ag and livestock questions.',
    category: 'Community and Learning',
    bestFor: 'Deep practical reading on very specific crops or livestock',
    type: 'nonprofit'
  }
];

export const CATEGORIES = Array.from(new Set(RESOURCES.map(r => r.category)));
