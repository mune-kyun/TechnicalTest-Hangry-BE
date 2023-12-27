let dataStore = [
  {
    id: 1,
    name: "FirstLander",
    email: "firstlander@gmail.com",
    dateOfBirth: new Date(),
  },
  {
    id: 2,
    name: "FirstLander",
    email: "firstlander@gmail.com",
    dateOfBirth: "2023-12-27T11:24:21.098Z",
  },
];

const getAllUsers = () => {
  return dataStore;
};

export default { getAllUsers };
