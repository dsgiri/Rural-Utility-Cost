export interface ThresholdInput {
  cropValuePerUnit: number;
  controlCostPerAcre: number;
  controlEffectiveness: number; // 0-100%
  injuryPerPestUnit: number; // proportional yield loss per pest unit (e.g. 0.05 yield units lost per bug)
  yieldUnit: string;
  pestName: string;
  pestUnit: string;
}

export interface ThresholdResult {
  economicInjuryLevel: number; // Pests per unit to cause damage equal to control cost
  economicThreshold: number; // 80% of EIL as standard heuristic
  isValid: boolean;
}

export function calculateThreshold(input: ThresholdInput): ThresholdResult {
  const { cropValuePerUnit, controlCostPerAcre, controlEffectiveness, injuryPerPestUnit } = input;
  
  const proportionEffectiveness = controlEffectiveness / 100;
  
  let isValid = true;
  let economicInjuryLevel = 0;
  let economicThreshold = 0;

  if (cropValuePerUnit <= 0 || injuryPerPestUnit <= 0 || proportionEffectiveness <= 0 || controlCostPerAcre <= 0) {
    isValid = false;
  } else {
    // EIL = C / (V * I * K)
    // C = management cost per acre
    // V = crop value per unit
    // I = injury units (yield loss) per pest
    // K = proportionate reduction in injury (control effectiveness)
    economicInjuryLevel = controlCostPerAcre / (cropValuePerUnit * injuryPerPestUnit * proportionEffectiveness);
    economicThreshold = economicInjuryLevel * 0.8; // Standard heuristic: ET is 80% of EIL to allow action before EIL is reached
  }
  
  return {
    economicInjuryLevel,
    economicThreshold,
    isValid
  };
}
