const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};
console.log("user", user);

// Copy of user

const newUser = {
  ...user,
};

console.log("new user", newUser);

// Update value to department

const updatedUser = {
  ...newUser,
  department: {
    ...newUser.department,
    Shift: "Evening",
  },
};

console.log("updated user", updatedUser);
