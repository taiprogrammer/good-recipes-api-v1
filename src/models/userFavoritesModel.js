const database = require("../database/config");

function list() {
  const instruction = `
      SELECT f.id, r.nome, r.tempo, r.porcoes, u.nome
      FROM USUARIO_FAVORITOS uf
      INNER JOIN FAVORITOS f ON uf.fk_favoritos = f.id
      INNER JOIN RECEITA r ON f.fk_receita = r.id
      INNER JOIN USUARIO u ON uf.fk_usuario = u.id;
    `;

  return database.execute(instruction);
}

function bind(fk_usuario, fk_favoritos) {
  const instruction = `
    INSERT INTO USUARIO_FAVORITOS (fk_usuario, fk_favoritos) VALUES (${fk_usuario}, ${fk_favoritos});
    `;

  return database.execute(instruction);
}

function unbind(fk_favoritos) {
  const instruction = `
        DELETE FROM USUARIO_FAVORITOS WHERE fk_favoritos = ${fk_favoritos};
    `;

  return database.execute(instruction);
}

module.exports = { list, bind, unbind };
