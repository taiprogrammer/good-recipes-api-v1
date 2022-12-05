const userModel = require("../models/userModel");

function list(req, res) {
  userModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhum usuário cadastrado");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function login(req, res) {
  const email = req.body.email;
  const senha = req.body.senha;

  userModel
    .login(email, senha)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhum usuário encontrado");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function get_user_logged(req, res) {
  const id = req.params.id;

  userModel
    .get_user_logged(id)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhum usuário encontrado");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function sign_up(req, res) {
  const nome = req.body.nomeServer;
  const email = req.body.emailServer;
  const senha = req.body.senhaServer;
  const data_nascimento = req.body.data_nascimentoServer;

  userModel
    .sign_up(nome, email, senha, data_nascimento)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function get_favorites(req, res) {
  const id = req.params.id;

  userModel
    .get_favorites(id)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhum favorito encontrado.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function get_recipes(req, res) {
  const id = req.params.id;

  userModel
    .get_recipes(id)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhuma receita cadastrada.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function bind_address(req, res) {
  const fk_address = req.body.fk_addressServer;
  const id = req.params.id;

  userModel
    .bind_address(fk_address, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function delete_user(req, res) {
  const id = req.params.id;

  userModel
    .delete_user(id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function update_password(req, res) {
  const id = req.params.id;
  const password = req.body.senhaServer;

  userModel
    .update_password(password, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function update(req, res) {
  const id = req.params.id;

  const nome = req.body.nome;
  const email = req.body.email;
  const data_nascimento = req.body.data_nascimento;

  userModel.update(nome, email, data_nascimento, id)
  .then((response) => {
    res.json(response);
  })
  .catch((error) => {
    res.status(500).json(error);
  });
}

function get_address(req, res) {
  const id = req.params.id;
  userModel
    .get_address(id)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nenhum endereço cadastrado.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

// function update_birthdate(req, res) {
//   const id = req.params.id;

//   const birthdate = req.body.data_nascimentoServer;

//   userModel
//     .update_birthdate(birthdate, id)
//     .then((response) => {
//       res.json(response);
//     })
//     .catch((error) => {
//       res.status(500).json(error.sqlMessage);
//     });
// }

module.exports = {
  list,
  login,
  get_user_logged,
  sign_up,
  bind_address,
  delete_user,
  update_password,
  update,
  // update_birthdate,
  get_address,
  get_favorites,
  get_recipes,
};
