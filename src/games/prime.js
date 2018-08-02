import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Is this number prime?';

const numMin = 2;
const numMax = 500;

const getGameData = () => {
  if (numMin < 2 || numMax < 2) {
    console.log('Некорректно задан интервал возможных чисел');
    return;
  }
  const question = generateRandomNumber(numMin, numMax);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  console.log('===== >>>', question, '+++++ >>>', isPrime(question));
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
