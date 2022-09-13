const run = () => {
    console.log("Sve postojece komande:");

    const { Console } = require('console');
    const { Transform } = require('stream');

    function table(input) {
        const ts = new Transform({ transform(chunk, enc, cb) { cb(null, chunk) } })
        const logger = new Console({ stdout: ts })
        logger.table(input)
        const table = (ts.read() || '').toString()
        let result = '';
        for (let row of table.split(/[\r\n]+/)) {
            let r = row.replace(/[^┬]*┬/, '┌');
            r = r.replace(/^├─*┼/, '├');
            r = r.replace(/│[^│]*/, '');
            r = r.replace(/^└─*┴/, '└');
            r = r.replace(/'/g, ' ');
            result += `${r}\n`;
        }
        console.log(result);
    }

    const commands = [
        { Command: 'movie', Meanings: "Fetch all movies!" },
        { Command: 'movie id', Meanings: "Fetch single movie!" },
        { Command: 'genres', Meanings: "List movies of specific genre!" },
        { Command: 'topRated', Meanings: "Fetch top rated movie!" },
        { Command: 'movie reviews id', Meanings: "Fetch movies reviews!" },
        { Command: 'tv', Meanings: "Fetch all tv series!" },
        { Command: 'tv id', Meanings: "Fetch single tv series!" },
        { Command: 'tv genres', Meanings: "List tv series of specific genre!" },
        { Command: 'tvSeason', Meanings: "Fetch the specific season of the tv series!" },
        { Command: 'tv topRated', Meanings: "Fetch top rated tv series!" },
        { Command: 'tv reviews id', Meanings: "Fetch tv series reviews!" },
    ]

    table(commands);

}

module.exports = { run }