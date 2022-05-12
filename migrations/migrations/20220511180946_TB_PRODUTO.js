exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_PRODUTO', table => {
        table.number('id').primary()
        table.number('codigo').notNull().unique()
        table.string('descrição').notNull()
        table.number('valor').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_PRODUTO')
};
