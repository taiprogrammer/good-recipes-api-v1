const recipeCategoryModel = require("../models/recipeCategoryModel");

function list(req, res) {
  recipeCategoryModel
    .list()
    .then((response) => {
      if (response.length > 0) {
        let myList = [];
        let subcategory = [];
        let lastPushed = 0;

        for (let key in response) {
          if (lastPushed !== response[key].id) {
            for (let otherKey in response) {
              if (response[key].id == response[otherKey].id) {
                subcategory.push({
                  id: response[otherKey].categoria_id,
                  nome: response[otherKey].categorias,
                });
              }
            }
            myList.push({
              id: response[key].id,
              receita: response[key].receita,
              tempo: response[key].tempo,
              porcoes: response[key].porcoes,
              ingredientes: response[key].ingredientes,
              modo_preparo: response[key].modo_preparo,
              categorias: subcategory,
              autor: response[key].autor,
            });

            subcategory = [];
            lastPushed = response[key].id;

          }
        }

        res.status(200).json(myList);
      } else {
        res.status(204).send("Nenhum registro encontrado.");
      }
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function bind(req, res) {
  const fk_receita = req.params.receita;
  const fk_categoria = req.body.categoria;

  recipeCategoryModel
    .bind(fk_receita, fk_categoria)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

function unbind(req, res) {
  const fk_categoria = req.params.categoria;

  recipeCategoryModel
    .unbind(fk_categoria)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json(error.sqlMessage);
    });
}

module.exports = { list, bind, unbind };
