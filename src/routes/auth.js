import express from "express";
import signup from "../controllers/signup.js";
import signin from "../controllers/signin.js";
import checkAuth from "../controllers/checkAuth.js";
import authenticated from "../helpers/authenticated.js";

const router = express.Router();

router.get("/", authenticated, checkAuth);
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
