const { User } = require("../db.js");
const passport = require("passport"); //AQUI SE HACE EL SETUP de passport authentication
var LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "nickName",
      passwordField: "password",
    },
    async function (username, password, done) {
      User.findOne({
        where: {
          nickName: username,
        },
      }).then((user) => {
        if (!user) {
          return done(null, false);
        }
        if (user.password != password) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async (id, cb) => {
  const user = await User.findOne({ where: { id } }).catch((err) => {
    cb(err, null);
  });
  if (user) cb(null, user);
});
