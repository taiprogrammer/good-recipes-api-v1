const express = require("express");
const router = express.Router();

const userFavoritesController = require("../controllers/userFavoritesController");

router.get("/", (req, res) => {
  userFavoritesController.list(req, res);
});

router.post("/vincular/:usuario/:favorito", (req, res) => {
  userFavoritesController.bind(req, res);
});

router.delete("/desvincular/:favorito", (req, res) => {
  userFavoritesController.unbind(req, res);
});

module.exports = router;
