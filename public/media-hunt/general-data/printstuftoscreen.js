const imageToAscii = require("image-to-ascii");
const figlet = require("figlet");
const { getConfig } = require("../http/configuration");

const printStuffToScreen = async (data) => ({
  year: data.year,
  description: data.description,
  review: data.review,
  cast: data.cast,
  image: (await buildPosterUrl()) + data.image,
});

async function titleResponse(data) {
  const newTitle = await figlet.textSync(data.title);
  return newTitle;
}
const dataConfig = async () => await getConfig();

const buildPosterUrl = async () => {
  const resp = await dataConfig();
  const posterPath = resp.images.base_url + resp.images.poster_sizes[4];
  return posterPath;
};

async function printImage(data) {
  imageToAscii(
    data.image,
    {
      colored: true,
      size: {
        width: 30,
      },
    },
    (err, converted) => {
      console.log(err || converted);
    }
  );
}

module.exports = { printStuffToScreen, titleResponse, printImage };
