const MongoDB = require("mongoose");
const dns = require("dns");

const config = require("./Config");

dns.setDefaultResultOrder("ipv4first");

const ConnectDB = async () => {
    try {
        await MongoDB.connect(config.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log("MongoDB not Connected", error);
    }
};

module.exports = ConnectDB;