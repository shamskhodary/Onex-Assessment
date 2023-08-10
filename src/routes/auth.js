import express from "express";
import signup from "../controllers/signup.js";
import signin from "../controllers/signin.js";
import signout from "../controllers/signout.js";
import checkAuth from "../controllers/checkAuth.js";
import authenticated from '../helpers/authenticated.js';

const router = express.Router();

router.get("/",authenticated, checkAuth);
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);

export default router;
