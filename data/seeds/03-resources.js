
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceId: 1, resourceName: 'socket set', resourceDesc: 'metric socket set from 6mm to 18mm', projectId: 1},
        {resourceId: 2, resourceName: 'microfiber cloth', resourceDesc: 'soft premium microfiber cloth', projectId: 3},
        {resourceId: 3, resourceName: 'mechanix gloves', resourceDesc: 'gloves for keeping clean and prevent knuckle busters', projectId: 2}
      ]);
    });
};
