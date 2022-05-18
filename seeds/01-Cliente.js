/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('TB_CLIENTE').del()
  await knex('TB_CLIENTE').insert([
    {tipoCliente: "PESSOA_FISICA",codigo: 101,cnpjcpf: "13764895642",nome:"Juscelino Pinto Da Silva"},
    {tipoCliente: "PESSOA_FISICA",codigo: 102,cnpjcpf: "94672591546",nome:"Mariela Gomes Salvador"},
    {tipoCliente: "PESSOA_FISICA",codigo: 103,cnpjcpf: "68956134679",nome:"Armando Topeira Guarulhos"},
    {tipoCliente: "PESSOA_FISICA",codigo: 104,cnpjcpf: "13526435976",nome:"Tulio Sormante Torres"}
  ]);
};
