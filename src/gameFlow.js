import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const step = 3;

export default (rule, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  for (let i = 0; i < step; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${car(question)}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === cdr(question)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' your answer. Not correct! Correct '${cdr(question)}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
