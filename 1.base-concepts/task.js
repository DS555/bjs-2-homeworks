"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = ((b**2)-4*a*c);
  if (d === 0) {
    let x1 = (-b)/(2*a);
    arr.push(x1);
   } 
   else if (d > 0) {
    let x1 = ((-b + Math.sqrt(d) )/(2*a));
    let x2 = ((-b - Math.sqrt(d) )/(2*a));
    arr.push(x1, x2);
   }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent/(100*12);
  let principalSum = (amount-contribution);
  let monthPayment = (principalSum*(monthPercent+(monthPercent/(((1+monthPercent)**countMonths)-1))));
  let creditSum = (contribution+monthPayment*countMonths);
  return Number(creditSum.toFixed(2));
}