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
    category: "groceries",
    renewalPeriod: "month",
    name: "Wspólne gotowanie z dziewczyną",
    budget: 2000.00,
    available: 1500.59,
    users: [
      {
        id: 1,
        contribution: 50,
        used: 250.02,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 50,
        used: 249.39,
        blockPayment: false,
      },
    ],
  },
  {
    id: 2,
    category: "services",
    renewalPeriod: "month",
    name: "Opłaty za wynajem mieszkania",
    budget: 2500.00,
    available: 2500.00,
    users: [
      {
        id: 1,
        contribution: 33.34,
        used: 0.00,
        blockPayment: false,
      },
      {
        id: 2,
        contribution: 33.33,
        used: 0.00,
        blockPayment: false,
      },
      {
        id: 3,
        contribution: 33.33,
        used: 0.00,
        blockPayment: false,
      },
    ],
  },
  {
    id: 3,
    category: "general",
    renewalPeriod: "week",
    name: "Zakupy dla babci",
    budget: 250.00,
    available: 11.69,
    users: [
      {
        id: 1,
        contribution: 0,
        used: 238.31,
        blockPayment: false,
      },
      {
        id: 4,
        contribution: 100,
        used: 0.00,
        blockPayment: true,
      },
    ],
  },
];

export const getAccountById = (id) => accounts.find((u) => u.id == id);
