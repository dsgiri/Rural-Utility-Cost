import React from 'react';
import { SEO } from '../../components/SEO';
import YieldLossCalculator from './yield-loss';
import EconomicThresholdCalculator from './economic-threshold';
import DegreeDayCalculator from './degree-days';

export default function CropPestEconomics() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-12">
      <SEO 
        title="Crop Pest Economics & Decision Support | Rural Utility Cost" 
        description="Science-backed pest decision-support tools. Estimate yield loss, break-even economic thresholds, and insect degree-day development timing." 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Crop Pest Economics</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            A science-backed decision-support cluster. Estimate crop damage, understand when control action may be justified, and time your pest management based on accumulated heat units.
          </p>
        </div>

        <div className="space-y-12">
          {/* Yield Loss section */}
          <section id="yield-loss">
            <YieldLossCalculator />
          </section>

          {/* Economic Threshold section */}
          <section id="economic-threshold">
            <EconomicThresholdCalculator />
          </section>

          {/* Degree-Days section */}
          <section id="degree-days">
            <DegreeDayCalculator />
          </section>
        </div>
        
        {/* Help/FAQ */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Decision Support Fundamentals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Understand the Loss</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Before applying costly treatments, use the <strong>Yield-Loss Estimator</strong> to translate physical pest damage into dollars per acre. If the expected dollar loss is smaller than the cost to spray, treatment may not be mathematically justified.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. Find the Threshold</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                The <strong>Economic Threshold Tool</strong> calculates the specific pest density where treating breaks even. Finding this "Action Point" allows you to spray before pests reach the Economic Injury Level (the point of direct revenue loss).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Time the Application</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Spraying at the wrong insect life stage is wasted money. Use the <strong>Degree-Day Timing Tool</strong> to track heat accumulation. This tracks biological pest development so you can intervene exactly when insects are most vulnerable.
              </p>
            </div>

            <div className="md:col-span-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Disclaimers & Limitations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                These tools provide theoretical economic baseline estimates based purely on user inputs. They cannot account for sudden weather shifts, secondary pest outbreaks, pesticide resistance, or complex biological interactions. These tools do not replace hands-on field scouting or advice from certified crop advisors and extension services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
