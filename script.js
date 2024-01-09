const answer = Math.floor(Math.random() * 100);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = prompt(`Guess a number between 1 to 100`);
  guess = Number(guess);
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess > 100 || guess < 1) {
    alert("please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      alert("Too Low ! Try Again");
    } else if (guess > answer) {
      alert("Too High ! Try Again");
    } else {
      alert(
        `Correct ! The answer was ${answer}. It took you ${attempts} attempts `
      );
      running = false;
    }
  }
}
