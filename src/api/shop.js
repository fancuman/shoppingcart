const _products = [{ id: 1, name: 'apple', price: 5, inventory: 2 },
{ id: 2, name: 'pear', price: 3, inventory: 12 },
{ id: 3, name: 'banana', price: 6, inventory: 5 }
]

export function getAllProducts (cb) {
    setTimeout(() => {
        cb(_products)
    }, 1000);
}

export function buyProduct (product, success, fail) {
    setTimeout(() => {
        Math.random() > 0.5 ? success() : fail()
    }, 500);
}