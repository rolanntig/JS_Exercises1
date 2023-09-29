const allergens = {
  eggs: 1,
  peanuts: 2,
  shellfish: 4,
  strawberries: 8,
  tomatoes: 16,
  chocolate: 32,
  pollen: 64,
  cats: 128,
};

function isAllergic(score, allergen) {
  return (score & allergens[allergen]) !== 0;
}

function listAllergies(score) {
  const allergies = [];

  for (const allergen in allergens) {
    if (isAllergic(score, allergen)) {
      allergies.push(allergen);
    }
  }

  return allergies;
}

const score = 34;
console.log("Is Tom allergic to peanuts?", isAllergic(score, "peanuts"));
console.log("Tom's allergies:", listAllergies(score));
