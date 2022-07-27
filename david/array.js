const array1 = [0,1,2,3,4,5,6,7,8,9];

//console.log(array1);
//console.log(array1[3]);

const array2 = [0,1,2,3,4];
const array3 = [5,6,7,8,9];

//console.log(array2.concat(array3));

const array4 = ['a','b'];
const array5 = [1,2];

//console.log(array4.concat(array5));
//console.log(array1.copyWithin(1,5));

const found = array1.find(element => element > 5);
//console.log(found);

const text = ['David55', 'Mirko55', 'Petar5', 'Dusan5', 'Aleksandar', 'Ozren5'];
const filter = text.filter(filterword => filterword.length > 6);

//console.log(filter);

const map = [2, 22, 222];
const map2 = map.map(x => x*2);
const map3 = map.map(x => x + 'test');

//console.log(map2);
console.log(map3);