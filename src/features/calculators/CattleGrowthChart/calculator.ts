export interface GrowthInput {
  currentWeight: number;
  previousWeight: number;
  daysBetween: number;
  targetWeight: number;
  futureDays?: number;
}

export interface GrowthResult {
  adg: number;
  remainingGain: number;
  daysToTarget: number | null; // null if ADG <= 0
  projectedWeight: number | null; // null if futureDays not provided
  status: 'behind target' | 'on track' | 'ahead of target' | 'gaining negative/zero';
  warning?: string;
  weightGained: number;
}

export function calculateGrowth(input: GrowthInput): GrowthResult {
  const { currentWeight, previousWeight, daysBetween, targetWeight, futureDays } = input;

  if (daysBetween <= 0) {
    throw new Error("Days between weigh-ins must be greater than zero.");
  }
  if (currentWeight < 0 || previousWeight < 0) {
    throw new Error("Weights cannot be negative.");
  }

  const weightGained = currentWeight - previousWeight;
  const adg = weightGained / daysBetween;
  const remainingGain = Math.max(0, targetWeight - currentWeight);
  
  let daysToTarget: number | null = null;
  let status: GrowthResult['status'] = 'on track';
  let warning: string | undefined = undefined;

  if (adg <= 0) {
    status = 'gaining negative/zero';
    warning = "ADG is zero or negative. Projections cannot be calculated.";
  } else {
    if (remainingGain > 0) {
        daysToTarget = remainingGain / adg;
    } else {
        daysToTarget = 0;
    }
    
    // Status approximation based on typical cattle ADG? 
    // Wait, the prompt just says "show a simple status message like: ahead of target, on track, behind target".
    // We will base it on ADG vs required ADG to hit target in desired timeframe? There is no "target date" required, only optional.
    // If we just need a simple status indicator:
    if (adg >= 2.5) {
      status = 'ahead of target';
    } else if (adg >= 1.5) {
      status = 'on track';
    } else {
      status = 'behind target';
    }
  }

  let projectedWeight: number | null = null;
  if (futureDays !== undefined && futureDays > 0) {
    projectedWeight = currentWeight + (adg * futureDays);
  }

  return {
    adg,
    remainingGain,
    daysToTarget,
    projectedWeight,
    status,
    warning,
    weightGained
  };
}
