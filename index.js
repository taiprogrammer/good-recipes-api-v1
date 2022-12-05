const express = require("express");
const cors = require("cors");
const path = require("path");
const port = 3333;

const app = express();

const indexRouter = require("./src/routes/index");
const userRouter = require("./src/routes/users");
const addressRouter = require("./src/routes/address");
const recipesRouter = require("./src/routes/recipes");
const categoryRouter = require("./src/routes/category");
const favoritesRouter = require("./src/routes/favorites");
const userFavoritesRouter = require("./src/routes/userFavorites");
const recipeCategoryRouter = require("./src/routes/recipeCategory");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", userRouter);
app.use("/enderecos", addressRouter);
app.use("/receitas", recipesRouter);
app.use("/categorias", categoryRouter);
app.use("/favoritos", favoritesRouter);
app.use("/meus-favoritos", userFavoritesRouter);
app.use("/receita-categoria", recipeCategoryRouter);

app.listen(port);
