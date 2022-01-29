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

////////////----------------\\\\\\\\\\\\\

const original = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    aa: 4,
    bb: 5,
    cc: 6,
  },
  func: function () {
    console.log("abc");
  },
};
console.log(original, "original");
// 1- Shallow copy by spread
const copy = {
  ...original,
  d: { ...original.d, aa: 44 },
};
console.log(copy, "spread");

// 2- object.assign -> shallow copy

const copy2 = Object.assign({}, original);
copy2.d.bb = 55;
console.log(copy2, "ObjectAssign");

// 3- JSON.stringify copies nested but doesn;t copy fn
const copy3 = JSON.parse(JSON.stringify(original));
copy3.d.cc = 66;
console.log(copy3, "stringy");
