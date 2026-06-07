export type PaymentFrequency = 'monthly' | 'quarterly' | 'semiannual' | 'annual';

export type AmortizationType = 'amortized' | 'fixed-principal';

export const periodsPerYear: Record<PaymentFrequency, number> = {
  monthly: 12,
  quarterly: 4,
  semiannual: 2,
  annual: 1
};

export interface LoanInput {
  loanAmount: number;
  interestRate: number; // Annual interest rate in percent (e.g., 5.5)
  loanTermYears: number;
  paymentFrequency: PaymentFrequency;
  amortizationType: AmortizationType;
}

export interface PaymentSchedule {
  period: number;
  payment: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export interface LoanResult {
  periodicPayment: number; // For fixed-principal, this is the first payment
  totalRepayment: number;
  totalInterest: number;
  totalPrincipal: number;
  schedule: PaymentSchedule[];
}

export function calculateAmortizedLoan(input: LoanInput): LoanResult {
  const { loanAmount, interestRate, loanTermYears, paymentFrequency } = input;
  
  if (loanAmount <= 0 || loanTermYears <= 0 || interestRate < 0) {
    return {
      periodicPayment: 0,
      totalRepayment: 0,
      totalInterest: 0,
      totalPrincipal: 0,
      schedule: []
    };
  }

  const periods = periodsPerYear[paymentFrequency];
  const totalPeriods = loanTermYears * periods;
  
  // Rate per period in decimal
  const r = (interestRate / 100) / periods;
  
  let pmt = 0;
  if (r === 0) {
    pmt = loanAmount / totalPeriods;
  } else {
    pmt = loanAmount * (r * Math.pow(1 + r, totalPeriods)) / (Math.pow(1 + r, totalPeriods) - 1);
  }

  const schedule: PaymentSchedule[] = [];
  let balance = loanAmount;
  let totalInterest = 0;

  for (let i = 1; i <= totalPeriods; i++) {
    const interestPayment = balance * r;
    let principalPayment = pmt - interestPayment;
    
    // Adjust last payment
    if (i === totalPeriods) {
      principalPayment = balance;
      pmt = principalPayment + interestPayment;
    }

    balance -= principalPayment;
    totalInterest += interestPayment;

    schedule.push({
      period: i,
      payment: pmt,
      principalPaid: principalPayment,
      interestPaid: interestPayment,
      remainingBalance: Math.max(0, balance)
    });
  }

  return {
    periodicPayment: pmt,
    totalRepayment: loanAmount + totalInterest,
    totalInterest: totalInterest,
    totalPrincipal: loanAmount,
    schedule
  };
}

export function calculateFixedPrincipalLoan(input: LoanInput): LoanResult {
  const { loanAmount, interestRate, loanTermYears, paymentFrequency } = input;
  
  if (loanAmount <= 0 || loanTermYears <= 0 || interestRate < 0) {
    return {
      periodicPayment: 0,
      totalRepayment: 0,
      totalInterest: 0,
      totalPrincipal: 0,
      schedule: []
    };
  }

  const periods = periodsPerYear[paymentFrequency];
  const totalPeriods = loanTermYears * periods;
  const r = (interestRate / 100) / periods;

  const principalPayment = loanAmount / totalPeriods;
  const schedule: PaymentSchedule[] = [];
  
  let balance = loanAmount;
  let totalInterest = 0;

  for (let i = 1; i <= totalPeriods; i++) {
    const interestPayment = balance * r;
    const pmt = principalPayment + interestPayment;

    // Adjust last payment to fix any rounding issues
    let actualPrincipal = principalPayment;
    if (i === totalPeriods) {
      actualPrincipal = balance;
    }

    balance -= actualPrincipal;
    totalInterest += interestPayment;

    schedule.push({
      period: i,
      payment: pmt,
      principalPaid: actualPrincipal,
      interestPaid: interestPayment,
      remainingBalance: Math.max(0, balance)
    });
  }

  return {
    periodicPayment: schedule.length > 0 ? schedule[0].payment : 0, // First payment (highest)
    totalRepayment: loanAmount + totalInterest,
    totalInterest: totalInterest,
    totalPrincipal: loanAmount,
    schedule
  };
}

export function calculateLoan(input: LoanInput): LoanResult {
  if (input.amortizationType === 'fixed-principal') {
    return calculateFixedPrincipalLoan(input);
  }
  return calculateAmortizedLoan(input);
}
