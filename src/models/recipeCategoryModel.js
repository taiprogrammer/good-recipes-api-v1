const database = require("../database/config");

function list() {
  const instruction = `
    SELECT r.id, 
    r.nome AS receita,
    r.tempo, r.porcoes, r.ingredientes, r.modo_preparo,
    c.nome AS categorias, c.id AS categoria_id, u.nome AS autor
    FROM RECEITA_CATEGORIA rc
    INNER JOIN RECEITA r ON rc.fk_receita = r.id
    INNER JOIN CATEGORIA c ON rc.fk_categoria = c.id
    INNER JOIN USUARIO u ON r.fk_usuario = u.id;
  `;

  return database.execute(instruction);
}

function bind(fk_receita, fk_categoria) {
  const instruction = `
        INSERT INTO RECEITA_CATEGORIA (fk_receita, fk_categoria) VALUES (${fk_receita}, ${fk_categoria});
    `;

  return database.execute(instruction);
}

function unbind(fk_categoria) {
  const instruction = `
        DELETE FROM RECEITA_CATEGORIA WHERE fk_categoria = ${fk_categoria};
    `;

  return database.execute(instruction);
}

module.exports = { list, bind, unbind };
