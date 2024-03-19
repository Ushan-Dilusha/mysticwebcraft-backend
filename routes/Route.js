const { Router } = require("express")
const router = Router()

const { getOneCommunity, getAllCommunities, addCommunity, updateCommunity, deleteCommunity } = require("../controllers/commiunityController")

router.post("/communities", addCommunity);
router.get("/communities", getAllCommunities);
router.get("/communities/:id", getOneCommunity);
router.put("/communities/:id", updateCommunity);
router.delete("/communities/:id", deleteCommunity);

module.exports = router;
