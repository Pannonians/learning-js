const {
  printOutput,
  sanitizeOutput,
  printIntroduction,
  getGitListOfAuthorsAndCommits,
  organizeCommitsByAuthorAndRemoveJoinDuplicates,
  sortAndMapLines,
} = require("./helpers");

function run() {
  printIntroduction();

  var lines;
  getGitListOfAuthorsAndCommits((output) => {
    lines = sanitizeOutput(lines, output);
    lines = organizeCommitsByAuthorAndRemoveJoinDuplicates(lines);
    lines = sortAndMapLines(lines);

    printOutput(lines);
  });
}

run();
