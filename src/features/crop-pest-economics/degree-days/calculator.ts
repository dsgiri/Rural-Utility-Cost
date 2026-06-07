export interface DegreeDayEntry {
  date: string;
  minTemp: number;
  maxTemp: number;
}

export interface DegreeDayInput {
  lowerThreshold: number;
  upperThreshold: number | null;
  entries: DegreeDayEntry[];
}

export interface DegreeDayResultEntry {
  date: string;
  dailyDD: number;
  accumulatedDD: number;
}

export interface DegreeDayResult {
  results: DegreeDayResultEntry[];
  totalAccumulated: number;
}

export interface Milestone {
  name: string;
  ddRequired: number;
}

export function calculateDegreeDays(input: DegreeDayInput): DegreeDayResult {
  const { lowerThreshold, upperThreshold, entries } = input;
  
  let accumulatedDD = 0;
  const results: DegreeDayResultEntry[] = [];
  
  for (const entry of entries) {
    let { minTemp, maxTemp } = entry;
    
    // Safety check for unrealistic inputs
    if (minTemp > maxTemp) {
      const temp = minTemp;
      minTemp = maxTemp;
      maxTemp = temp;
    }

    // Apply upper threshold cut-off if provided
    let effectiveMax = maxTemp;
    if (upperThreshold !== null && maxTemp > upperThreshold) {
      effectiveMax = upperThreshold;
    }

    // Simple Average Method: ((Max + Min) / 2) - Lower Threshold
    // Note: there are many methods (sine curve, modified sine), but simple average is most transparent for standard web calculators.
    let avg = (effectiveMax + minTemp) / 2;
    let dailyDD = avg - lowerThreshold;

    // If daily average is below lower threshold, daily accumulation is 0
    if (dailyDD < 0) {
      dailyDD = 0;
    }
    
    accumulatedDD += dailyDD;
    
    results.push({
      date: entry.date,
      dailyDD,
      accumulatedDD
    });
  }
  
  return {
    results,
    totalAccumulated: accumulatedDD
  };
}
