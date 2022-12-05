const database = require("../database/config");

function list() {
  const instruction = `SELECT * FROM USUARIO;`;

  return database.execute(instruction);
}

function login(email, senha) {
  const instruction = `
    SELECT id, email, senha FROM USUARIO WHERE email = '${email}' AND senha = '${senha}';
  `;

  return database.execute(instruction);
}

function get_user_logged(id) {
  const instruction = `
    SELECT id, nome, email, data_nascimento FROM USUARIO WHERE id = ${id};
  `;

  return database.execute(instruction);
}

function sign_up(nome, email, senha, data_nascimento) {
  const instruction = `
        INSERT INTO USUARIO (nome, email, senha, data_nascimento) 
        VALUES ('${nome}', '${email}', '${senha}', '${data_nascimento}');
    `;

  return database.execute(instruction);
}

function bind_address(fk_address, id) {
  const instruction = `
    UPDATE USUARIO SET fk_address = ${fk_address} WHERE id = ${id};
  `;

  return database.execute(instruction);
}

function delete_user(id) {
  const instruction = `
    DELETE FROM USUARIO WHERE id = ${id};
  `;

  return database.execute(instruction);
}

function update_password(password, id) {
  const instruction = `
    UPDATE USUARIO SET senha = '${password}' WHERE id = ${id};
  `;

  return database.execute(instruction);
}

function update(nome, email, data_nascimento, id) {
  const instruction = `
    UPDATE USUARIO SET
    nome = '${nome}',
    email = '${email}',
    data_nascimento = '${data_nascimento}'
    WHERE id = ${id};
  `;

  return database.execute(instruction);
}

function get_address(id) {
  const instruction = `
    SELECT e.id, logradouro, numero, cep, cidade, estado, pais 
    FROM ENDERECO e
    INNER JOIN USUARIO ON 
    e.id = USUARIO.fk_address 
    WHERE USUARIO.id = ${id};
  `;

  return database.execute(instruction);
}

function get_favorites(id) {
  const instruction = `
    SELECT f.id, nome, tempo, porcoes
    FROM FAVORITOS f INNER JOIN RECEITA
    ON f.fk_receita = RECEITA.id WHERE RECEITA.fk_usuario = ${id};
  `;

  return database.execute(instruction);
}

function get_recipes(id) {
  const instruction = `
    SELECT r.id, r.nome, r.tempo, r.porcoes, r.ingredientes, r.modo_preparo
    FROM RECEITA r INNER JOIN USUARIO ON
    r.fk_usuario = usuario.id WHERE
    usuario.id = ${id};
  `;

  return database.execute(instruction);
}

module.exports = {
  list,
  login,
  get_user_logged,
  sign_up,
  bind_address,
  delete_user,
  update_password,
  update,
  get_address,
  get_favorites,
  get_recipes,
};
