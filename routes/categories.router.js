const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      label: "Camisetas",
      products: [
        {
          name: "Product 1",
          price: Math.floor(Math.random() * 1000),
        },
      ],
    },
    {
      id: "2",
      label: "Libros",
      products: [
        {
          name: "Product 1",
          price: Math.floor(Math.random() * 1000),
        },
        {
          name: "Product 2",
          price: Math.floor(Math.random() * 1000),
        },
        {
          name: "Product 3",
          price: Math.floor(Math.random() * 1000),
        },
      ],
    }
  ]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    label: "Camisetas",
    products: [
      {
        name: "Product 1",
        price: Math.floor(Math.random() * 1000),
      },
    ],
  },);
});

router.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId
  });
});

router.post("/", (req, res) => {
  const body = req.body;

  res.json({
    message: "created",
    data: body
  });
});

router.patch("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: "updated by one",
    id,
    data: body
  });
});

router.put("/:id", (req, res) => {
  const body = req.body;
  const { id } = req.params;

  res.json({
    message: "updated",
    id,
    data: body
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: "deleted",
    id,
  });
});

module.exports = router;
