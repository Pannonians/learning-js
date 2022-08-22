const imageToAscii = require('image-to-ascii');

var figlet = require('figlet');

figlet('ADD ASTRA!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
 
// Passing options
imageToAscii("https://image.tmdb.org/t/p/original/wigZBAmNrIhxp2FNGOROUAeHvdh.jpg", {
    colored: true,
    size: {
    width: 70}
}, (err, converted) => {
    console.log(err || converted);
});