const express = require("express");

require("./db/mongoose")

const app = express()

app.use(express.json())


const port = process.env.PORT

app.listen(3000, () => {

    console.log("server is listening on port " + 3000)

})