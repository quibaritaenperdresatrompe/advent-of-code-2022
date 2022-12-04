import { readFileSync } from "fs";

/**
 * @function readInput
 * @param filePath File path
 * @returns An array of lines
 */
function readInput(filePath: string): string[] {
  try {
    const input = readFileSync(filePath, "utf-8");
    const lines = input.split(/\r?\n/);
    return lines;
  } catch (error) {
    console.error(error, "Input file not found");
    return [];
  }
}

export default readInput;
