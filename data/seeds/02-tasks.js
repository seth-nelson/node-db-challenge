
exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        {taskDesc: 'purchase new alternator', taskNotes: 'Toyota OEM optional upgraded heavy duty cycle', projectId: 1},
        {taskDesc: 'remove stock shocks and springs', taskNotes: 'truck will need to be properly set on jackstands', projectId: 2},
        {taskDesc: 'use clay to pre-polish paint', taskNotes: 'make sure to use plenty of lubrication on the surface', projectId: 3}
      ]);
    });
};
