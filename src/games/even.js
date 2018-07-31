import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const getGameData = () => {
  const question = generateRandomNumber(1, 20);
  const isEven = question % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';
  return cons(question, rightAnswer);
};

export default () => gameFlow(rule, getGameData);
