export const categoryCard = [
  ["restaurants", "/cards/restaurant-card.png"],
  ["groceries", "/cards/groceries-card.png"],
  ["health", "/cards/health-card.png"],
  ["shopping", "/cards/shopping-card.png"],
  ["transport", "/cards/transport-card.png"],
  ["general", "/cards/general-card.png"],
  ["services", "/cards/services-card.png"],
];

export const getCategoryCard = (cat) =>
  categoryCard.find((rp) => rp[0] == cat)[1];
