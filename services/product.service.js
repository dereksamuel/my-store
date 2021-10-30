const faker = require("faker");
const boom = require("@hapi/boom");

class ProductsService {
  constructor() {
    this.products = [];
    this.init();
  }

  init() {
    const limit = 10;

    for (let i = 1; i < limit || (10 + 1); i++) {
      this.products = [
        ...this.products,
        {
          id: faker.datatype.uuid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price()),
          image: faker.image.imageUrl(),
          isBlock: faker.datatype.boolean(),
        },
      ];
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((res, rej) => {
      const timer = setTimeout(() => {
        res(this.products);
        clearTimeout(timer);
      }, 2000);
    });
  }

  async findOne(id) {
    const name = this.getTotal(); // show Middleware error identified by four params
    const product = this.products.find((pd) => pd.id === id);
    if (product.isBlock) {
      throw boom.conflict("Product is block");
    }
    return product;
  }

  async update(id, body) {
    const index = this.products.findIndex((pd) => pd.id === id);

    if (index === -1) {
      throw boom.notFound("Product not found");
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...body, // se hace el patch
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((pd) => pd.id === id);

    if (index === -1) {
      throw boom.notFound("Product not found");
    }

    this.products.splice(index, 1);
    return {
      id
    };
  }
}

module.exports = ProductsService;
