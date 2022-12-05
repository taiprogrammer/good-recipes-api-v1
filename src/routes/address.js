const express = require("express");
const router = express.Router();

const addressController = require("../controllers/addressController");

router.get("/", (req, res) => {
  addressController.list(req, res);
});

router.post("/cadastro", (req, res) => {
  addressController.sign_up(req, res);
});

router.delete("/excluir/:id", (req, res) => {
  addressController.delete_address(req, res);
});

router.put("/atualizar", (req, res) => {
  addressController.update_address(req, res);
});

module.exports = router;
