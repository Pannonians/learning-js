const axios = require('axios').default;

function run() {
    console.log("Smile!");

    axios.get('https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json')
        .then(function (response) {
    // handle success
         console.log(response);
        })
        .catch(function (error) {
    // handle error
         console.log(error);
        })
        .then(function () {
    // always executed
        });

}
  
module.exports = { run };