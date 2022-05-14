const { User } = require("../db.js");

async function login(req, res) {
  if(req.user)res.send(`hola ${req.user.nickName}`)
}

async function logout(req,res) {
  req.logOut();
  req.session.destroy(function (err) {
    res.send("Succesfull Out");
  });
}

module.exports = {
  login,
  logout
 };
