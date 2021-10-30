const express = require("express");
const router = express.Router();// traer mi router

router.get("/", (req, res) => {
  const { limit, offset } = req.query;

  if (limit || offset) {
    res.json({
      limit,
      offset,
      data: [
        {
          name: "Jaime",
          email: "jaimejulito@gmail.com.co",
          address: "Calle 40 sur # 12 31 tercer piso",
          favorites: [],
          products: [
            {
              name: "Product 1",
              price: Math.floor(Math.random() * 1000),
            },
          ],
        },
        {
          name: "Juana",
          email: "juanita@gmail.com",
          address: "Calle 36 norte apartamento 16",
          favorites: [
            "12345645x14a2s4cx2vxx45d45ssd1s2dddsskkk"
          ],
          products: [
            {
              name: "Product 1",
              price: Math.floor(Math.random() * 1000),
            },
            {
              name: "Product 2",
              price: Math.floor(Math.random() * 1000),
            },
          ],
        },
      ],
    });
    return;
  }

  res.json([
    {
      name: "Jaime",
      email: "jaimejulito@gmail.com.co",
      address: "Calle 40 sur # 12 31 tercer piso",
      favorites: [],
      products: [
        {
          name: "Product 1",
          price: Math.floor(Math.random() * 1000),
        },
      ],
    },
    {
      name: "Juana",
      email: "juanita@gmail.com",
      address: "Calle 36 norte apartamento 16",
      favorites: [
        "12345645x14a2s4cx2vxx45d45ssd1s2dddsskkk"
      ],
      products: [
        {
          name: "Product 1",
          price: Math.floor(Math.random() * 1000),
        },
        {
          name: "Product 2",
          price: Math.floor(Math.random() * 1000),
        },
      ],
    },
    {
      name: "Novio de Juana",
      email: "novisjuana@gmail.com",
      address: "Calle 37 norte",
      favorites: [],
      products: [],
    }
  ]);
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  res.json({
    userId,
    name: "Novio de Juana",
    email: "novisjuana@gmail.com",
    address: "Calle 37 norte",
    favorites: [],
    products: [],
  });
});

router.get("/:userId/favorites", (req, res) => {
  res.json([
    {
      name: "Product 1",
      price: Math.floor(Math.random() * 1000),
    },
    {
      name: "Product 2",
      price: Math.floor(Math.random() * 1000),
    },
  ]);
});

router.get("/:userId/favorites/:favoriteId", (req, res) => {
  const { favoriteId, userId } = req.params;

  res.json({
    favoriteId,
    userId
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
