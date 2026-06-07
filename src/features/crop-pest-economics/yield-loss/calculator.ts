export interface YieldLossInput {
  cropType: string;
  expectedYield: number; // units/acre
  yieldUnit: string;
  percentLoss: number; // 0-100
  cropPrice: number; // per unit
  controlCost: number; // per acre
  acres: number;
}

export interface YieldLossResult {
  lostYieldPerAcre: number;
  dollarLossPerAcre: number;
  totalLostYield: number;
  totalDollarLoss: number;
  netImpactPerAcre: number;
  totalNetImpact: number;
  actionJustified: boolean;
  confidence: 'high' | 'medium' | 'low';
}

export function calculateYieldLoss(input: YieldLossInput): YieldLossResult {
  const lostYieldPerAcre = input.expectedYield * (input.percentLoss / 100);
  const dollarLossPerAcre = lostYieldPerAcre * input.cropPrice;
  const totalLostYield = lostYieldPerAcre * input.acres;
  const totalDollarLoss = dollarLossPerAcre * input.acres;
  
  const netImpactPerAcre = dollarLossPerAcre - input.controlCost;
  const totalNetImpact = netImpactPerAcre * input.acres;
  
  const actionJustified = dollarLossPerAcre > input.controlCost;
  
  // A simple heuristic for confidence:
  // If user enters a high percent loss, confidence tends to drop slightly due to uncertainty,
  // but for now we'll just set it based on typical values.
  let confidence: 'high' | 'medium' | 'low' = 'high';
  if (input.percentLoss > 50 || input.expectedYield === 0) {
    confidence = 'low';
  } else if (input.percentLoss > 20) {
    confidence = 'medium';
  }
  
  return {
    lostYieldPerAcre,
    dollarLossPerAcre,
    totalLostYield,
    totalDollarLoss,
    netImpactPerAcre,
    totalNetImpact,
    actionJustified,
    confidence
  };
}
