import express from "express";
import authenticated from "../helpers/authenticated.js";
const router = express.Router();

router.get("/", authenticated, (req, res) => {
  // console.log(req.user, "uuuuuu");
  res.send("Books router is working!");
});
export default router;
