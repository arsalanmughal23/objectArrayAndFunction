"use strict";
var _a;
let inventory = [];
let product1 = {
    name: 'Samsung Galaxy',
    model: '2018',
    cost: 80000,
    quantity: 50,
};
let product2 = {
    name: 'Real me',
    model: '2022',
    cost: 60000,
    quantity: 20,
};
let product3 = {
    name: 'I Phone 5s',
    model: '2017',
    cost: 20000,
    quantity: 8,
};
inventory.push(product1, product2, product3);
// console.log(inventory);
console.log('Third Product Quantity: ', (_a = [...inventory].pop()) === null || _a === void 0 ? void 0 : _a.quantity);
