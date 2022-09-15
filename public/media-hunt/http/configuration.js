const { configuration } = require("../API/index");
const { instance } = require("../client");

async function getConfig() {
  try {
    const { data } = await instance.get(
      configuration.config.get.configuration.url
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getConfig };
