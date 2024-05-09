/// first programm
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


function simpNumbers(arr) {
  let simpArr = [];

  for (let i = 0; i < arr.length; i++) {
    let mark = true;

    for (let j = 2; j < i; j++) {
      if (arr[i] % j == 0) {
        mark = false;
        break;
      }
    }

    if (mark) {
      simpArr.push(arr[i]);
    }

  }

  console.log(simpArr);
}

simpNumbers(arr1);

/// second programm 
let arr2 = [
  { sourse: 'telegramm', text: 'hello', date: 'march' },
  { sourse: 'telegramm', text: 'hello', date: 'march' },
  { sourse: 'telegramm', text: 'hello', date: 'june' },
  { sourse: 'instagram', text: 'how are you', date: 'april' },
  { sourse: 'viber', text: 'hi', date: 'march' }
]

const arrOfMessages = Object.groupBy(arr2, item => item.sourse);
console.log(arr2);

///third programm
function groupBy(input, key) {
  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return (acc);
  }, {});
}

let objWithSourse = groupBy(arr2, "sourse");

console.log(objWithSourse)