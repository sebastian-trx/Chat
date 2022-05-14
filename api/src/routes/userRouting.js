const { Router } = require("express");
const router = Router();
const {
  postUser,
  userInfo,
 } = require("../controllers/userController.js");

router.post("/", postUser);
router.get("/", userInfo);



module.exports = router;