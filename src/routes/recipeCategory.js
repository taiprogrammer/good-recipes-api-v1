const express = require("express");
const router = express.Router();

const recipeCategoryController = require("../controllers/recipeCategoryController");

router.get("/", (req, res) => {
  recipeCategoryController.list(req, res);
});

router.post("/vincular-receita/:receita", (req, res) => {
  recipeCategoryController.bind(req, res);
});

router.delete("/desvincular/:categoria", (req, res) => {
  recipeCategoryController.unbind(req, res);
});

module.exports = router;
