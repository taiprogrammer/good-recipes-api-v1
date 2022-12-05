const favoritesModel = require("../models/favoritesModel");

function list(req, res) {
  favoritesModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nenhum registro encontrado");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function add(req, res) {
  const fk_receita = req.params.fk_receita;

  favoritesModel
    .add(fk_receita)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function delete_(req, res) {
  const id = req.params.id;

  favoritesModel
    .delete_(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = { list, add, delete_ };
