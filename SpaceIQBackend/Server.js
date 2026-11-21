
require("dotenv").config();

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");

const Routes = require("./Routes/index.js");
const ConnectDB = require("./config/database.js");
const config = require("./config/config.js");

const app = express();

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://space-iq-nfhh-odqubvo4z-404-error-found1.vercel.app"
    ]
}));

app.use(Routes);

const PORT = config.PORT || 5001;

const startServer = async () => {
    try {
        await ConnectDB();

        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();
