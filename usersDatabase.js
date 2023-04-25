/* 
    En este archivo estamos creando una base de datos de 10 usuarios aleatorios para usar,
    con Insomnia, en el server.js
*/

// Q: make me a database of users using Map and put 10 users with random IDs in it
// in this case is 4 users

const uuid = require("uuid").v4

const users = new Map()

for (let i = 0; i < 4; i++) {
    const id = uuid()
    users.set(id, {
        id,
        name: "John Doe " + i,
        email: `test${i}@test.com`,
        checkedOutBooks: [],
    })
}

module.exports = users
