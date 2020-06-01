
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([
        {projectId: 1, projectName: 'Replace alternator', ProjectDesc: 'Upgrade the old alternator with a stronger one'},
        {projectId: 2, projectName: 'Install lift kit', ProjectDesc: 'Install the 2 inch leveling kit'},
        {projectId: 3, projectName: 'Polish Paint', ProjectDesc: 'Use Mothers clay bar kit to polish and wax exterior'}
      ]);
    });
};
