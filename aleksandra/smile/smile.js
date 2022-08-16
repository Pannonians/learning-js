const axios = require('axios').default;
const process = require('process');

async function smiles() {
    try {
        const {data} = await axios.get ('https://gist.githubusercontent.com/VPetar/e1cd462371d438ff863e09983072007b/raw/52087f314f4f763ae0a81fcb9f340bf0a1f2a41a/json');
        return data;
    } catch (error) {
        console.error(error);
    }
};

async function run() {
    console.log("Smile!");

    const [ , , ...args] = process.argv;
    console.log(args);

    const allSmiles = await smiles();
    console.log(allSmiles);

}
  
module.exports = { run };