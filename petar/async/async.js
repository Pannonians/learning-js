function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("neki odgovor ovde");
      if (Math.random() > 0.5) {
        resolve("neki odgovor ovde");
      } else {
        reject("error se desio");
      }
    }, ms);
  });
}

async function run() {
  console.log("async-await");

  const [jedan, dva, tri, cetiri] = await Promise.all([
    sleep(1000),
    sleep(2000),
    sleep(3000),
    sleep(4000),
  ]);

  console.log("svi odgovori: ", [jedan, dva, tri, cetiri]);

  console.log("program nastavio");
}

module.exports = { run };
