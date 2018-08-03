import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const isPrime = (num) => {
  if (num < 3) return -1;
  if (num === 3) return num;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return i;
    }
  }
  return num;
};

const rule = 'Is this number prime?';

const getGameData = () => {
  const question = generateRandomNumber(0, 10);
  const rightAnswer = isPrime(question) === question ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
