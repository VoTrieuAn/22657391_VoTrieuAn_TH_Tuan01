const BMI = (mass, height) => {
  return  mass / height ** 2;
}

const markHigherBMI = (markBMI, johnBMI) => {
  return markBMI > johnBMI;
}

console.log("Data test 1");

let markW = 78;
let markH = 1.69;
let johnW = 92;
let johnH = 1.95;

let markBMI = BMI(markW, markH);

let johnBMI = BMI(johnW, johnH);


if(markHigherBMI(markBMI, johnBMI)) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Marks's (${markBMI.toFixed(1)})!`);
}

console.log("Data test 2");

markW = 95;
markH = 1.88;
johnW = 85;
johnH = 1.76;

markBMI = BMI(markW, markH);
johnBMI = BMI(johnW, johnH);

if(markHigherBMI(markBMI, johnBMI)) {
  console.log("Mark's BMI is higher than John's!");
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else {
  console.log("John's BMI is higher than Mark's!");
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Marks's (${markBMI.toFixed(1)})!`);
}