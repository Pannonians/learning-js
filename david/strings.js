function run () {

const sentence = "This is my first string in JavaScript!"
var index = 2;
var index1 = 8;

//charAt
console.log(`The character at index ${index} is : ${sentence.charAt(index)}`);
console.log(`The character at index ${index1} is : ${sentence.charAt(index1)}`);
console.log("Index_1: ", sentence.charAt(index1));

var a = 'David';
var b = 'Mandic';
var c = 28;

//concat
console.log("concat ", a.concat(' ', b, ' ', c));
console.log("concat ", b.concat(', ', a));

//endsWith
console.log("endsWith ", sentence.endsWith('David'));
console.log("endsWith ", sentence.endsWith('JavaScript!'));

//startWith
console.log("startsWith ", sentence.startsWith('This'));
console.log("startsWith ", sentence.startsWith('Javascript'));

//Includes
var word = 'JavaScript';
var word2 = 'David';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log("includes ", sentence.includes(word2));
console.log("includes ", sentence.includes("David"));


const sentence1 = "   Start       This is my first string in JavaScript!   End     "
//trim
console.log("trim ", sentence1.trim());
//toUpperCase
console.log("toUpperCase ", sentence.toUpperCase());
console.log("toUpperCase ", sentence1.toUpperCase());
//toLowerCase
console.log("toLowerCase ", sentence1.toLowerCase());
//Slice
console.log("slice ", a.slice(0, 3));
console.log("slice ", b.slice(0, 5));
//charAt
console.log("charAt ", a.charAt(2));
//substring
console.log("substring ", a.substring(0,1));
//trimEnd
console.log("trimEnd ", sentence1.trimEnd());
//trimStart
console.log("trimStart ", sentence1.trimStart());
//split
const word1 = sentence.split(' ');
console.log("Split ", word1[4]);

const car = sentence.split('');
console.log("Split ", car[5]);

//match
console.log("match ", sentence.match('Java'));
//replace
console.log("replace ", sentence.replace('JavaScript', 'code'));

const password = 'Password is ';
//padEnd
console.log("padEnd ", password.padEnd(20, '*'));
//repeat
console.log("repeat ", `This is ${password.repeat(5)}`);
}

module.exports = {
    run,
};