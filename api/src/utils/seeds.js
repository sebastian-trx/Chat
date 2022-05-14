const { seedUser } = require("./seedUser.js");


async function seeds() {
  await seedUser();

}

module.exports = {
  seeds
};
