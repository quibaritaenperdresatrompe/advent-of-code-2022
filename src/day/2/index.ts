import { resolve } from "path";
import readInput from "../../utils/readInput";
import play from "./play";

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

function day2() {
  console.info(
    "What would your total score be if everything goes exactly according to your strategy guide?"
  );

  const lines = readInput(resolve(__dirname, "input"));

  const rounds = lines
    .map((round) => {
      const shapes = round.split(" ");
      const opponent = OpponentShape[shapes[0] as keyof typeof OpponentShape];
      const me = MyShape[shapes[1] as keyof typeof MyShape];
      return [opponent, me];
    })
    .filter((round) => round.filter(Boolean).length === 2);

  const score = rounds.reduce((acc, [opponent, me]) => {
    const result = play(opponent, me);
    return acc + result;
  }, 0);

  console.info(score);
}

export default day2;
