import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Is this number prime?';

const getGameData = () => {
  const question = generateRandomNumber(1, 500);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
