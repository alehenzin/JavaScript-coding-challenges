
//Mark Data
const markHeight = 1.69;
const markWeight = 78;

//John Data
const johnHeight = 1.95;
const johnWeight = 92;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(`Mark's BMI is: ${markBMI}, and John's BMI is: ${johnBMI}. Is Mark's BMI higher than John's? ${markHigherBMI}`);