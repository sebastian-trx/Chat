const passport = require("passport");
const { Router } = require("express");
const router = Router();
const { session } = require("../controllers/sessionController");

router.get("/", session);

module.exports = router;
