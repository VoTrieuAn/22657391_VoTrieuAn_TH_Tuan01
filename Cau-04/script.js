const calcTips = (bill) => {
  return 50 <= bill <= 300 ? 0.15 : 0.2;
}

console.log("Data test 1");
let bill = 275;
let tips = calcTips(bill);

console.log(`The bill was ${bill}, the tip was ${tips.toFixed(2)} and the total value ${(bill + tips).toFixed(2)}`);

console.log("Data test 2");
bill = 40;
tips = calcTips(bill);

console.log(`The bill was ${bill}, the tip was ${tips.toFixed(2)} and the total value ${(bill + tips).toFixed(2)}`);

console.log("Data test 3");
bill = 430;
tips = calcTips(bill);

console.log(`The bill was ${bill}, the tip was ${tips.toFixed(2)} and the total value ${(bill + tips).toFixed(2)}`);