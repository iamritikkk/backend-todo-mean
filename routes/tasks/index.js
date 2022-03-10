const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Task = require("../../models/Task");
const mongoose = require("mongoose");
const fileUploadHandler = require("../../middleware/file-upload-handler");

const path = require("path");
const checkAuth = require("../../middleware/check-auth");

const router = express.Router({ mergeParams: true });

let get = require("./get");
let post = require("./post");
let put = require("./put");
let del = require("./delete");

router.get("/", get.getAll);
router.get("/:id", get.getById);
router.post("/", checkAuth, fileUploadHandler, post.createTask);
router.put("/:id", checkAuth, fileUploadHandler, put.updateTask);
router.delete("/:id", checkAuth, del.deleteTask);

module.exports = router;
