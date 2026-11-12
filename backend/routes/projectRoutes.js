
const express = require("express");
const mongoose = require("mongoose");
const Project = require("../models/Project");

const router = express.Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: projects.length,
      projects
    });
  } catch (error) {
    console.error("Fetch projects error:", error.message);
    res.status(500).json({
      message: "Failed to fetch projects"
    });
  }
});

// POST a new project
router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      technologies,
      liveUrl,
      githubUrl,
      imageUrl,
      featured
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required"
      });
    }

    const project = await Project.create({
      title,
      description,
      technologies,
      liveUrl,
      githubUrl,
      imageUrl,
      featured
    });

    res.status(201).json({
      message: "Project created successfully",
      project
    });
  } catch (error) {
    console.error("Create project error:", error.message);
    res.status(500).json({
      message: "Failed to create project"
    });
  }
});

// PUT update an existing project
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
        message: "Invalid project ID"
      });
    }

    const {
      title,
      description,
      technologies,
      liveUrl,
      githubUrl,
      imageUrl,
      featured
    } = req.body;

    const project = await Project.findByIdAndUpdate(
      id,
      {
        title,
        description,
        technologies,
        liveUrl,
        githubUrl,
        imageUrl,
        featured
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!project) {
      return res.status(404).json({
        message: "Project not found"
      });
    }

    res.status(200).json({
      message: "Project updated successfully",
      project
    });
  } catch (error) {
    console.error("Update project error:", error.message);
    res.status(500).json({
      message: "Failed to update project"
    });
  }
});

module.exports = router;
