export const categories = [
  ["restaurants", "Restauracje"],
  ["groceries", "Artykuły spożywcze"],
  ["health", "Zdrowie"],
  ["shopping", "Zakupy"],
  ["transport", "Transport"],
  ["general", "Ogólne"],
  ["services", "Usługi"],
];


export const getCategoryText = (key) => // eslint-disable-next-line
  categories.find((rp) => rp[0] == key)[1];
