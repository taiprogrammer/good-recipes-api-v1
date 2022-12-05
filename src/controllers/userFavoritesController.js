const userFavoritesModel = require("../models/userFavoritesModel");

function list(req, res) {
  userFavoritesModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nenhum registro econtrado.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function bind(req, res) {
  const fk_usuario = req.params.usuario;
  const fk_favoritos = req.params.favorito;

  userFavoritesModel
    .bind(fk_usuario, fk_favoritos)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function unbind(req, res) {
  const fk_favoritos = req.params.favorito;

  userFavoritesModel
    .unbind(fk_favoritos)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = { list, bind, unbind };
