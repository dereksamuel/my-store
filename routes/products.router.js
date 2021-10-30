const express = require("express");
const ProductsService = require("../services/product.service");

let router = express.Router();// traer mi router
const service = new ProductsService();

router.get("/", (req, res) => {
  // const { limit, offset } = req.query;
  const products = service.find();

  res.status(200).json(products);
});

router.get("/filter", (req, res) => {
  res.send("I am a filter");
}); // se choca con :id si no sigues esto: todo LO ESPECIFICO DEBE IR ANTES DE LO QUE ES DINAMICO

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);

  res.status(201).json({
    message: "created",
    data: newProduct
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const product = await service.update(id, body);

    res.status(200).json(product);
  } catch(error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put("/:id", async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const product = await service.update(id, body);

  res.status(200).json(product);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id, body);

  res.status(200).json(product);
});

module.exports = router;
