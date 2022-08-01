const { exec } = require("child_process");

function run() {
  console.log("Git repo explorer");

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

    console.log("lines", lines);

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

      const findByKey = Object.keys(acc)
        .find((name) =>
          name.toLowerCase()
            .split(" ")
            .some((split) => line.author.toLowerCase().includes(split))
        );
      acc[findByKey].commits = acc[findByKey].commits + line.commits
      return acc;
    }, {});

    console.log("lines after grouping", lines);
  });
}

run();
