import { resolve } from "path";
import readInput from "../../utils/readInput";
import play from "./play";
import { Round } from "./types";

function day2() {
  console.info(
    "What would your total score be if everything goes exactly according to your strategy guide?"
  );

  const lines = readInput(resolve(__dirname, "input"));

  const score = lines.reduce((acc, line) => {
    if (line.length === 0) return acc;
    const round = line.split(" ");
    const result = play(round as Round);
    return acc + result;
  }, 0);

  console.info(score);
}

export default day2;
