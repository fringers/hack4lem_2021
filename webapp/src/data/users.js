export const users = [
  {
    id: 1,
    email: "ali.connors@gmail.com",
    fullName: "Tomasz Nowak",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    bankAvatar:
      "https://alebank.pl/wp-content/uploads/2020/04/pko-bank-polski-pko-bp-logo-01-753x424-1.png",
  },
  {
    id: 2,
    email: "travis.howard@gmail.com",
    fullName: "Mateusz Kowalski",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
    bankAvatar:
      "https://www.pngitem.com/pimgs/m/251-2517746_logo-santander-png-transparent-png.png",
  },
  {
    id: 3,
    email: "sandra.adams@gmail.com",
    fullName: "Marta Nowak",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
    bankAvatar:
      "https://play-lh.googleusercontent.com/rvyT-isZRd9AxtgK20HG-uG6IVarqEDJ_sivrkrD7eZCiEMMSVvMCrqFBB4d_Nt-47M",
  },
];

export const getUserById = (id) => users.find((u) => u.id == id);
