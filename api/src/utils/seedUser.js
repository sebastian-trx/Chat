const { User } = require("../db");

const users = [
  {
    moderator: true,
    nickName: "sebas123",
    name: "sebastian",
    password: "asd12345",
  },
  {
    moderator: false,
    nickName: "andres123",
    name: "andres",
    password: "asd12345",
  }
]

async function seedUser() {
  try {
    await User.bulkCreate(users);
  } catch (error) {
    console.log("error: ", error);
  }
}

module.exports = {
  seedUser
};