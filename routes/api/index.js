const router = require("express").Router();
//need to add route
const userRoutes = require("./usersRoutes");

// need to change name when ready
router.use("/users", userRoutes);

module.exports = router;