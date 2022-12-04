import { resolve } from "path";
import readInput from "../../utils/readInput";
import { Elve } from "./types";

function day1() {
  console.info(
    "Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?"
  );

  const lines = readInput(resolve(__dirname, "input"));

  const elves = lines.reduce((acc: Elve[], line) => {
    if (line.length === 0) return [...acc, { foods: [], total: 0 }];
    const prev = acc.at(-1) || { foods: [], total: 0 };
    const food = Number(line);
    return [
      ...acc.slice(0, -1),
      { foods: [...prev.foods, food], total: prev.total + food },
    ];
  }, []);

  const elfToAskFood = Math.max(...elves.map((elf) => elf.total));

  console.info(elfToAskFood);
}

export default day1;
