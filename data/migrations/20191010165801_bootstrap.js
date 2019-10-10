
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.float('quantity').notNullable();
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.text('steps');

        // Forien Key on recipe_id
        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

        tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')

        tbl.unique(['recipe_id', 'ingredient_id']);
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients');
};
