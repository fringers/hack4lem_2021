export const renewalPeriods = [
  ["none", "Jednorazowy"],
  ["week", "Co tydzień"],
  ["month", "Co miesiąc"],
  ["quarter", "Co kwartał"],
  ["year", "Co rok"],
];

export const getRenewalPeriodText = (key) =>  // eslint-disable-next-line
  renewalPeriods.find((rp) => rp[0] == key)[1];
  