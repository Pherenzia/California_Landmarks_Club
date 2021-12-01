const router = require("express").Router();
const authRouter = require("./authRouter");
router.use("/api/auth", authRouter);
module.exports = router;