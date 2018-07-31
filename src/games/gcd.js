import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const getMaxDivisor = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);
  for (let i = min; i > 0; i -= 1) {
    if (max % i === 0 && min % i === 0) {
      return i;
    }
  }
  return false;
};

const rule = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const num1 = generateRandomNumber(1, 100);
  const num2 = generateRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = getMaxDivisor(num1, num2);
  return cons(question, rightAnswer.toString());
};

export default () => gameFlow(rule, getGameData);
