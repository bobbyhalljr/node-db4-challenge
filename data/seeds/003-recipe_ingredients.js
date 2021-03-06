exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, steps: 'this is step 1'},
        {recipe_id: 2, ingredient_id: 2, steps: 'this is step 1'},
        {recipe_id: 3, ingredient_id: 3, steps: 'this is step 2'}
      ]);
    });
};