const router = require("express").Router();
const suspectRoutes = require("./suspects");

// Suspect routes
router.use("/suspects", suspectRoutes);

module.exports = router;
