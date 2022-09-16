const { getTv } = require("../http/tv");

const run = (id) => {
    console.log(getTv, id);
}

module.exports = { run };