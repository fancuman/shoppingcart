const _products = [
  { id: 1, name: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, name: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, name: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
];

function getAllProducts(cb) {
  setTimeout(() => {
    console.log("get");
    cb(_products);
  }, 1000);
}

function buyProduct(success, fail) {
  setTimeout(() => {
    Math.random() > 0.5 ? success() : fail();
  }, 500);
}

export default {
  getAllProducts,
  buyProduct,
};
