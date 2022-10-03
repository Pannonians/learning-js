const { getConfig } = require("../../http/configuration");

const fs = require("fs");
const json = "./savedResponse.json";
const KEY = 'CONFIGURATION: '; 

const run = async () => {
  var fileExist = fs.existsSync(json);

  if (fileExist){
    var readFile = fs.readFileSync("savedResponse.json", function(err){
      if(err){
        console.log(err);
      }
    });
    var keyExists = readFile.includes(KEY);
    console.log(keyExists);

    if(keyExists){
      console.log("Configuration is already saved!");
    } else {
      const getConfigResult = await getConfig();
      const getConfigResultData = '{' + '"' + KEY + '"' + ':' + '[' + JSON.stringify(getConfigResult) + ']' + '}';
      
      fs.appendFile("savedResponse.json", getConfigResultData, function(err){
        if(err){
          console.log("Error ", err);
        } else {
          console.log("Saved");
        }
      });
    }
  }
  
  else {
    const getConfigResult1 = await getConfig();
    const getConfigResultData1 = '{' + '"' + KEY + '"' + ':' + '[' + JSON.stringify(getConfigResult1) + ']' + '}';

    fs.writeFile("savedResponse.json", getConfigResultData1, function(err){
      if(err){
        console.log("Error ", err);
      } else {
        console.log("Created");
      }
    })
  }
};

module.exports = { run };
