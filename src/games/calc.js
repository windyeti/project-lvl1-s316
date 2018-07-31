import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const arrActions = ['+', '-', '*'];
const rule = 'What is the result of the expression?';
const getGameData = () => {
  let rightAnswer;
  const randomIndAction = generateRandomNumber(0, 2);
  const action = arrActions[randomIndAction];
  const num1 = generateRandomNumber(0, 100);
  const num2 = generateRandomNumber(0, 100);
  const question = `${num1} ${action} ${num2}`;
  switch (action) {
    case '+':
      rightAnswer = (num1 + num2).toString();
      break;
    case '-':
      rightAnswer = (num1 - num2).toString();
      break;
    case '*':
      rightAnswer = (num1 * num2).toString();
      break;
    default:
      rightAnswer = 0;
  }
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
