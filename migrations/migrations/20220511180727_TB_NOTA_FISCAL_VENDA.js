/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TB_NOTA_FISCAL_VENDA', table => {
        table.number('id').primary()
        table.number('codigo').notNull().unique()
        table.string('data').notNull()
        table.number('valorNota')
        table.Cliente('cliente')
        table.Array('itens')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TB_NOTA_FISCAL_VENDA')
};
