const database = require("../database/config");

function list() {
  const instruction = `SELECT * FROM ENDERECO;`;

  return database.execute(instruction);
}

function sign_up(logradouro, numero, cep, cidade, estado, pais) {
  const instruction = `
        INSERT INTO ENDERECO (logradouro, numero, cep, cidade, estado, pais)
        VALUES ('${logradouro}', '${numero}', '${cep}', '${cidade}', '${estado}', '${pais}');
    `;

  return database.execute(instruction);
}

function delete_address(id) {
  const instruction = `
        DELETE FROM ENDERECO WHERE id = ${id};
    `;

  return database.execute(instruction);
}

function update_address(logradouro, numero, cep, cidade, estado, pais, id) {
  const instruction = `
        UPDATE ENDERECO SET 
        logradouro = ${logradouro},
        numero = ${numero},
        cep = ${cep},
        cidade = ${cidade},
        estado = ${estado},
        pais = ${pais}
        WHERE id = ${id};
    `;

  return database.execute(instruction);
}
module.exports = { list, sign_up, delete_address, update_address };
