var string = 'David';
var number = 34;
let o_prim = 'Mandic';
let object = new String(o_prim);
const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 26;
const include = 'dog';
 
//console.log('My name is ' + string + '. I am ' + number + ' old!');
//console.log(string.charAt(4));
//console.log(string.toUpperCase());
// console.log(string.toLowerCase());
//console.log(number.toString());
//console.log(typeof object);
//onsole.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
//console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
//console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
//console.log(string.concat(' ', o_prim));
//console.log(sentence.endsWith('best!'));
//console.log(`The word "${include}" ${sentence.includes(include) ? 'is' : 'is not'} in the sentence`);

const text = '   The quick brown fox jumps over the lazy dog. It barked :8. Fox!).   ';
const regex = /[0-9]/g;
const found = text.match(regex);

//console.log(found);
//console.log(`This is repeate text: ${text.repeat(5)}`);
//console.log(text.replace('fox', 'car'));
//console.log(text.replaceAll('dox', 'car'));
//console.log(text.search('fox'));
//console.log(text.slice(0, 9));
//console.log(text.startsWith('dog'));
//console.log(text.substring(0, 2));
//console.log(text.trim());

const stringObj = new String('David');

//console.log(stringObj);