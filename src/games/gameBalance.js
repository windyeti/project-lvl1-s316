import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const rule = 'Balance the given number.';
const rebuildArrNum = (arr) => {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  const newArr = [].slice.call(arr);
  newArr.splice(arr.indexOf(max), 1, arr[arr.indexOf(max)] - 1);
  newArr.splice(arr.indexOf(min), 1, arr[arr.indexOf(min)] + 1);

  return newArr;
};

const isDiffMoreOne = arr => Math.max(...arr) - Math.min(...arr) > 1;

const getBalance = (num) => {
  let arrNum = num.toString().split('').map(Number);
  while (isDiffMoreOne(arrNum)) {
    arrNum = rebuildArrNum(arrNum);
  }
  return arrNum.sort().join('');
};
const getGameData = () => {
  const question = generateRandomNumber(1, 10000);
  const rightAnswer = getBalance(question);
  console.log('rightAnswer:', rightAnswer);
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
