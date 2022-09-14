const { Console } = require('console');
const { Transform } = require('stream'); 

const run = () => {
    console.log("Sve postojece komande:");

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
        { Command: 'movies', Meanings: "Fetch all movies!" },
        { Command: 'movie(id)', Meanings: "Fetch single movie!" },
        { Command: 'movieGenres', Meanings: "List movies of specific genre!" },
        { Command: 'movieReviews(id)', Meanings: "Fetch movies reviews!" },
        { Command: 'movieTopRated', Meanings: "Fetch top rated movie!" },
        { Command: 'tvs', Meanings: "Fetch all tv series!" },
        { Command: 'tv(id)', Meanings: "Fetch single tv series!" },
        { Command: 'tvTopRated', Meanings: "Fetch top rated tv series!" },
        { Command: 'tvGenres', Meanings: "List tv series of specific genre!" },
        { Command: 'tvReviews(id)', Meanings: "Fetch tv series reviews!" },
        { Command: 'tvSeason(id, season_number)', Meanings: "Fetch the specific season of the tv series!" },
        
        
    ]

    table(commands);

}

module.exports = { run }
