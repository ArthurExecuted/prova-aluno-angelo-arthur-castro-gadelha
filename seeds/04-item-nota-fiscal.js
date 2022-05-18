/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_ITEM_NOTA_FISCAL').del()
  await knex('TB_ITEM_NOTA_FISCAL').insert([
    {sequencial: 3042,quantidade: 4, valor: 19.60, produto: 6,notaFiscal_id: 1},
    {sequencial: 3043,quantidade: 2, valor: 23.80, produto: 7,notaFiscal_id: 2},
    {sequencial: 3044,quantidade: 5, valor: 84.50, produto: 8,notaFiscal_id: 3},
    {sequencial: 3045,quantidade: 3, valor: 77.40, produto: 9,notaFiscal_id: 4},
  ]);
};
