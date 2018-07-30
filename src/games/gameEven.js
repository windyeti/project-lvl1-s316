import readlineSync from 'readline-sync';

const step = 3;

export default () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);
for (let i = 0; i < step; i++) {
  const numberRandom = Math.ceil(Math.random() * 20);
    console.log(`Question: ${numberRandom}`);
    const answer = readlineSync.question('Your answer: ');
    const isEven = numberRandom % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' your answer. Not correct! Correct '${correctAnswer}'`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}