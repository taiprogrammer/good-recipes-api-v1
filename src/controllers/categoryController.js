const categoryModel = require("../models/categoryModel");

function list(req, res) {
  categoryModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json(response);
      } else {
        res.status(204).send("Nenhuma categoria registrada.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function add(req, res) {
  const nome = req.body.nomeServer;

  categoryModel
    .add(nome)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function update(req, res) {
  const id = req.params.id;
  const nome = req.body.nomeServer;

  categoryModel
    .update(nome, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function delete_(req, res) {
  const id = req.params.id;

  categoryModel
    .delete_(id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = { list, add, update, delete_ };
