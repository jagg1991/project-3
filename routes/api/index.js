const router = require("express").Router();
//need to add route
const routes = require("./");

// need to change name when ready
router.use("/", routes);

module.exports = router;