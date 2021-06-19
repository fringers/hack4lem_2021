import { users } from "./users";

export const invoices = {
  invoices: [
    {
      name: "Transakcja",
      data: "2021-06-01",
      dueDate: "2021-06-01",
      paymentMethod: "Karta",
      id: "ABCD-1234",
      description: "Bush burger",
      items: [
        {
          description: "Burger",
          amount: 24.99,
        },
        {
          description: "Duże frytki",
          amount: 8.99,
        },
      ],
    },
  ],
  customer: {
    name: users[0].fullName,
    email: users[0].email,
  },
  company: {
    name: "Bush Burger",
    address: ["Kalwaryjska 20/1", "30-320, Kraków"],
    email: "info@bushburger.com",
    logoUrl:
      "https://static.takeaway.com/images/restaurants/pl/O35177R/logo_465x320.png",
  },
};
