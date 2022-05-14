const { Router } = require("express");

const user = require("./userRouting.js");
const message = require("./messageRouting.js");
const login = require("./loginRouting.js");
const session  = require('./sessionRouting');

const router = Router();

router.use("/user", user);
router.use("/message", message);
router.use("/login", login);
router.use("/session", session);




module.exports = router;