type TYPE_PEOPLE = {
    id: number,
    firstName: string,
    lastName: string,
    friends?:TYPE_PEOPLE[]
}

let people:TYPE_PEOPLE = {
    id: 1,
    firstName: 'Arsalan',
    lastName: 'Mughal',
    friends: []
}

let friend1:TYPE_PEOPLE = {
    id: 2,
    firstName: 'Kashan',
    lastName: 'Mehmood'
}

let friend2:TYPE_PEOPLE = {
    id: 3,
    firstName: 'Shazaib',
    lastName: 'Ahmed'
}

let friend3:TYPE_PEOPLE = {
    id: 4,
    firstName: 'Anas',
    lastName: 'Arshad'
}

people.friends?.push(friend1, friend2, friend3);
console.log('people', people);