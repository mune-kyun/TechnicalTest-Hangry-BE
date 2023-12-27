const dataStore: {
  id: number;
  name: string;
  email: string;
  dateOfBirth: string | Date;
}[] = [
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

const createUser = (body: {
  name: string;
  email: string;
  dateOfBirth: string | null;
}) => {
  const { name, email, dateOfBirth } = body;

  if (name && email) {
    const id = dataStore[dataStore.length - 1].id + 1;
    const _dateOfBirth = dateOfBirth ? dateOfBirth : new Date();

    const newUser = {
      id,
      name,
      email,
      dateOfBirth: _dateOfBirth,
    };
    dataStore.push(newUser);

    return newUser;
  } else {
    return null;
  }
};

export default { getAllUsers, createUser };
