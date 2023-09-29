//hourly rate

const dayRate = (rate) => {
  return rate * 8;
};

const daysInBudget = (budget, rate) => {
  return Math.floor(budget / rate);
};

const priceWithMonthlyDiscount = (rate, days, discount) => {
  const billableDaysInMonth = 22;
  const dayrate = dayRate(rate);
  const dayRateDiscounted = dayrate * discount;
  const remainingDays = days % billableDaysInMonth;
  const remainingDaysPrice = remainingDays * dayrate;
  const discountedDays = days - remainingDays;
  const discountedDaysPrice = discountedDays * (dayrate - dayRateDiscounted);

  return Math.ceil(discountedDaysPrice + remainingDaysPrice);
};

console.log(dayRate(89));
console.log(daysInBudget(20000, dayRate(89)));
console.log(priceWithMonthlyDiscount(89, 230, 0.42));
