const passport = require("passport");
const { Router } = require("express");
const router = Router();
const { login, logout } = require("../controllers/loginController");

router.post("/",  passport.authenticate("local", { failureRedirect: "/session" }),login);
router.get("/logout",logout)

module.exports = router;
