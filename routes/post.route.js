const express = require("express");
const multer = require("multer");

const db = require("../db");
const controller = require("../controllers/post.controller");
//
var authMiddleware = require("../middleware/auth.middleware");

var upload = multer({ dest: "public/upload/banner/" });

const router = express.Router(); // POST/GET
router.get("/create", authMiddleware.requireAuth, controller.create); // CREATE
router.post("/createPOST", upload.single("customFile"), controller.createPOST); // Execute Create Post
router.get("/:id", controller.id); // View Post

module.exports = router;
