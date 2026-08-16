require("dotenv").config();
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require("express")
const mongoDB = require("mongoose")
const cors = require("cors")
const Routes = require("./Routes/index.js")
const ConnectDB = require("./config/database.js")
const config = require("./config/config.js")

//Step-1
const app = express()
console.log("Server is running...")

//Step-2
app.use(express.json())
app.use(cors());
app.use(Routes)

//Step-3
const PORT = config.PORT;
app.listen(PORT,  "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
})

//Step-4
ConnectDB();