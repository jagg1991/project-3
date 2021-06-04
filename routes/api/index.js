const router = require("express").Router();
//need to add route
const userRoutes = require("./usersRoutes");
// const landRoutes = require("./landRoutes")

// need to change name when ready
router.use("/users", userRoutes);
// router.use("land", landRoutes)

module.exports = router;