const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

router.get("/", (req, res) => {
  categoryController.list(req, res);
});

router.post("/cadastrar", (req, res) => {
  categoryController.add(req, res);
});

router.put("/atualizar/:id", (req, res) => {
  categoryController.update(req, res);
});

router.delete("/excluir/:id", (req, res) => {
  categoryController.delete_(req, res);
});

module.exports = router;
