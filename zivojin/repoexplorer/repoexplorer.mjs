import chalk from "chalk";
import { exec } from "node:child_process";

export function run() {
  console.log(chalk.green("=== Repo Explorer ==="));
  console.log(chalk.blue("Fetching commit counts per author...\n"));

  exec("git shortlog -s -n --all", (error, stdout, stderr) => {
    if (error) return console.log(chalk.red(`Error: ${error.message}`));
    if (stderr) return console.log(chalk.yellow(`Stderr: ${stderr}`));

    const lines = stdout.trim().split("\n");

    // Create array of { commits, developer }
    let developers = lines.map((line) => {
      const [count, ...nameParts] = line.trim().split(/\s+/);
      return {
        commits: parseInt(count),
        developer: nameParts.join(" "),
      };
    });

    // Rename special cases
    developers = developers.map((dev) => {
      if (dev.developer === "pvukmanovic-pannonians")
        return { commits: dev.commits, developer: "Petar Vukmanovic" };
      if (dev.developer === "DavidMandic")
        return { commits: dev.commits, developer: "David Mandic" };
      if (
        dev.developer === "marinajokic" ||
        dev.developer === "“marina.jokic”" ||
        dev.developer === "marina.jokic"
      ) {
        return { commits: dev.commits, developer: "Marina Jokic" };
      }
      if (dev.developer === "Jovan")
        return { commits: dev.commits, developer: "Jovan Kovacic" };

      return dev;
    });

    // Sum commits by developer
    const totals = {};
    developers.forEach((dev) => {
      if (!totals[dev.developer]) totals[dev.developer] = 0;
      totals[dev.developer] += dev.commits;
    });

    // Convert to array & sort descending
    const sorted = Object.entries(totals)
      .map(([developer, commits]) => ({ developer, commits }))
      .sort((a, b) => b.commits - a.commits);

    // Print result
    console.log(chalk.green("\n=== Commit count per author ==="));
    sorted.forEach((dev) => {
      console.log(
        chalk.cyan(String(dev.commits).padStart(3)) +
          "  " +
          chalk.magenta(dev.developer),
      );
    });
  });
}
