console.log("heloo");



let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


let courseName = 'javaScript';
console.log(courseName);

courseName = 'Angular';
console.log(courseName);

console.log(2+3);

console.log(2**3);

console.log(14%7);
console.log(15%3);
console.log(13%2);

let x = "heloo";
let y = 'world';
let z = x +  y ;
console.log(z);


let grade = 50 ;

if (grade >= 50)
{
    console.log("Success!");
}
else
{
    console.log("fail!");
}




for(let i = 1 ; i<=10; i++)
{
    console.log("i");
}   

console.log (13 % 5) ;

let a= 5;
a--;
let b = a ;
console.log (b);




var moze1 = 'Ovo je \"veliki\" tekst.';
console.log (moze1);


var greska = "Nemoj ići kuda te put vodi, \n\
idi tamo gde nema puta i ostavi trag za sobom. \n\
Emerson";
console.log (greska.includes("i"));



var asd = "ovde neki string";
let qwe = "i ovde je dodatni text";

console.log(asd);

console.log(asd + " " + qwe);
console.log((asd += qwe));


 let zxc = `ovde je super neki text ${qwe.toUpperCase()}`;

let ime1= "Srdjan";
let ime2= "Petra";

console.log(ime1.includes("S"))

console.log(ime1.length);


console.log(ime1.toLowerCase());

console.log(ime1.toUpperCase());

console.log(ime1.concat(ime2));


console.log(ime1.concat( " " + ime2));

let preimer  = " ana voli milovana";
console.log( preimer.replace ("voli" , "mrzi"))

console.log(preimer.slice(2,4)) 
console.log(preimer.slice(4,10))

let primer1 =" zdravo svete ";
console.log(primer1.trim());

const greeting = '   Hello world!   ';
console.log(greeting.trim());
console.log(greeting);
console.log(greeting.charAt(4));