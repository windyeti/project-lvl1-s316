import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Is this number prime?';

const getGameData = () => {
  const question = generateRandomNumber(0, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
