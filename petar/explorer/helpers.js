const { exec } = require("child_process");
const chalk = require("chalk");
const logo = require("./git_logo_ascii").logo;

/**
 * Generates a hex code with a defacto random color
 * @returns { string } Hex code
 */
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

/**
 * A function that will verify that the name exists
 * @param { string } line
 * @param { string } name
 * @returns { boolean } True if exists
 */
function verifyNameExists(line, name) {
  return line.author.toLowerCase().includes(name);
}

/**
 * Assign the project to an author.
 * @param {Object} line - A line as received from the shortlog command.
 * @param {string} line.author - The name of the author.
 * @param {number} line.commits - The number of commits.
 */
function Line({ author, commits }) {
  this.author = author;
  this.commits = commits;
}

/**
 * Prints parsed output based on Line object,
 * which represents each author and his commits
 * @param { Line[] } lines
 * @returns {void} null
 */
function printOutput(lines) {
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
}

/**
 * Sanitizes output, splits text into array by new line ending,
 * trims strings and splits by tab character so we can have author and commits
 * @param {string} lines  - Array of lines we want to append
 * @param {string} stdout - Output of shortlog git command
 * @returns {object} - Returns an array of line-alike output
 */
function sanitizeOutput(lines, stdout) {
  lines = stdout
    .split("\n")
    .map((word) => word.trim())
    .filter((line) => line !== "");
  lines = lines.map((line) => line.split("\t"));
  lines = lines.map((line) => ({
    commits: Number(line[0]),
    author: line[1],
  }));
  return lines;
}

/**
 * Console logs a big hero-image and some introductionary text
 */
function printIntroduction() {
  console.log(chalk.blackBright.bold(logo));
  console.log(chalk.italic("Do you even commit, brah?"));
  console.log("\n");
}

/**
 * Responsible for executing node command:
 * git shortlog -s -n --all --no-merges
 *
 * And returns that output to the callback function.
 *
 * Also responsible for throwing errors.
 * @param {function} callback
 * @throws { Error } - in case an error happens
 */
function getGitListOfAuthorsAndCommits(callback) {
  exec("git shortlog -s -n --all --no-merges", (error, stdout, stderr) => {
    if (error) {
      throw new Error(`error: ${error.message}`);
    }
    if (stderr) {
      throw new Error(`stderr: ${stderr}`);
    }

    callback(stdout);
  });
}

/**
 * Reduces the output into combined author commits
 * @param {*} lines - Lines of text
 * @returns {object[]} line - array of objects that have author and commits
 */
function organizeCommitsByAuthor(lines) {
  lines = lines.reduce((acc, line) => {
    if (Object.keys(acc).length == 0) {
      acc[line.author] = line;
      return acc;
    }
    if (
      !Object.keys(acc)
        .map((key) => key.toLowerCase())
        .some((key) =>
          key.split(" ").some((name) => verifyNameExists(line, name))
        )
    ) {
      acc[line.author] = line;
      return acc;
    }

    const findByKey = Object.keys(acc).find((name) =>
      name
        .toLowerCase()
        .split(" ")
        .some((name) => verifyNameExists(line, name))
    );
    acc[findByKey].commits = acc[findByKey].commits + line.commits;
    return acc;
  }, {});
  return lines;
}

/**
 * Sorts by number of commits
 * @param {*} lines 
 * @returns {object[]} - lines organized
 */
function sortAndMapLines(lines) {
  lines = Object.values(lines);
  lines.sort((a, b) => b.commits - a.commits);

  lines = lines.map((line) => new Line(line));
  return lines;
}

module.exports = {
  Line,
  printOutput,
  sanitizeOutput,
  printIntroduction,
  getGitListOfAuthorsAndCommits,
  organizeCommitsByAuthor,
  sortAndMapLines,
};
