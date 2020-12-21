const teamDolphins =  (98 + 108 + 89) / 3;
const teamKoalas = (88 + 91 + 110) / 3;
console.log(teamDolphins,teamKoalas);

if (teamDolphins > teamKoalas){
    console.log(`The winner is Dolphin's team, congratulations!`);
} else if (teamKoalas > teamDolphins){
    console.log(`The winner is Koala's team, congratulations!`);
} else {
    console.log(`Oh no, there is a draw!`);
}

/*
//BONUS 1 && 2

const teamDolphins =  (97 + 112 + 101) / 3;
const teamKoalas = (109 + 95 + 106) / 3;
console.log(teamDolphins,teamKoalas);

if (teamDolphins > teamKoalas && teamDolphins >= 100){
    console.log(`Congratulations! Dolphin's team won the trophy!🏆`);
} else if (teamKoalas > teamDolphins && teamKoalas >= 100){
    console.log(`Congratulations! Koala's team won the trophy!🏆`);
} else if (teamDolphins === teamKoalas && teamDolphins >= 100 && teamKoalas >= 100){
    console.log(`Oh, there is a draw, both teams won the trophy!🏆🏆`);
} else{
    console.log(`No one will take the trophy to home today 😪😫`);
}
*/

