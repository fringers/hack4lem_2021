export const users = [
  {
    id: 1,
    email: "ali.connors@gmail.com",
    fullName: "Ali Connors",
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    email: "travis.howard@gmail.com",
    fullName: "Travis Howard",
    avatar: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    id: 3,
    email: "sandra.adams@gmail.com",
    fullName: "Sandra Adams",
    avatar: "https://material-ui.com/static/images/avatar/3.jpg",
  },
];

// eslint-disable-next-line
export const getUserById = (id) => users.find((u) => u.id == id);
