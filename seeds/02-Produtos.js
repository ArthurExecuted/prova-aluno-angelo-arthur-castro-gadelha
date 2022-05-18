/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_PRODUTO').del()
  await knex('TB_PRODUTO').insert([
    {codigo: 12,descricao:"Leite Piracanjuba", valor: 4.90},
    {codigo: 14,descricao:"Achocolatado Chocolato 700g", valor: 11.90},
    {codigo: 17,descricao:"Polpa daFruta Maracujá 1kg", valor: 16.90},
    {codigo: 21,descricao:"Whiskas de Peixe 1kg", valor: 25.60},
    {codigo: 26,descricao:"Açúcar Cristal 1kg", valor: 9.50},
  ]);
};
