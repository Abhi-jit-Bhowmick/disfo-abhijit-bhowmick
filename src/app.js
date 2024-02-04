
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const USER_ROUTES = require("./routes/user.routes")




// ENVIRONMENTAL VARRIABLE --->
const endpoient = require("./config/config")
const PORT = endpoient.PORT;
const DB_URI = `${endpoient.DB_URI}/users`


// CONNECT TO MONGO DB --->
mongoose
    .connect(DB_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log("Couldn't Connect with DBS", err)
    })

// 

app.use(express.json())

// Create Routes --->
app.use("/user", USER_ROUTES)

app.listen(PORT, () => {
    console.log("App Listening on PORT: ", PORT)
})