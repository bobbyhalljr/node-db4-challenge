
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flax seed', quantity: 1},
        {name: 'ginger', quantity: 2},
        {name: 'patatoes', quantity: 3}
      ]);
    });
};
