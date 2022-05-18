/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_NOTA_FISCAL_VENDA').del()
  await knex('TB_NOTA_FISCAL_VENDA').insert([
    {codigo: 111,data:"12/04/2022",valorNota: 19.60,cliente_id: 5,itens_id:1},
    {codigo: 222,data:"13/04/2022",valorNota: 23.80,cliente_id: 6,itens_id:2},
    {codigo: 333,data:"13/04/2022",valorNota: 84.50,cliente_id: 7,itens_id:3},
    {codigo: 444,data:"27/04/2022",valorNota: 77.40,cliente_id: 8,itens_id:4},
  ]);
};
