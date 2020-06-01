// RESOURCES:
// Name: required
// Description: optional

exports.up = function(knex) {
    return knex.schema
        .createTable('resources', tbl => {
            tbl.increments('resourceId');
            tbl.integer('projectId', 25).unsigned().references('id').inTable('projects');
            tbl.string('resourceName', 100).unique().notNullable();
            tbl.string('resourceDesc', 1000);
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources');
};
