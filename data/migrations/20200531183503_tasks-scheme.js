// TASKS:
// Description: required
// notes: optional
// id from existing project: required
// if no value for complete: default will be 'false'

exports.up = function(knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            tbl.increments('tasksId');
            tbl.string('taskDescription', 1000).notNullable();
            tbl.string('taskNotes', 1000);
            tbl.integer('projectId', 25).unsigned().references('id').inTable('projects');
            tbl.boolean('complete').unsigned().notNullable().defaultTo(false);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks');
};
