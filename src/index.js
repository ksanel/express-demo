// requirements are defined
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// require routes
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

// starting appS
dotenv.config()
const app = express()
const port = process.env.PORT || 5000 // port

// connect to atlas cluster
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connection to atlas cluster is succsessfull"))
    .catch((err) => {console.log(err)})

// route
app.use(express.json())
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/communities", communitiesRoute)

// start service and listen
app.listen(port, () => console.log(`Server listening on port ${port}!`))