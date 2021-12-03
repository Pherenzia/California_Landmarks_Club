const router = require("express").Router();
const authRouter = require("./authRouter");
const nonAuthRouter = require("./nonAuthRouter");
router.use("/api/auth", authRouter);
router.use("/api", nonAuthRouter)
module.exports = router;