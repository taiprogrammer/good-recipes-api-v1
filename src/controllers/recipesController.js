const recipesModel = require("../models/recipesModel");

function list(req, res) {
  recipesModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nenhuma receita registrada.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function listTop5(req, res) {
  recipesModel
    .listTop5()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nanhuma receita registrada.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function add(req, res) {
  const nome = req.body.nomeServer;
  const tempo = req.body.tempoServer;
  const porcoes = req.body.porcoesServer;
  const ingredientes = req.body.ingredientesServer;
  const modo_preparo = req.body.modo_preparoServer;

  recipesModel
    .add(nome, tempo, porcoes, ingredientes, modo_preparo)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function update(req, res) {
  const nome = req.body.nomeServer;
  const tempo = req.body.tempoServer;
  const porcoes = req.body.porcoesServer;
  const ingredientes = req.body.ingredientesServer;
  const modo_preparo = req.body.modo_preparoServer;

  const id = req.params.id;

  recipesModel
    .update(nome, tempo, porcoes, ingredientes, modo_preparo, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function bind(req, res) {
  const fk_usuario = req.body.fk_usuarioServer;
  const id = req.params.id;

  recipesModel
    .bind(fk_usuario, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function delete_(req, res) {
  const id = req.params.id;

  recipesModel
    .delete_(id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function get_favorites_quantity(req, res) {
  const fk_favoritos = req.params.fk_favorito;

  recipesModel
    .get_favorites_quantity(fk_favoritos)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhum favorito");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function get_recipes_by_id(req, res) {
  const id = req.params.id;

  recipesModel
    .get_recipes_by_id(id)
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).json("Nenhuma receita encontrada");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = {
  list,
  listTop5,
  add,
  update,
  bind,
  delete_,
  get_favorites_quantity,
  get_recipes_by_id,
};
