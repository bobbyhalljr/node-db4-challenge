
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'vegan pot pie'},
        {name: 'roasted veggies'},
        {name: 'carrot cake'}
      ]);
    });
};
