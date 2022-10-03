const { getMovie } = require("../../http/movie");

 
const fs = require("fs");
const json = "./savedResponse.json";
const KEY = 'MOVIE: '; 

const run = async (id) => {
  var fileExist = fs.existsSync(json);

  if (fileExist){
    var readFile = fs.readFileSync("savedResponse.json", function(err){
      if(err){
        console.log(err);
      }
    });
    var keyExists = readFile.includes(KEY + id);
    console.log(keyExists);

    if(keyExists){
      console.log("Movie is already saved!");
    } else {
      const getMovieResult = await getMovie(id);
      const getMovieResultData = '{' + '"' + KEY + id + '"' + ':' + '[' + JSON.stringify(getMovieResult) + ']' + '}';
      
      fs.appendFileSync("savedResponse.json", getMovieResultData, function(err){
        if(err){
          console.log("Error ", err);
        } else {
          console.log("Saved");
        }
      });
    }
  }
  
  else {
    const getMovieResult1 = await getConfig(id);
    const getMovieResultData1 = '{' + '"' + KEY + id + '"' + ':' + '[' + JSON.stringify(getMovieResult1) + ']' + '}';

    fs.writeFile("savedResponse.json", getMovieResultData1, function(err){
      if(err){
        console.log("Error ", err);
      } else {
        console.log("Created");
      }
    })
  }
};

module.exports = { run };
