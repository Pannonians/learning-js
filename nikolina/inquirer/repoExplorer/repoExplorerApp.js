//Create a new file from where you'll run this app

const inquirer = require('inquirer')
const chalk = require('chalk');

function run(){

//use Chalk

console.log(chalk.red.bold.underline('This is one nasty homework'));

//The app needs to find out people who performed commits on the repo

const { exec } = require("child_process");
const { stdout, stderr } = require('process');

exec("git shortlog -s -n --all", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout: ${stdout}`);

    //create an array of developers with a number of commits on the repo

    let developersArray = stdout.split("  ");

    const objectDevelopers = developersArray.filter(element => {
        if (Object.keys(element).length !==0) {
            return true;
        }
        return false;
    });

    //create array of objects

    function extractCommits(templates) {
        return templates.map(t => t.split('\t'))
        .map(details => ({
            commits: parseInt(details[0]),
            developer: details[1]
        }));
    }

    let arrayDevelopers = developersArray.map(str => str.split('\n').filter(str => str !==''))
    .map(template => extractCommits(template))
    .reduce((a, acc)=> acc.concat(a), []);

     //sort arrayDevelopers by number of commits

     arrayDevelopers.sort((a, b) =>
     parseFloat(b.commits) - parseFloat(a.commits));

    console.log(chalk.bgCyanBright.black.underline('this is a final array'), arrayDevelopers);
    

    //total number of commits

    const mergeSumCommits = (obj1, obj5) => {
        return Object.keys(obj1).reduce((acc, key) => {
            if (typeof obj5[key] === 'object') {
            acc[key] = mergeSumCommits(obj1[key], obj5[key]);
        } else if (obj5.hasOwnProperty(key) && !isNaN(parseFloat(obj5[key]))) {
            acc[key] = obj1[key] + obj5[key]
        }
        return acc;
    }, {});
    };
    const result = arrayDevelopers.reduce((acc, obj) => acc = mergeSumCommits(acc, obj));
    
    console.log(chalk.blue('number of commits'), result);

});
}


module.exports = { run, };