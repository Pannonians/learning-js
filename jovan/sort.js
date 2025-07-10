let studenti = [
    { ime: "Petar", poeni: 88 },
    { ime: "Zivojin", poeni: 72 },
    { ime: "Jovan", poeni: 91 }
];

studenti.sort((a, b) => b.poeni - a.poeni);
console.log(studenti);
