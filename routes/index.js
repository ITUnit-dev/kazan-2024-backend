const Router = require("express");
const router = new Router();

const authMiddleware = require("../middleware/authMiddleware");
const authRouter = require("./authRouter.js");
const offersRouter = require("./offersRouter.js");

router.use("/auth", authRouter);
router.use("/offers", authMiddleware, offersRouter);

module.exports = router;
