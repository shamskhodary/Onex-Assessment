import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Auth router is working!");
});
export default router;
