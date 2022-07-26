const sentence = "This is my first string in JavaScript!"
var index = 2;

//console.log(`The character at index ${index} is : ${sentence.charAt(index)}`);

var a = 'David';
var b = 'Mandic';

//console.log(a.concat(' ', b));
//console.log(sentence.endsWith('JavaScript!'));

var word = 'JavaScript';
//console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

const sentence1 = "   Start       This is my first string in JavaScript!   End     "
//console.log(sentence1.trim());
//console.log(sentence.toUpperCase());
//console.log(sentence1.toLowerCase());
//console.log(a.slice(0, 3));
//console.log(a.charAt(2));
//console.log(a.substring(0,1));
//console.log(sentence1.trimEnd());
//console.log(sentence1.trimStart());

const word1 = sentence.split(' ');
//console.log(word1[4]);

const car = sentence.split('');
//console.log(car[5]);
//console.log(sentence.match('Java'));
//console.log(sentence.replace('JavaScript', 'code'));

const password = 'Password is ';
//console.log(password.padEnd(20, '*'));
//console.log(`This is ${password.repeat(5)}`);