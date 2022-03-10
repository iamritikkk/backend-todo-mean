const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });

let post = require("./post");

router.post("/login", post.login);
router.post("/signup", post.signup);

module.exports = router;
