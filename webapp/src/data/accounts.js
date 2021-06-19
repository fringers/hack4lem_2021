// OPIS DANYH
// {
//   id: 1,                      // id konta
//   category: "restaurants",    // id kategoria (patrz - categories.js)
//   renewalPeriod: "quarter",   // id okresu odnawiania (patrz - renewalPeriods.js)
//   name: "Rodzinne wyjścia do restauracji",   // nazwa, dowolny string
//   budget: 2000,               // planowany budżet
//   available: 460,             // ile z budżetu zostało do wykorzystania
//   users: [                    // lista powiązanych użytkowników
//     {
//       id: 1,                  // id usera (patrz - users.js)
//       contribution: 40,       // wkład użytkownika (w procentach z całego budget)
//       used: 500,              // tyle użył z budżetu
//       blockPayment: false,    // jeśli true, może tylko wpłacać ale nie może używać
//     },
//   ],
// },

export const accounts = [
  {
    id: 1,
    category: "restaurants",
    renewalPeriod: "quarter",
    name: "Rodzinne wyjścia do restauracji",
    budget: 2000.00,
    available: 460.59,
    users: [
      {
        id: 1,
        contribution: 40,
        used: 512.02,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 25,
        used: 279.82,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 35,
        used: 747.57,
        blockPayment: false,
      },
    ],
  },
  {
    id: 2,
    category: "general",
    renewalPeriod: "none",
    name: "Odłożone na wakacje 2021",
    budget: 10000.00,
    available: 10000.00,
    users: [
      {
        id: 1,
        contribution: 50,
        used: 0.00,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 50,
        used: 0.00,
        blockPayment: false,
      },
    ],
  },
  {
    id: 3,
    category: "services",
    renewalPeriod: "month",
    name: "Opłata za wynajem mieszkania",
    budget: 1600.00,
    available: 1600.00,
    users: [
      {
        id: 1,
        contribution: 50,
        used: 0.00,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 50,
        used: 0.00,
        blockPayment: true,
      },
    ],
  },
  {
    id: 4,
    category: "shopping",
    renewalPeriod: "month",
    name: "Na codzienne zakupy",
    budget: 2000.00,
    available: 121.56,
    users: [
      {
        id: 1,
        contribution: 80,
        used: 199.99,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 20,
        used: 1678.45,
        blockPayment: false,
      },
    ],
  },
];

export const getAccountById = (id) => accounts.find((u) => u.id == id);
