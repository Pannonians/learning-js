function run () {

const sentence = "This is my first string in JavaScript!"
var index = 2;
var index1 = 8;

//charAt
console.log(`The character at index ${index} is : ${sentence.charAt(index)}`);
console.log(`The character at index ${index1} is : ${sentence.charAt(index1)}`);

var a = 'David';
var b = 'Mandic';
var c = 28;

//concat
console.log(a.concat(' ', b, ' ', c));

//endsWith
console.log(sentence.endsWith('David'));

//startWith
console.log(sentence.startsWith('This'));

//Includes
var word = 'JavaScript';
var word2 = 'David';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
console.log(sentence.includes(word2));


const sentence1 = "   Start       This is my first string in JavaScript!   End     "
//trim
console.log(sentence1.trim());
//toUpperCase
console.log(sentence.toUpperCase());
//toLowerCase
console.log(sentence1.toLowerCase());
//Slice
console.log(a.slice(0, 3));
//charAt
console.log(a.charAt(2));
//substring
console.log(a.substring(0,1));
//trimEnd
console.log(sentence1.trimEnd());
//trimStart
console.log(sentence1.trimStart());
//split
const word1 = sentence.split(' ');
console.log(word1[4]);

const car = sentence.split('');
console.log(car[5]);
//match
console.log(sentence.match('Java'));
//replace
console.log(sentence.replace('JavaScript', 'code'));

const password = 'Password is ';
//padEnd
console.log(password.padEnd(20, '*'));
//repeat
console.log(`This is ${password.repeat(5)}`);
}

module.exports = {
    run,
};