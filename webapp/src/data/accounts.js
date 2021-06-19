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
    budget: 2000,
    available: 460,
    users: [
      {
        id: 1,
        contribution: 40,
        used: 500,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 25,
        used: 200,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 35,
        used: 840,
        blockPayment: false,
      },
    ],
  },
  {
    id: 2,
    category: "general",
    renewalPeriod: "none",
    name: "Odłożone na wakacje 2021",
    budget: 10000,
    available: 10000,
    users: [
      {
        id: 1,
        contribution: 50,
        used: 0,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 50,
        used: 0,
        blockPayment: false,
      },
    ],
  },
  {
    id: 3,
    category: "services",
    renewalPeriod: "month",
    name: "Opłata za wynajem mieszkania",
    budget: 1600,
    available: 1600,
    users: [
      {
        id: 1,
        contribution: 50,
        used: 0,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 50,
        used: 0,
        blockPayment: true,
      },
    ],
  },
  {
    id: 4,
    category: "shopping",
    renewalPeriod: "month",
    name: "Na codzienne zakupy",
    budget: 2000,
    available: 100,
    users: [
      {
        id: 1,
        contribution: 80,
        used: 200,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 20,
        used: 1700,
        blockPayment: false,
      },
    ],
  },
];

export const getAcountById = (id) => accounts.find((u) => u.id == id);
