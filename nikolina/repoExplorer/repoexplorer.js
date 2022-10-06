//Create a new file from where you'll run this app

const chalk = require('chalk');
const { create } = require('domain');

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

    //to lowercase developers

    arrayDevelopers = arrayDevelopers.map(function(a) {
        a.developer = a.developer.toLowerCase();
        return a;
    });

    console.log ('this is an array before merge', arrayDevelopers)

    //to split pvukmanovic-pannonians and davidmandic

    arrayDevelopers = arrayDevelopers.map((dev, index) => {
        if(index === 0 || index === 1) {
        dev.developer = dev.developer.replace('p', 'petar ').slice(0, 16);
        dev.developer = dev.developer.replace('david', 'david ')
        ;}
        return dev;
    });

    //merge Petar and David

    const mergedDevelopers = Object.values(arrayDevelopers.reduce((acc, developer) => {
        acc[developer.developer] = acc[developer.developer]
        ? {commits: developer.commits + acc[developer.developer].commits, developer: developer.developer}
        : developer;
        return acc;
    }, {})
    ); 

     //sort mergedDevelopers by number of commits

     mergedDevelopers.sort((a, b) =>
     parseFloat(b.commits) - parseFloat(a.commits));

    console.log(chalk.bgCyanBright.black.underline('this is the final array'), mergedDevelopers);


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

    console.log('nana i ja se druzimo');

});
}


module.exports = { run, }; 