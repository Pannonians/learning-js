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
  getGitListOfAuthorsAndCommits((stdout) => {
    lines = sanitizeOutput(lines, stdout);

    lines = organizeCommitsByAuthor(lines);

    lines = sortAndMapLines(lines);

    // Preview
    printOutput(lines);
  });
}

run();
