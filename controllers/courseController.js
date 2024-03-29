const Course = require('../models/Course');
const multer = require("multer");
const fs = require('fs');





// // Controller functions for CRUD operations on courses
// const AddCourse = async (req, res) => {
//     try {
//         const newCourse = await Course.create(req.body);
//         res.status(201).json(newCourse);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Destination folder for storing files
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Use original filename
    }
});

const upload = multer({ storage: storage });

// Controller functions for CRUD operations on courses
const AddCourse = async (req, res) => {
    try {
        // Check if file is uploaded
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Create a new course with uploaded file
        const newCourse = new Course({
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            resources: req.body.resources || [],
            image: {
                data: fs.readFileSync('uploads/' + req.file.filename),
                contentType: "image/png" // Adjust content type as needed
            }, // Save the path of uploaded file
            chapters: req.body.chapters || [],
            price: req.body.price
        });

        // Save the course to the database
        await newCourse.save();
        
        res.status(201).json(newCourse);
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: error.message });
    }
};

const uploadMiddleware = upload.single('image');


//..........View courses

const ViewCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


//.......Update

const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



//.............Delete
const DeleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    AddCourse,
    ViewCourses,
    getCourseById,
    DeleteCourse,
    updateCourse,
    uploadMiddleware
};
