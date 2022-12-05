const addressModel = require("../models/addressModel");

function list(req, res) {
  addressModel
    .list()
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

function sign_up(req, res) {
  const logradouro = req.body.logradouroServer;
  const numero = req.body.numeroServer;
  const cep = req.body.cepServer;
  const cidade = req.body.cidadeServer;
  const estado = req.body.estadoServer;
  const pais = req.body.paisServer;

  addressModel
    .sign_up(logradouro, numero, cep, cidade, estado, pais)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function delete_address(req, res) {
  const id = req.params.id;

  addressModel
    .delete_address(id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function update_address(req, res) {
  const logradouro = req.body.logradouroServer;
  const numero = req.body.numeroServer;
  const cep = req.body.cepServer;
  const cidade = req.body.cidadeServer;
  const estado = req.body.estadoServer;
  const pais = req.body.paisServer;
  const id = req.body.idServer;

  addressModel
    .update_address(logradouro, numero, cep, cidade, estado, pais, id)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = { list, sign_up, delete_address, update_address };
