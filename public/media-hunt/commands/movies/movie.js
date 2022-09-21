const { getMovie } = require("../../http/movie");

const run = async (id) => {
  const getMovieByIdResult = await getMovie(id);
  const getMovieByIdResultData = JSON.stringify(getMovieByIdResult);

  const fs = require("fs");

  fs.readFile('/media-hunt/movies', function (err, data) {
  if (err) throw err;
  if(data.indexOf(`id:${id}`) >= 0){
   console.log(data) 
  }
  });
};

module.exports = { run };
