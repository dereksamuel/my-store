const express = require("express");

const productsRouter = require("./products.router");
const usersRouter = require("./users.router");
const categoriesRouter = require("./categories.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
//https://platzi.com/clases/2485-backend-nodejs/41750-instalacion-de-postman-o-insomia/
