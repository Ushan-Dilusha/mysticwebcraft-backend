const { Router } = require("express")
const router = Router()

const { getOneCommunity, getAllCommunities, addCommunity, updateCommunity, deleteCommunity } = require("../controllers/CommiunityController")
const { getCourseById, ViewCourses, AddCourse, updateCourse, DeleteCourse } = require("../controllers/CourseController")


router.post("/communities", addCommunity);
router.get("/communities", getAllCommunities);
router.get("/communities/:id", getOneCommunity);
router.put("/communities/:id", updateCommunity);
router.delete("/communities/:id", deleteCommunity);

router.post('/courses',AddCourse);
router.get('/courses/getall', ViewCourses);
router.get('/courses/:id', getCourseById);
router.put('/courses/:id', updateCourse);
router.delete('/courses/:id', DeleteCourse);



//..............Question controller.........................................


const {createQuestion,updateQuestion,deleteQuestion,getQuestion,getAllQuestion,fetchFilteredQuestions} = require("../controllers/questionCtrl");




//Create
router.post("/add",createQuestion)

//update

router.put("/update/:id",updateQuestion)

//Delete

router.delete("/delete/:id",deleteQuestion)

//get
router.get("/find/:id", getQuestion)

// Get all hotels
router.get("/getallQuestion",getAllQuestion)



router.get('/filter', async (req, res) => {
  const { type, title, level } = req.query;

  try {
    const filteredQuestions = await fetchFilteredQuestions(type, title, level);
    res.json(filteredQuestions);
  } catch (error) {
    console.error('Error fetching filtered questions:', error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});


//..................Quizset controller....................................



const express = require('express');
const quizSetController = require('../controllers/quizCtrl');

// Create a new quiz set with multiple quizzes
router.post('/quizsets', quizSetController.createQuizSet);
router.delete('/quizsets/:quizSetId', quizSetController.deleteQuizSet);
// View all quizzes
router.get('/quizzes', quizSetController.viewAllQuizzes);

// Filter quizzes by type
router.get('/quizzes/:type', quizSetController.filterQuizzesByType);

router.get('/:questionId', quizSetController.findQuestionById);

router.get('/quiz/:questionId', quizSetController.findQuizById);



module.exports = router;
