function run() {
console.log("This is \'Repo Explorer'\ application!");
console.log("Commits/Developer list") 

//Getting result from git
const { exec } = require("child_process");
exec("git shortlog -s -n --all", (error, result, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    // console.log(`${result}`);


    //var reultWithoutTab = result.replace(/[\t]/gm, ' ');
    //var resultWithiutLineBrake = reultWithoutTab.replace(/[\n]/gm, '');

    const arr = result.split("  ");
    const resultArr = arr.filter(element => {
        if (Object.keys(element).length !== 0) {
          return true;
        }
        return false;
      });
      //console.log(resultArr);
      
      //Putting properties in array
      function extractContacts(templates) {
        return templates.map(t => t.split('\t'))
          .map(details => ({            
            commits: parseInt(details[0]),
            developer: details[1]
          }));
      }
      
      let arrDevelopers = arr.map(str => str.split('\n').filter(str => str !== ''))
        .map(template => extractContacts(template))
        .reduce((a, acc) => acc.concat(a), []);
      
      //console.log(arrDevelopers)
      
      //Total sum of commits 
      const sumCommitsDev = arrDevelopers.reduce(function(accumulator, value) {
        return accumulator + value.commits;
      }, 0);
      console.log("Total commits: ", sumCommitsDev);
      
      //Changing the objects in array in order to remove duplicates
      const changedArrayPetar = arrDevelopers.map(p =>
        p.developer === 'pvukmanovic-pannonians'
          ? {commits: 9, developer: 'Petar Vukmanovic' }
          : p
      );
      const changedArrayDavid = changedArrayPetar.map(p =>
        p.developer === 'DavidMandic'
          ? {commits: 14, developer: 'David Mandic' }
          : p
      );

      //console.log(changedArrayDavid);

      //Sum same developer accounts
      const developerSum = Object.values(
        changedArrayDavid.reduce((acc, item) => {
          acc[item.developer] = acc[item.developer]
            ? {commits: item.commits + acc[item.developer].commits, item: item.developer }
            : item;
          return acc;
        }, {})
      );
      
      //console.log("The sum of commits: ", developerSum);

      // sort array by commits
      developerSum.sort(function (x, y) {
        return x.commits + y.commits;
      });
      console.log("The final array: ", developerSum);
    });

};
module.exports = {
    run,
};
