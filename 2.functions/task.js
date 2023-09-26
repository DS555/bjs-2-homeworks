function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg;
  const initialValue = 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  avg = Number((sum/arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let dif = max-min;
  if (min === Infinity || max === -Infinity) {
    dif = 0;
  }
  return dif;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     sumEvenElement += (arr[i]);
    } else {
      sumOddElement += (arr[i]);
    };
  };
  let difEvenOdd = (sumEvenElement - sumOddElement);
  return (difEvenOdd); 
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let avg;
  let countEven = 0;
  for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     countEven ++;
     sumEvenElement += (arr[i]);
     avg = sumEvenElement/countEven;
    }
  }
  if (arr.length === 0) {
      avg = 0;
  }
  return avg;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity
  for (const arr of arrOfArr) {
      const mediumResult = func(...arr);
   if (mediumResult>maxWorkerResult) {
    maxWorkerResult = mediumResult;
   }
  }
  return maxWorkerResult
}
