const express = require('express');
const db = require('../model/schemaModel.js');
const router = express.Router();

// Endpoints

// GET projects
// use db findProjects
// NOT FINISHED ********************
router.get('/', (req, res) => {
    db.findProjects()
    .then(project => {
        res.status(200).json
    })
});

// POST project
// use db addNewProject
router.post('/', (req, res) => {
    const newProject = req.body
    db.addNewProject(newProject)
        .then(project => res.status(200).json(project))
        .catch(err => res.status(400).json({ errorMessage: 'Could not add the project.', error: err}))
});

// GET tasks
// use db findTasks
// NOT FINIHSED ********************
router.get('/:id/tasks', (req, res) => {
    db.getTasks(req.params.id)
        .then(task => {
            res.status(200).json(task)
        })
});

// POST task
// use db addNewTask
router.post('/:id/tasks', (req, res) => {
    const newTask = req.body
    const { id } = req.params

    db.addNewTask(id, newTask)
        .then(task => res.status(200).json(task))
        .catch(() => res.status(400).json({ errorMessage: 'unable to add task'}))
});

// GET resources
// use db findResources
router.get('/resources', (req, res) => {
    db.findResources()
        .then(resource => res.status(200).json(resource))
        .catch(err => res.status(400).json({ errorMessage: 'could not get resources', error: err}))
});

// POST resource
// use db addNewResource
router.post('/resources', (req, res) => {
    const newResource = req.body

    db.addNewResource(newResource)
        .then(resource => res.status(200).json(resource))
        .catch(err => res.status(400).json({ errorMessage: 'Could not add resource', error: err}))
});


module.exports = router;