const string = 'Every developer likes to mix kubernetes and javascript';

const createNumeronym = (word) => word[0] + (word.length - 2) +  word[word.length - 1];
 
string.split(' ').map(word => word.length >= 4 ? createNumeronym(word) : word).join(' ');

console.log(string);
