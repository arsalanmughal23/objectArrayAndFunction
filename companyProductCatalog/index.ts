type TYPE_PRODUCT_STOCK = {
    name: string,
    model: string,
    cost: number,
    quantity: number
}

let inventory:TYPE_PRODUCT_STOCK[] = [];

let product1:TYPE_PRODUCT_STOCK = {
    name: 'Samsung Galaxy',
    model: '2018',
    cost: 80000,
    quantity: 50,
}
let product2:TYPE_PRODUCT_STOCK = {
    name: 'Real me',
    model: '2022',
    cost: 60000,
    quantity: 20,
}
let product3:TYPE_PRODUCT_STOCK = {
    name: 'I Phone 5s',
    model: '2017',
    cost: 20000,
    quantity: 8,
}

inventory.push(product1, product2, product3);
// console.log(inventory);

console.log('Third Product Quantity: ', [...inventory].pop()?.quantity)