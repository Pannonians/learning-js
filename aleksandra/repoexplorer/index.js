function run(){
    console.log ("Modul repoexplorer done ;)");

const { exec } = require("child_process");
const { stdout, stderr } = require('process');

exec("git shortlog --summary --numbered", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);

    var personsArray = stdout.split("  ");

    const objectPersons = personsArray.filter(element => {
        if (Object.keys(element).length !==0) {
            return true;
        }
        return false;
    });

    function extractCommits(templates) {
        return templates.map(t => t.split('\t'))
        .map(details => ({
            commits: parseInt(details[0]),
            person: details[1]
        }));
    }

    var arrayPersons = personsArray.map(str => str.split('\n').filter(str => str !==''))
        .map(template => extractCommits(template))
        .reduce((a, acc)=> acc.concat(a), []);

    arrayPersons = arrayPersons.map(function(a) {
        a.developer = a.developer.toLowerCase();
        return a;
    });

    console.log ('Array of all persons who did the commit:', arrayPersons);

});
};

run();
