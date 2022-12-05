const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  userController.list(req, res);
});

router.get("/login", (req, res) => {
  userController.login(req, res);
});

router.get("/usuario-logado/:id", (req, res) => {
  userController.get_user_logged(req, res);
});

router.get("/receitas/:id", (req, res) => {
  userController.get_recipes(req, res);
});

router.get("/favoritos/:id", (req, res) => {
  userController.get_favorites(req, res);
});

router.get("/enderecos/:id", (req, res) => {
  userController.get_address(req, res);
});

router.post("/cadastro", (req, res) => {
  userController.sign_up(req, res);
});

router.put("/vincular-endereco/:id", (req, res) => {
  userController.bind_address(req, res);
});

router.put("/atualizar-senha/:id", (req, res) => {
  userController.update_password(req, res);
});

router.put("/atualizar-informacoes/:id", (req, res) => {
  userController.update(req, res);
});

router.delete("/excluir-usuario/:id", (req, res) => {
  userController.delete_user(req, res);
});

module.exports = router;
