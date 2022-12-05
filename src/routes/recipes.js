const express = require("express");
const router = express.Router();

const recipesController = require("../controllers/recipesController");

router.get("/", (req, res) => {
  recipesController.list(req, res);
});

router.get("/favoritos/:fk_favorito", (req, res) => {
  recipesController.get_favorites_quantity(req, res);
});

router.get("/receita/:id", (req, res) => {
  recipesController.get_recipes_by_id(req, res);
});

router.post("/cadastrar", (req, res) => {
  recipesController.add(req, res);
});

router.put("/atualizar/:id", (req, res) => {
  recipesController.update(req, res);
});

router.put("/vincular-usuario/:id", (req, res) => {
  recipesController.bind(req, res);
});

router.delete("/excluir/:id", (req, res) => {
  recipesController.delete_(req, res);
});

module.exports = router;
