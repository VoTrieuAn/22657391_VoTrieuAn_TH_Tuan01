const BMI = (mass, height) => {
  return  mass / height ** 2;
}

const markHigherBMI = (markBMI, johnBMI) => {
  return markBMI > johnBMI;
}

console.log("Data test 1");

const markBMI1 = BMI(78, 1.69);

const johnBMI1 = BMI(92, 1.95);


if(markHigherBMI(markBMI1, johnBMI1)) {
  console.log("Mark có chỉ số BMI cao hơn John");
} else {
  console.log("Mark có chỉ số BMI thấp hơn John");
}

console.log("Data test 2");

const markBMI2 = BMI(95, 1.88);

const johnBMI2 = BMI(85, 1.76);

if(markHigherBMI(markBMI2, johnBMI2)) {
  console.log("Mark có chỉ số BMI cao hơn John");
} else {
  console.log("Mark có chỉ số BMI thấp hơn John");
}