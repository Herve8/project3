const router = require("express").Router();
const suspectsController = require("../../controllers/suspectsController");

// Matches with "/api/suspects"
router
  .route("/")
  .get(suspectsController.findAll)
  .post(suspectsController.create);

// Matches with "/api/suspects/:id"
router
  .route("/:id")
  .get(suspectsController.findById)
  .put(suspectsController.update)
  .delete(suspectsController.remove);

module.exports = router;
