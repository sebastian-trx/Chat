const { Router } = require("express");
const router = Router();
const {
  messageInfo
 } = require("../controllers/messageController.js");


router.get("/", messageInfo);



module.exports = router;