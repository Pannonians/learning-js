const { exec } = require("child_process");
const chalk = require("chalk");
const logo = require("./git_logo_ascii").logo;

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

function run() {
  console.log(chalk.blackBright.bold(logo));
  console.log(chalk.italic("Do you even commit, brah?"));
  console.log("\n");

  exec("git shortlog -s -n --all --no-merges", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    var lines = stdout
      .split("\n")
      .map((word) => word.trim())
      .filter((line) => line !== "");
    lines = lines.map((line) => line.split("\t"));
    lines = lines.map((line) => ({
      commits: Number(line[0]),
      author: line[1],
    }));

    lines = lines.reduce((acc, line) => {
      const authorWords = line.author
        .split(" ")
        .map((word) => word.toLowerCase());
      if (Object.keys(acc).length == 0) {
        acc[line.author] = line;
        return acc;
      }
      if (
        !Object.keys(acc)
          .map((key) => key.toLowerCase())
          .some((key) =>
            key
              .split(" ")
              .some((name) => line.author.toLowerCase().includes(name))
          )
      ) {
        acc[line.author] = line;
        return acc;
      }

      const findByKey = Object.keys(acc).find((name) =>
        name
          .toLowerCase()
          .split(" ")
          .some((split) => line.author.toLowerCase().includes(split))
      );
      acc[findByKey].commits = acc[findByKey].commits + line.commits;
      return acc;
    }, {});

    lines = Object.values(lines)
    lines.sort((a,b) => b.commits - a.commits);

    // Preview
    console.log("".padEnd(60, "-"));
    lines.forEach((line) => {
      console.log(
        chalk
          .bgHex(randomHexColorCode())
          .bold(
            `Author${line.author.padStart(54, ".")}\nCommits${line.commits
              .toString()
              .padStart(53, ".")}`
          )
      );
      console.log("".padEnd(60, "-"));
    });
  });
}

run();
