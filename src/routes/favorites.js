const express = require("express");
const router = express.Router();

const favoritesController = require("../controllers/favoritesController");

router.get("/", (req, res) => {
  favoritesController.list(req, res);
});

router.post("/favoritar/:fk_receita", (req, res) => {
  favoritesController.add(req, res);
});

router.delete("/remover/:id", (req, res) => {
  favoritesController.delete_(req, res);
});

module.exports = router;
