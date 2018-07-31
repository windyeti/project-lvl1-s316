import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const steps = 3;

export default (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < steps; i += 1) {
    const gameData = getGameData();
    console.log(`Question: ${car(gameData)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === cdr(gameData)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' your answer. Not correct! Correct '${cdr(gameData)}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
