import { describe, it, expect } from 'vitest';
import { calculateLoan, LoanInput } from './financeMath';

describe('financeMath', () => {
  it('calculates amortized loan correctly', () => {
    const input: LoanInput = {
      loanAmount: 100000,
      interestRate: 5,
      loanTermYears: 10,
      paymentFrequency: 'annual',
      amortizationType: 'amortized'
    };

    const result = calculateLoan(input);
    
    expect(result.schedule.length).toBe(10);
    // Formula for annual amortized: 100000 * (0.05 * 1.05^10)/(1.05^10 - 1)
    // ≈ 12950.46
    expect(result.periodicPayment).toBeCloseTo(12950.46, 1);
    expect(result.totalPrincipal).toBe(100000);
    expect(result.schedule[9].remainingBalance).toBe(0);
  });

  it('calculates fixed-principal loan correctly', () => {
    const input: LoanInput = {
      loanAmount: 100000,
      interestRate: 5,
      loanTermYears: 10,
      paymentFrequency: 'annual',
      amortizationType: 'fixed-principal'
    };

    const result = calculateLoan(input);
    
    expect(result.schedule.length).toBe(10);
    
    // Principal payment per year = 10,000
    // First year interest = 100,000 * 0.05 = 5,000. Total payment = 15,000
    expect(result.periodicPayment).toBe(15000);
    expect(result.schedule[0].payment).toBe(15000);
    
    // Second year interest = 90,000 * 0.05 = 4,500. Total payment = 14,500
    expect(result.schedule[1].payment).toBe(14500);
    
    expect(result.totalPrincipal).toBe(100000);
    expect(result.schedule[9].remainingBalance).toBe(0);
  });

  it('handles zero interest properly for amortized loan', () => {
    const input: LoanInput = {
      loanAmount: 12000,
      interestRate: 0,
      loanTermYears: 1,
      paymentFrequency: 'monthly',
      amortizationType: 'amortized'
    };

    const result = calculateLoan(input);
    expect(result.periodicPayment).toBe(1000);
    expect(result.totalInterest).toBe(0);
    expect(result.totalRepayment).toBe(12000);
  });
});
