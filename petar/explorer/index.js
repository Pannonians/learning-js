const {
  printOutput,
  sanitizeOutput,
  printIntroduction,
  getGitListOfAuthorsAndCommits,
  organizeCommitsByAuthor,
  sortAndMapLines,
} = require("./helpers");

function run() {
  printIntroduction();

  var lines;
  getGitListOfAuthorsAndCommits((output) => {
    lines = sanitizeOutput(lines, output);
    lines = organizeCommitsByAuthor(lines);
    lines = sortAndMapLines(lines);

    printOutput(lines);
  });
}

run();
