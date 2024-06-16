"use strict";
var _a;
let people = {
    id: 1,
    firstName: 'Arsalan',
    lastName: 'Mughal',
    friends: []
};
let friend1 = {
    id: 2,
    firstName: 'Kashan',
    lastName: 'Mehmood'
};
let friend2 = {
    id: 3,
    firstName: 'Shazaib',
    lastName: 'Ahmed'
};
let friend3 = {
    id: 4,
    firstName: 'Anas',
    lastName: 'Arshad'
};
(_a = people.friends) === null || _a === void 0 ? void 0 : _a.push(friend1, friend2, friend3);
console.log('people', people);
