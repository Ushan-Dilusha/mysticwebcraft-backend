const { Router } = require("express")
const router = Router()

const { getOneCommunity, getAllCommunities, addCommunity, updateCommunity, deleteCommunity } = require("../controllers/commiunityController")
const { getCourseById, getAllCourses, createCourse, updateCourse, deleteCourse } = require("../controllers/courseController")
const { analyzeCodeComplexity } = require("../controllers/codeAnalyzerController")


router.post("/communities", addCommunity);
router.get("/communities", getAllCommunities);
router.get("/communities/:id", getOneCommunity);
router.put("/communities/:id", updateCommunity);
router.delete("/communities/:id", deleteCommunity);

router.post('/courses',createCourse);
router.get('/courses', getAllCourses);
router.get('/courses/:id', getCourseById);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', deleteCourse);

router.post('/analyze-code', analyzeCodeComplexity);

module.exports = router;
