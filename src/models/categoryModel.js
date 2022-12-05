const database = require("../database/config");

function list() {
  const instruction = `
        SELECT * FROM CATEGORIA;
    `;

  return database.execute(instruction);
}

function add(nome) {
  const instruction = `
        INSERT INTO CATEGORIA (nome) VALUES ('${nome}');
    `;

  return database.execute(instruction);
}

function update(nome, id) {
  const instruction = `
        UPDATE CATEGORIA SET nome = '${nome}' WHERE id = ${id};
    `;

  return database.execute(instruction);
}

function delete_(id) {
  const instruction = `
        DELETE FROM CATEGORIA WHERE id = ${id};
    `;

  return database.execute(instruction);
}

module.exports = { list, add, update, delete_ };
