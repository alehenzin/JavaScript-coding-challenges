//Mark Data
const markHeight = 1.88;
const markWeight = 95;

//John Data
const johnHeight = 1.76;
const johnWeight = 85;

const markBMI = markWeight / (markHeight * markHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

//If else

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else if ( johnBMI > markBMI){
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} else {
    console.log(`Wow, they have the same BMI! This is amazing!`);
}