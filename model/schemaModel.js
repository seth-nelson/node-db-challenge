const db = require('../data/db-config.js');


// PROJECTS

function findProjects() {
    return db('projects');
};

function addNewProject(project) {
    return db.insert(project).into('projects');
};

// TASKS

function findTasks(id) {
    return db('projects')
        .join('tasks', 'tasks.projectId', 'projects.id')
        .select('projects.projectName', 'tasks.taskNotes', 'tasks.taskDesc', 'tasks.completed')
        .where('projects.id', projectId);
};

function addNewTask(task) {
    return db.insert(task).into('tasks');
};

// RESOURCES

function findResources() {
    return db('resources').where({ resourceId }).first();
};

function addNewResource() {
    return db('resources').insert(resource);
};


module.exports = {
    findProjects,
    addNewProject,
    findTasks,
    addNewTask,
    findResources,
    addNewResource
}