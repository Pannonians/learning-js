const { getMoviesDiscover } = require("../../http/movie");

const run = async () => {
    const data = await getMoviesDiscover();
    console.log(data)
}

module.exports = { run };
