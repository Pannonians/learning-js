const fs = require("fs");
const PATH_TO_DATABASE = "./db.json";
const GET_COMMAND_ID = process.argv.slice(2).join(":");

const readDatabase = () => {
  if (!fs.existsSync(PATH_TO_DATABASE)) {
    fs.writeFileSync(PATH_TO_DATABASE, JSON.stringify({}));
  }

  return JSON.parse(fs.readFileSync(PATH_TO_DATABASE));
};

const handleDatabase = {
  getDataByKey: () => {
    // 1. Pozivamo funkciju da ucitamo bazu
    const database = readDatabase();
    // 2. fetchujemo direkt po key iz baze
    if (GET_COMMAND_ID in database) {
      return database[GET_COMMAND_ID];
    }
    // 3. return
    return null;
  },
  storeDataByKey: (data) => {
    try {
      // 1. Pozivamo funkciju da ucitamo bazu
      const database = readDatabase();
      // 2. Storujemo podatke za odredjen key
      database[GET_COMMAND_ID] = data;

      fs.writeFileSync(PATH_TO_DATABASE, JSON.stringify(database));

      // 3. Send back
      return data;
    } catch (e) {
      return null;
    }
  },
  checkIfExists: () => {
    // 1. read database
    const database = readDatabase();
    // 2. return positive if key exists
    return GET_COMMAND_ID in database;
  }
};

module.exports = {
  handleDatabase,
};
