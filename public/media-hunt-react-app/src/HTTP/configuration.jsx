import configuration from "../API/configuration"
import instance from "../client"

async function getConfig() {
  try {
    const { data } = await instance.get(configuration.get.configuration.url);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getConfig };