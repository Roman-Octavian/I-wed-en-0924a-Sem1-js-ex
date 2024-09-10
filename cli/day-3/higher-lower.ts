import readline from 'readline';

console.log('\n+++++++++++++++++ DAY 3: higher-lower +++++++++++++++++\n');

const random_number = Math.floor(Math.random() * 100 + 1);

let lastGuess: number | undefined;
let guessCount: number = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const takeUserInput = async function (query: string): Promise<string> {
  return await new Promise((resolve, _reject) => {
    rl.question(query, (answer: string) => {
      resolve(answer);
    });
  });
};

while (true) {
  const guess = Number(await takeUserInput('Provide a number between 1 and 100\n\n'));

  if (guess == null || isNaN(guess) || guess < 1 || guess > 100) {
    console.log(`\n ${guess} is not a valid number!`);
  } else {
    if (guess === random_number) {
      console.log(
        `\nYou got it right! The number was ${random_number}\n\nGuesses used: ${guessCount}`,
      );
      break;
    }

    guessCount += 1;
    lastGuess = guess;

    console.log(`\n${guess > random_number ? 'LOWER' : 'HIGHER'} than ${guess}!\n`);
  }
}

process.exit();
