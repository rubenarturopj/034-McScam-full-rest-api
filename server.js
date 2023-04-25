const express = require("express")
const uuid = require("uuid").v4
// para importar los datos del archivo userDatabase
const usersDatabase = require("./usersDatabase")

const app = express()

// Q: how to add body parser to express?
app.use(express.json())

const userRouter = express.Router()
// with thsi code below, we'll do the get request to: http://localhost:3333/user
app.use("/user", userRouter)

userRouter
    .get("/", (req, res) => {
        console.log("here1")
        // gets all the users who have ever been to the library
        // console.log(Object.values(Object.fromEntries(usersDatabase)));
        res.json(Object.values(Object.fromEntries(usersDatabase)))
    })
    .post("/", (req, res) => {
        // create a new user

        if (!req.body.name) {
            res.status(400).json({ error: "name is required" })
            return
        }
        if (!req.body.email) {
            res.status(400).json({ error: "email is required" })
            return
        }

        const id = uuid()

        const newUser = {
            id,
            name: req.body.name,
            email: req.body.email,
        }

        usersDatabase.set(id, newUser)

        res.status(201).json(newUser)
    })
    .use(
        "/:id",
        (req, res, next) => {
            // this middleware will run for all the routes below
            // the address to hit now is: http://localhost:3333/user/xxxIDxxxx

            const id = req.params.id
            res.locals.userId = id

            next()
        },
        express
            .Router()
            .get("/", (req, res) => {
                // get a specific user
                // the address to hit now is: http://localhost:3333/user/xxxIDxxxx

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                res.json(user)
            })
            .put("/", (req, res) => {
                // replace/update an existing user

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                if (!req.body.name) {
                    res.status(400).json({ error: "name is required" })
                    return
                }
                if (!req.body.email) {
                    res.status(400).json({ error: "email is required" })
                    return
                }

                const updatedUser = {
                    id,
                    name: req.body.name,
                    email: req.body.email,
                }

                usersDatabase.set(id, updatedUser)

                res.json(updatedUser)
            })
            .delete("/", (req, res) => {
                // replace/update an existing user

                const id = res.locals.userId

                const user = usersDatabase.get(id)

                if (!user) {
                    res.status(404).json({ error: "user not found" })
                    return
                }

                usersDatabase.delete(id)

                res.status(204)
                    .json({ message: "User succesfully deleted" })
                    .end()
            })
    )

app.listen(3333, () => {
    console.log("listening on port 3333")
})
