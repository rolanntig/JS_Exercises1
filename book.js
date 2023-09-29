function cost(basket) {
  const bookPrices = [800, 800, 800, 800, 800];
  const discountRates = [0, 5, 10, 20, 25]; 
  const bookCounts = [0, 0, 0, 0, 0]; 

  for (const book of basket) {
    bookCounts[book - 1]++;
  }

  let totalCost = 0;
  while (basket.length > 0) {
    const differentBooks = bookCounts.filter((count) => count > 0).length;

    const maxDiscountRate = discountRates[differentBooks];

    let costWithMaxDiscount = 0;
    for (let i = 0; i < bookCounts.length; i++) {
      if (bookCounts[i] > 0) {
        costWithMaxDiscount += bookPrices[i];
        bookCounts[i]--;
      }
    }

    totalCost += (1 - maxDiscountRate / 100) * costWithMaxDiscount;
  }

  return Math.round(totalCost);
}

const basket = [1, 1, 2, 2, 3, 3, 4, 5];
console.log(cost(basket));
