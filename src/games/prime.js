import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const getDivisors = (num) => {
  const divisors = [];
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
};

const rule = 'Is this number prime?';

const getGameData = () => {
  const question = generateRandomNumber(1, 500);
  const arrDivisors = getDivisors(question);
  const isPrime = arrDivisors.length === 0;
  const rightAnswer = isPrime ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
