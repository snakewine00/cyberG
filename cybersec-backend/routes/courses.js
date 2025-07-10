const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

// Mongoose models
const Course = mongoose.model('Course', new mongoose.Schema({
  title: String,
  description: String,
  videos: [{
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    size: Number,
  }],
}));

// Multer setup for video uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Create a new course
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const course = new Course({ title, description, videos: [] });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upload a video to a course
router.post('/:id/videos', upload.single('video'), async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    const videoData = {
      filename: req.file.filename,
      originalname: req.file.originalname,
      path: req.file.path,
      mimetype: req.file.mimetype,
      size: req.file.size,
    };
    course.videos.push(videoData);
    await course.save();
    res.status(201).json(videoData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// List videos for a course
router.get('/:id/videos', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course.videos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Serve video files
router.get('/videos/:filename', (req, res) => {
  const filePath = path.join(__dirname, '../uploads', req.params.filename);
  res.sendFile(filePath);
});

module.exports = router; 