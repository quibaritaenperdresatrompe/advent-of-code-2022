import { resolve } from "path";
import readInput from "../../utils/readInput";

enum OpponentShape {
  A = 1,
  B = 2,
  C = 3,
}

enum MyShape {
  X = 1,
  Y = 2,
  Z = 3,
}

function play(opponent: number, me: number) {
  if (opponent < me) {
    return me + 6;
  }
  if (opponent === me) {
    return me + 3;
  }
  return me;
}

function day2() {
  console.info(
    "What would your total score be if everything goes exactly according to your strategy guide?"
  );

  const rounds = readInput(resolve(__dirname, "input"));

  const score = rounds.reduce((acc, round) => {
    const [opponent, me] = round.split(" ");
    if (!opponent || !me) {
      return acc;
    }
    const result = play(
      OpponentShape[opponent as keyof typeof OpponentShape],
      MyShape[me as keyof typeof MyShape]
    );
    return acc + result;
  }, 0);

  console.info(score);
}

export default day2;
