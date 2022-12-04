import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { exit } from "process";

const argv = yargs(hideBin(process.argv)).options({
  day: { type: "string", demandOption: true },
}).argv as { day: string };

if (!argv.day) {
  console.info(
    "Missing command! See available commands in help section by running the `help` command."
  );
  exit(1);
}

import(`./day/${argv.day}`).then((dailyExpedition) => {
  dailyExpedition.default();
});
