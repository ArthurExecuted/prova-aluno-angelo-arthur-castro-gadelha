
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ITEM_NOTA_FISCAL', table => {
        table.number('id').primary()
        table.number('sequencial').notNull().unique()
        table.number('quantidade').notNull()
        table.number('valor').notNull()
        table.Produto('produto').notNull()
        table.NotaFiscal('notaFiscal').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ITEM_NOTA_FISCAL')
};
