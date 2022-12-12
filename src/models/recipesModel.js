const database = require("../database/config");

function list() {
  const instruction = `SELECT * FROM RECEITA;`;

  return database.execute(instruction);
}

function listTop5() {
  const instruction = `SELECT * FROM RECEITA LIMIT 5;`;

  return database.execute(instruction);
}

function add(nome, tempo, porcoes, ingredientes, modo_preparo) {
  const instruction = `
    INSERT INTO RECEITA (nome, tempo, porcoes, ingredientes, modo_preparo)
    VALUES
    ('${nome}', ${tempo}, ${porcoes}, '${ingredientes}', '${modo_preparo}');
    `;

  return database.execute(instruction);
}

function update(nome, tempo, porcoes, ingredientes, modo_preparo, id) {
  const instruction = `
    UPDATE RECEITA SET 
    nome = '${nome}',
    tempo = ${tempo},
    porcoes = ${porcoes},
    ingredientes = '${ingredientes}',
    modo_preparo = '${modo_preparo}'
    WHERE id = ${id};
    `;

  return database.execute(instruction);
}

function bind(fk_usuario, id) {
  const instruction = `
    UPDATE RECEITA SET fk_usuario = ${fk_usuario} WHERE id = ${id};
    `;

  return database.execute(instruction);
}

function delete_(id) {
  const instruction = `
    DELETE FROM RECEITA WHERE id = ${id};
    `;

  return database.execute(instruction);
}

function get_favorites_quantity(id) {
  const instruction = `
    SELECT COUNT(fk_favoritos) AS quantidade 
    FROM USUARIO_FAVORITOS 
    WHERE fk_favoritos = ${id};
  `;

  return database.execute(instruction);
}

function get_recipes_by_id(id) {
  const instruction = `
    SELECT id, nome, tempo, porcoes, ingredientes, modo_preparo
    FROM RECEITA
    WHERE id = ${id};
  `;

  return database.execute(instruction);
}

module.exports = {
  list,
  add,
  update,
  bind,
  delete_,
  listTop5,
  get_favorites_quantity,
  get_recipes_by_id,
};
