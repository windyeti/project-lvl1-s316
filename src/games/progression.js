import { cons } from 'hexlet-pairs';

import gameFlow from '../gameFlow';
import generateRandomNumber from '../utils';

const stepsProgression = 10;
const makeProgression = () => {
  const progression = [];
  progression[0] = generateRandomNumber(1, 10);
  const increment = generateRandomNumber(1, 10);
  for (let i = 1; i < stepsProgression; i += 1) {
    progression[i] = progression[i - 1] + increment;
  }
  return progression;
};

const rule = 'What number is missing in this progression?';
const getGameData = () => {
  const progression = makeProgression();
  const indexRandom = generateRandomNumber(1, 8);
  const rightAnswer = progression[indexRandom];
  progression[indexRandom] = '..';
  const question = progression.join(' ');
  return cons(question, rightAnswer.toString());
};

export default () => gameFlow(rule, getGameData);
