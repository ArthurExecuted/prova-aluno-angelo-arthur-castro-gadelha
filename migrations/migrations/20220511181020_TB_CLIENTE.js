exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_CLIENTE', table => {
        table.number('id').primary()
        table.number('codigo').notNull().unique()
        table.string('cnpjcpf').notNull()
        table.string('nome').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_CLIENTE')
};
