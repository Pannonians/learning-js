const imageToAscii = require("image-to-ascii");
const figlet = require("figlet");
const { getConfig } = require("../http/configuration");
const chalk = require("chalk");

const printStuffToScreen = async (data) => ({
  year: data.year,
  description: data.description,
  review: data.review,
  cast: JSON.stringify(
    data.cast)
    .replace(/\[|\]/g, "")
    .replace(/[{()}]/g, "")
    .replace(/"/g, "")
    .match(/[^,]+,[^,]+/g)
    .slice(0, 20),
  image: (await buildPosterUrl()) + data.image,
});

async function printImage(data) {
  let promise = new Promise((resolve, reject) => {
    imageToAscii(
      data.image,
      {
        colored: true,
        size: {
          width: 50,
        },
      },
      (err, converted) => {
        console.log(err || converted);
        resolve();
      }
    );
  }).catch((err) => {
    throw err;
  });

  return promise;
}

async function titleResponse(data) {
  const newTitle = await figlet.textSync(data.title);
  return chalk.bgBlackBright.red.bold(newTitle);
}
const dataConfig = async () => await getConfig();

const buildPosterUrl = async () => {
  const resp = await dataConfig();
  const posterSize = {
    w92: resp.images.poster_sizes[0],
    w154: resp.images.poster_sizes[1],
    w185: resp.images.poster_sizes[2],
    w300: resp.images.poster_sizes[3],
    w500: resp.images.poster_sizes[4],
    original: resp.images.poster_sizes[5],
  };
  const posterPath = resp.images.base_url + posterSize.w500;
  return posterPath;
};

module.exports = { printStuffToScreen, titleResponse, printImage };
