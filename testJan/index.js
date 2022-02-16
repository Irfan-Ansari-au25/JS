const plans = [
  {
    planType: "Begginer",
    amount: 99,
  },
  {
    planType: "Intermediate",
    amount: 299,
  },
  {
    planType: "Hard",
    amount: 499,
  },
  {
    planType: "Expert",
    amount: 999,
  },
];

item1 = {
  plan: "Begginer",
  cost: 99,
  qty: 0,
  total: 0,
};

item2 = {
  plan: "Intermediate",
  cost: 99,
  qty: 0,
};

item3 = {
  plan: "Hard",
  cost: 99,
  qty: 0,
};

item4 = {
  plan: "Expert",
  cost: 99,
  qty: 0,
};

const onAddBeg = () => {
  item1.qty += 1;
  item1.total = item1.qty * item1.cost;
  console.log(item1);
  document.getElementById("plan").innerHTML = item1.plan;
  document.getElementById("qty").innerHTML = `Qty : $${item1.qty}`;
  document.getElementById("amt").innerHTML = `Cost : $${item1.cost}`;
  document.getElementById("total").innerHTML = `Total : $${item1.total}`;
};

const onAddInt = () => {
  item2.qty += 1;
  console.log(item2);
};

const onAddHard = () => {
  item3.qty += 1;
  console.log(item3);
};

const onAddExp = () => {
  item4.qty += 1;
  console.log(item4);
};
