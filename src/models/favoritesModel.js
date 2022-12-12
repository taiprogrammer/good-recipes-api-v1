const database = require("../database/config");

function list() {
  const instruction = `
        SELECT f.id, nome, tempo, porcoes 
        FROM FAVORITOS f INNER JOIN
        RECEITA ON f.fk_receita = RECEITA.id;
    `;

  return database.execute(instruction);
}

function listOnlyFive() {
  const instruction = `
  SELECT f.id, nome, tempo, porcoes 
  FROM FAVORITOS f INNER JOIN
  RECEITA ON f.fk_receita = RECEITA.id LIMIT 5;
`;

  return database.execute(instruction);
}

function add(fk_receita) {
  const instruction = `
        INSERT INTO FAVORITOS (fk_receita) VALUES (${fk_receita});
    `;

  return database.execute(instruction);
}

function delete_(id) {
  const instruction = `
        DELETE FROM FAVORITOS WHERE id = ${id};
    `;

  return database.execute(instruction);
}

module.exports = { list, add, delete_, listOnlyFive };
