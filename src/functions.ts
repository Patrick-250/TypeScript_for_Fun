function calculateTax(income: number): number {
  if (income <= 10000) {
    return 0;
  } else {
    return income * 0.1;
  }
}
