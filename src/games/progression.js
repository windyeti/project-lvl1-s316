import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const lengthProgression = 10;

const makeProgression = (start, increment) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + i * increment);
  }
  return progression;
};

const rule = 'What number is missing in this progression?';
const getGameData = () => {
  const start = generateRandomNumber(1, 10);
  const increment = generateRandomNumber(1, 10);
  const progression = makeProgression(start, increment);
  const indexRandom = generateRandomNumber(1, 8);
  const rightAnswer = progression[indexRandom];
  progression[indexRandom] = '..';
  const question = progression.join(' ');
  return cons(question, rightAnswer.toString());
};

export default () => gameFlow(rule, getGameData);
