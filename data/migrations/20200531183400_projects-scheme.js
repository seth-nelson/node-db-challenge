// PROJECTS:
// name: required
// description: optional
// if no value for complete: default will be 'false'

exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('projectId');
            tbl.string('projectName', 128).unique().notNullable();
            tbl.string('projectDesc', 1000);
            tbl.boolean('completed').notNullable().defaultTo(false);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects');
};
