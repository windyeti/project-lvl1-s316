import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import numberRandom from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const question = () => {
  const number = numberRandom(20);
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return cons(number, correctAnswer);
};

export default () => gameFlow(rule, question);
