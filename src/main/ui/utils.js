export function calculateCompoundInterest(principal, rate, timesPerYear, years) {
    // formula: A = P(1 + r/n)^(nt)
    const base = 1 + (rate / timesPerYear);
    const exponent = timesPerYear * years;
    const totalAmount = principal * Math.pow(base, exponent);
    return totalAmount;
}

export function calculateCompoundInterestWithContributions(principal, rate, timesPerYear, years, monthlyContribution) {
    let totalAmount = principal;

    // compound the initial principal
    for (let i = 0; i < timesPerYear * years; i++) {
        totalAmount = totalAmount * (1 + rate / timesPerYear);
    }

    // compound each contribution
    for (let i = 0; i < timesPerYear * years; i++) {
        let contribution = monthlyContribution;
        for (let j = 0; j < timesPerYear * years - i; j++) {
            contribution = contribution * (1 + rate / timesPerYear);
        }
        totalAmount += contribution;
    }

    return totalAmount;
}